const RESEND_API_URL = "https://api.resend.com/emails";

function sendJson(res, status, payload) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(payload));
}

function toCleanString(value, maxLength = 3000) {
  return String(value || "").trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function saveToSupabase(record) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const contactTable = process.env.SUPABASE_CONTACT_TABLE || "contact_requests";

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("SUPABASE_ENV_MISSING");
  }

  const endpoint = `${supabaseUrl}/rest/v1/${contactTable}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseServiceKey,
      Authorization: `Bearer ${supabaseServiceKey}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify([record])
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`SUPABASE_SAVE_FAILED: ${text}`);
  }
}

async function sendMail(record) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "office@oguzhan-yavuz.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey) {
    throw new Error("RESEND_ENV_MISSING");
  }

  const subject = `Portfolio Contact: ${record.name}`;
  const text = [
    "Neue Kontaktanfrage vom Portfolio",
    "",
    `Name: ${record.name}`,
    `E-Mail: ${record.email}`,
    `Sprache: ${record.language}`,
    `Zeitpunkt: ${record.submitted_at}`,
    "",
    "Nachricht:",
    record.message
  ].join("\n");

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: record.email,
      subject,
      text
    })
  });

  if (!response.ok) {
    const textResponse = await response.text();
    throw new Error(`MAIL_SEND_FAILED: ${textResponse}`);
  }
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, error: "Method not allowed" });
  }

  try {
    const payload =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body || {};

    const name = toCleanString(payload.name, 120);
    const email = toCleanString(payload.email, 180).toLowerCase();
    const message = toCleanString(payload.message, 5000);
    const language = payload.language === "de" ? "de" : "en";

    if (name.length < 2) {
      return sendJson(res, 400, { ok: false, error: "Invalid name" });
    }

    if (!isValidEmail(email)) {
      return sendJson(res, 400, { ok: false, error: "Invalid email" });
    }

    if (message.length < 10) {
      return sendJson(res, 400, { ok: false, error: "Invalid message" });
    }

    const record = {
      name,
      email,
      message,
      language,
      source: "portfolio-contact-form",
      submitted_at: new Date().toISOString()
    };

    await saveToSupabase(record);
    await sendMail(record);

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    return sendJson(res, 500, { ok: false, error: "Server error" });
  }
};
