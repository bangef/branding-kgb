// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Card from "./Card";

export default function Carousel({ delay }) {
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: delay,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				500: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
			modules={[Autoplay, Pagination]}
		>
			{["1", "2", "3"].map((elemen, index) => (
				<SwiperSlide key={`elemen-${index}`} className="w-full my-7">
					<Card
						path="/services.webp"
						nameImage="lorem"
						title="Lorem Ipsum"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatem excepturi sit non unde aliquid asperiores mollitia odio, nemo eos alias assumenda iusto repellat, quis optio veniam dolorum minima eligendi."
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
