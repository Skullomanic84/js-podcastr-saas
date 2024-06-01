import RightSidebar from "@/components/sidebars/RightSidebar";
import MobileNav from "@/components/mobileNav/MobileNav";
import Sidebar from "@/components/sidebars/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        {/* left sidebar */}
        <Sidebar />
        {/* main */}
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14 ">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="menu icon" height={30} width={30}/>
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              Toaster (notification popups)
              {children}
            </div>
          </div>
        </section>

        {/* right sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}
