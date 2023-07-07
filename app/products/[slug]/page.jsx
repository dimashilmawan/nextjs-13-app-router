// export function generateStaticParams() {
// 	return [{ slug: "product-1" }, { slug: "product-2" }, { slug: "product-3" }];
// }
const Page = async ({ params }) => {
	const res = await fetch("https://dummyjson.com/products/1");
	const data = await res.json();

	return (
		<div className="p-10">
			<h1 className="text-center text-6xl font-bold">
				{data.title} {params.slug}
			</h1>
		</div>
	);
};
export default Page;
