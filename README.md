# HERONEON_YT Creator Portfolio

A responsive Next.js App Router portfolio for the Heroneon_YT YouTube channel. Designed for deployment on Vercel.

## Requirements

- Node.js 18.17 or later (Node 20 LTS recommended)
- npm
- Git (for GitHub/Vercel deployment)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

## Deploy to Vercel

1. Create a GitHub repository named `heroneon-portfolio`.
2. Upload/push this project to the repository.
3. Sign in at https://vercel.com and choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected Next.js settings and click **Deploy**.
6. Vercel will provide a `*.vercel.app` URL.

Every push to the connected main branch will trigger a new deployment.

## Personalize the content

### YouTube channel

The channel link is already configured as:

`https://www.youtube.com/@Heroneon_YT`

It is used by the navigation, subscribe CTA, videos link and livestream link.

### Videos

Open `components/Videos.jsx` and replace the sample video IDs:

```js
const videos = [
  { id: "YOUR_YOUTUBE_VIDEO_ID", title: "Video title", category: "MINECRAFT", description: "Short description" }
];
```

A YouTube video ID is the part after `v=` in a watch URL. For example, in `https://www.youtube.com/watch?v=abc123`, the ID is `abc123`.

### Character artwork

The current character area is a designed placeholder. When the final artwork is ready:

1. Put the image in `public/images/character.png`.
2. Replace the placeholder in `components/Character.jsx` with:

```jsx
<img src="/images/character.png" alt="Heroneon character" className="character-image" />
```

Add appropriate sizing in `app/globals.css`.

The hero currently uses a CSS character silhouette placeholder that can also be replaced with the final artwork.

### Subscriber count

The count is intentionally shown as `—` until a verified data source is connected. Do not hardcode a changing subscriber count. A future version can fetch channel statistics using the YouTube Data API from a server-side route.

## Project structure

```text
app/
  globals.css
  layout.jsx
  page.jsx
components/
  About.jsx
  Character.jsx
  Footer.jsx
  Hero.jsx
  Livestream.jsx
  Navbar.jsx
  Stats.jsx
  Videos.jsx
public/
```

## Notes

- No API key is needed for the current version.
- If adding a YouTube API key later, store it in Vercel Project Settings → Environment Variables and keep it server-side. Never expose private API keys in browser code.
- Update the metadata URL in `app/layout.jsx` after you know your actual Vercel deployment URL or custom domain.
