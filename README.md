HERONEON_YT — YouTube integration update

Files included:
- app/api/youtube/route.js
- app/api/youtube/live/route.js
- components/Stats.jsx
- components/Videos.jsx
- components/Livestream.jsx

How to apply:
1. Extract this ZIP.
2. Open your GitHub repository:
   https://github.com/heroneonofficial-hub/heroneon-portfolio
3. For each file listed above, open the matching file in GitHub and use the pencil (Edit) button.
4. Replace the entire old file contents with the matching file from this ZIP.
5. For the two new API route files, use Add file → Create new file and enter the exact path shown above.
6. Commit the changes to the main branch.
7. Vercel should automatically start a new deployment.

Keep YOUTUBE_API_KEY in Vercel Project Settings → Environment Variables.
Do not put the API key in any source file or commit it to GitHub.

The main channel/video endpoint is cached for 15 minutes. Live status is cached for 1 hour to avoid excessive YouTube API quota use. A newly started or ended livestream may therefore take up to about an hour to be reflected.
