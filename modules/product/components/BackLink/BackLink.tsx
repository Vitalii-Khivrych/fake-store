import Link from 'next/link';
import { FC } from 'react';

import BackArrow from '/public/images/icons/back-arrow.svg';
import { BackLinkTypeProps } from './types';

export const BackLink: FC<BackLinkTypeProps> = ({ to, text }) => {
	return (
		<Link
			className="text-decoration-none group mb-2 flex w-fit cursor-pointer items-center text-base transition  delay-150  ease-in hover:text-cyan-700 focus:text-cyan-700 tab:mb-4 tab:text-xl"
			href={to}
		>
			<BackArrow className="mr-2 h-4 w-4 transition delay-150  ease-in group-hover:fill-cyan-700 group-focus:fill-cyan-700 tab:h-5 tab:w-5" />
			{text}
		</Link>
	);
};
