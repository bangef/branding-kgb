function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const classByType = ({ type }) => {
	if (type === "primary") {
		return "bg-blue-cstm-3 hover:bg-blue-cstm-1 text-black-cstm-1 px-4 py-2 mt-4 text-xs font-bold rounded font-poopins";
	} else if (type === "secondary") {
		return "bg-black-cstm-1 text-white hover:bg-gray-cstm-1 text-white px-4 py-2 mt-4 text-xs font-bold rounded font-poopins";
	} else {
		return "";
	}
};

export default function Button(props) {
	return (
		<button
			onClick={props.onClick}
			className={classNames(classByType(props), classNames(props.clx))}
		>
			{props.children}
		</button>
	);
}
