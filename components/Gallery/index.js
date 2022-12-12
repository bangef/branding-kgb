export default function index(props) {
	return (
		<section
			className="grid grid-cols-1 px-4 py-16 mx-auto xl:container"
			ref={props.directTo}
		>
			<div>
				<h1 className="text-4xl font-bold text-center text-black-cstm-1 font-poopins">
					Gallery
				</h1>
				<p className="w-full mx-auto mt-4 text-base antialiased tracking-wider text-center md:w-3/4 font-poopins">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
					ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis
					aperiam nihil, esse alias similique voluptatibus expedita eos mollitia
					perferendis.
				</p>
			</div>
			<div className="grid w-full grid-cols-2 gap-2 mt-10 md:grid-cols-4"></div>
		</section>
	);
}
