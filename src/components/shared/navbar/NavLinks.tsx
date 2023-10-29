'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedOut, useAuth } from '@clerk/nextjs';

import { SIDEBAR_LINKS } from '@/constants';
import { Button } from '@/components/ui/button';

type NavLinksProps = {
  isMobile?: boolean;
};

const NavLinks = ({ isMobile }: NavLinksProps) => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useAuth();

  const visibleSidebarLinks = SIDEBAR_LINKS.filter((link) => {
    // Exclude the '/profile' link if the user is not signed in or auth state is not loaded
    if (link.route === '/profile') {
      return isLoaded && isSignedIn;
    }
    return true; // Keep all other links
  });

  return (
    <>
      <div className="flex flex-1 flex-col gap-6">
        {visibleSidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.route}
              href={link.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } max-lg:hidden max-sm:block`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary flex min-h-[41px] w-full gap-2 rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/account.svg"
                  alt="login"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
                <span className="primary-text-gradient max-lg:hidden max-sm:block">
                  Log In
                </span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 flex min-h-[41px] w-full gap-2 rounded-lg border px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="sign up"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
                <span className="max-lg:hidden max-sm:block">Sign up</span>
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </>
  );
};

export default NavLinks;
