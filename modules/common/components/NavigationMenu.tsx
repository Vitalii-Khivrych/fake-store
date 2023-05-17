import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export const navigation = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Products", href: "#products" },
];

export const NavigationMenu: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex gap-12 text-slate-50 ">
        {navigation.map(({ id, text, href }) => (
          <li key={id} className="cursor-pointer">
            <Link href={href} className={router.pathname === `${href}` ? "text-blue-400" : ""}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
