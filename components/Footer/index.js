import Image from "next/image";
import Link from "next/link";
import dataConstant from "../../constant/data";

const { menu, medsos, ecommerce } = dataConstant.footer;

export default function index() {
	return (
		<footer className="p-4 mx-auto bg-white sm:p-6 font-poopins max-w-7xl">
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
						<span className="self-center text-2xl font-bold text-black whitespace-nowrap">
							KGB
						</span>
					</Link>
					<p className="mt-2 text-sm text-gray-400">
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
				<div className="grid w-full grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
							Menu
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							{menu.map(({ name, href }, index) => (
								<li className="mb-4" key={index}>
									<Link href={href} className="hover:text-blue-900">
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
							Media Social
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							{medsos.map(({ name, href }, index) => (
								<li className="mb-4" key={index}>
									<a
										href={href}
										target="_blank"
										className="hover:text-blue-900"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
							E-Commerce
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							{ecommerce.map(({ name, href }, index) => (
								<li className="mb-4" key={index}>
									<a
										href={href}
										target="_blank"
										className="hover:text-blue-900"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
			<span className="block text-sm text-center text-gray-500">
				© 2022{" "}
				<a href="https://flowbite.com/" className="hover:underline">
					PT. KGB
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}
