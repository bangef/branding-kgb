import Image from "next/image";
import { useEffect, useState } from "react";
import dataConstant from "../constant/data";

export default function ToTop() {
	return (
		<a
			href={dataConstant.linkWa}
			target="_blank"
			className="z-50 block bg-transparant shadow-lg fixed right-[15px] bottom-[20px] font-xs rounded-full text-white p-2 text-sm font-poopins hover:opacity-80 transition-all ease-in delay-150"
		>
			<Image
				src="/whatsapp.png"
				width={36}
				height={36}
				alt="icon whatsapp"
				className="hover:scale-150 animate-bounce"
			/>
		</a>
	);
}
