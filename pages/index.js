import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Gallery from "../components/Gallery";
import Client from "../components/Client";
import CompanyProfile from "../components/CompanyProfile";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ToTop from "../components/ToTop.js";
import Head from "next/head";
import { useRef, useState } from "react";
import Button from "../components/Button.js";
import ModalOne from "../components/ModalOne.js";
import ModalTwo from "../components/ModalTwo.js";

export default function index() {
	const home = useRef(null);
	const aboutus = useRef(null);
	const clients = useRef(null);
	const services = useRef(null);
	const gallery = useRef(null);
	const companyProfile = useRef(null);
	const allDirectTo = [
		home,
		aboutus,
		clients,
		services,
		gallery,
		companyProfile,
	];
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);

	return (
		<>
			<Head>
				<title>PT. Kurnia Gemilang Bersama</title>
				<meta name="title" content="PT. KGB - Uniform" />
				<meta
					name="description"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu fermentum diam. Fusce odio sapien, euismod et congue sed, iaculis sit  et congue seda."
				/>
				<meta name="keywords" content="lorem1, lorem2, lorem3, lorem4" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://metatags.io/" />
				<meta property="og:title" content="PT. KGB" />
				<meta
					property="og:description"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis aperiam nihil, esse alias similique voluptatibus expedita eos mollitia perferendis? Fugit porro totam nulla veniam deserunt, dolorem nobis ullam cupiditate temporibus, hic facilis perspiciatis impedit. Illum non vitae dolorum. Ducimus, nam aut?"
				/>
				<meta
					property="og:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
				/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://metatags.io/" />
				<meta property="twitter:title" content="PT. KGB" />
				<meta
					property="twitter:description"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsam? Tenetur laudantium tempora sunt eos! Vero officiis veritatis aperiam nihil, esse alias similique voluptatibus expedita eos mollitia perferendis? Fugit porro totam nulla veniam deserunt, dolorem nobis ullam cupiditate temporibus, hic facilis perspiciatis impedit. Illum non vitae dolorum. Ducimus, nam aut?"
				/>
				<meta
					property="twitter:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar directs={allDirectTo} />
			<Hero directTo={home} />
			<Aboutus directTo={aboutus}>
				<Button type="secondary" onClick={() => setIsOpen1(true)}>
					Read more
				</Button>
			</Aboutus>
			<Client directTo={clients}>
				<Button type="primary" onClick={() => setIsOpen2(true)}>
					Read more
				</Button>
			</Client>
			<Services directTo={services} />
			<Gallery directTo={gallery} />
			<CompanyProfile directTo={companyProfile} />
			<ModalOne
				isOpen1={isOpen1}
				setIsOpen1={setIsOpen1}
				title="Services"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim inventore ab eos similique? Facilis commodi quasi distinctio eum voluptate."
			/>
			<ModalTwo
				isOpen2={isOpen2}
				setIsOpen2={setIsOpen2}
				title="Clients"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim inventore ab eos similique? Facilis commodi quasi distinctio eum voluptate."
			/>
			<ToTop />
			<Footer directs={allDirectTo} />
		</>
	);
}
