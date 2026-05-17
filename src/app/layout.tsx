import "./globals.css";

export const metadata = {
  title: "JG FutureVerse | World-Class Platform Engine",
  description: "Next-Generation Responsive University Architecture Engine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="cyber-grid-overlay antialiased">{children}</body>
    </html>
  );
}