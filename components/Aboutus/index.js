import dataConstant from "../../constant/data";
import Button from "../Button";
import Carousel from "../Hero/Carousel";
const { hero } = dataConstant;

export default function index(props) {
	const { directTo, children } = props;

	return (
		<article
			className="bg-blue-cstm-1"
			style={{
				backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1084%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(208%2c 237%2c 245%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c623.279C116.713%2c623.592%2c220.253%2c558.599%2c318.229%2c495.175C415.926%2c431.932%2c520.414%2c365.508%2c564.554%2c257.823C608.12%2c151.537%2c594.245%2c27.898%2c553.841%2c-79.63C517.636%2c-175.981%2c430.358%2c-238.031%2c352.805%2c-305.707C285.361%2c-364.562%2c218.732%2c-427.702%2c131.578%2c-448.115C46.801%2c-467.971%2c-38.223%2c-439.101%2c-122.448%2c-417.02C-209.171%2c-394.284%2c-296.022%2c-373.002%2c-366.466%2c-317.545C-447.101%2c-254.065%2c-538.084%2c-181.036%2c-551.447%2c-79.286C-564.796%2c22.359%2c-473.031%2c103.414%2c-434.214%2c198.299C-393.307%2c298.291%2c-394.342%2c417.901%2c-317.133%2c493.469C-233.814%2c575.016%2c-116.585%2c622.966%2c0%2c623.279' fill='%23bae4f0'%3e%3c/path%3e%3cpath d='M1440 975.279C1521.903 966.869 1606.652 971.476 1677.702 929.8720000000001 1750.3020000000001 887.36 1800.032 816.813 1838.4479999999999 741.965 1878.2559999999999 664.405 1901.463 580.81 1901.608 493.631 1901.771 396.156 1914.321 276.25 1839.329 213.98000000000002 1762.483 150.17000000000002 1646.012 200.777 1546.153 198.47699999999998 1474.317 196.822 1406.795 199.74 1334.988 202.363 1235.913 205.98200000000003 1125.396 160.293 1043.9479999999999 216.81900000000002 961.79 273.839 917.881 386.452 926.134 486.117 934.125 582.626 1043.215 634.783 1085.759 721.7760000000001 1126.6019999999999 805.292 1093.107 928.033 1168.71 982.136 1243.794 1035.868 1348.154 984.71 1440 975.279' fill='%23e6f6fa'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1084'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			ref={directTo}
		>
			<section className="grid grid-cols-1 px-4 py-16 mx-auto md:grid-cols-3 xl:container">
				<div className="xl:mr-10 lg:mr-8 md:mr-4 text-black-cstm-1">
					<h1 className="text-4xl font-bold font-poopins">About Us</h1>
					<p className="mt-4 antialiased font-normal tracking-wider text-start sm:text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis
						aperiam nihil, esse alias similique voluptatibus expedita eos
						mollitia perferendis? Fugit porro totam nulla veniam deserunt,
						dolorem nobis ullam cupiditate temporibus, hic facilis perspiciatis
						impedit. Illum non vitae dolorum. Ducimus, nam aut?
					</p>
					{children}
				</div>
				<div className="mt-10 md:mt-0 h-96 md:h-auto md:col-span-2">
					<Carousel delay={10000} images={hero} />
				</div>
			</section>
		</article>
	);
}
