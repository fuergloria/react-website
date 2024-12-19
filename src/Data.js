export const PICS = [
  {type: "normal", name: "bird", source:"/bird-frontal.jpg", alttext:"Vogel-Acrylbild" },
  {type: "switch", name: "frog", source:["/frog-0.jpg","./frog-dark-0.jpg"], alttext:"Frosch-Acrylbild" },
  {type: "normal", name: "donkey", source:"/esel-0.jpg", alttext:"Esel-Acrylbild" },
  {type: "rondell", name: "toscana", 
    source:["/toscana-5.jpg", "/toscana-1.jpg", "/toscana-2.jpg", "/toscana-3.jpg", "/toscana-4.jpg" ], alttext:"Toscana-Acrylbild"},
  {type: "normal", name: "pokemon", source:"/pokemon-0.jpg", alttext:"Pokemon-Acrylbild" },
  {type: "turned", name: "smoke", source:"/handsmoke-2.jpg", alttext:"Hände-Acrylbild" }
]

export const MOREPICS = [
  {type:"flower", name: "booty", source:"/booty.png", alttext:"Stiftehalter aus Ton, Hüfte"},
  {type: "basket", name: "basketball", source:"/basketpongnoback.png", alttext:"Basketpong"}
]


export const ITSKILLS = [
  {name: "Microsoft Office", percent: '85%'}, 
  {name: "Java", percent: '70%'},
  {name: "C", percent: '75%'},
  {name: "Python", percent: '75%'},
  {name: "SQL", percent: '70%'}, 
  {name: "HTML", percent: '90%'},
  {name: "CSS", percent: '90%'},
  {name: "JavaScript", percent: '70%'},
  {name: "Google Go", percent: '60%'}, 
  {name: "Angular", percent: '60%'},
  {name: "Haskell", percent: '70%'},
  {name: "Bootstrap", percent: '85%'},
  {name: "React", percent: '80%'}
];

export const LANGUAGES = [
  {name: "Deutsch", percent: '100%'}, 
  {name: "Englisch", percent: '95%'},
  {name: "Spanisch", percent: '30%'},
  {name: "Latein", percent: '25%'},
];

export const SOFTSKILLS = [
  {name: "Ei­gen­ver­ant­wort­ung", percent: '100%'}, 
  {name: "Kreativität", percent: '95%'},
  {name: "A­na­lyt­isch­es Den­ken", percent: '90%'},
  {name: "Team­fäh­ig­keit", percent: '90%'},
  {name: "Zu­ver­läs­sig­keit", percent: '95%'}, 
  {name: "An­pass­ungs­fäh­ig­keit", percent: '85%'},
];

export const EDUCATION = [
  {date: "09/2024 - 11/2024", institution: "Harvard University", role: "Kurs CS50: Introduction to Computer Science", info:"", side: "left"},
  {date: "10/2021 - 03/2023", institution: "Friedrich-Alexander-Universität, Erlangen-Nürnberg", role: "Begonnenes Studium der Biologie (B.Sc.)", info:"", side: "right"},
  {date: "10/2016 - 08/2020", institution: "Technische Universität München, München", 
    role: "B.Sc. Technologie- und Managementorientierte Betriebswirtschaftslehre (2,3)",
    info:[
        "Vertiefungsrichtung: Informatik & Marketing",
        "Projektstudium bei dem Start-up zentor: Entwicklung einer Marketingstrategie",
        "Bachelorarbeit: „Bewertung von Mensch-Roboter-Kollaborationen – Eine Fallstudienauswertung“ (1,3) "
        ]
        , side: "left"},
  {date: "09/2018 - 01/2019", institution: "Aston University, Birmingham, England", role: "Ausland-Semester an der Aston Business School Module", 
    info:[
      "Module:",
      "service & digital marketing, international business and emerging market economies, challenges of climate change"
    ], side: "right"},
  {date: "09/2008 – 07/2016", institution: "Johann-Sebastian-Bach Gymnasium, Windsbach", role: "Allgemeine Hochschulreife: Endnote 1,5", info:"" , side: "left"}
]

export const WORKEXPERIENCE = [
  {date: "10/2020 - 01/2021",  institution: "iSYS Software GmbH, München", role: "Praktikantin", 
    info:[
      "Vollständige Digitalisierung eines firmeninternen Prozesses zur Beantragung und Verwaltung von Investitionen",
      "Weiterentwicklung einer Webanwendung zur Verwaltung von Veranstaltungen"
      ]
      , side: "right"},
  {date: "06/2019 - 06/2020", institution: "Avantgarde Experts GmbH, München", role: "Hostess", info:"Einsatz auf BMW-Veranstaltungen mit Verantwortung für Kundenbetreuung, Akkreditierung und Garderobe"
    , side: "left"
  },
  {date: ["03/2018","03/2017 - 04/2017"], institution: "Agentur für Arbeit Nürnberg, Nürnberg", role: "Assistentin im operativen Service", 
    info:[
      "Bearbeitung von Fallakten und deren Dokumentation",
      "Bearbeitung von Anträgen auf Reisekostenerstattung und deren Zahlungsfreigabe"] , side: "right"},
  {date: "2015 - Heute", institution: "Für-Solar GmbH, Mitteleschenbach", role: "Bürokraft", 
    info:["Die Tätigkeit im Familienunternehmen hat sich über die Jahre stetig in Umfang und Aufgabenbereich gewandelt, zu den Hauptaufgabenbereichen zählen:",
      ["Buchhaltung und Verwaltung","Projektdokumentation","Berechnung EEG-Einspeisevergütung"]
    ], side: "left"},
]
