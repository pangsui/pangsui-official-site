import React from "react";

const Home = React.forwardRef<HTMLElement, object>(() => {
	return (
		<section className="home" id="home">
			<h1>
				Welcome to <span>Dr. Eng. Pangsui Usifu Linge</span> Official Site
			</h1>
			<h2>Professional Summary</h2>
			<p>
				I am a solution-oriented Front-End Developer with a PhD in Electrical
				Engineering, skilled in HTML, CSS, JavaScript, TypeScript, Node.js,
				Express, and React. With a solid foundation from Wild Code School and
				Udemy, I have developed dynamic, responsive web applications and thrive
				in Agile, collaborative environments. Passionate about backend
				technologies and data science, I aim to contribute to a team and grow my
				expertise in the tech industry
			</p>
		</section>
	);
});

export default Home;
