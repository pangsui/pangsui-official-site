import React from "react";
import { useState } from "react";
import portfolioList from "../data/portfolio.json";
interface PortFolioProps {
	title: string;
	description: string;
	gitHubLink: string;
	url: string;
	num?: number;
	curOpen?: number;
	setCurOpen?: React.Dispatch<React.SetStateAction<number>>;
}
interface DataProps {
	data: PortFolioProps[];
}

const PortFolio = React.forwardRef<HTMLElement, object>((_, ref) => {
	return (
		<section ref={ref} className="portfolio smooth-scrolling " id="portfolio">
			<h2>Portfolio</h2>
			<p className="paragraph">List of Completed Projects</p>
			<PortFolioItem data={portfolioList} />
		</section>
	);
});
function PortFolioItem({ data }: DataProps) {
	const [curOpen, setCurOpen] = useState(-1); //initially none is open
	return (
		<div className="portfolio-grid">
			{data.map((portfolio, index) => (
				<Item
					title={portfolio.title}
					description={portfolio.description}
					gitHubLink={portfolio.gitHubLink}
					url={portfolio.url}
					key={portfolio.title}
					num={index}
					curOpen={curOpen}
					setCurOpen={setCurOpen}
				/>
			))}
		</div>
	);
}
function Item({
	title,
	description,
	gitHubLink,
	url,
	num,
	curOpen,
	setCurOpen,
}: PortFolioProps) {
	// const [isOpen, setIsOpen] = useState(false);
	const isOpen = num === curOpen;
	function handlePortfolio() {
		// setIsOpen((isOpen) => !isOpen);
		if (setCurOpen) {
			setCurOpen(isOpen ? -1 : (num ?? 0));
		}
	}
	return (
		<div
			className={`portfolio-item ${isOpen ? " open" : ""}`}
			onClick={handlePortfolio}
			onKeyUp={(e) => {
				if (e.key === "Enter") handlePortfolio();
			}}
		>
			<div className="title-sign">
				<span className="title">{title}</span>
				<span className="plus-minus">{isOpen ? "-" : "+"}</span>
			</div>

			{isOpen && (
				<div className={`item-content ${isOpen ? "" : "hidden"}`}>
					<p>{description}</p>
					<a className="git" href={gitHubLink} target="_blank" rel="noreferrer">
						Source Code
					</a>
					<a className="url" href={url} target="_blank" rel="noreferrer">
						Website
					</a>
				</div>
			)}
		</div>
	);
}

export default PortFolio;
