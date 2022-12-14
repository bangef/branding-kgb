import Image from "next/image";
import Link from "next/link";
import dataConstant from "../../constant/data";
import scrollToSection from "../../utils/index";

const { medsos, ecommerce } = dataConstant.footer;

export default function index({ directs }) {
	const menu = dataConstant.navbar.map((elemen, index) => {
		return { ...elemen, directs: directs[index] };
	});

	return (
		<footer className="p-4 mx-auto bg-white sm:p-6 max-w-7xl">
			<div className="md:flex md:justify-between">
				<div className="w-full pr-0 mb-6 md:pr-4 md:w-3/4 md:mb-0">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.svg"
							className="h-6 mr-3 sm:h-9"
							alt="Logo PT. KGB"
							width={30}
							height={30}
						/>
						<span className="self-center text-2xl font-bold text-black-cstm-1 whitespace-nowrap font-poopins">
							KGB
						</span>
					</Link>
					<p className="mt-4 antialiased font-light tracking-wider text-start text-slate-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo,
						necessitatibus quia inventore laboriosam labore quidem eum alias
						porro iusto!
					</p>
					<iframe
						className="w-full mt-4 rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1359410026803!2d106.83649539999999!3d-6.3764465999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edfa0eb2d82b%3A0x7e5786a8cc03ea51!2sPT.%20Kurnia%20Gemilang%20Bersama!5e0!3m2!1sid!2sid!4v1670487847165!5m2!1sid!2sid"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="grid w-full grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:pl-8">
					<div className="font-poopins">
						<h2 className="mb-6 font-semibold text-gray-500 uppercase">Menu</h2>
						<ul>
							{menu.map((item, index) => (
								<li
									key={index}
									onClick={() => {
										scrollToSection(item.directs);
									}}
									className="py-2 text-sm font-light text-gray-400 list-none cursor-pointer hover:text-black-cstm-1"
								>
									{item.name}
								</li>
							))}
						</ul>
					</div>
					<div className="font-poopins">
						<h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
							Media Social
						</h2>
						<ul>
							{medsos.map(({ name, href }, index) => (
								<li className="mb-4" key={index}>
									<a
										href={href}
										target="_blank"
										className="py-2 text-sm font-light text-gray-400 list-none cursor-pointer hover:text-black-cstm-1"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="font-poopins">
						<h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
							E-Commerce
						</h2>
						<ul>
							{ecommerce.map(({ name, href }, index) => (
								<li className="mb-4" key={index}>
									<a
										href={href}
										target="_blank"
										className="py-2 text-sm font-light text-gray-400 list-none cursor-pointer hover:text-black-cstm-1"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			<span className="block text-xs tracking-wider text-center text-gray-400 font-poopins">
				All Rights Reserved PT. Kurnia Gemilang Bersama © 2022
			</span>
		</footer>
	);
}
