import { UseFormRegisterReturn } from 'react-hook-form';

export type InputTypes = {
	type: 'text' | 'tel' | 'email';
	text: string;
	icon: any;
	errors: string | undefined;
	register: UseFormRegisterReturn;
};
