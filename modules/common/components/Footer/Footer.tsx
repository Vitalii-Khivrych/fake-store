import { Container, SocialLinks } from '@/modules/common';

export const Footer = () => {
	return (
		<footer className=" bg-cyan-900 py-2 text-neutral-200 tab:py-5 ">
			<Container>
				<SocialLinks />
				<p className="text-center text-xs tab:text-base">Copyright © 2023</p>
			</Container>
		</footer>
	);
};
