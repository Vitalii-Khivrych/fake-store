import { Container } from '@/modules/common';
import { ContactsForm } from '@/modules/contacts';

export const ContactFormSection = () => {
	return (
		<section className="pb-4 pt-24 tab:pb-6 desk:pt-28">
			<Container>
				<h1 className="mb-2 text-center text-2xl font-bold tab:text-[26px]">
					Leave your details, we will call you back
				</h1>
				<ContactsForm />
			</Container>
		</section>
	);
};
