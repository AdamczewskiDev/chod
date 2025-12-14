import { Resend } from "resend";

// Initialize Resend client
// W production użyj: process.env.RESEND_API_KEY
// W development można użyć testowego key lub pozostawić undefined dla mock
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Email template helper
export function createContactEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #1a1a2e;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #555;
            padding: 8px;
            background: white;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
          }
          .message-box {
            min-height: 100px;
            white-space: pre-wrap;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nowa wiadomość kontaktowa</h1>
            <p>Chłopaki od dźwięku</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Imię i nazwisko:</span>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">
                <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>
              </div>
            </div>
            <div class="field">
              <span class="label">Telefon:</span>
              <div class="value">${data.phone ? escapeHtml(data.phone) : '<em>Nie podano</em>'}</div>
            </div>
            <div class="field">
              <span class="label">Wiadomość:</span>
              <div class="value message-box">${escapeHtml(data.message)}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

