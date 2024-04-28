"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const routes = [
		{ name: "About Me", route: "/about-me" },
		{ name: "Contact", route: "/contact" },
		{ name: "Essays", route: "/essays" },
		{ name: "FAQ", route: "/FAQ" },
		{ name: "Projects", route: "/projects" },
	];

	return (
		<>
			<div className="flex justify-between w-screen">
				{routes.map((route) => {
					const isActiveLink = pathname.startsWith(route.route);

					return (
						<Link
							className={isActiveLink ? "text-blue-500" : ""}
							href={route.route}
							key={route.name}
						>
							{route.name}
						</Link>
					);
				})}
			</div>
		</>
	);
}
