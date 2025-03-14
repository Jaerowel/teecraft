// app/components/LayoutWrapper.jsx

"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import Footer from "./footer";
import TopNavbar from "./Topnavbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Define pages where you DON'T want Sidebar
  const isLandingPage = pathname === "/" || pathname === "/landingPage";

  return (
    <>
      {isLandingPage ? (
        // Landing Layout: TopNavbar Only
        <div className="flex flex-col min-h-screen">
          <TopNavbar />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
        </div>
      ) : (
        // Dashboard Layout: Sidebar + Footer
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <main className="flex-1 p-6 bg-gray-100">{children}</main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
