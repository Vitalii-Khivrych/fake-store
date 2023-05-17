import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Container, Logo, NavigationMenu } from "@/modules/common";

export const Header: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="w-full h-20  fixed  flex items-center  bg-slate-600 bg-opacity-75">
      <Container>
        <div className="flex items-center justify-between  min-w-full">
          <Logo />
          {currentRoute === "/" ? (
            <NavigationMenu />
          ) : (
            <Link href={"/"} className="text-slate-50 py-4 hover:text-blue-400">
              <span>HOME</span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};