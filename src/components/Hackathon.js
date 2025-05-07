import React from "react";
import styles from "./Hackathon.module.css";

const Hackathon = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.hackaton}>
        <h2>Hackathon</h2>
        <div className={styles.content}>
          <p>
            Voor de Hackathon heb ik samen met Stijn en Christiaan een ode
            gebracht aan de vrouwen in de techwereld. We kregen een API met
            daarin data over deze vrouwen, en na een beetje research hebben we
            ze ingedeeld in verschillende tijdperken: Way Back, Web Pioneer, Web
            Maturity, Web Weirdness en Web Talent. We dachten eigenlijk vrij
            snel aan The Pillars of Tech. Hierbij kwam Stijn met het idee om
            letterlijk een pilaar in 3D na te maken, en zo is ons design
            ontstaan. We hebben een interactieve 3D-pilaar gemaakt, waarbij elk
            stuk van de pilaar een tijdperk voorstelt. Tijdens de Hackathon heb
            ik geleerd hoe het is om heel snel te schakelen tussen de brainstorm
            fase en het zowaar ontwikkelen van een product dit zorgde ervoor dat
            we snel moesten handelen en geen tijd hadden om te treuzelen dit
            vond ik wel een fijne omgeving om in te werken. Iedereen pakten zijn
            eigen taken op en probeerde deze zo snel mogelijk af te maken om tot
            een mooi eindresultaat te komen en dat is ook gelukt. Ik heb veel
            geleerd over nieuwe 3d technieken in css met perspective en
            preserve-3d.
          </p>
          <a href="https://github.com/Liamvanbart1/Team10">
            Link naar de repo
            <svg
              className={styles.svg}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.inzichten}>
        <h2>Hoe verder?</h2>
        <div className={styles.content}>
          <p>
            De tijd is voorbijgevlogen. Ik vond de vakken erg leerzaam, maar de
            lange dagen op school maakten het soms wel zwaar. Ik heb uitgekeken
            naar de meesterproef, omdat ik nu alle nieuwe kennis en technieken
            kan inzetten gebruiken/toepassen. Ik ben zeker trots op hoe ver ik
            ben gekomen en wat ik heb geleerd. Ik moet alleen tijdens de
            meesterproef nog iets meer letten op het optijd beginnen met de
            werkzaamheden maar ik denk omdat we in teamverband werken dat dit
            beter gaat aangezien je elkaar verantwoordelijk houd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
