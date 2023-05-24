import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

export const Logo: FC = () => {
	return (
		<Link href="/" className="flex animate-bounce text-xl font-semibold desk:text-3xl">
			<Image
				className="h-6 w-7 desk:h-9 desk:w-10"
				src="/images/logo.png"
				alt="company logo"
				width={100}
				height={100}
				quality={100}
			/>
			<span className=" ml-3 mr-1 text-red-600">Fake</span>
			Store
		</Link>
	);
};
