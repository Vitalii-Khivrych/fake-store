import { Link } from "react-scroll";
import { useRouter } from "next/router";
import { FC } from "react";

export const navigation = [
  { id: 1, text: "Home", href: "home" },
  { id: 2, text: "Products", href: "products" },
];

export const NavigationMenu: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex gap-3 text-slate-50 tab:gap-12 desk:gap-16 ">
        {navigation.map(({ id, text, href }) => (
          <li key={id} className="cursor-pointer">
            <Link
              to={href}
              smooth={true}
              duration={500}
              offset={-70}
              className={`${
                router.pathname === `${href}` ? "text-blue-400" : ""
              } text-base desk:text-2xl`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
