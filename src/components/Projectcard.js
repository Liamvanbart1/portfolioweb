import React from "react";
import styles from "./Projectcard.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, link }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.project}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.content}
        >
          Dit is een linkje naar de repo van <br></br>
          {name}
          <br></br>
          <FaExternalLinkAlt className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
