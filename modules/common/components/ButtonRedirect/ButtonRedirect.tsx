import Link from 'next/link';
import { FC } from 'react';

import { ButtonRedirectProps } from './types';

export const ButtonRedirect: FC<ButtonRedirectProps> = ({ text, to, style }) => {
	return (
		<Link
			className={`flex h-[50px] w-[150px] items-center 
    justify-center rounded-md border-none bg-blue-700 text-[16px] font-bold text-inherit  text-white shadow-md hover:bg-sky-700 focus:bg-sky-700 ${style}`}
			href={to}
		>
			{text}
		</Link>
	);
};
