import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaReact,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="Contact">
        <h2>Contact me</h2>
        <ul>
          <li>
            <a>
              Github
              <FaGithub style={{ color: "white", fontSize: "1.8em" }} />
            </a>
          </li>
          <li>
            <a>
              Linkedin
              <FaLinkedin
                style={{ color: "var(--primary)", fontSize: "1.8em" }}
              />
            </a>
          </li>
          <li>
            <a>
              Instagram
              <FaInstagram
                style={{
                  color: "white",
                  background:
                    "linear-gradient(45deg,hsl(264, 62%, 45%),hsl(326, 70%, 55%),hsl(29, 100%, 50%),hsl(48, 100%, 50%))",
                  fontSize: "1.8em",
                  borderRadius: "5px",
                }}
              />
            </a>
          </li>
          <li>
            <a>
              Whatsapp
              <FaWhatsapp
                style={{
                  background: "green",
                  color: "white",
                  fontSize: "1.8em",
                  borderRadius: "15px",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="Projects">
        <h2>Project</h2>
        <ul>
          <li>
            <a>To do app</a>
          </li>
          <li>
            <a>X/O game</a>
          </li>
          <li>
            <a>Quiz app</a>
          </li>
          <li>
            <a>RPS game</a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Nzube Portfolio | Designed & Built
          with using React
          <FaReact
            style={{
              color: "hsl(197 100% 44%)",
              fontSize: "1.8em",
            }}
          />
          | Dreaming big, coding bigger
        </p>
      </div>
      <div className="Subsribe">
        <h2>Subscribe to receive updates</h2>
        <input type="text" placeholder="Enter Email" />
        <button className="subsribebtn">Subscribe</button>
      </div>
    </div>
  );
}
export default Footer;
