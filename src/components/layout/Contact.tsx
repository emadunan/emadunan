import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p className={styles.intro}>
        I’d love to hear from you — whether it’s a project idea, collaboration, or just a friendly hello.
      </p>

      <ul className={styles.infoList}>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:emadunan@gmail.com">emadunan@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/emadunan" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/emadunan
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/emadunan" target="_blank" rel="noopener noreferrer">
            github.com/emadunan
          </a>
        </li>
        <li>
          <strong>Portfolio:</strong>{" "}
          <a href="https://emadunan.github.io" target="_blank" rel="noopener noreferrer">
            emadunan.github.io
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/201003379933" target="_blank" rel="noopener noreferrer">
            Message me on WhatsApp
          </a>
        </li>
        <li>
          <strong>Facebook:</strong>{" "}
          <a href="https://www.facebook.com/emad.younan.507578" target="_blank" rel="noopener noreferrer">
            Meet me in Facebook
          </a>
        </li>
        <li>
          <strong>YouTube:</strong>{" "}
          <a href="https://www.youtube.com/@emadunan" target="_blank" rel="noopener noreferrer">
            youtube.com/@emadunan
          </a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+201003379933">+20 100 337 9933</a>
        </li>
        <li>
          <strong>Location:</strong>{" "}
          Egypt, Cairo
        </li>
      </ul>
    </section>
  );
};

export default Contact;
