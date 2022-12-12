// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import heroOne from "../../public/1.jpg";
import heroTwo from "../../public/2.jpg";
import heroThree from "../../public/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, EffectFade, Scrollbar } from "swiper";
export default function Carousel({ delay, enabled }) {
	const images = [
		{ source: heroOne, alternate: "Hero banner 1" },
		{ source: heroTwo, alternate: "Hero banner 2" },
		{ source: heroThree, alternate: "Hero banner 3" },
	];
	return (
		<Swiper
			spaceBetween={0}
			centeredSlides={true}
			autoplay={{
				delay: delay,
				disableOnInteraction: false,
			}}
			pagination={{
				enabled: enabled,
				clickable: true,
			}}
			modules={[Autoplay, Pagination, EffectFade, Scrollbar]}
			className="mySwiper"
		>
			{images.map(({ source, alternate }) => {
				return (
					<SwiperSlide key={`${alternate}`}>
						<Image src={source} alt={alternate} fill placeholder="blur" />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
