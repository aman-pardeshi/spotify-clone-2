import Head from "next/head";
import Center from "../components/center.component";
import Sidebar from "../components/sidebar.component";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* player */}</div>
    </div>
  );
}
