# Prasad Kapure - Blockchain Developer Portfolio

Personal portfolio of Prasad Kapure — Blockchain Developer & Smart Contract Engineer.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 with a two-anchor token system (--base / --base-foreground)
- Motion (framer-motion) for interaction and layout animation
- Lenis for smooth scrolling on pointer-fine devices
- Nodemailer for the contact form relay

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Environment variables

| Variable | Purpose |
|----------|---------|
| SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM | Contact form relay |
| CONTACT_TO | Where contact messages are delivered |
| NEXT_PUBLIC_GITHUB_TOKEN | GitHub contributions graph (read:user scope) |

The Activity section removes itself if the GitHub feed is unavailable, so the token is optional.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| ⌘K / Ctrl+K | Command menu |
| D | Toggle theme |

Interface sound is off by default and can be enabled from the command menu. All motion respects prefers-reduced-motion.
