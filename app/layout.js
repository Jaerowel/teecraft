import "./globals.css";
import LayoutWrapper from "./components/layoutWrapper";

export const metadata = {
  title: "TeeCraft | Design Your Style",
  description: "Create custom T-shirts with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased  text-black dark:bg-black dark:text-white">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
