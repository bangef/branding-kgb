import Images from "./Images";

export default function index({ directTo, children }) {
	return (
		<article
			ref={directTo}
			className="grid grid-cols-1 px-4 py-16 mx-auto xl:container lg:px-80"
		>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div>
					<h1 className="text-4xl font-bold text-black-cstm-1 font-poopins">
						Our Clients
					</h1>
					<p className="w-full mt-4 antialiased font-light tracking-wider text-start sm:text-justify text-slate-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						ipsam? Tenetur laudantium.
					</p>
				</div>
				<div className="grid place-content-start md:place-content-end">
					{children}
				</div>
			</div>

			<div className="grid justify-between w-full grid-cols-3 gap-2 mt-10">
				<Images />
			</div>
		</article>
	);
}
