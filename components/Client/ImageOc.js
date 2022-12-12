import Image from "next/image";

export default function ImageOc({ path, imageName }) {
	return (
		<div className="h-15 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg">
			<div className="relative w-full h-full">
				<Image
					src={path}
					alt={imageName}
					layout="fill"
					objectFit="contain"
					className="duration-1000 ease-out cursor-pointer grayscale hover:grayscale-0"
				/>
			</div>
		</div>
	);
}
