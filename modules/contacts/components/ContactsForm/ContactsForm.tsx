import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import Person from '/public/images/icons/person.svg';
import Phone from '/public/images/icons/phone.svg';
import Email from '/public/images/icons/email.svg';

import { Button } from '@/modules/common';
import { schema, Input, Checkbox } from '@/modules/contacts';
import { IFormInputs } from './types';

export const ContactsForm: FC = () => {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormInputs) => {
		console.log(data);
		toast.success('We call you soon!');
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mob:max-w-[388px]  tab:mx-auto tab:w-2/3 tab:max-w-none desk:w-1/2 "
		>
			<Input
				type="text"
				text="name"
				icon={Person}
				errors={errors.name?.message}
				register={{ ...register('name') }}
			/>

			<Input
				type="tel"
				text="Phone"
				icon={Phone}
				errors={errors.phone?.message}
				register={{ ...register('phone') }}
			/>

			<Input
				type="email"
				text="Email"
				icon={Email}
				errors={errors.email?.message}
				register={{ ...register('email') }}
			/>

			<Checkbox
				id="policy"
				text="I agree with the newsletter and accept"
				register={{ ...register('policyCheck') }}
				errors={errors.policyCheck?.message}
			/>

			<Button type="submit" text="Send" style="mx-auto" />
		</form>
	);
};
