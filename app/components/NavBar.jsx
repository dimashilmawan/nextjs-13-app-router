import Link from "next/link";

const NavBar = ({ children }) => {
	return (
		<header className="flex h-16 items-center justify-between bg-gray-950/60 px-6 backdrop-blur-md">
			<Link href="/">
				<h2 className="text-2xl font-bold">Next 13</h2>
			</Link>
			<nav className="">
				<ul className="flex justify-center gap-4">
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/profile">Profile</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default NavBar;
