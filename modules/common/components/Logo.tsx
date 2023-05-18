import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex text-xl desk:text-3xl">
      <Image
        className="h-6 w-7 desk:h-9 desk:w-10"
        src="/images/logo.png"
        alt="company logo"
        width={100}
        height={100}
      />
      <span className=" ml-3 text-red-500 mr-1">Fake</span>
      Store
    </Link>
  );
};
