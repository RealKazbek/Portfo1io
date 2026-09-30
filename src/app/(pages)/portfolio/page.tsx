import PortfolioPage from "@/components/pages/portfolio";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Kazbek",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: "https://realkazbek.site/portfolio" },
};

const Page = () => {
  return <PortfolioPage />;
};

export default Page;
