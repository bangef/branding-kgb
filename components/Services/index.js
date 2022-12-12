import Carousel from "./Carousel";
import dataConstant from "../../constant/data";
const { hero } = dataConstant;

export default function index(props) {
	return (
		<article ref={props.directTo}>
			<section
				className="grid grid-cols-1 p-3 px-4 py-16 mx-auto xl:rounded-lg xl:container bg-red-cstm-1"
				style={{
					background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1016%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(243%2c 237%2c 228%2c 1)'%3e%3c/rect%3e%3cpath d='M1440 0L724.05 0L1440 114.53z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M724.05 0L1440 114.53L1440 194.32L619.75 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M619.75 0L1440 194.32L1440 303.2L552.85 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M552.85 0L1440 303.2L1440 319.65999999999997L396.73 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L319.78 560L0 433.3z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 433.3L319.78 560L433.2 560L0 292.8z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 292.8L433.2 560L952.54 560L0 126.86000000000001z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 126.86000000000001L952.54 560L1297.24 560L0 67.02000000000001z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1016'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
				}}
			>
				<div className="xl:mr-10 lg:mr-8 md:mr-4 text-black-cstm-1">
					<h1 className="text-4xl font-bold text-center font-poopins">
						Services
					</h1>
					<p className="mt-4 antialiased tracking-wider text-center font-poopins">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis
						aperiam nihil, esse alias similique voluptatibus expedita eos
						mollitia perferendis? Fugit porro totam nulla veniam deserunt,
						dolorem nobis ullam cupiditate temporibus, hic facilis perspiciatis
						impedit. Illum non vitae dolorum. Ducimus, nam aut?
					</p>
					<div className="w-full grid-cols-3 gap-3 p-3 mt-8">
						<Carousel delay={4500} images={hero} />
					</div>
				</div>
			</section>
		</article>
	);
}
