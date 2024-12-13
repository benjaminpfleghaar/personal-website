"use client";

import Image from "next/image";
import Matter from "matter-js";
import styles from "./engine.module.css";
import { useEffect, useRef } from "react";

const links = [
	{ label: "CV", href: "#" },
	{ label: "Mail", href: "#" },
	{ label: "GitHub", href: "#" },
	{ label: "LinkedIn", href: "#" },
];

const apps = [
	{ label: "Talea", href: "https://github.com/benjaminpfleghaar/talea" },
	{ label: "Mintly", href: "https://github.com/benjaminpfleghaar/mintly" },
	{ label: "Flexikon", href: "https://github.com/benjaminpfleghaar/flexikon" },
];

export default function Engine() {
	const icons = useRef<(HTMLAnchorElement | null)[]>([]);
	const pills = useRef<(HTMLAnchorElement | null)[]>([]);
	const runner = useRef<Matter.Runner>(Matter.Runner.create());
	const engine = useRef<Matter.Engine>(Matter.Engine.create());

	function initializeEngine() {
		if (!engine.current || !runner.current) return;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		Matter.Composite.add(engine.current.world, [
			Matter.Bodies.rectangle(windowWidth / 2, windowHeight + 25, windowWidth, 50, { isStatic: true }), // ground
			Matter.Bodies.rectangle(-25, windowHeight / 2, 50, windowHeight * 2, { isStatic: true }), // left
			Matter.Bodies.rectangle(windowWidth + 25, windowHeight / 2, 50, windowHeight * 2, { isStatic: true }), // right
		]);

		pills.current.forEach((pill) => {
			if (!pill) return;

			const x = windowWidth * 0.75 + Math.random() * windowWidth * 0.25;
			const y = -240;
			const width = pill.offsetWidth;
			const height = pill.offsetHeight;
			const angle = Math.random() * 2 * Math.PI;
			const body = Matter.Bodies.rectangle(x, y, width, height, {
				frictionAir: 0.03 * Math.random(),
				friction: 0.5,
				chamfer: { radius: 32 },
				restitution: 0.5,
				angle: angle,
			});

			Matter.Events.on(engine.current, "afterUpdate", () => {
				pill.style.left = `${body.position.x - width / 2}px`;
				pill.style.top = `${body.position.y - height / 2}px`;
				pill.style.transform = `rotate(${body.angle}rad)`;
			});
			Matter.Composite.add(engine.current.world, body);
		});

		icons.current.forEach((icon) => {
			if (!icon) return;

			const x = windowWidth * 0.75 + Math.random() * windowWidth * 0.25;
			const y = -240;
			const width = 96;
			const height = 96;
			const angle = Math.random() * 2 * Math.PI;
			const body = Matter.Bodies.rectangle(x, y, width, height, {
				frictionAir: 0.03 * Math.random(),
				friction: 0.5,
				chamfer: { radius: 16 },
				restitution: 0.5,
				angle: angle,
			});

			Matter.Events.on(engine.current, "afterUpdate", () => {
				icon.style.left = `${body.position.x - width / 2}px`;
				icon.style.top = `${body.position.y - height / 2}px`;
				icon.style.transform = `rotate(${body.angle}rad)`;
			});
			Matter.Composite.add(engine.current.world, body);
		});

		Matter.Runner.run(runner.current, engine.current);
	}

	function clearEngine() {
		if (!engine.current || !runner.current) return;

		Matter.Runner.stop(runner.current);
		Matter.Engine.clear(engine.current);
		Matter.Events.off(engine.current, "afterUpdate");
		Matter.Composite.clear(engine.current.world, false);

		engine.current = Matter.Engine.create();
		runner.current = Matter.Runner.create();
	}

	useEffect(() => {
		initializeEngine();

		return () => {
			clearEngine();
		};
	}, []);

	useEffect(() => {
		function handleResize() {
			clearEngine();
			initializeEngine();
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section>
			<nav aria-label="Social Links">
				{links.map((link, index) => (
					<a
						key={link.label}
						className={styles.link}
						href={link.href}
						target="_blank"
						ref={(element) => {
							pills.current[index] = element;
						}}>
						{link.label}
					</a>
				))}
			</nav>
			<nav aria-label="Featured Apps">
				{apps.map((app, index) => (
					<a
						key={app.label}
						className={styles.app}
						href={app.href}
						target="_blank"
						ref={(element) => {
							icons.current[index] = element;
						}}>
						<Image src={`/images/${app.label.toLowerCase()}.svg`} width={96} height={96} alt="" />
						<span className={styles.label}>{`Open ${app.label} on GitHub`}</span>
					</a>
				))}
			</nav>
		</section>
	);
}
