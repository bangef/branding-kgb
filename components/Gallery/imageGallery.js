export default function ImageGallery({ ...props }) {
	return (
		<div className="h-15 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] relative">
			<Image {...props} layout="responsive" />
		</div>
	);
}
