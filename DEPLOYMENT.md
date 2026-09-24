# Vercel deployment

Deploy this Next.js portfolio to Vercel with the following environment variables:

Required:

```env
NEXT_PUBLIC_APP_URL=https://realkazbek.site
NEXT_PUBLIC_GITHUB_USERNAME=RealKazbek
NEXT_PUBLIC_AVAILABLE_STATUS=true
```

Optional:

```env
GITHUB_TOKEN=...
NEXT_PUBLIC_UMAMI_WEBSITE_ID=...
```

`GITHUB_TOKEN` enables the server-side GitHub statistics request. Without it,
`/api/github` returns a controlled `503` and the public portfolio remains
available. `NEXT_PUBLIC_UMAMI_WEBSITE_ID` enables the Umami script; without it,
the script is not added.

Database, BetterAuth, OAuth, and Prisma variables are only needed if the
Guestbook, Todo, or authentication features are enabled with their backend
services. They are optional for the public portfolio deployment.

The contact form is mailto-only: submitting it opens the visitor's email
client and does not send through a server endpoint.
