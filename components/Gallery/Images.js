import Image from "next/image";
import img_g_1 from "../../public/img_g_1.jpg";
import img_g_2 from "../../public/img_g_2.jpg";
import img_g_3 from "../../public/img_g_3.jpg";
import img_g_4 from "../../public/img_g_4.jpg";
import img_g_5 from "../../public/img_g_5.jpg";
import img_g_6 from "../../public/img_g_6.jpg";

const allImages = [
	{ source: img_g_1, alternate: "Model baju ke - 1" },
	{ source: img_g_2, alternate: "Model baju ke - 2" },
	{ source: img_g_3, alternate: "Model baju ke - 3" },
	{ source: img_g_4, alternate: "Model baju ke - 4" },
	{ source: img_g_5, alternate: "Model baju ke - 5" },
	{ source: img_g_6, alternate: "Model baju ke - 6" },
];
export default function Images() {
	return (
		<div className="grid w-[3/4] sm:w-full grid-cols-1 gap-2 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{allImages.map(({ source, alternate }, index) => {
				return (
					<div
						className="h-15 aspect-[3/4] relative overflow-hidden rounded-lg"
						key={index}
					>
						<Image
							src={source}
							alt={alternate}
							fill
							placeholder="blur"
							className="transition-all ease-in-out delay-75 scale-110 cursor-pointer hover:scale-100"
							quality={10}
						/>
					</div>
				);
			})}
		</div>
	);
}
