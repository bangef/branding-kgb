export default function Card({ path, nameImage, title, description }) {
	return (
		<div className="relative z-10 w-full h-auto p-4 bg-white rounded-lg shadow-lg cursor-pointer">
			<div className="absolute top-[-25px] w-14 h-14 rounded-full right-5 z-10 grid place-content-center bg-gradient-to-r from-red-500 to-blue-500">
				<img src={path} alt={nameImage} className="rounded-full" />
			</div>
			<h1 className="mt-4 text-lg font-semibold font-poopins text-black-cstm-1">
				{title}
			</h1>
			<p className="font-light tracking-wider text-slate-600">{description}</p>
		</div>
	);
}
