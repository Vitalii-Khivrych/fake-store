import Image from 'next/image';

import { ButtonRedirect, Container } from '@/modules/common';
import { FC } from 'react';

export const HeroSection: FC = () => {
	return (
		<section className="bg-gray-100 py-4">
			<Container>
				<div className=" tab:flex   ">
					<div className="mb-3 tab:mb-0 tab:flex tab:flex-col tab:justify-center  ">
						<h1 className="mb-3 text-center text-3xl font-bold leading-tight tab:mb-5 desk:mb-10 desk:text-6xl">
							The best online shop
						</h1>
						<p className="mb-5 text-center text-sm tab:mb-8 desk:mb-11 desk:text-2xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat optio ab!
							Vero saepe totam tempora! Laborum, cum harum est quis officia odit voluptates
							doloribus provident, dolorem porro labore dolores!
						</p>
						<ButtonRedirect
							to="/contacts"
							text="Contact us"
							style="mx-auto desk:w-[250px] desk:h-[70px] desk:text-[20px]"
						/>
					</div>
					<div className="mx-auto h-[300px] w-[260px] tab:ml-4  tab:h-[400px] tab:w-full desk:h-[600px] ">
						<Image
							className="h-full w-full rounded-lg object-cover "
							src="/images/hero-img.jpg"
							alt="online shopping"
							width={150}
							height={150}
							priority
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
