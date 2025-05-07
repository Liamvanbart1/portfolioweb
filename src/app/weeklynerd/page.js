import React from "react";

import BlogPost from "@/components/Blogpost";

const page = () => {
  const content1 = `
Polypane browser
- Alles in javascript

The rule of least power
- Imperatief (js) en declaratief (html en css)

Custom switches
• Checkboxes

<label>
  <input type="checkbox">
</label>

Hierbij kan je klikken op het gehele label om de checkbox te activeren.

appearance: none;

Input:focus-visible alleen focus als je toetsenbord gebruikt. 
Input:focus altijd als je focus hebt, dus ook met muis.

Input types met switch in safari en ladybird (geen css voor switch).

Color picker input type color.

In-page transitions:
- Scroll-behavior: smooth;

Accessibility:
@media (Prefers-reduced-motion: No-preference) {
  Html {
    Scroll-behavior: smooth;
  }
}

Scroll-margin-top zorgt ervoor dat bij een onscroll ruimte overhoudt voor bijvoorbeeld de header.

:target om te animeren op scrollen.

Accordion in html is:
<details>
  <summary>Dit zien de mensen</summary>
  <p>Dit zien ze als ze klikken</p>
</details>

Open om bijvoorbeeld de eerste open te doen:

<details open>
  <summary>Dit zien de mensen</summary>
  <p>Dit zien ze als ze klikken</p>
</details>

Pijltje bij accordion is marker:
.summary::marker [
  Content: "emoji";
]

Als je een alert gebruikt, wordt de pagina gepauzeerd, dus hier willen mensen vanaf.

<Dialog> is alleen nog niet te openen zonder javascript. Voordeel is dus wel dat de pagina niet wordt gepauzeerd.

Top layer is een laag tussen website en jouw scherm.

Dialog::backdrop: ruimte tussen modal en website, dus bijv. een solide kleur wanneer de backdrop open gaat.

@starting-style animeer iets dat nog niet op de pagina is.

The Parent Selector:
:has() werkt eigenlijk als een if selector.

Scroll driven animations.
  `;

  const content2 = `Introductie en Achtergrond
De spreker introduceert het concept van web monetization als een nieuwe manier om online content te financieren. Hij benadrukt dat het huidige model, waarbij websites gratis zijn en afhankelijk zijn van advertenties, problematisch is. Dit model stamt uit de jaren '90 en heeft geleid tot een situatie waarin kwalitatieve content moeilijk te financieren is.
Het Probleem met Gratis Content
De spreker stelt dat het gratis aanbieden van websites heeft geleid tot een afhankelijkheid van advertenties, wat niet ideaal is voor zowel contentmakers als gebruikers. Hij beargumenteert dat deze situatie heeft geleid tot een verminderde kwaliteit van online content en een onhoudbaar businessmodel voor veel websites, met name nieuwswebsites.
Web Monetization als Oplossing
Het voorgestelde web monetization systeem werkt als volgt:
• Gebruikers installeren een browser-extensie.
• Ze stellen een budget in voor hoeveel ze bereid zijn te betalen per uur of per maand voor web content.
• Websites die deelnemen aan het systeem ontvangen automatisch kleine betalingen gebaseerd op de tijd die gebruikers op hun site doorbrengen.
Technische Aspecten en Implementatie
• Het systeem maakt gebruik van een digitale portemonnee die communiceert met financiële systemen.
• Er wordt gewerkt aan integratie met grote browsers zoals Firefox en mogelijk ook met Samsung en Microsoft.
• Privacy-overwegingen worden meegenomen in het ontwerp van het systeem.
Voordelen van Web Monetization
• Contentmakers worden direct beloond voor kwaliteitsinhoud.
• Gebruikers hebben meer controle over hun uitgaven en kunnen kiezen welke sites ze willen ondersteunen.
• Het systeem kan werken zonder afhankelijkheid van advertenties.
Uitdagingen en Overwegingen
• Het overtuigen van gebruikers om te betalen voor voorheen gratis content.
• Technische uitdagingen bij de implementatie en integratie met bestaande systemen.
• Het vinden van de juiste balans tussen gebruiksgemak en privacybescherming.
Toekomstvisie
De spreker ziet web monetization als een potentiële oplossing voor de financiering van kwaliteitsvolle online content. Hij moedigt ontwikkelaars en gebruikers aan om na te denken over hoe dit systeem kan worden geïmplementeerd en verbeterd.
Conclusie
Web monetization wordt gepresenteerd als een veelbelovend alternatief voor het huidige advertentie-gedreven model van internetfinanciering. Het succes ervan zal afhangen van de adoptie door zowel contentmakers als gebruikers, en van de technische implementatie in browsers en financiële systemen. `;

  const content3 = `https://gsap.com/demos/?page=1

Cassie van GSAP gaat vertellen over de API

Animation library 

	• Tween and Timeline

Tween: enkele animatie 
Timeline: Verschillende animaties achter elkaar

GSAP is een soort gereedschapskist:
Gsap.quickSetter

[img1]

Gsap Utils:

Gsap.utils.random
 
Gsap.utils.random(-100, 100);

Gsap.utils.random(0, 500, 5);

Gsap.utils.random(["red, "blue, "green"]);


Utils.mapRange()

Utils.wrap()

Utils.pipe()



Easers voor animaties:
	- Ease visualizer 

matchMedia(): media queries in css

Let op reduced motion


Controls
Hiermee kan je de animaties vertragen versnellen pauzeren etc..

Helper functions
Oplossingen voor speciale cases 

Container animatiom:
Zijwaarts scrollen 

Motion path helper:

 `;

  const content4 = ` Hacken met e-waste 


Platform agnostisch ( zodat je zelf kunt kiezen welke ingredienten nodig hebt om je doel te bereiken) 

DIY ethos ( do it yourself ) 

70 punk movement 

Wat gebeurt er als?

Ze laat voorbeelden zien van live coding met en printer

Imagemagick sinds jaren 80 ( photoshop met code vanaf de command line ) Creative coding 

Hacklabs

Bash script 

Blackboxes

`;

  const content5 = `Declarative Design
Imperative vs. Declarative
	• Imperative: Je legt stap voor stap uit wat het programma moet doen, bijvoorbeeld met talen zoals JavaScript, C, C++, etc. Deze talen zijn algemeen inzetbaar en geven je volledige controle over het proces.
	• Declarative: Je beschrijft wat je als eindresultaat wilt en laat de taal het werk doen. Je geeft niet alle tussenstappen op, maar specificeert alleen de gewenste uitkomst. Voorbeelden hiervan zijn CSS en SQL, die specifiek ontworpen zijn voor bepaalde taken.
World Wide Web
	• HTML, CSS → Declaratieve talen: Je kunt veel fouten maken zonder dat alles direct kapot gaat.
	• JavaScript → Imperatieve taal: Je werkt met bouwblokken waarmee je stapsgewijs een resultaat bereikt.
Afhankelijk van hoe je denkt, graviteer je naar imperatieve of declaratieve talen.
"JavaScript should only do what JavaScript can do"
Dit betekent dat je zoveel mogelijk met HTML en CSS moet oplossen voordat je JavaScript gebruikt. JavaScript is krachtig, maar moet pas worden ingezet als het echt niet anders kan.
Imperatief = Volledige controle
Met imperatieve talen heb je volledige controle over het proces, maar dat betekent ook meer verantwoordelijkheid en kans op fouten.
Declaratief in CSS
CSS kan zowel declaratief als (deels) imperatief worden gebruikt.
Voorbeelden:
	• calc() en clamp() kunnen worden gebruikt om typografie flexibel te schalen.
	• Tools zoals Utopia.fyi helpen bij schaalbare ontwerpen zonder expliciete tussenstappen.
Imperative vs. Declarative Management
Ook in managementstijlen zie je dit verschil:
	• Imperatief management → Veel regels en controle.
	• Declaratief management → Meer vrijheid, maar duidelijke doelen.
Thinking about Thinking
Het begrijpen van deze concepten helpt je niet alleen bij programmeren, maar ook bij hoe je problemen oplost en beslissingen neemt. `;

  const content6 = `Mede oprichter salonhub
-kapsalons / reserveringssystemen

Project Fugu 
Bestaat uit allemaal api's 

Een kassa met webtechnologie 

Bonnenprinter 
	• WebUSB 
Let device = await navigator.usb.requestDevuce
	• Usb device enumeration
	• Elke interface in een usb apparaat heeft een endpoint
	• Je claimt de interface dit betekent dat alleenn jij de printer op dat moment kan gebruiken
	• Door project Fugu kunnen wij praten met bonnenprinters maar we moeten wel eerst hun taal leren
	• Ascii is de taal van printers 
	• Unicode internationalisatie 
	• Cp858 is europees
CodepageEncoder is zijn eigen versie 

Atkinson algorithme van Bill Atkinson om afbeeldingen te printen


Kassalade
Dk poort om de kassalade te openen 

Klantenscherm
Taal is ESC/POS net als printers `;

  const content7 = `IDEA11Y (Inclusive design and accessibility)
(Meetup English track) Anastasia

1e spreker: Erik Kroes (Practical fixes for common WCAG failures = Web Content Accessibility Guidelines)

WCAG is een soort standaard voor accessibility.
Accessibility = a accessible product that's usable by everyone, including people with disabilities.

Keyboard = Pressing the tab key should take you to every interactive element in an intuitive order. Pressing Shift+Tab should take you the opposite way. If you can reach and use every bit of functionality, your of to a good start

Issues = 
No skip link(sommige dingen overslaan),
 Uncontrolled focus state(duidelijk aangeven waar je ben),
 <div role="button"> slechte html zorgt voor slechte accessibility 

Contrast = Alles moet een goed contrast hebben zodat dingen zichtbaar zijn ook zodat je bijvoorbeeld in de zon dingen kan zien. 

How to test contrast = 
User interface components and states should have a contrast ratio of at least 3:1.  Measure this ratio against their surrounding colors. The contrast ratio of large tekst(at least 24px, or at least 19px and bold) should be 3:1 or more. All other text should be at least 4:5:1. These are minimum requirements, not goals 

Common issues = 
Placeholders,
Branding colours,
States ( button disabled )

Alternatives = 
How to test for alternatives = offer captions for video. Offer a transcript for podcasts. For images, offer tekst alternatives. Text alternatives should convey the purpose of the image or content of the image. A decorative image needs no alternative 

Most common issues = 
	- Images in buttons or links 

Sizing = How to test sizing
Compare a mobile phone to a tablet,
a laptop or a PC. No screen size is
the same. Make sure that what you
make offers the same content and
functionality to all sizes. Let people
experience it at whatever size they
want or need.

Issues = 
	- Design not made for 320 pixel width
External content`;

  const content8 = `15:54

2e spreker: Nienke de Keijzer (Thinking outside of the accessibility box)

Welke regels gelden er:
	• WCAG
	• EU laws
	• New Dutch law

GVB App – heeft ze aan gewerkt

How to research accessibility

Interviews or personal approach – she did the second

Challenges in research
	• A small group
	• Too specific or technical
	• Testing and prototyping

Innovative solutions

Everyone wants to innovate. We want new things and we want them now, but how about the people who were left behind?

How to design an app for the visually impaired using public transport, to make the experience easier and more accessible so I can eliminate or lessen frustration and obstacles.

From an internship to doing my thesis to a job! 

ReisAssist visual mode called

The visually impaired are no. 1`;

  return (
    <>
      <BlogPost
        title="Stop Using JS for That"
        author="Kylian Valkhof"
        content={content1}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Pay the Web Forward"
        author="Peter-Paul Koch"
        content={content2}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="GSAP"
        author="Cassie Evans"
        content={content3}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Hackers United"
        author="Rosa"
        content={content4}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Declarative Design"
        author="Jeremy Keith"
        content={content5}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Project Fugu"
        author="Niels Leenheer"
        content={content6}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Practical fixes for common WCAG issues"
        author="Erik Kroes"
        content={content7}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
      <BlogPost
        title="Thinking outside of the accessibility box"
        author="Nienke de Keijzer"
        content={content8}
        reflection="In this section, I reflect on what I learned from writing this post."
        imageUrl="https://example.com/john-doe.jpg"
      />
    </>
  );
};

export default page;
