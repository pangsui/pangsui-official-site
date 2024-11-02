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
        Engineering and a strong foundation in web development from Wild Code
        School and the Udemy online platform. Proficient in HTML, CSS,
        JavaScript, TypeScript, and React, I have completed multiple personal
        projects that showcase my skills in building dynamic, responsive web
        applications. Experienced in Agile methodologies and Scrum practices, I
        am adept at working in iterative, collaborative environments to deliver
        high-quality solutions that align with team goals and project timelines.
        Passionate about backend development and exploring opportunities in
        Web3, I am eager to contribute to a collaborative team and continue
        growing my expertise in the tech industry.
      </p>
    </section>
  );
});

export default Home;
