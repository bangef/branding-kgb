// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

export default function Carousel({ delay, images }) {
	return (
		<Swiper
			spaceBetween={0}
			centeredSlides={true}
			autoplay={{
				delay: delay,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			modules={[Autoplay, Pagination]}
			className="mySwiper"
		>
			{images.map(({ path, imageName }, index) => (
				<SwiperSlide key={index}>
					<Image src={path} layout="fill" alt={imageName} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
