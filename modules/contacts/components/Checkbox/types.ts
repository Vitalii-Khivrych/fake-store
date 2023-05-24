import { UseFormRegisterReturn } from 'react-hook-form';

export type CheckboxProps = {
	id: string;
	text: string;
	errors: string | undefined;
	register: UseFormRegisterReturn;
};
