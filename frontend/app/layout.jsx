// Styles
import "./styles/globals.css";
import "./styles/main.css";
import "./styles/navbar.css";
import "./styles/footer.css";

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page metadata
export const metadata = {
  title: "edgeBio",
  description: "Bioinformatics computation infrastructure",
};

// Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
