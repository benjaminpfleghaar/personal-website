export default function Pill({ href, ref, children }: { href: string; ref: (payload: HTMLAnchorElement) => void; children: React.ReactNode }) {
	return (
		<a className="absolute -top-16 left-0 flex h-16 select-none items-center rounded-4xl bg-foreground px-6 text-4xl text-background outline-offset-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-foreground dark:bg-background dark:text-foreground dark:focus-visible:outline-background" href={href} target="_blank" ref={ref}>
			{children}
		</a>
	);
}
