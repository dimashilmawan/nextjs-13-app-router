import Link from "next/link";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex flex-1 ">
			<aside className="flex-[1] bg-gray-800 p-6">
				<ul className="space-y-4">
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/dashboard/user">User</Link>
					</li>
				</ul>
			</aside>
			<div className="flex-[6]">{children}</div>
		</div>
	);
};
export default DashboardLayout;
