import { FC } from 'react';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ type, text, style }) => {
	return (
		<button
			type={type}
			className={`flex h-[50px] w-[150px] items-center 
    justify-center rounded-md border-none bg-blue-700 text-[16px] font-bold text-inherit  text-white  shadow-md hover:bg-sky-700 focus:bg-sky-700 ${style}`}
		>
			{text}
		</button>
	);
};
