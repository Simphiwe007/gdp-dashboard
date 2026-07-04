import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db/pool';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, agency_name, lead_sources } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'name and email required' }, { status: 400 });
    }

    const result = await pool.query(
      `INSERT INTO onboarding_requests (name, email, phone, agency_name, lead_sources, status)
       VALUES ($1, $2, $3, $4, $5, 'new') RETURNING *`,
      [name, email, phone, agency_name, lead_sources || []]
    );

    // Send notification email
    if (process.env.FOUNDER_NOTIFICATION_EMAIL && process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@viewflow-system.com',
            to: process.env.FOUNDER_NOTIFICATION_EMAIL,
            subject: `New Trial Signup: ${name} (${agency_name})`,
            html: `<h2>New ViewFlow Trial Signup</h2>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Agency:</strong> ${agency_name}</p>`,
          }),
        });
      } catch (emailErr) {
        console.error('notification email failed', emailErr);
      }
    }

    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (err: any) {
    console.error('intake failed', err);
    return NextResponse.json({ error: 'intake failed' }, { status: 500 });
  }
}
