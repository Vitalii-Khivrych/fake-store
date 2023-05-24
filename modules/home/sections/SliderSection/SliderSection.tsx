import { Container } from '@/modules/common';
import { Slider } from '@/modules/home';

export const SliderSection = () => {
	return (
		<section className="pb-4 pt-24" id="home">
			<Container>
				<h2 className="hidden">Slider</h2>
				<Slider />
			</Container>
		</section>
	);
};
