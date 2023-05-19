import { FC } from 'react';

import { socialLinksItems } from './data';

export const SocialLinks: FC = () => {
	return (
		<ul className="mb-1 flex items-center justify-center space-x-5  tab:space-x-7">
			{socialLinksItems.map(({ id, alt, href, icon: Icon }) => (
				<li
					className="group flex h-8 w-8 items-center justify-center rounded-full  hover:bg-neutral-200 tab:h-9 tab:w-9"
					key={id}
				>
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={alt}
						className="group-hover:text-cyan-900"
					>
						<Icon className=" h-4 w-4 tab:h-5 tab:w-5" />
					</a>
				</li>
			))}
		</ul>
	);
};
