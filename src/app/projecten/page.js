import React from "react";
import ProjectCard from "@/components/Projectcard";

const page = () => {
  return (
    <div>
      <ProjectCard
        name="CSS"
        link="https://github.com/Liamvanbart1/CSS"
        reflectie="CSS was een erg leuke uitdaging om creatief te denken ik ben tijdens dit vak eindelijk afgeweken van mijn standaard flexbox manieren en heb Grid geleerd. Het was erg leuk om en uitdagend om zonder classes of id's toch elke keer de goede selector te vinden voor een element.
        Na de uitleg van Sanne over Sinus en Cosinus kreeg ik een idee waar ik normaal nooit op zou komen namelijk vrijwillig wiskunde gebruiken. Het eindresultaat ben ik erg tevreden mee het planeten stelses kan ik trost laten zien"
      />
      <ProjectCard
        name="Browser Tech"
        link="https://github.com/Liamvanbart1/BT"
        reflectie="Ik vond Browser Tech erg interessant omdat ik nu pas inzicht kreeg ik hoe krachtig HTML alleen al kan zijn. Dit in combinatie met de volledige vrijheid om te spelen met CSS en Javascript maakte dit een leuk vak. Ik heb nieuwe HTML elementen geleerd en ook hoe je creatief gebruik kan maken van bijvoorbeeld de :has selector in CSS. Ik werkte volgens the Rule of Least Power dus pas naar een moeilijkere taal gaan als het echt niet anders kon."
      />
      <ProjectCard
        name="API"
        link="https://github.com/Liamvanbart1/API-2425"
        reflectie="API was een vak wat mij vanaf dag 1 erg aansprak omdat dit in mijn ogen echt een hele functionele website is. Ik had het idee om 2 api's te combineren namelijk de API van OpenAI en de Football API. Ik gebruikte de data uit de football API om random vragen te generen via de OpenAI api dit was in mijn ogen een vrij creatief concept. Na feedback van Declan heb ik dit gebruikt om een quiz te maken en ik ben erg tevreden met het eindresultaat. Tijdens API heb ik ook meer kunnen leren over back-end wat een van mijn leerdoelen was daarnaast heb ik kennis gemaakt met liquidJS waar ik ook erg blij mee ben want dit kan in de juiste situatie goed van pas komen."
      />
      <ProjectCard
        name="Hackathon"
        link="https://github.com/Liamvanbart1/Team10"
        reflectie="De reflectie van de Hackathon staat op de Homepagina"
      />
      <ProjectCard
        name="HCD"
        link="https://github.com/Liamvanbart1/HCD_WEB"
        reflectie="HCD vond ik interessant omdat ik nog nooit had gesproken met iemand die het web zo anders ervaart als Darice. Tijdens het kennismakingsgesprek en de feedback gesprekken gedurende dit vak leerde ik pas wat voor invloed een beperking allemaal kan hebben op hoe je het leven ervaart maar in dit geval dus een film. Een moment wat ik niet kan vergeten is dat ik vroeg of het fijn zou zijn om de closed caption te plaatsen aan de kant waar het geluid te horen was. Darice keek mij vervolgens verbaasd aan zij wist niet dat wij door de tv konden horen vanaf welke kant het geluid kwam. Dit vak zorgde ervoor dat ik me beter kan inbeelden hoe een gebruiker en dus sommige met beperkingen jouw product ervaren."
      />
      <ProjectCard
        name="Meesterproef"
        link="https://github.com/Liamvanbart1/Framez"
        reflectie="De reflectie van de meesterproef staat op de Homepagina"
      />
    </div>
  );
};

export default page;
