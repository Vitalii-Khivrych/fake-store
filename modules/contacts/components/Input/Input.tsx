import { FC } from 'react';

import { InputTypes } from './types';

export const Input: FC<InputTypes> = ({ type, text, register, icon: SvgIcon, errors }) => {
	return (
		<div className="mb-5">
			<label className="relative  block text-xs text-slate-800 desk:text-sm">
				{text}
				<input
					type={type}
					aria-label={text}
					className="input border-[rgba(33, 33, 33, 0.2] ] peer mt-1 h-10 w-full rounded border-[1px] border-solid pl-10 pr-2 text-black outline-none transition delay-150  ease-in  hover:border-sky-600 focus:border-sky-600  desk:h-11"
					id={text.toLowerCase()}
					{...register}
				/>
				<SvgIcon className="absolute left-3 top-1/2 h-4 w-4  transition delay-150 ease-in peer-[.input]:peer-hover:text-sky-600 peer-[.input]:peer-focus:text-sky-600" />
			</label>

			{errors && <p className="absolute text-xs text-red-500">{errors}</p>}
		</div>
	);
};
