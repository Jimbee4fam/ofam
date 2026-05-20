interface Props {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  bullets?: string[];
  category?: string;
}

/**
 * Reusable card used on the home page overview grid and full Services page.
 * Bullets render a detailed list; tags render small pill labels.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  tags,
  bullets,
  category,
}: Props) {
  return (
    <article className="service-card">
      {category && (
        <p
          style={{
            fontSize: 10,
            fontFamily: "var(--font-mono)",
            letterSpacing: 2,
            color: "var(--orange)",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {category}
        </p>
      )}
      <span className="service-icon" aria-hidden="true">{icon}</span>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>

      {bullets && bullets.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: tags ? 16 : 0,
          }}
        >
          {bullets.map((b) => (
            <li
              key={b}
              style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--muted)" }}
            >
              <span style={{ color: "var(--orange)", flexShrink: 0 }} aria-hidden="true">›</span>
              {b}
            </li>
          ))}
        </ul>
      )}

      {tags && tags.length > 0 && (
        <div className="service-tags" aria-label="Service categories">
          {tags.map((t) => (
            <span key={t} className="service-tag">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}
