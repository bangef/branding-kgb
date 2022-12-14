import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import dataConstant from "../../constant/data";
import scrollToSection from "../../utils/index";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function index(props) {
	const navigation = dataConstant.navbar.map((elemen, index) => {
		return { ...elemen, directs: props.directs[index] };
	});

	return (
		<Menu
			as="nav"
			className="fixed top-0 left-0 z-20 w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg font-poopins drop-shadow-md"
		>
			{({ active }) => (
				<>
					<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-cstm-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									{active ? (
										<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Menu.Button>
							</div>
							<div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
								<Link href="/" className="flex items-center flex-shrink-0">
									<Image
										className="block w-auto h-8 lg:hidden"
										src="/logo.svg"
										width={20}
										height={20}
										alt="Your Company"
									/>
									<Image
										className="hidden w-auto h-8 lg:block"
										src="/logo.svg"
										width={20}
										height={20}
										alt="Your Company"
									/>
									<span className="block text-black-cstm-1 font-bold text-2xl ml-2.5">
										KGB
									</span>
								</Link>

								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item, index) => (
											<li
												key={index}
												onClick={() => {
													scrollToSection(item.directs);
												}}
												className="px-1 py-2 text-sm font-medium text-gray-400 list-none rounded-md cursor-pointer hover:text-black-cstm-1"
											>
												{item.name}
											</li>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items as="div" className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item, index) => (
									<Menu.Item
										as="li"
										key={index}
										className={classNames(
											{ active } ? "text-black-cstm-1" : "text-gray-400",
											"py-2 text-sm font-medium list-none rounded-md cursor-pointer ui-not:active:px-1 ui-active: hover:text-black-cstm-1"
										)}
										onClick={() => scrollToSection(item.directs)}
									>
										{item.name}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}
