import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

export default function ModalTwo({ title, description, isOpen2, setIsOpen2 }) {
	if (!isOpen2) {
		return null;
	}

	return (
		<Transition
			show={isOpen2}
			enter="transition duration-100 ease-out"
			enterFrom="transform scale-95 opacity-0"
			enterTo="transform scale-100 opacity-100"
			leave="transition duration-75 ease-out"
			leaveFrom="transform scale-100 opacity-100"
			leaveTo="transform scale-95 opacity-0"
			as={Fragment}
		>
			<Dialog
				open={isOpen2}
				onClose={() => setIsOpen2(false)}
				className="relative z-50"
			>
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

				{/* Full-screen container to center the panel */}
				<div className="fixed inset-0 flex items-center justify-center p-4">
					{/* The actual dialog panel  */}
					<Dialog.Panel className="w-full p-8 mx-auto bg-white rounded-lg sm:w-3/4 lg:1/2">
						<Dialog.Title className="text-xl font-bold font-poopins">
							{title}
						</Dialog.Title>
						<Dialog.Description className="mt-4">
							{description}
						</Dialog.Description>
						<Button type="primary" onClick={() => setIsOpen2(false)}>
							Out
						</Button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</Transition>
	);
}
