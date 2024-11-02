import React from "react";
const Footer = React.forwardRef<HTMLElement, object>((_, ref) => {
  return (
    <footer ref={ref} className="footer smooth-scrolling ">
      <div className="container footer-flex">
        <p>Pangsui Tech&copy; {new Date().getFullYear()}</p>
        <div>
          <h4>Contact Me</h4>
          <ul>
            <li>(+33)7 58 45 34 54</li>
            <li>upangsui@yahoo.com</li>
            <li>108 Avenue Pierre Brossolette</li>
          </ul>
        </div>
        <div className="footer-icons">
          <h4>Follow Me</h4>

          <a
            href="https://www.linkedin.com/in/linge-pangsui-usifu-858242135/"
            target="_blanc"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/pangsui.linge" target="_blanc">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" target="_blanc">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" target="_blanc">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" target="_blanc">
            <i className="fab fa-tumblr fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
