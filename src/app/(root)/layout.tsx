import { PropsWithChildren } from 'react';

import Navbar from '@/components/shared/navbar/Navbar';
import NavLinks from '@/components/shared/navbar/NavLinks';
import RightSidebar from '@/components/shared/RightSidebar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        {/*  Left Sidebar */}
        <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
          <NavLinks />
        </section>
        {/* Middle / "Core" Content */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/* Right Sidebar */}
        <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-fit flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden xl:w-[350px]">
          <RightSidebar />
        </section>
      </div>
    </main>
  );
};

export default Layout;
