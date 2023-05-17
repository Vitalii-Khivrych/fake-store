import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex">
      <Image
        className="h-6 w-7 "
        src="/images/logo.png"
        alt="company logo"
        width={100}
        height={100}
      />
      <span className=" ml-3 text-red-500">Fake</span>
      Store
    </Link>
  );
};
