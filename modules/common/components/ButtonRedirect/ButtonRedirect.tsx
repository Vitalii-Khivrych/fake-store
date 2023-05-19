import Link from 'next/link';
import { FC } from 'react';

import { ButtonRedirectProps } from './types';

export const ButtonRedirect: FC<ButtonRedirectProps> = ({ text, to, style }) => {
	return (
		<Link
			className={`flex h-[50px] w-[150px] items-center justify-center rounded-md border-none 
    bg-blue-700 text-[16px] font-bold text-inherit text-white shadow-md transition  delay-150 ease-in hover:bg-cyan-700 focus:bg-cyan-700 ${style}`}
			href={to}
		>
			{text}
		</Link>
	);
};
