import { FC } from 'react';
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({ id, text, register, errors }) => {
	return (
		<div className=" mb-7">
			<input type="checkbox" className="mr-2 h-3 w-3 leading-tight" id={id} {...register} />
			<label className="text-xs desk:text-sm" htmlFor={id}>
				{text}
			</label>
			{errors && <p className="absolute text-xs text-red-500">{errors}</p>}
		</div>
	);
};
