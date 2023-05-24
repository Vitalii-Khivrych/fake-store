import Head from 'next/head';
import { FC } from 'react';
import { Montserrat } from 'next/font/google';

import { Header, Footer } from '@/modules/common';
import { LayoutProps } from './types';

const montserrat = Montserrat({ subsets: ['latin'] });

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Head>
				<title>Fake Store</title>
				<meta name="description" content="The best online shop"></meta>
			</Head>
			<Header />
			<main className={`flex-grow ${montserrat.className}`}>{children}</main>
			<Footer />
		</div>
	);
};
