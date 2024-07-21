"use client";

import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);
    const path = usePathname();
    
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>

				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 text-base">
						<Link
							href={"/projects"}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>

						<Link
							href={"/about"}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							About Me
						</Link>


						<Link
							href={"/contact"}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact Me
						</Link>
					</div>

					<div className="flex items-center gap-8">
						{path !== '/' ? (
							<Link
								href="/"
								className="duration-200 text-zinc-300 hover:text-zinc-100 flex items-center" 
							>
								<ArrowLeftIcon className="w-6 h-6" />
							</Link>
						) : (
							// Placeholder to maintain space
							<div className="w-6 h-6"></div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};