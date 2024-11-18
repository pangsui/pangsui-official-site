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
        Engineering, bringing strong problem-solving and critical thinking
        skills honed through rigorous academic research. With a comprehensive
        foundation in web development from Wild Code School and Udemy, I am
        proficient in HTML, CSS, JavaScript, TypeScript, Node.js, Express, and
        React. I have developed multiple personal projects that showcase my
        ability to create dynamic, responsive web applications. Experienced with
        Agile methodologies and Scrum practices, I thrive in iterative,
        collaborative environments and am dedicated to delivering high-quality
        solutions that align with team objectives and project timelines.
        Passionate about backend technologies and exploring data science
        opportunities, I am eager to contribute to a collaborative team and
        expand my expertise in the tech industry
      </p>
    </section>
  );
});

export default Home;
