import Link from "next/link";

const links = [
	{ url: "/products/product-1", title: "Product 1" },
	{ url: "/products/product-2", title: "Product 2" },
	{ url: "/products/product-3", title: "Product 3" },
	{ url: "/products/product-4", title: "Product 4" },
	{ url: "/products/product-5", title: "Product 5" },
];

const Page = () => {
	return (
		<div className="p-10 ">
			<ul className="space-y-2 ">
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Page;
