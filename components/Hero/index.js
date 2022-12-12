import Carousel from "./Carousel";

export default function index(props) {
	return (
		<section className="mt-16" ref={props.directTo}>
			<div className="grid grid-cols-1 md:grid-cols-2 font-poopins h-[600px]">
				<Carousel delay={5000} />
				<div className="grid grid-rows-2">
					<Carousel delay={4500} enabled={false} />
					<Carousel delay={4000} enabled={false} />
				</div>
			</div>
		</section>
	);
}
