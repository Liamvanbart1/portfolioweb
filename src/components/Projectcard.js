import React from "react";
import styles from "./Projectcard.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, link, reflectie }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.project}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.content}
        >
          Dit is een linkje naar de repo van <br />
          {name}
          <br />
          <FaExternalLinkAlt className={styles.icon} />
        </a>
        {reflectie && (
          <p className={styles.reflectie}>
            <strong>Reflectie:</strong> {reflectie}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
