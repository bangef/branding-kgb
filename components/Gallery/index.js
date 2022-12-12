import Images from "./Images";

export default function index({ directTo }) {
	return (
		<section
			className="grid grid-cols-1 px-4 py-16 mx-auto xl:container"
			ref={directTo}
		>
			<div>
				<h1 className="text-4xl font-bold text-center text-black-cstm-1 font-poopins">
					Gallery
				</h1>
				<p className="w-full mt-4 antialiased font-light tracking-wider text-center text-slate-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
					ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis
					aperiam nihil, esse alias similique voluptatibus expedita eos mollitia
					perferendis.
				</p>
			</div>
			<Images />
		</section>
	);
}
