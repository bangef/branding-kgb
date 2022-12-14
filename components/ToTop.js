import Image from "next/image";
import dataConstant from "../constant/data";

export default function ToTop() {
	return (
		<a
			href={dataConstant.linkWa}
			target="_blank"
			className="z-50 block bg-transparant fixed right-[15px] bottom-[20px] font-xs rounded-full text-white p-2 text-sm font-poopins opacity-50 transition-all ease-in delay-150 hover:scale-150 hover:opacity-100"
		>
			<Image
				src="/whatsapp.png"
				width={50}
				height={50}
				alt="icon whatsapp"
				className="animate-bounce"
			/>
		</a>
	);
}
