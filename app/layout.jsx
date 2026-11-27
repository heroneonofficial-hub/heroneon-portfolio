import "./globals.css";

export const metadata = {
  title: "HERONEON_YT — Creator Portfolio",
  description: "Minecraft, gaming, livestreams and creative adventures by Heroneon_YT.",
  metadataBase: new URL("https://heroneon-portfolio.vercel.app"),
  openGraph: {
    title: "HERONEON_YT — Creator Portfolio",
    description: "Gaming, creativity and community.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
