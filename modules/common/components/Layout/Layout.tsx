import Head from 'next/head';
import { FC } from 'react';
import { Montserrat } from 'next/font/google';

import { LayoutProps, Header, Footer } from '@/modules/common';

const montserrat = Montserrat({ subsets: ['latin'] });

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Fake Store</title>
			</Head>
			<Header />
			<main className={` ${montserrat.className}`}>{children}</main>
			<Footer />
		</>
	);
};
