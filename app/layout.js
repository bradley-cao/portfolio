import "./globals.css";

export const metadata = {
  title: "Work in Progress",
  description: "Portfolio site under construction."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
