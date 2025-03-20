"use client";
import { useTranslations } from "next-intl";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ProductsList from "../../../components/Products/ProductsList";

export default function Home() {
  const t = useTranslations("common");
  return (
    <main className="flex    md:container max-w-[90%] justify-center items-start mx-auto   flex-wrap mt-4 gap-3">
      <Sidebar />

      {/* Main Content */}

      <ProductsList />
    </main>
  );
}
