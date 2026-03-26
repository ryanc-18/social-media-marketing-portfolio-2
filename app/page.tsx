"use client";

import { useState } from "react";

const NAV_LINKS = ["About", "Blog", "Contact"];

const BLOG_POSTS = [
  {
    tag: "Strategy",
    date: "March 2026",
    title: "Why Your Brand Voice Is Costing You Followers",
    excerpt:
      "Most brands treat their social channels as a megaphone. Here's why a conversational tone consistently outperforms broadcast messaging — and how to make the switch.",
  },
  {
    tag: "Analytics",
    date: "February 2026",
    title: "Reading the Data Your Dashboard Hides From You",
    excerpt:
      "Platform analytics are designed to flatter, not inform. I break down the three metrics that actually predict long-term audience growth and how to track them yourself.",
  },
  {
    tag: "Content",
    date: "January 2026",
    title: "The Editorial Calendar That Changed My Clients' Results",
    excerpt:
      "Posting consistently isn't enough. The secret is sequencing — a narrative arc that builds anticipation across every piece of content you publish in a month.",
  },
];

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      {/* ── NAV ───────────────────────────────────────────── */}
      <header
        style={{
          background: "var(--nav-bg)",
          borderBottom: "1px solid #a03545",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Top strip */}
        <div
          style={{
            borderBottom: "1px solid #a03545",
            padding: "0.3rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#e0c4cc",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-garamond)",
              fontStyle: "italic",
            }}
          >
            Est. 2026 — Social Media Marketing
          </span>
          <span
            style={{
              color: "#e0c4cc",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-garamond)",
            }}
          >
            Available for projects
          </span>
        </div>

        {/* Main nav row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.9rem 2rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#f5f0e8",
              letterSpacing: "0.02em",
            }}
          >
            Megan Chin
          </span>

          <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "#edd8dc",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.88rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#edd8dc")}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-ink"
              style={{ fontSize: "0.78rem", padding: "0.45rem 1.2rem" }}
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "3px double var(--nav-bg)",
          background: "var(--nav-bg)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "5.5rem 2rem 5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: "0 4rem",
            alignItems: "center",
          }}
        >
          {/* Left col */}
          <div className="fade-up fade-up-1">
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 900,
                color: "#f5f0e8",
                lineHeight: 1.0,
                margin: "0 0 1.5rem",
              }}
            >
              Craft
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>stories</em>
              <br />
              that sell.
            </h1>
            <p
              style={{
                color: "#b0a898",
                fontFamily: "var(--font-garamond)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              I turn brands into conversations and audiences into loyal
              communities — one well-placed post at a time.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#about" className="btn-ink">
                Read My Story
              </a>
              <a
                href="#blog"
                className="btn-outline"
                style={{ color: "#edd8dc", borderColor: "#d4cbbb" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4cbbb";
                  e.currentTarget.style.color = "var(--nav-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#d4cbbb";
                }}
              >
                View Work
              </a>
            </div>
          </div>

          {/* Vertical rule */}
          <div
            style={{
              background: "#a03545",
              width: "2px",
              alignSelf: "stretch",
              minHeight: "300px",
            }}
          />

          {/* Right col */}
          <div className="fade-up fade-up-2" style={{ paddingLeft: "1rem" }}>
            <div
              style={{
                border: "1px solid #a03545",
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: "#e0c4cc",
                  fontFamily: "var(--font-garamond)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                By the numbers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  { n: "40+", label: "Brands grown" },
                  { n: "12M+", label: "Impressions driven" },
                  { n: "5 yrs", label: "In the field" },
                  { n: "3×", label: "Avg. engagement lift" },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#f5f0e8",
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        color: "#e0c4cc",
                        fontSize: "0.82rem",
                        fontFamily: "var(--font-garamond)",
                        fontStyle: "italic",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              style={{
                color: "#e0c4cc",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-garamond)",
              }}
            >
              Clients include ↓
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              {[
                "Bloom & Co.",
                "Ridgepoint",
                "Solara Studio",
                "The Loft Agency",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    color: "#e0c4cc",
                    fontFamily: "var(--font-playfair)",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    borderRight: "1px solid #a03545",
                    paddingRight: "1.5rem",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          padding: "5rem 2rem",
          borderBottom: "3px double var(--nav-bg)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="ornament">✦ ✦ ✦</p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                margin: "0.5rem 0",
              }}
            >
              About
            </h2>
            <hr
              className="rule-double"
              style={{ maxWidth: "200px", margin: "0.75rem auto 0" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Portrait box */}
            <div>
              <div
                style={{
                  border: "2px solid var(--nav-bg)",
                  padding: "1.5rem",
                  background: "var(--cream-dark)",
                }}
              >
                <div
                  style={{
                    border: "1px solid var(--nav-bg)",
                    aspectRatio: "3/4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--card-bg)",
                    gap: "1rem",
                  }}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="40"
                      cy="30"
                      r="18"
                      stroke="var(--ink)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M10 75 Q10 52 40 52 Q70 52 70 75"
                      stroke="var(--ink)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="30"
                      r="6"
                      fill="var(--ink)"
                      opacity="0.15"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: "#e0c4cc",
                      textAlign: "center",
                      padding: "0 2rem",
                    }}
                  >
                    Megan Chin
                    <br />
                    <span style={{ fontSize: "0.75rem", color: "#aaa" }}>
                      Your photo here
                    </span>
                  </p>
                </div>
                <div
                  style={{
                    background: "var(--nav-bg)",
                    color: "var(--cream)",
                    padding: "0.5rem 1rem",
                    marginTop: "1rem",
                    fontFamily: "var(--font-garamond)",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  Social Media Marketing Strategist · AUS
                </div>
              </div>
            </div>

            {/* Bio */}
            <div style={{ paddingTop: "0.5rem" }}>
              <div className="pull-quote" style={{ marginTop: 0 }}>
                "Good content doesn't interrupt people — it's what they were
                looking for."
              </div>
              <p style={{ marginBottom: "1.25rem" }}>
                Hi, I'm Jane. For the past five years I've helped brands across
                fashion, food, and lifestyle stop blending into the scroll and
                start building real relationships with their audiences.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                My approach is part strategy, part editorial instinct. I've
                managed communities of tens of thousands, produced content
                calendars for Fortune 500 offshoots, and written copy that's
                been shared without a single dollar of paid promotion.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                When I'm not deep in a platform audit or drafting a caption,
                you'll find me reading about brand theory, attending local
                creative markets, or over-analysing what made a post go viral at
                2am.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#contact" className="btn-ink">
                  Work With Me
                </a>
                <a href="#blog" className="btn-outline">
                  Read the Blog
                </a>
              </div>

              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--nav-bg)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-garamond)",
                  }}
                >
                  Core expertise
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {[
                    "Content Strategy",
                    "Brand Voice",
                    "Analytics & Reporting",
                    "Community Building",
                    "Paid Social",
                    "Influencer Partnerships",
                    "Copywriting",
                  ].map((s) => (
                    <span
                      key={s}
                      style={{
                        border: "1px solid var(--nav-bg)",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-garamond)",
                        fontStyle: "italic",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────────── */}
      <section
        id="blog"
        style={{
          padding: "5rem 2rem",
          background: "var(--cream-dark)",
          borderBottom: "3px double var(--nav-bg)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="ornament">✦ ✦ ✦</p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                margin: "0.5rem 0",
              }}
            >
              From the Blog
            </h2>
            <hr
              className="rule-double"
              style={{ maxWidth: "200px", margin: "0.75rem auto 0" }}
            />
            <p
              style={{
                fontFamily: "var(--font-garamond)",
                fontStyle: "italic",
                color: "var(--ink-light)",
                marginTop: "1rem",
                fontSize: "1.05rem",
              }}
            >
              Thoughts on strategy, content, and the ever-shifting social
              landscape.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {BLOG_POSTS.map((post, i) => (
              <article
                key={i}
                className="blog-card"
                style={{
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card top bar */}
                <div
                  style={{
                    background: "var(--nav-bg)",
                    padding: "0.5rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--cream)",
                      fontFamily: "var(--font-garamond)",
                      fontStyle: "italic",
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span
                    style={{
                      color: "#e0c4cc",
                      fontFamily: "var(--font-garamond)",
                      fontSize: "0.72rem",
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Illustration */}
                <div
                  style={{
                    borderBottom: "1.5px solid var(--nav-bg)",
                    background: "var(--cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    minHeight: "160px",
                  }}
                >
                  {i === 0 && (
                    <svg
                      width="100"
                      height="90"
                      viewBox="0 0 80 70"
                      fill="none"
                    >
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="50"
                        rx="2"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="15"
                        y="20"
                        width="50"
                        height="6"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <rect
                        x="15"
                        y="32"
                        width="35"
                        height="4"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <rect
                        x="15"
                        y="40"
                        width="42"
                        height="4"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <circle
                        cx="62"
                        cy="20"
                        r="8"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M57 20 L62 15 L67 20"
                        stroke="var(--ink)"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M62 15 L62 25"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg
                      width="100"
                      height="90"
                      viewBox="0 0 80 70"
                      fill="none"
                    >
                      <polyline
                        points="8,60 20,35 32,45 44,20 56,30 68,10"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="68"
                        cy="10"
                        r="4"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <line
                        x1="8"
                        y1="65"
                        x2="72"
                        y2="65"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <line
                        x1="8"
                        y1="65"
                        x2="8"
                        y2="5"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg
                      width="100"
                      height="90"
                      viewBox="0 0 80 70"
                      fill="none"
                    >
                      <rect
                        x="10"
                        y="5"
                        width="60"
                        height="60"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="18"
                        y="15"
                        width="44"
                        height="5"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <rect
                        x="18"
                        y="25"
                        width="44"
                        height="3"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                      <rect
                        x="18"
                        y="32"
                        width="30"
                        height="3"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                      <rect
                        x="18"
                        y="44"
                        width="18"
                        height="12"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      <rect
                        x="42"
                        y="44"
                        width="20"
                        height="8"
                        rx="1"
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.15rem",
                      lineHeight: 1.3,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-garamond)",
                      fontSize: "0.95rem",
                      color: "var(--ink-light)",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div>
                    <a
                      href="#"
                      className="btn-ink"
                      style={{ fontSize: "0.78rem", padding: "0.45rem 1.2rem" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="ornament">✦ ✦ ✦</p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                margin: "0.5rem 0",
              }}
            >
              Get in Touch
            </h2>
            <hr
              className="rule-double"
              style={{ maxWidth: "200px", margin: "0.75rem auto 0.75rem" }}
            />
            <p
              style={{
                fontFamily: "var(--font-garamond)",
                fontStyle: "italic",
                color: "var(--ink-light)",
                fontSize: "1.05rem",
              }}
            >
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                border: "2px solid var(--nav-bg)",
                padding: "3rem",
                textAlign: "center",
                background: "var(--card-bg)",
              }}
            >
              <p className="ornament" style={{ marginBottom: "1rem" }}>
                ✦
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                Message Received
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontStyle: "italic",
                  color: "var(--ink-light)",
                }}
              >
                Thank you for reaching out. I'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                border: "2px solid var(--nav-bg)",
                padding: "2.5rem",
                background: "var(--card-bg)",
              }}
            >
              <div
                style={{
                  background: "var(--nav-bg)",
                  color: "var(--cream)",
                  padding: "0.6rem 1rem",
                  margin: "-2.5rem -2.5rem 2rem",
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Enquiry Form — Megan Chin
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-garamond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-garamond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-garamond)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project, brand, or the challenge you're facing..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn-ink"
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  padding: "0.85rem",
                }}
              >
                Send Message
              </button>
            </form>
          )}

          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--nav-bg)",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {["Instagram", "LinkedIn", "Twitter / X", "Email"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: "var(--font-garamond)",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "transparent")
                }
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--nav-bg)",
          borderTop: "3px double #a03545",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#f5f0e8",
          }}
        >
          Megan Chin
        </span>
        <span
          style={{
            fontFamily: "var(--font-garamond)",
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "#e0c4cc",
          }}
        >
          © 2026 — All rights reserved
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#e0c4cc",
                fontFamily: "var(--font-garamond)",
                fontStyle: "italic",
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e0c4cc")}
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
