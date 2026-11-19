// "2026-12-05" -> "December 5, 2026"; anything else is shown as typed
function formatDate(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  }
  return value;
}

const colors = {
  bg: "#f4efe9",
  card: "#ffffff",
  accent: "#7a4e2d",
  text: "#2f2a26",
  muted: "#8a7f76",
  border: "#e8dfd5",
};

const font = "Georgia, 'Times New Roman', serif";
const sans = "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <tr>
      <td
        style={{
          padding: "14px 0",
          borderBottom: `1px solid ${colors.border}`,
          fontFamily: sans,
          fontSize: "13px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.muted,
          width: "140px",
          verticalAlign: "top",
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "14px 0",
          borderBottom: `1px solid ${colors.border}`,
          fontFamily: sans,
          fontSize: "16px",
          color: colors.text,
          verticalAlign: "top",
        }}
      >
        {children}
      </td>
    </tr>
  );
}

type EmailProps = {
  name: string;
  email: string;
  date?: string;
  number?: string;
  comment: string;
};

export function Email({ name, email, date, number, comment }: EmailProps) {
  const linkStyle = { color: colors.accent, textDecoration: "none" };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`New inquiry from ${name}`}</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: colors.bg }}>
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: colors.bg }}
        >
          <tbody>
            <tr>
              <td align="center" style={{ padding: "32px 16px" }}>
                <table
                  role="presentation"
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    maxWidth: "600px",
                    backgroundColor: colors.card,
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: colors.accent,
                          padding: "32px 40px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: sans,
                            fontSize: "12px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#e9d8c6",
                          }}
                        >
                          Website Inquiry
                        </div>
                        <div
                          style={{
                            fontFamily: font,
                            fontSize: "28px",
                            color: "#ffffff",
                            marginTop: "8px",
                          }}
                        >
                          New message from {name}
                        </div>
                      </td>
                    </tr>

                    {/* Details */}
                    <tr>
                      <td style={{ padding: "32px 40px 8px" }}>
                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                        >
                          <tbody>
                            <DetailRow label="Name">{name}</DetailRow>
                            <DetailRow label="Email">
                              <a href={`mailto:${email}`} style={linkStyle}>
                                {email}
                              </a>
                            </DetailRow>
                            {number && (
                              <DetailRow label="Phone">
                                <a href={`tel:${number}`} style={linkStyle}>
                                  {number}
                                </a>
                              </DetailRow>
                            )}
                            {date && (
                              <DetailRow label="Trip date">
                                {formatDate(date)}
                              </DetailRow>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Message */}
                    <tr>
                      <td style={{ padding: "24px 40px 8px" }}>
                        <div
                          style={{
                            fontFamily: sans,
                            fontSize: "13px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: colors.muted,
                            marginBottom: "10px",
                          }}
                        >
                          Message
                        </div>
                        <div
                          style={{
                            fontFamily: sans,
                            fontSize: "16px",
                            lineHeight: "1.6",
                            color: colors.text,
                            backgroundColor: "#faf6f1",
                            borderLeft: `4px solid ${colors.accent}`,
                            padding: "16px 20px",
                            borderRadius: "4px",
                          }}
                        >
                          {comment.split(/\r?\n/).map((line, i, lines) => (
                            <span key={i}>
                              {line}
                              {i < lines.length - 1 && <br />}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>

                    {/* Reply button */}
                    <tr>
                      <td align="center" style={{ padding: "28px 40px 36px" }}>
                        <a
                          href={`mailto:${email}?subject=${encodeURIComponent(
                            "Re: Your inquiry",
                          )}`}
                          style={{
                            display: "inline-block",
                            backgroundColor: colors.accent,
                            color: "#ffffff",
                            fontFamily: sans,
                            fontSize: "15px",
                            fontWeight: 600,
                            textDecoration: "none",
                            padding: "12px 28px",
                            borderRadius: "6px",
                          }}
                        >
                          Reply to {name}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  style={{
                    fontFamily: sans,
                    fontSize: "12px",
                    color: colors.muted,
                    marginTop: "16px",
                  }}
                >
                  Sent from your website contact form
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
