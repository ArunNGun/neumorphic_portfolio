import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import { StarRainProvider } from "../context/StarRainContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "Arun Kumar | Software Engineer",
  description: "Arun Kumar's personal portfolio website showcasing skills, projects, and contact information.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function cleanupDOM() {
                if (document.body) {
                  if (document.body.hasAttribute('data-new-gr-c-s-check-loaded')) {
                    document.body.removeAttribute('data-new-gr-c-s-check-loaded');
                  }
                  if (document.body.hasAttribute('data-gr-ext-installed')) {
                    document.body.removeAttribute('data-gr-ext-installed');
                  }
                  
                  const knownExtIds = ['extwaiokist', 'extaicont', 'extsparkl'];
                  knownExtIds.forEach(id => {
                    const elements = document.querySelectorAll('[id="' + id + '"]');
                    elements.forEach(el => el.parentNode.removeChild(el));
                  });
                }
              }
              
              cleanupDOM();
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', cleanupDOM);
              }
              
              setInterval(cleanupDOM, 100);
              
              if (typeof MutationObserver !== 'undefined') {
                const observer = new MutationObserver(function(mutations) {
                  cleanupDOM();
                });
                
                if (document.body) {
                  observer.observe(document.body, { childList: true, subtree: true });
                } else {
                  document.addEventListener('DOMContentLoaded', function() {
                    observer.observe(document.body, { childList: true, subtree: true });
                  });
                }
              }
            })();
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StarRainProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StarRainProvider>
      </body>
    </html>
  );
}
