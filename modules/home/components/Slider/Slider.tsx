import SimpleImageSlider from 'react-simple-image-slider';

import { imagesArray } from './data';

export const Slider = () => {
	const ddd = 'w-[420px] tab:w-[768px] desk:w-[1280px]';

	return (
		<div className="h-[220px] w-full tab:h-[400px] desk:h-[550px]">
			<SimpleImageSlider
				style={{
					margin: '0 auto',
					width: '100%',
					height: '100%',
					position: 'relative',
				}}
				width={'100%'}
				height={'100%'}
				images={imagesArray}
				showBullets={true}
				showNavs={true}
				autoPlay={true}
				autoPlayDelay={5}
			/>
		</div>
	);
};
