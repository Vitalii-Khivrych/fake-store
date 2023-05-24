import { Link } from 'react-scroll';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { navigation } from './data';

export const NavigationMenu: FC = () => {
	const router = useRouter();

	const handleClick = (href: string) => {
		router.push(`/#${href}`);
	};

	return (
		<nav>
			<ul className="flex gap-3 text-slate-50 tab:gap-12 desk:gap-16 ">
				{navigation.map(({ id, text, href }) => (
					<li key={id} className="cursor-pointer">
						<Link
							to={href}
							smooth={true}
							duration={500}
							offset={-84}
							onClick={() => handleClick(href)}
							className={`${
								router.asPath === `/#${href}`
									? 'text-base  text-rose-600 transition delay-150 ease-in'
									: ''
							} text-base  transition delay-75 ease-in hover:text-amber-700 desk:text-2xl`}
						>
							{text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
