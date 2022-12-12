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
export default function Carousel({ delay, images, enabled }) {
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
			<SwiperSlide>
				<Image src={heroOne} alt="testing" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src={heroTwo} alt="testing" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src={heroThree} alt="testing" fill placeholder="blur" />
			</SwiperSlide>
		</Swiper>
	);
}
