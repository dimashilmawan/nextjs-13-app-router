"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = ({ children }) => {
	const pathname = usePathname();
	return (
		<header className="flex h-16 items-center justify-between bg-gray-950/60 px-6 backdrop-blur-md">
			<Link
				href="/"
				className={`${pathname === "/" ? "font-bold text-gray-50" : ""}`}
			>
				<h2 className="text-2xl">Next 13</h2>
			</Link>
			<nav className="">
				<ul className="flex justify-center gap-4">
					<li>
						<Link
							href="/dashboard"
							className={`${
								pathname.startsWith("/dashboard")
									? "font-bold text-gray-50"
									: ""
							}`}
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							href="/products"
							className={`${
								pathname.startsWith("/products") ? "font-bold text-gray-50" : ""
							}`}
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							href="/profile"
							className={`${
								pathname.startsWith("/profile") ? "font-bold text-gray-50" : ""
							}`}
						>
							Profile
						</Link>
					</li>
					<li>
						<Link
							href="/settings"
							className={`${
								pathname.startsWith("/settings") ? "font-bold text-gray-50" : ""
							}`}
						>
							Settings
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default NavBar;
