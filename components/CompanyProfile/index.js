export default function index(props) {
	return (
		<section
			className="grid grid-cols-1 px-4 py-16 mx-auto xl:container"
			ref={props.directTo}
		>
			<div className="text-black-cstm-1 font-poopins">
				<h1 className="text-4xl font-bold text-center">Company Profile</h1>
				<p className="w-full mx-auto mt-4 antialiased tracking-wider text-center md:w-3/4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
					ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis
					aperiam nihil, esse alias similique voluptatibus expedita eos mollitia
					perferendis.
				</p>
			</div>
			<div className="flex justify-center mt-8">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/h4HrikIuM6A"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</section>
	);
}
