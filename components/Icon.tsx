export default function Icon({ href, ref, children }: { href: string; ref: (payload: HTMLAnchorElement) => void; children: React.ReactNode }) {
	return (
		<a className="absolute -top-24 left-0 rounded-2xl outline-offset-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-foreground dark:focus-visible:outline-background" href={href} target="_blank" ref={ref}>
			{children}
		</a>
	);
}
