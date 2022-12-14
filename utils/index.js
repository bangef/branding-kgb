const scrollToSection = (elementRef) => {
	return window.scrollTo({
		top: elementRef.current.offsetTop - 64,
		behavior: "smooth",
	});
};

export default scrollToSection;
