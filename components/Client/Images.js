import image1 from "../../public/img_oc_1.png";
import image2 from "../../public/img_oc_2.png";
import image3 from "../../public/img_oc_3.png";
import image4 from "../../public/img_oc_4.png";
import image5 from "../../public/img_oc_5.png";

const allImages = [
	{ source: image1, alternate: "Logo Perusahaan 1" },
	{ source: image2, alternate: "Logo Perusahaan 2" },
	{ source: image3, alternate: "Logo Perusahaan 3" },
	{ source: image4, alternate: "Logo Perusahaan 4" },
	{ source: image5, alternate: "Logo Perusahaan 5" },
];

import Image from "next/image";

export default function Images() {
	return (
		<>
			{allImages.map(({ source, alternate }, index) => {
				return (
					<div
						className="h-15 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg"
						key={index}
					>
						<div className="relative grid w-full h-full place-content-center">
							<Image
								src={source}
								alt={alternate}
								className="w-full h-auto cursor-pointer md:w-3/4 sm:w-1/2 grayscale hover:grayscale-0"
							/>
						</div>
					</div>
				);
			})}
		</>
	);
}
