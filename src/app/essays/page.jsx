import Link from "next/link";

const essays = ["1", "2", "3", "4", "5"];

export default function Page() {
	return (
		<>
			<div>essays</div>
			<ul>
				{essays.map((essay) => (
					<Link href={`/essays/${essay}`} key={essay}>
						{essay}
					</Link>
				))}
			</ul>
		</>
	);
}
