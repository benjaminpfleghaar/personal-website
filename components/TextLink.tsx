import Link from "next/link";

export default function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<>
			<Link href={href} className="rounded-sm text-darkgray outline-offset-2 hover:text-foreground focus:outline-none focus-visible:outline-2 focus-visible:outline-foreground dark:text-lightgray dark:hover:text-background dark:focus-visible:outline-background">
				{children}
			</Link>
		</>
	);
}
