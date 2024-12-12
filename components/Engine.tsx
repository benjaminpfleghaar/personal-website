"use client";

import Image from "next/image";
import Matter from "matter-js";
import styles from "./engine.module.css";
import { useEffect, useRef } from "react";

export default function Engine() {
	const apps = useRef<(HTMLAnchorElement | null)[]>([]);
	const links = useRef<(HTMLAnchorElement | null)[]>([]);
	const runner = useRef<Matter.Runner>(Matter.Runner.create());
	const engine = useRef<Matter.Engine>(Matter.Engine.create());

	function initializeEngine() {
		if (!engine.current || !runner.current) return;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		Matter.Composite.add(engine.current.world, [Matter.Bodies.rectangle(windowWidth / 2, windowHeight + 25, windowWidth, 50, { isStatic: true }), Matter.Bodies.rectangle(-25, windowHeight / 2, 50, windowHeight, { isStatic: true }), Matter.Bodies.rectangle(windowWidth + 25, windowHeight / 2, 50, windowHeight, { isStatic: true })]);

		links.current.forEach((link) => {
			if (!link) return;

			const x = windowWidth * 0.75 + Math.random() * windowWidth * 0.25;
			const y = -240;
			const width = link.offsetWidth;
			const height = link.offsetHeight;
			const angle = Math.random() * 2 * Math.PI;
			const body = Matter.Bodies.rectangle(x, y, width, height, {
				frictionAir: 0.03 * Math.random(),
				friction: 0.5,
				chamfer: { radius: 32 },
				restitution: 0.3,
				angle: angle,
			});

			Matter.Events.on(engine.current, "afterUpdate", () => {
				link.style.left = `${body.position.x - width / 2}px`;
				link.style.top = `${body.position.y - height / 2}px`;
				link.style.transform = `rotate(${body.angle}rad)`;
			});
			Matter.Composite.add(engine.current.world, body);
		});

		apps.current.forEach((app) => {
			if (!app) return;

			const x = windowWidth * 0.75 + Math.random() * windowWidth * 0.25;
			const y = -240;
			const width = 96;
			const height = 96;
			const angle = Math.random() * 2 * Math.PI;
			const body = Matter.Bodies.rectangle(x, y, width, height, {
				frictionAir: 0.03 * Math.random(),
				friction: 0.5,
				chamfer: { radius: 16 },
				restitution: 0.3,
				angle: angle,
			});

			Matter.Events.on(engine.current, "afterUpdate", () => {
				app.style.left = `${body.position.x - width / 2}px`;
				app.style.top = `${body.position.y - height / 2}px`;
				app.style.transform = `rotate(${body.angle}rad)`;
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
		<>
			<a
				className={styles.pill}
				href="#"
				ref={(element) => {
					links.current[0] = element;
				}}>
				CV
			</a>
			<a
				className={styles.pill}
				href="#"
				ref={(element) => {
					links.current[1] = element;
				}}>
				Mail
			</a>
			<a
				className={styles.pill}
				href="#"
				ref={(element) => {
					links.current[2] = element;
				}}>
				GitHub
			</a>
			<a
				className={styles.pill}
				href="#"
				ref={(element) => {
					links.current[3] = element;
				}}>
				LinkedIn
			</a>
			<a
				className={styles.app}
				href="#"
				ref={(element) => {
					apps.current[0] = element;
				}}>
				<Image src="/images/mintly.svg" width={96} height={96} alt="Mintly" />
			</a>
			<a
				className={styles.app}
				href="#"
				ref={(element) => {
					apps.current[1] = element;
				}}>
				<Image src="/images/flexikon.svg" width={96} height={96} alt="Flexikon" />
			</a>
			<a
				className={styles.app}
				href="#"
				ref={(element) => {
					apps.current[2] = element;
				}}>
				<Image src="/images/talea.svg" width={96} height={96} alt="Talea" />
			</a>
		</>
	);
}
