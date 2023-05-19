import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, Logo, NavigationMenu } from '@/modules/common';

export const Header: FC = () => {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<header
			className={`fixed flex h-16 w-full  items-center  rounded-b-2xl bg-cyan-700 shadow-lg  shadow-cyan-500/50 desk:h-20  ${
				currentRoute === '/404' ? 'hidden' : 'visible'
			} z-10`}
		>
			<Container>
				<div className="flex min-w-full items-center  justify-between">
					<Logo />
					{currentRoute === '/' ? (
						<NavigationMenu />
					) : (
						<Link href={'/'} className="py-4 text-slate-50 hover:text-rose-600">
							<span className="text-base transition delay-75 ease-in hover:text-amber-700 desk:text-2xl">
								Home
							</span>
						</Link>
					)}
				</div>
			</Container>
		</header>
	);
};
