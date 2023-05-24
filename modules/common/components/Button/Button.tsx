import { FC } from 'react';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ type, text, style, ...props }) => {
	return (
		<button
			type={type}
			className={`flex h-[50px] w-[150px] items-center 
    justify-center rounded-md border-none bg-blue-700 text-[16px] font-bold text-inherit  text-white shadow-md  transition delay-150 ease-in hover:bg-cyan-700  ${style}`}
			{...props}
		>
			{text}
		</button>
	);
};
