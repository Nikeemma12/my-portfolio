import Card from "./Card";
import { FaHtml5, FaReact, FaCss3, FaJs } from "react-icons/fa";
function Skills() {
  return (
    <div className="skills">
      <h1>Job Skills</h1>
      <div className="cards-cont">
        <Card
          Icon={FaHtml5}
          name="HTML"
          color="hsl(7 100% 66%)"
          about="I have a solid understanding of HTML structure and semantics.I can build well-structured, accessible, and responsive web pages.I’m still improving but confident in using HTML for real-world projects."
        />
        <Card
          Icon={FaReact}
          name="React"
          color="hsl(197 100% 44%)"
          about="I have a solid understanding of React fundamentals, including components, props, and state management.I can build responsive and interactive UIs using React hooks such as useState and useEffect.I’m continuously improving by working on real-world projects to strengthen my skills in React and frontend development"
        />
        <Card
          Icon={FaCss3}
          name="Css"
          color="hsl(217 100% 70%"
          about="I have a strong grasp of CSS fundamentals, including selectors, box model, and positioning.I can design responsive layouts using Flexbox, Grid, and media queries.I enjoy experimenting with animations, transitions, and modern CSS features to create visually appealing interfaces."
        />
        <Card
          Icon={FaJs}
          name="Javascript"
          color="hsl(53, 93%, 32%)"
          about="I am comfortable with ES6+ features like arrow functions, template literals, and modules.I can fetch data from APIs and handle asynchronous operations with promises and async/await.I apply JavaScript to build dynamic user interfaces and improve website functionality."
        />
      </div>
    </div>
  );
}
export default Skills;
