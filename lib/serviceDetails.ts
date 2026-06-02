// Long-form content per service for the detail pages (SEO + design).

export type ServiceDetail = {
  intro: string[];
  useCases: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  sanierung: {
    intro: [
      "Eine Sanierung ist immer ein Eingriff in viele Gewerke gleichzeitig — und genau da entscheidet sich, ob alles termingerecht und ohne Mehrkosten fertig wird. Wir sanieren Wohnungen, Häuser und Gewerbeeinheiten in Poing und im Großraum München. Vom ersten Aufmaß über Entkernung, Estrich, Trockenbau, Sanitär, Boden und Fliesen bis zur bezugsfertigen Übergabe — alles aus einer Hand.",
      "Du bekommst einen Ansprechpartner, ein Festpreis-Angebot und einen verbindlichen Übergabetermin. Kein Subunternehmer-Pingpong, keine offenen Baustellen.",
    ],
    useCases: [
      { title: "Wohnungssanierung", text: "Vollsanierung von Eigentumswohnungen und Mietobjekten — Bad, Boden, Wände, Türen, Sanitär." },
      { title: "Hausentkernung", text: "Komplette Entkernung von Bestandsgebäuden inkl. Entsorgung, anschließend Neuausbau nach deinen Wünschen." },
      { title: "Bad- & Küchensanierung", text: "Einzelraum-Sanierung mit Großformat-Fliesen, neuen Sanitärobjekten und sauberer Übergabe." },
      { title: "Gewerbeflächen", text: "Büro-, Praxis- oder Ladenumbauten — auf Wunsch in Schichten, damit der Betrieb weiterlaufen kann." },
    ],
    faq: [
      { q: "Wie lange dauert eine Komplettsanierung?", a: "Von 2–4 Wochen (kleine Wohnung) bis 3–4 Monate (Einfamilienhaus). Den genauen Termin legen wir nach dem Aufmaß im Festpreis-Angebot fest." },
      { q: "Was kostet eine Sanierung?", a: "Das hängt von Fläche, Substanz und Ausstattung ab. Wir kommen vor Ort vorbei, nehmen Maß und geben innerhalb weniger Tage einen klaren Festpreis ohne Überraschungen." },
      { q: "Muss ich während der Sanierung ausziehen?", a: "Bei einer Komplettsanierung in der Regel ja. Bei einer Teilsanierung (z. B. nur Bad oder Boden) schränken wir das Wohnen so wenig wie möglich ein." },
    ],
    seoTitle: "Sanierung in Poing & München · Komplettsanierung aus einer Hand | bauitec",
    seoDescription: "Komplettsanierung von Wohnungen, Häusern und Gewerbeflächen im Großraum München. Eigenes Team, Festpreis, verbindlicher Übergabetermin. Jetzt kostenlos anfragen.",
  },
  betonarbeiten: {
    intro: [
      "Beton bildet das Fundament jedes Bauvorhabens — im wörtlichen Sinn. Wir führen Beton- und Stahlbetonarbeiten mit eigenem Gerät und eigener Schalung aus, von der Bodenplatte bis zur tragenden Stützmauer. Auch bei komplexen Geometrien, Sichtbeton oder beengten Baustellen im Großraum München.",
      "Saubere Schalung, korrekte Bewehrung, der richtige Beton — wir liefern die handwerkliche Grundlage, auf der alle weiteren Gewerke aufbauen können.",
    ],
    useCases: [
      { title: "Fundamente & Bodenplatten", text: "Für Neubauten, Anbauten, Garagen und Carports — fachgerecht erstellt mit korrekter Bewehrung und Dämmung." },
      { title: "Stützmauern & Hangsicherung", text: "Winkelstützmauern, L-Steine und Hangbefestigungen — auch bei schwierigem Gelände." },
      { title: "Sichtbeton", text: "Hochwertige Sichtbeton-Oberflächen für Treppen, Wände oder gestalterische Elemente." },
      { title: "Industrieboden", text: "Belastbare Bodenplatten für Werkstätten, Lagerflächen oder Tiefgaragen." },
    ],
    faq: [
      { q: "Übernehmt ihr auch Statik und Planung?", a: "Wir arbeiten eng mit Statikern und Planern zusammen. Auf Wunsch koordinieren wir das, oder du bringst deine Pläne mit — wir setzen sie um." },
      { q: "Was kostet eine Bodenplatte?", a: "Das hängt von Größe, Dämmstandard und Bewehrung ab. Nach Aufmaß bekommst du innerhalb weniger Tage einen klaren Festpreis." },
      { q: "Wie lange dauern Betonarbeiten?", a: "Für eine Bodenplatte rechnen wir 1–2 Wochen inkl. Aushub, Schalung und Aushärtezeit. Stützmauern je nach Länge entsprechend." },
    ],
    seoTitle: "Betonarbeiten in Poing & München · Fundamente, Stützmauern | bauitec",
    seoDescription: "Beton- und Stahlbetonarbeiten mit eigenem Gerät: Fundamente, Bodenplatten, Stützmauern, Sichtbeton. Im Großraum München. Festpreis-Angebot anfordern.",
  },
  trockenbau: {
    intro: [
      "Trockenbau ist mehr als nur Wände stellen: Brand- und Schallschutz, abgehängte Decken, abgedichtete Vorsatzschalen, sauber verspachtelte Übergänge — all das macht den Unterschied zwischen einer normalen Wand und einem hochwertigen Innenausbau.",
      "Wir planen, montieren und verspachteln Trockenbauwände und Decken normgerecht nach DIN — für Wohnräume, Büros und Gewerbeflächen im Großraum München.",
    ],
    useCases: [
      { title: "Trennwände & Vorsatzschalen", text: "Raumteilende Wände in Wohnungen, Büros und Praxen — inklusive Schallschutz und Installationen." },
      { title: "Abgehängte Decken", text: "Plan oder mit indirekter Beleuchtung — auch mit Akustikplatten und Lüftungsdurchführungen." },
      { title: "Brandschutz F30–F90", text: "Brandschutzkonforme Konstruktionen für gewerbliche Bauten und Sanierungen nach Vorgabe." },
      { title: "Dachgeschossausbau", text: "Vom Dachgeschoss zur Wohnung — Dämmung, Wände, Decken, schräge Übergänge sauber gelöst." },
    ],
    faq: [
      { q: "Wie lange dauert eine Trockenbauwand?", a: "Eine einfache Trennwand ca. 1–2 Tage inkl. Spachteln. Bei größeren Flächen entsprechend mehr; im Angebot steht der genaue Termin." },
      { q: "Übernehmt ihr Brandschutzanforderungen?", a: "Ja, wir bauen normgerecht nach DIN 4102 (F30, F60, F90) und dokumentieren die Materialien für deine Abnahme." },
      { q: "Kommen Elektriker und Maler über euch?", a: "Auf Wunsch koordinieren wir die anschließenden Gewerke oder arbeiten Hand in Hand mit deinen Partnern." },
    ],
    seoTitle: "Trockenbau in Poing & München · Wände, Decken, Brandschutz | bauitec",
    seoDescription: "Trockenbau vom Profi: Trennwände, abgehängte Decken, Brand- und Schallschutz nach DIN. Sauber verspachtelt, im Großraum München. Anfrage senden.",
  },
  fliesenverlegung: {
    intro: [
      "Fliesen sind sichtbar — jede Fuge, jede Kante, jeder Übergang. Deshalb verlegen wir mit Sorgfalt und Erfahrung: Großformate ebenso präzise wie Mosaik, im Bad ebenso wie auf der Terrasse.",
      "Wir bereiten den Untergrund vor, schneiden passgenau, dichten ab und verfugen sauber. Das Ergebnis ist langlebig, optisch ruhig und dicht.",
    ],
    useCases: [
      { title: "Badezimmer & Nassbereiche", text: "Vollverflieste Bäder mit normgerechter Abdichtung, bodengleichen Duschen und sauberen Anschlüssen." },
      { title: "Großformat & XXL-Platten", text: "Formate bis 120 × 260 cm — präzise zugeschnitten, fluchtend verlegt, mit minimaler Fuge." },
      { title: "Küchenrückwände & Böden", text: "Robust, leicht zu reinigen und optisch passend zur restlichen Einrichtung." },
      { title: "Terrassen & Außenbeläge", text: "Frostsichere Verlegung im Außenbereich inkl. Gefälle, Drainage und Abdichtung." },
    ],
    faq: [
      { q: "Welche Fliesenformate verlegt ihr?", a: "Von kleinformatigen Mosaiken bis XXL-Platten (über 1 × 3 m). Wir beraten dich, welches Format zu Raum und Untergrund passt." },
      { q: "Was kostet die Verlegung pro m²?", a: "Je nach Format, Verlegemuster und Untergrund. Im Festpreis-Angebot nach Aufmaß steht der genaue Preis." },
      { q: "Übernehmt ihr auch Abriss alter Fliesen?", a: "Ja, inkl. Entsorgung. Das machen wir mit eigenem Container, alles aus einer Hand." },
    ],
    seoTitle: "Fliesenverlegung in München · Bad, Großformat, Terrasse | bauitec",
    seoDescription: "Fliesenverlegung vom Profi: Bad, Küche, Terrasse — Großformat, Mosaik, XXL-Platten. Präzise verfugt, langlebig dicht. Im Großraum München.",
  },
  bodenbelaege: {
    intro: [
      "Der Boden ist das, was du den ganzen Tag siehst und spürst — die Wahl des richtigen Belags entscheidet über Wohngefühl und Werterhalt. Wir bereiten den Untergrund fachgerecht vor und verlegen Parkett, Vinyl, Laminat oder Designbelag in allen Räumen.",
      "Vom Spachteln des Estrichs über Trittschalldämmung bis zur sauber abgesetzten Sockelleiste — wir liefern den fertigen Boden, nicht nur das Material.",
    ],
    useCases: [
      { title: "Parkett & Echtholzboden", text: "Massivholz oder Mehrschicht — geklebt oder schwimmend verlegt, geschliffen und versiegelt." },
      { title: "Vinyl & Designboden", text: "Pflegeleicht, wasserfest und optisch täuschend echt — ideal für moderne Wohnungen und Gewerbe." },
      { title: "Laminat", text: "Robuster Klick-Belag in vielen Dekoren — schnell verlegt, langlebig im Alltag." },
      { title: "Untergrund-Vorbereitung", text: "Estrich spachteln, Risse schließen, Feuchte messen — der gute Boden beginnt unten." },
    ],
    faq: [
      { q: "Welcher Boden passt zu mir?", a: "Hängt von Raum, Nutzung und Budget ab. Wir beraten dich ehrlich — Parkett ist hochwertig, Vinyl pflegeleicht, Laminat günstig." },
      { q: "Müsst ihr den alten Boden raus?", a: "Meist ja, damit der Untergrund sauber ist. Den Abriss und die Entsorgung erledigen wir mit." },
      { q: "Wie lange braucht ihr für eine Wohnung?", a: "Bei 80 m² etwa 3–5 Tage inkl. Untergrund-Vorbereitung — abhängig vom gewählten Belag." },
    ],
    seoTitle: "Bodenverlegung München · Parkett, Vinyl, Laminat | bauitec",
    seoDescription: "Bodenbeläge vom Profi: Parkett, Vinyl, Laminat, Designboden — inkl. Untergrundvorbereitung. Sauber verlegt im Großraum München. Festpreis anfordern.",
  },
  gartenbau: {
    intro: [
      "Eine schöne Außenanlage ist die Visitenkarte deines Hauses. Wir gestalten Gärten, Terrassen und Eingangsbereiche von Grund auf: Pflasterung, Sichtschutz, Hochbeete, Zäune und Treppenanlagen — mit eigenem Bagger und eigenem Team.",
      "Vom Aushub über die Tragschicht bis zur fertigen Oberfläche kommt alles aus einer Hand. Solide gebaut, sauber abgesetzt, langlebig.",
    ],
    useCases: [
      { title: "Pflasterung & Wege", text: "Einfahrten, Wege und Plätze aus Betonpflaster oder Naturstein — mit korrekter Tragschicht und Drainage." },
      { title: "Terrassen & Sichtschutz", text: "Holz, Naturstein oder Plattenbelag — kombiniert mit Sichtschutz aus Holz oder Metall." },
      { title: "Hochbeete & Einfassungen", text: "Cortenstahl oder Holz — als Gestaltungselement und gleichzeitig praktisch zum Gärtnern." },
      { title: "Aushub & Erdarbeiten", text: "Mit eigenem Bagger — vom Bodenaushub bis zur Modellierung des Geländes." },
    ],
    faq: [
      { q: "Macht ihr auch Bepflanzung?", a: "Wir konzentrieren uns auf den baulichen Teil (Pflaster, Mauern, Strukturen). Pflanzen bringst du selbst oder über deinen Gärtner — wir koordinieren das." },
      { q: "Was kostet eine Pflasterfläche?", a: "Je nach Material, Tragschicht und Untergrund. Nach Aufmaß bekommst du einen klaren Quadratmeterpreis im Festpreis-Angebot." },
      { q: "Wann ist die beste Zeit?", a: "März bis November sind ideal — bei Frost ruht der Pflasterbau. Wir planen frühzeitig, sprich uns gerne im Winter an." },
    ],
    seoTitle: "Gartenbau & Außenanlagen München · Pflaster, Terrasse, Zaun | bauitec",
    seoDescription: "Gartenbau vom Bauunternehmen: Pflaster, Terrassen, Hochbeete, Zäune und Aushub mit eigenem Bagger. Im Großraum München. Festpreis-Angebot anfordern.",
  },
  abbruch: {
    intro: [
      "Ein sauberer Abbruch ist die Grundlage für einen guten Neubau oder eine erfolgreiche Sanierung. Wir führen selektiven Rückbau und Komplettabbruch fachgerecht durch — inklusive Trennung der Materialien und Entsorgung. Auch Sondermüll wie Asbest oder Eternit übernehmen wir nach Vorschrift.",
      "Eigene Bagger, eigene Container, ein Ansprechpartner. Damit deine Baustelle nicht zur Müllhalde wird.",
    ],
    useCases: [
      { title: "Selektiver Rückbau", text: "Schonender Rückbau einzelner Wände, Decken oder Bauteile — für Sanierungen und Umbauten." },
      { title: "Komplettabbruch", text: "Vollständiger Abbruch von Häusern, Garagen oder Anbauten inkl. Entsorgung und Erdarbeiten." },
      { title: "Sondermüll & Asbest", text: "Fachgerechte Entsorgung von Asbestplatten, Eternit, Mineralwolle oder Nachtspeicheröfen nach gesetzlicher Vorgabe." },
      { title: "Entrümpelung & Räumung", text: "Wohnungen, Keller und Gewerbe leerräumen — schnell, sauber und mit Entsorgungsnachweis." },
    ],
    faq: [
      { q: "Übernehmt ihr die Entsorgungsnachweise?", a: "Ja. Bei Sondermüll bekommst du alle nötigen Nachweise dokumentiert — wichtig für Behörden und Versicherung." },
      { q: "Was kostet ein Abbruch?", a: "Hängt von Größe, Material und Zugänglichkeit ab. Nach Besichtigung bekommst du einen klaren Festpreis inkl. Entsorgung." },
      { q: "Wie schnell könnt ihr starten?", a: "Bei akutem Bedarf oft binnen 1–2 Wochen. Bei Asbest brauchen wir vorher die Anzeige bei der Behörde (5–14 Tage)." },
    ],
    seoTitle: "Abbruch & Entsorgung in München · Auch Asbest & Sondermüll | bauitec",
    seoDescription: "Selektiver Rückbau, Komplettabbruch und fachgerechte Entsorgung — auch Asbest und Eternit. Eigene Bagger und Container. Im Großraum München.",
  },
  "eigene-geraete": {
    intro: [
      "Wir besitzen unser Werkzeug selbst — Bagger, Schalungen, Gerüst, Bauzaun, Container. Das klingt selbstverständlich, ist im Bau aber die Ausnahme. Für dich heißt das: keine Mietkosten in der Rechnung, keine Wartezeiten auf das nächste freie Gerät, kein Stillstand auf der Baustelle.",
      "Unser Team weiß, mit welchem Werkzeug es arbeitet. Das macht uns schneller, flexibler und in der Qualität verlässlicher.",
    ],
    useCases: [
      { title: "Bagger & Baumaschinen", text: "Eigene Minibagger und Maschinen für Aushub, Pflasterung, Abriss und Erdarbeiten." },
      { title: "Schalungssysteme", text: "Eigene System- und Sonderschalungen für Beton- und Stahlbetonarbeiten." },
      { title: "Gerüst & Bauzaun", text: "Auf- und Abbau in eigener Hand — auf Wunsch auch als Vermietung im Raum München." },
      { title: "Container & Abtransport", text: "Eigene Mulden und Container — sauber, immer verfügbar, mit Entsorgungsnachweis." },
    ],
    faq: [
      { q: "Kann ich Geräte auch nur mieten?", a: "Bei einigen Geräten (Gerüst, Container) ja — sprich uns an, wir machen dir ein faires Angebot." },
      { q: "Was bringt mir das als Kunde?", a: "Vor allem Tempo und Zuverlässigkeit: Wir warten nicht auf den nächsten freien Bagger, sondern starten direkt." },
      { q: "Wartet ihr eure Geräte selbst?", a: "Ja, regelmäßige Wartung und Sicherheitsprüfungen gehören dazu — für Arbeitssicherheit und Verlässlichkeit auf der Baustelle." },
    ],
    seoTitle: "Eigenes Gerät & Maschinenpark · Bagger, Gerüst, Schalung | bauitec",
    seoDescription: "Bauunternehmen mit eigenem Maschinenpark: Bagger, Schalungen, Gerüst, Container. Kein Mietgerät, keine Wartezeiten. Im Großraum München.",
  },
};
