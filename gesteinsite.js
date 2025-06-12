// Initialisierung

('home');

const gesteineDaten = {
    "tegernseer-marmor": {
  name: "Tegernseer Marmor",
  fundort: "Tegernsee, Bayern",
  koordinaten: [47.67378102710026, 11.74826137299096],
  fundland: "Deutschland",
  bezeichnung: "Kalkstein <br> (handelsüblich als 'Marmor' bezeichnet)",
  alter: "Oberer Jura (Malm) ca. 150 Mio. Jahre",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  bild: "./Fotos/gestein/Tegernseer_Marmor.png",
  struktur: "Brekziös bis knollig, mit Kalkspatadern durchzogen",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie (Gesteinskunde)</strong><br>Der Tegernseer Marmor ist ein dekorativer Kalkstein der Gruppe Roter Knollenkalk. Er zeigt charakteristische Farbtöne von Rot über Gelb bis Grau und Orange-Beige, durchsetzt mit weißen Kalkspatadern. Petrographisch handelt es sich um einen sedimentären Kalkstein - die Bezeichnung als Marmor ist handelsüblich aber geologisch nicht korrekt.</p><br><p style='text-align: justify;'><strong>Abbaugeschichte</strong><br>Der Abbau wurde auf Befehl König Maximilians I. von Bayern (1799-1825) initiiert und diente der Gewinnung von Baumaterial für repräsentative Bauten. Die Förderung endete 1954, wodurch der Tegernseer Marmor heute als historische Rarität gilt. Der ehemalige Steinbruch ist mittlerweile erschöpft.</p><br><p style='text-align: justify;'><strong>Verwendung</strong><br>Aufgrund seiner lebhaften Maserung und Farbgebung fand der Tegernseer Marmor vor allem Verwendung in Innenausstattungen, Sakralbauten und Denkmälern. Besonders im 19. Jahrhundert wurde er für zahlreiche Prunkbauten in Bayern eingesetzt.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Das Gestein zeigt eine typische brekziös-knollige Textur mit eingelagerten Kalkspatadern. Trotz der marmorähnlichen Optik weist es keine metamorphe Überprägung auf. Diese Eigenschaften machen es zu einem einzigartigen, wenn auch petrographisch nicht korrekt bezeichneten Naturstein.</p>",
  hinweis: "<p style='text-align: justify;'>Die Bezeichnung 'Marmor' ist historisch-handelsüblich, aber petrographisch nicht zutreffend.</p>"
},
"kelheimer-kalkstein": {
  name: "Kelheimer Kalkstein",
  fundort: "Neuessing/Kelheim, Bayern",
  koordinaten: [48.92815148446526, 11.83520637865144],
  fundland: "Deutschland",
  bezeichnung: "Kalkstein",
  alter: "Oberer Jura (Malm) ca. 145-150 Mio. Jahre",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  bild: "./Fotos/gestein/Stein_Klenze.jpg",
  struktur: "Weitgehend richtungslos, homogen",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie (Gesteinskunde)</strong><br>Der Kelheimer Kalkstein ist ein heller, homogen wirkender Sedimentkalk von gleichmäßiger Textur. Charakteristisch ist seine feinkörnige, kompakte Struktur und seine helle, cremefarbene bis leicht gelbliche Tönung. Als typischer Jura-Kalk zeigt er gelegentlich feine Fossilreste.</p><br><p style='text-align: justify;'><strong>Abbau- und Nutzungsgeschichte</strong><br>Die Nutzung des Kelheimer Kalksteins reicht bis in die Römerzeit zurück, wo er bereits für den Bau der Porta Praetoria in Regensburg Verwendung fand. Der systematische Abbau als Baustein in der Münchner Region begann Mitte des 16. Jahrhunderts. Ab etwa 1850 fand er verstärkt als Grabstein Verwendung und wurde bis ca. 1920 auf dem Südfriedhof als Denkmalstein genutzt.</p><br><p style='text-align: justify;'><strong>Verwendung</strong><br>Der Stein wurde vor allem für lokale Bauprojekte, Sakralarchitektur und Denkmäler eingesetzt. Seine homogene Struktur und gute Bearbeitbarkeit machten ihn besonders für skulpturale Arbeiten und architektonische Details geeignet. Im 19. Jahrhundert erlebte er eine Blütezeit als Material für Grabdenkmäler.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der Kelheimer Kalkstein zeichnet sich durch seine Beständigkeit und gleichmäßige Textur aus. Im Gegensatz zu vielen anderen Jura-Kalken zeigt er kaum sichtbare Schichtung oder Fossilführung, was ihn für bildhauerische Arbeiten besonders attraktiv machte. Seine lange Nutzungstradition von der Antike bis ins 20. Jahrhundert unterstreicht seine Bedeutung als regionaler Kulturbaustein.</p>",
  hinweis: "<p style='text-align: justify;'>Der Kelheimer Kalkstein gehört zu den historisch wichtigsten Bausteinen der bayerischen Juraregion und dokumentiert über 2000 Jahre Steinmetztradition.</p>"
},
"rosenheimer-granit": {
  name: "Rosenheimer Granitmarmor",
  fundort: "Rohrbach/Thalmann bei Rosenheim, Bayern",
  fundland: "Deutschland",
  bezeichnung: "Lithothamnienkalk (Kalkbrekzie) <br> handelsüblich als 'Granitmarmor' bezeichnet",
  alter: "Tertiär (Oberes Miozän, Stad-Formation)",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  struktur: "Brekziös-knollig mit Lithothamnien-Detritus",
  koordinaten: [47.788089069308334, 12.192795732476736],
  bild: "./Fotos/gestein/schwanthaler_stein.jpg",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie (Gesteinskunde)</strong><br>Bei diesem als 'Rosenheimer Granitmarmor' handelsüblichen Gestein handelt es sich petrographisch um einen Lithothamnienkalk - einen durch Kalkrotalgen (Lithothamnium) geprägten Schuttkalk. Charakteristisch sind die bis faustgroßen, rotalgendominierten Kalkknollen in einer kalkigen Matrix, entstanden durch subaquatische Rutschungen im alpinen Molassebecken. Die Bezeichnungen 'Granitmarmor' (optische Ähnlichkeit) und 'Lithothamnienkalk' (wissenschaftlich) beziehen sich auf dasselbe Gestein.</p><br><p style='text-align: justify;'><strong>Entdeckung & Abbau</strong><br>1808 bei Sinning während des Baus der Soleleitung Traunstein-Rosenheim entdeckt, wurde der Stein bis ca. 1870 intensiv genutzt. Der historische Steinbruch (einst 30×40×15 m) bei Thalmann ist heute verwachsen, jedoch wurden 2018 durch Restaurierungsabbau neue Aufschlüsse geschaffen. Die Lagerstätte besteht aus bankigen Lithothamnienkalken in mergeligen Stockletten der Stad-Formation.</p><br><p style='text-align: justify;'><strong>Verwendung</strong><br>Als Modegestein des 19. Jahrhunderts vielseitig eingesetzt für: Sakralbauten (Taufsteine, Grabdenkmäler), repräsentative Architekturelemente (Säulen, Treppen), Denkmäler und sogar Straßenbau. Seine lebhafte Textur und Polierfähigkeit machten ihn trotz sedimentären Ursprungs zu einem beliebten Dekorstein.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Geologisch besonders durch seine Entstehung in turbiditähnlichen Ablagerungen des Molassebeckens. Die Fossilführung (Kalkrotalgen) dokumentiert flachmarine Vorgängerablagerungen. Die historische Doppelbezeichnung als 'Granitmarmor' reflektiert die marketingbedingte Namensgebung des 19. Jahrhunderts, die sich auf optische (nicht petrographische) Eigenschaften bezog.</p>",
  hinweis: "<p style='text-align: justify;'>Die Bezeichnungen 'Rosenheimer Kalk', 'Granitmarmor' und 'Lithothamnienkalk' beziehen sich auf dasselbe Gestein - petrographisch korrekt ist letztere. Der Name 'Granit' ist irreführend, da es sich weder um magmatisches Gestein noch um metamorphen Marmor handelt.</p>"
},
"nummulitenkalk": {
  name: "Nummulitenkalk (Enzenauer Marmor)",
  fundort: "Bad Heilbrunn (Enzenau), Sonthofen, Rohrdorf",
  fundland: "Deutschland <br> (Alpennordrand, Helvetikum-Zone)",
  bezeichnung: "Fossilschuttkalk <br> (handelsüblich als 'Enzenauer Marmor' bezeichnet)",
  alter: "Alttertiär (Paläogen)",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  struktur: "Dickbankig, dicht, grau bis rötlich-braun mit Nummuliten, Mollusken, Seeigeln und Kalkalgen",
  koordinaten: [
    [47.7512, 11.4347],  // Bad Heilbrunn
    [47.5144, 10.2814],  // Sonthofen
    [47.7972, 12.1700]   // Rohrdorf
  ],
  bild: "./Fotos/gestein/Stein_Zenetti.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Nummulitenkalk ist ein charakteristischer Fossilschuttkalk der Helvetikum-Zone, abgelagert im flachmarinen Schelfbereich des Alttertiärs. Sein Markenzeichen sind eingeschlossene Nummuliten - münzenförmige Gehäuse großer Foraminiferen (Einzeller). Das Gestein zeigt eine steilstehende Bankschichtung (2-20 m Mächtigkeit) und enthält neben den dominierenden Nummuliten auch dickschalige Mollusken, Seeigelreste und Kalkalgen. Die Rohdichte beträgt 2,72 g/cm³ bei stark variierender Druckfestigkeit (45-136 N/mm²). Quarzdetritus ist nur in Spuren vorhanden, lokal geht das Gestein in Nummulitensandstein über.</p><br><p style='text-align: justify;'><strong>Lagerstätten</strong><br>Mehrere kleinere Vorkommen am Alpennordrand (Sonthofen, Rohrdorf, Reichenhall), wobei nur der 'Enzenauer Marmor' bei Bad Heilbrunn wirtschaftliche Bedeutung erlangte. Die Bezeichnung als 'Marmor' ist handelsüblich - petrographisch handelt es sich um unmetamorphen Sedimentkalk.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Der Abbau konzentrierte sich auf das Bad Heilbrunner Vorkommen, wo der Stein als begehrter Dekorations- und Mauerstein gewonnen wurde. Seine lebhafte Fossilführung machte ihn zu einem besonderen Architekturmaterial. Der Abbau wurde vor Jahrzehnten eingestellt, sodass der Stein heute nur noch in historischen Bauten zu finden ist.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der Nummulitenkalk dokumentiert eindrucksvoll die flachmarinen Bildungsbedingungen des Alpenvorlands im Paläogen. Seine Fossilgesellschaft (insbesondere die namensgebenden Nummuliten) ermöglicht präzise stratigraphische Einstufungen. Als Baustein vereint er ästhetische Fossiloptik mit guten technischen Eigenschaften, was ihn trotz begrenzter Verbreitung zu einem regional bedeutenden Kulturgestein machte.</p>",
  hinweis: "<p style='text-align: justify;'>Die Bezeichnung 'Enzenauer Marmor' ist handelsüblich aber petrographisch nicht korrekt - es handelt sich um unmetamorphen Sedimentkalk. Die Nummuliten („Münzsteine“) waren im 19. Jahrhundert begehrte Sammlerobjekte.</p>"
},
    /*"rillenkarren": {
        
            name: "Rillenkarren",
            fundort: "Häufig in Kalksteinregionen (z. B. Alpen, Fränkische Alb, Karstgebiete weltweit)",
            fundland: "Deutschland (Bayern, Schwäbische Alb), Österreich, Schweiz, Kroatien (Karst), globale Karstgebiete",
            bezeichnung: "Karren, Rillenkarren (engl. 'rillenkarst' oder 'solution flutes')",
            alter: "Entstehen über geologisch kurze Zeiträume (Jahrhunderte bis Jahrtausende)",
            gesteinsgruppe: "Karbonatgestein (Kalkstein, Dolomit), seltener auch auf Gips oder Salz",
            struktur: "Parallel verlaufende, rinnenartige Vertiefungen (Rillen) mit scharfen Kanten, typischerweise <br> 1–30 cm tief und breit",
            koordinaten: "Beispiel Fränkische Alb: 49.7° N, 11.4° E (variiert je nach Vorkommen)",
            bild: "Rillenmuster auf freiliegenden Felsflächen, oft in Gruppen angeordnet",
            beschreibung: "Rillenkarren entstehen durch korrosive Verwitterung von Kalkstein durch leicht saures Regenwasser (Kohlensäureverwitterung). Die Rillen folgen oft dem Gefälle und bilden charakteristische lineare Muster. Sie sind ein typisches Merkmal von Karstlandschaften.",
        
    },*/

   /* "molassesandstein": {
        name: "Molassesandstein",
        fundort: "Alpenvorland (Deutschland, Schweiz, Österreich), Molassebecken",
        fundland: "Deutschland, Schweiz, Österreich",
        bezeichnung: "Sandstein der alpinen Molasse",
        alter: "Oligozän bis Miozän (ca. 30–5 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastisches Gestein)",
        struktur: "Fein- bis grobkörnig, oft schräggeschichtet, teils fossilführend",
        koordinaten: "Variabel, z. B. Molassebecken bei München: ~48.1374° N, 11.5755° E",
        bild: "./Fotos/gestein/molasse_sandstein_scherer.JPG",
        beschreibung: "Der Molassesandstein entstand durch Ablagerung von Sedimenten aus den aufsteigenden Alpen im Vorlandbecken. Er besteht überwiegend aus Quarzkörnern, oft mit Glimmer- oder Feldspatanteilen. Wichtige Baustein-Ressource (z. B. für historische Gebäude).",
    },*/

    "getigerter-schilfsandstein": {
  name: "Roter getigerter Schilfsandstein",
  fundort: "Spessart, Odenwald, Franken (z. B. Miltenberg, Lohr)",
  fundland: "Deutschland",
  bezeichnung: "Buntsandstein (Schilfsandstein-Varietät)",
  alter: "vsl. Trias (Oberer Buntsandstein)",
  gesteinsgruppe: "Sedimentgestein (klastisch)",
  struktur: "Gebändert (tigerartig), wechsellagernd grob- und feinkörnig",
  koordinaten: [49.7039, 9.2645],  // Beispiel: Miltenberg
  bild: "./Fotos/gestein/jolly_stein.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie:</strong> Roter, fein- bis mittelkörniger Sandstein mit typischer Tigerung durch Wechsellagerung eisenoxidreicher Schichten. Entstanden in fluviatilen Ablagerungsräumen des Oberen Buntsandsteins.</p><br><p style='text-align: justify;'><strong>Verwendung:</strong> Seit dem Mittelalter als Baumaterial für Burgen, Kirchen und Fachwerk. Heute noch in ausgewählten Brüchen gewonnen, v. a. für Denkmalpflege und Landschaftsbau.</p>",
  hinweis: "Die auffällige Bänderung entsteht durch unterschiedliche Eisenoxid-Verteilung. Nicht zu verwechseln mit ähnlichen Buntsandstein-Varietäten."
},

"carrara-marmor": {
  name: "Carrara-Marmor",
  fundort: "Carrara, Massa-Carrara, Toskana (Italien)",
  fundland: "Italien",
  bezeichnung: "Metamorpher Kalkstein (geologisch echter Marmor)",
  alter: "Trias bis Jura (metamorph überprägt im Tertiär)",
  gesteinsgruppe: "Metamorphes Gestein",
  struktur: "Gleichkörnig, weiß bis bläulich-weiß",
  koordinaten: [44.102262599800696, 10.131479523490388],
  bild: "./Fotos/gestein/carrara_marmor.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Carrara-Marmor ist ein hochreiner, metamorpher Kalkstein, der durch intensive Gebirgsbildung (Alpenorogenese) aus mesozoischen Kalkablagerungen entstand. Charakteristisch ist seine strahlend weiße bis leicht bläulich-graue Farbe und die typische 'zuckerkörnige' Textur aus eng verwachsenen Calcitkristallen (0.2-2 mm). Geologisch handelt es sich um einen echten Marmor im Gegensatz zu vielen handelsüblichen 'Marmoren'.</p><br><p style='text-align: justify;'><strong>Geschichte & Abbau</strong><br>Bereits seit der Römerzeit (ab 1. Jh. v. Chr.) kontinuierlich abgebaut, wurde Carrara-Marmor zum Inbegriff des Statuenmarmors (Michelangelos David). Die Steinbrüche in den Apuanischen Alpen liefern noch heute weltberühmtes Material. Im Vergleich zu anderen weißen Marmoren (z.B. Laas-Marmor) ist Carrara-Marmor besonders feinkörnig und homogen.</p><br><p style='text-align: justify;'><strong>Verwendung</strong><br>Historisch für Skulpturen, Architektur (Pantheon, Marmorplatten) und repräsentative Bauten. Auf dem Südfriedhof seit dem frühen 19. Jahrhundert für Grabreliefs und Büsten verwendet, mit besonderer Beliebtheit ab 1870. Trotz Friedhofsverordnungen der 1920er Jahre, die rein weiße Steine oft untersagten, blieb der Südfriedhof eine Ausnahme, wo Carrara-Marmor weiterhin verwendet wurde.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der 'Statuario'-Typ mit seiner transluziden Optik gilt als edelste Varietät. Die langjährige Abbautradition macht ihn zum kulturhistorisch bedeutendsten Marmor Europas. Im Gegensatz zu deutschen 'Marmoren' (z.B. Wunsiedel) zeigt er eine echte metamorphe Kristalltextur.</p>",
  hinweis: "<p style='text-align: justify;'> Viele handelsübliche 'Marmore' sind petrographisch keine echten Marmore (z.B. Jura-Marmor). Carrara-Marmor hingegen ist durch Metamorphose entstanden und zeigt die typische rekristallisierte Struktur.</p>"
},
    
    /*name: "gelb-bräunlicher Sandstein",
        fundort: "Elbsandsteingebirge (Deutschland/Tschechien), Pfälzerwald, Thüringen, Frankreich (Vosges)",
        fundland: "Deutschland, Tschechien, Frankreich, USA (Colorado)",
        bezeichnung: "Eisenoxid-reicher Sandstein (häufig als 'Postaer Sandstein' oder 'Naturgelb' bezeichnet)",
        alter: "Kreidezeit (ca. 100–70 Mio. Jahre, z.B. Elbsandstein = Oberkreide)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, quarzdominiert, gebankt oder massig",
        koordinaten: "Elbsandstein-Beispiel: 50.9236° N, 14.0714° E (Posta, Sächsische Schweiz)",
        bild: "Gelblich bis ockerfarben (durch Limonit-Beimengungen), teils mit Schrägschichtung",
        beschreibung: "Gelber Sandstein entsteht durch klastische Ablagerung in Fluss- oder Küstenbereichen. Die Färbung resultiert aus Eisenoxid-Hydraten (Limonit). Wichtiger historischer Baustein für Denkmäler (z.B. Dresdner Frauenkirche) und Bildhauerei. Varianten zeigen unterschiedliche Verwitterungsbeständigkeit.",
    },*/
"muschelkalk": {
  name: "Muschelkalk",
  fundort: "Region Heilbronn, Crailsheimer Raum (Baden-Württemberg/Bayern)",
  fundland: "Deutschland",
  bezeichnung: "Kalkstein (Sedimentgestein)",
  alter: "Trias (Mittlere Trias, ca. 243-235 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  struktur: "Bankig bis massig, oft mit Fossilführung (Muscheln, Brachiopoden, Ceratiten)",
  koordinaten: [
    [49.1347, 10.0719],  // Crailsheim
    [49.642508867488814, 9.786033760912673]    
  ],
  bild: "./Fotos/gestein/Ohm_Stein.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Muschelkalk ist ein mariner Kalkstein der Mittleren Trias, abgelagert im flachen Germanischen Becken. Charakteristisch ist seine Fossilführung (v.a. Muscheln, Brachiopoden und Ceratiten - eine Ammonitenart). Es werden drei Hauptschichten unterschieden: Unterer, Mittlerer und Oberer Muschelkalk mit unterschiedlichen sedimentologischen Eigenschaften.</p><br><p style='text-align: justify;'><strong>Abbau & Vorkommen</strong><br>Hauptabbaugebiete liegen in der Maingegend (Unterfranken) und im Crailsheimer Raum (Baden-Württemberg). Der Stein wird seit dem 19. Jahrhundert systematisch gewonnen, wobei verschiedene Varietäten (von feinkörnig bis grobschalig) vorkommen. Die Steinbrüche sind teilweise noch heute in Betrieb.</p><br><p style='text-align: justify;'><strong>Historische Verwendung</strong><br>In München ab 1840 (Einzelstücke) und verstärkt ab 1880 als Grabmalstein genutzt. Besondere Bedeutung erlangte er in den 1950er-60er Jahren als Ersatzmaterial für zerstörte Grabdenkmäler auf dem Südfriedhof. Seine leichte Bearbeitbarkeit und gute Witterungsbeständigkeit machten ihn zu einem geschätzten Material für Denkmäler und Architektur.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der Muschelkalk zeigt regional stark variierende Ausprägungen - von homogenen bis stark fossilreichen Varietäten. Als typisches Leitgestein der Trias ist er von großer stratigraphischer Bedeutung. Seine technischen Eigenschaften (Rohdichte ~2,5 g/cm³, Druckfestigkeit 40-120 N/mm²) machen ihn zu einem vielseitig verwendbaren Naturstein.</p>",
  hinweis: "<p style='text-align: justify;'>Trotz des Namens handelt es sich petrographisch nicht um Muscheln allein, sondern um einen komplexen marinen Kalkstein mit vielfältiger Fossilführung. Die Bezeichnung bezieht sich auf die geologische Formation der Mittleren Trias.</p>"
},

/*    {
        name: "Kösseine-Granit",
        fundort: "Kösseine-Massiv, Fichtelgebirge (Oberfranken, Bayern)",
        fundland: "Deutschland",
        bezeichnung: "Großkörniger Biotitgranit",
        alter: "Spätvariszisch (Oberkarbon, ca. 300–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Großkörnig, gleichkörnig; typische Fichtelgebirgs-Struktur mit gut ausgebildeten Feldspat-Kristallen",
        koordinaten: "Kösseine-Gipfel: 50.0167° N, 11.9833° E",
        bild: "Hellgrau mit rosa Feldspat-Einsprenglingen, schwarzen Biotitflittern und bläulichem Quarz",
        beschreibung: "Der Kösseine-Granit ist ein typischer Vertreter der Fichtelgebirgsgranite. Charakteristisch sind seine großkörnigen, idiomorphen Kalifeldspäte (bis 5 cm). Wichtiger Naturwerkstein, der seit dem Mittelalter abgebaut wird. Verwendung als Baumaterial (z.B. für Denkmäler) und in der Steinbildhauerei.",
    },*/
"ochsenkopf-proterobas": {
  name: "Ochsenkopf-Proterobas",
  fundort: "Ochsenkopf-Massiv, Fichtelgebirge (Bayern)",
  fundland: "Deutschland",
  bezeichnung: "Nephelinbasalt (alkalibasaltisches Ganggestein) <br> Historisch: 'Grüner Porphyr' oder 'Fichtelgebirgsporphyr'",
  alter: "vsl. Tertiär (ca. 20–25 Mio. Jahre)",
  gesteinsgruppe: "Magmatisches Gestein (Subvulkanit)",
  struktur: "Dicht bis feinkörnig, teilweise porphyrisch mit Olivin-Einsprenglingen, homogen wirkend",
  koordinaten: [50.0308, 11.8085],  // Ochsenkopf-Gipfel
  bild: "./Fotos/gestein/ochsenkopf.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Ochsenkopf-Proterobas ist ein seltener alkalireicher Basalt mit hohem Nephelin- und Olivin-Gehalt, der als schmaler Gang (ca. 20 m Mächtigkeit) im Fichtelgebirgsgranit intrudierte. Als Typlokalität dieser Gesteinsart (erstbeschrieben durch Gümbel 1874) zeigt er charakteristische subvulkanische Texturen. Seine ungewöhnliche chemische Zusammensetzung macht ihn zu einem wichtigen Archiv für die tertiäre Vulkanaktivität Nordbayerns.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>An der NW- und SE-Seite des Ochsenkopfes finden sich zahlreiche schluchtartige, aufgelassene Steinbrüche. Trotz der geringen Gangmächtigkeit wurde das Gestein intensiv genutzt. Die langgezogene Form der Brüche folgt dem Gangverlauf, wobei die NW-Seite besonders eindrucksvolle Aufschlüsse bietet.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Neben der Verwendung als Schotter und Naturwerkstein hatte das Gestein große Bedeutung für die Glasindustrie (z.B. Knopfherstellung). Als 'Fichtelgebirgsporphyr' wurde es ab 1840 (erstmals auf dem Südfriedhof dokumentiert) bis zur Jahrhundertwende als Denkmal- und Grabmalstein genutzt. Seine außergewöhnliche Widerstandsfähigkeit und homogene Textur machten ihn zu einem geschätzten Material für Skulpturen und Kleinpflaster.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der Proterobas stellt geologisch eine Rarität dar - sein Name leitet sich von griech. 'protos' (erst) und 'basalt' ab, was seine Sonderstellung unter den Basalten betont. Die historische Bezeichnung als 'Grüner Porphyr' (handelsüblich) ist petrographisch nicht korrekt, spiegelt aber die traditionelle Nutzung wider. Die Brüche sind heute als geologisches Denkmal geschützt.</p>",
  hinweis: "<p style='text-align: justify;'>Achtung: Die handelsüblichen Bezeichnungen 'Grüner Porphyr' bzw. 'Fichtelgebirgsporphyr' sind petrographisch irreführend - es handelt sich weder um Porphyr noch um ein saures Magmatit, sondern um einen alkalireichen Basalt.</p>"
},

    "diabas": {
  name: "Sora-Diabas (Lausitzer Diabas)",
  fundort: "Sora bei Bautzen, Sachsen",
  fundland: "Deutschland",
  bezeichnung: "Lamprophyr (historisch: Lausitzer Syenit, Lausitzer Diabas)",
  alter: "Paläozoikum (variszische Gebirgsbildung)",
  gesteinsgruppe: "Magmatisches Gestein (Lamprophyr-Ganggestein)",
  struktur: "Weitgehend richtungslos, homogen",
  koordinaten: [51.12394341,14.38292742 ],  // Sora bei Bautzen
  bild: "./Fotos/gestein/diabas_stein_schwind.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Sora-Diabas (korrekter: Lamprophyr) entstand während der variszischen Gebirgsbildung als gangförmige Intrusion. Charakteristisch ist seine schwarzgrüne Grundmasse mit mittelkörniger, richtungsloser Struktur und weißen Feldspat-Einsprenglingen. Mineralogisch dominieren Amphibol und Plagioklas, begleitet von Biotit und Pyroxen. Die typische Färbung entsteht durch Chloritisierung der mafischen Minerale.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Die Vorkommen bei Sora (Lausitz) werden seit dem 19. Jahrhundert genutzt. Als Ganggestein zeigt der Sora-Diabas begrenzte Abbauwürdigkeit, wird aber noch sporadisch gewonnen. Die Lagerstätte gehört zum Lausitzer Magmatitkomplex und steht geologisch in Zusammenhang mit der Oberlausitzer Vulkanitprovinz.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Unter den Handelsnamen 'Sora', 'Lausitzer Diabas' oder 'Lausitzer Syenit' fand das Gestein vielseitige Verwendung als: Bau- und Denkmalstein, Grabsteine, Bodenbeläge und architektonische Elemente. Seine gute Polierbarkeit und charakteristische schwarzgrüne Farbe machten ihn zu einem geschätzten regionalen Naturstein.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Petrographisch handelt es sich genau genommen um einen Lamprophyr (nicht um echten Diabas), was die historische Bezeichnung 'Lausitzer Syenit' erklärt. Als Teil des Lausitzer Magmatitkomplexes dokumentiert er die komplexe variszische Magmenentwicklung in Ostsachsen. Die Bezeichnung 'Diabas' hat sich im Handel trotz der petrographischen Ungenauigkeit etabliert.</p>",
  hinweis: "<p style='text-align: justify;'>Achtung: Die petrographisch korrekte Bezeichnung ist Lamprophyr. Die Namen 'Diabas' und 'Syenit' sind historisch bedingt und geologisch nicht ganz zutreffend, aber im Handel etabliert.</p>"
},
"untersberger-marmor": {
  name: "Untersberger Marmor",
  fundort: "Fürstenbrunn bei Salzburg, Österreich (Nordseite des Untersbergs)",
  fundland: "Österreich",
  bezeichnung: "Kalkstein-Konglomerat <br> (handelsüblich als 'Marmor' bezeichnet)",
  alter: "Kreidezeit (ca. 85 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (karbonatisch)",
  struktur: "Feinkörniges Konglomerat aus Kalkgeröllen und fossilen Bruchstücken",
  koordinaten: [47.69832493,12.99026012],  
  bild: "./Fotos/gestein/untersberger_kalk.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Beim Untersberger Marmor handelt es sich petrographisch um ein dichtes Kalkstein-Konglomerat, dessen Kalkgerölle und fossile Bruchstücke durch karbonatische Grundmasse verfestigt sind. Mit 98-99% CaCO3-Gehalt und minimalem Porenvolumen (<0,5%) zeigt er ausgezeichnete Materialeigenschaften. Die Farbpalette reicht von homogenem Beige bis zu lebhaften Rosa- und Gelbtönen, verursacht durch unterschiedliche Fossilanteile.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Seit der Römerzeit genutzt, wird der Stein heute durch die Marmor-Industrie Kiefer im Tagebau bei Fürstenbrunn abgebaut. Moderne Schneidtechnik (Diamantseilsägen) ermöglicht schonende Gewinnung. Zwei aktive Brüche existieren: der Kieferbruch und ein von der Familie Mayr-Melnhof gepachteter Bruch.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Als ältester genutzter Naturstein Mitteleuropas fand er Verwendung seit der Römerzeit. Besondere Blüte unter Ludwig I. von Bayern für Prunkbauten. Als Grabstein seit den 1860er Jahren nachweisbar, im 20. Jahrhundert nur noch vereinzelt verwendet. Wichtiges Baumaterial für Salzburger Sakral- und Repräsentationsbauten.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Trotz der handelsüblichen Bezeichnung als Marmor liegt petrographisch unmetamorpher Kalkstein vor. Seine außergewöhnliche Dichte (2.700 kg/m³) und Frostbeständigkeit bei gleichzeitig guter Bearbeitbarkeit machen ihn zum idealen Naturwerkstein. Die langjährige Abbautradition dokumentiert über 2000 Jahre Steinmetzkultur.</p>",
  hinweis: "<p style='text-align: justify;'>Die Bezeichnung 'Marmor' ist handelsüblich aber petrographisch nicht korrekt - es handelt sich um unmetamorphen Kalkstein. Der Untersberger Stein gilt als der historisch bedeutendste Naturwerkstein Österreichs.</p>"
},
"ruhpoldinger-marmor": {
  "name": "Ruhpoldinger Marmor (Handelsbezeichnung)",
  "fundort": "Ruhpolding, Chiemgauer Alpen (Bayern)",
  "fundland": "Deutschland (Bayern)",
  "bezeichnung": "Dekorativer Kalkstein (kein echter Marmor)",
  "alter": "Oberen Jura Malm (ca. 150 Mio. Jahre)",
  "gesteinsgruppe": "Sedimentgestein (Karbonatgestein)",
  "struktur": "brekziös bzw. knollig",
  "koordinaten": [
    [47.749398574019224, 12.628466587046011]  // Ruhpolding
  ],
  "bild": "./Fotos/gestein/ruhpoldinger_marmor.JPG",
  "beschreibung": "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Bei dem als 'Ruhpoldinger Marmor' vermarkteten Gestein handelt es sich um einen fossilreichen Kalkstein aus der Oberkreide. Die charakteristischen grünen Schlieren stammen von serpentinitischen Beimengungen. Trotz der Handelsbezeichnung liegt kein metamorpher Marmor vor.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Gewonnen im Raum Ruhpolding in den Chiemgauer Alpen. Die Vorkommen gehören zur Kalkalpinen Decke und zeigen typische Bankdicken von 0.5-2 Metern. Der Abbau erfolgte bis ins 20. Jahrhundert in mehreren kleinen Brüchen.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Wegen seiner dekorativen Optik als Baumaterial für lokale Sakralbauten und repräsentative Profangebäude verwendet. Seine Politurfähigkeit und das ungewöhnliche Farbspiel machten ihn trotz fehlender Metamorphose zu einem geschätzten Werkstein.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Die grünen Schlieren entstehen durch Einschwemmungen von Serpentinit-Material. Dieses ungewöhnliche Merkmal unterscheidet den Ruhpoldinger Kalkstein von anderen bayerischen Kalksteinvarietäten und erklärt seine populäre Bezeichnung als 'Marmor'.</p>",
  "hinweis": "<p style='text-align: justify;'>Wichtiger Hinweis: Bei diesem Naturstein handelt es sich petrographisch nicht um echten Marmor, sondern um einen Kalkstein. Die Bezeichnung 'Marmor' ist eine traditionelle Handelsbezeichnung.</p>"
},
"schwarz-schwedisch-basalt": {
  name: "Schwarz-Schwedisch Basalt (SS Fein)",
  fundort: "Saganäs/Älmhult",
  fundland: "Schweden",
  bezeichnung: "Basalt (präkambrischer Magmatit)",
  alter: "Präkambrium (>540 Mio. Jahre)",
  gesteinsgruppe: "Magmatisches Gestein (Ergussgestein)",
  struktur: "Feinkörnig, dicht, richtungslos",
  koordinaten: [56.55439684024806, 14.089589039035305],  // Älmhult, Schweden
  bild: "./Fotos/gestein/schwarz_basalt_robl.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Schwarz-Schwedische Basalt (Handelsname 'SS Fein') ist ein präkambrisches Ergussgestein von außergewöhnlicher Homogenität und Dichte. Charakteristisch ist seine tiefschwarze Farbe und feinkörnige, porenfreie Struktur. Mineralogisch dominieren Plagioklas, Pyroxen und Olivin, die dem Gestein seine hervorragenden technischen Eigenschaften verleihen.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Gewonnen wird der Stein seit dem 19. Jahrhundert in der Region Saganäs/Älmhult in Südschweden. Die Lagerstätte gehört zum baltischen Schild und zeigt besonders reine Basaltvorkommen mit gleichmäßiger Textur, die sich ideal für hochwertige Natursteinprodukte eignen.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>In Deutschland ab 1860 zunehmend verwendet, erlebte der schwedische Basalt seine Blütezeit in den 1880er-90er Jahren als beliebter Grabstein. Besonders geschätzt wurde er für polierte Schriftplatten. Nach Friedhofsverordnungen der 1920er Jahre (Verbot hochglanzpolierter schwarzer Steine) ging die Nutzung zurück, obwohl diese Regelung für den Südfriedhof nicht galt.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der SS-Basalt zeichnet sich durch außergewöhnliche Witterungsbeständigkeit und leichte Pflegbarkeit aus. Seine perfekte Polierfähigkeit und der edle, tiefschwarze Glanz machten ihn zum bevorzugten Material für repräsentative Grabmale. Trotz des Rückgangs bleibt er einer der qualitativ hochwertigsten Basalte Europas.</p>",
  hinweis: "<p style='text-align: justify;'>Achtung: Die Bezeichnung 'SS Fein' ist ein Handelsname ohne politische Konnotation - sie steht einfach für 'Schwarz Schwedisch Fein'. Der Stein wird bis heute in qualitativ gleichbleibender Qualität abgebaut.</p>"
},

  "serpentinit": {
    name: "Serpentinit (mögliche Verde Balthemy-Varietät)",
    fundort: "Aosta (Italien), Hohe Tauern (Österreich)",
    fundland: "Italien, Österreich",
    bezeichnung: "Metamorphes Ultramafitit (Serpentinit)",
    alter: "vsl. Kreidezeit",
    gesteinsgruppe: "Metamorphes Gestein",
    struktur: "Dicht, schuppig bis faserig (Antigorit/Chrysotil), oft mit Magnetitadern",
    koordinaten: [
      [45.82984587,7.54511833],   //Aosta, Italien
      [47.1765, 13.2348]   // Hüttschlag, Hohe Tauern, Österreich
    ],
    bild: "./Fotos/gestein/Wandplatten_Knorr.JPG",
beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Bei diesem Gestein handelt es sich vermutlich um einen Serpentinit, ein durch Metamorphose von ultramafischen Gesteinen (wie Peridotit) entstandenes Gestein. Typische Minerale sind Antigorit, Chrysotil und Lizardit, die dem Gestein seine charakteristische grüne Farbe und schuppige Textur verleihen. Oft finden sich auch Magnetitadern als Begleitminerale.</p><br><p style='text-align: justify;'><strong>Mögliche Herkunft & Abbau</strong><br>Die genaue Herkunft ist nicht zweifelsfrei bestimmbar, jedoch kommen als mögliche Abbaugebiete die Region Aosta in Italien sowie die Hohen Tauern in Österreich in Frage. Serpentinite werden typischerweise in Gebirgsregionen mit ophiolithischen Komplexen gefunden, die auf ozeanische Krustenreste zurückgehen.</p><br><p style='text-align: justify;'><strong>Eigenschaften & Verwendung</strong><br>Serpentinite sind bekannt für ihre dekorative grüne Färbung und charakteristische Textur. Sie werden seit Jahrhunderten als Werkstein genutzt, wobei besonders die italienischen Varietäten für Kunstgegenstände und architektonische Elemente geschätzt werden. Die Bearbeitung erfordert jedoch Vorsicht, da manche Varietäten Asbestfasern enthalten können.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Als metamorphe Gesteine dokumentieren Serpentinite wichtige geodynamische Prozesse der Erdkruste. Ihre Entstehung ist mit der Hydratation von Mantelgesteinen verbunden, was sie zu wichtigen Zeugen plattentektonischer Vorgänge macht. Die genaue Bestimmung der Varietät erfordert petrographische Analysen.</p>",  },

    
"kalktuff": {
  name: "Münchner Kalktuff",
  fundort: "Maxlmühle , Münchner Schotterebene, Würmtal (z.B. Gauting, Gräfelfing), Haarschweige",
  fundland: "Deutschland (Bayern/Oberbayern)",
  bezeichnung: "Süßwasserkalk (poröser Kalkstein)",
  alter: "Holozän (meist 5.000-10.000 Jahre alt)",
  gesteinsgruppe: "Sedimentgestein (chemisch-biogenes Karbonat)",
  struktur: "Mittelporös (20-40% Hohlräume), schaumig mit Pflanzen- und Holzabdrücken",
  koordinaten: [
    [47.874572, 11.78875],  // 
    [47.892551, 11.473378],
    [48.1187, 11.4293]   // Gräfelfing
  ],
  bild: "./Fotos/gestein/Stein_ett.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Münchner Kalktuff entstand in der Nacheiszeit durch Kalkausfällung aus den kalkreichen Flüssen Isar und Würm. Charakteristisch sind seine hellgraue bis beigebraune Färbung und die typischen Hohlräume mit eingeschlossenen Holz- und Pflanzenresten. Die Kalkabscheidung wurde besonders durch Wasserpflanzen und Mikroorganismen gefördert.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Historische Abbaugebiete befanden sich entlang der Isarauen und im Würmtal bei Gauting und Gräfelfing. Die Vorkommen bildeten sich in ehemaligen Flussarmen und Quellbereichen mit Schichtdicken von 1-3 Metern. Der Abbau erfolgte meist in kleinen Gruben und wurde bereits im frühen 20. Jahrhundert weitgehend eingestellt.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Der Münchner Kalktuff war seit dem Mittelalter ein wichtiger lokaler Baustein für Sakralbauten (z.B. Frauenkirche, Kloster Schäftlarn) und Profangebäude. Seine leichte Bearbeitbarkeit machte ihn ideal für Ornamente.<br><br>Auf dem Alten Südfriedhof war er mit etwa 32% der am häufigsten verwendete Sockelstein, typischerweise kombiniert mit grauem Granit (30%). Diese charakteristische Materialkombination prägt viele historische Grabmäler des 19. Jahrhunderts.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Im Vergleich zum Kalktuff in Deutschland zeigt der Münchner Typus gröbere Poren . Als lokaler Naturstein dokumentiert er die postglaziale Landschaftsentwicklung des Münchner Raums. Heute sind die ehemaligen Abbauflächen oft als Geotope geschützt.</p>",
  hinweis: "<p style='text-align: justify;'>Hinweis: Der historische Münchner Kalktuff ist heute kaum noch verfügbar. Für Restaurierungen wird meist Material aus dem bayerischen Alpenvorland verwendet. Die Porosität macht ihn anfällig für Verwitterung, weshalb er oft konserviert werden muss.</p>"
},
   /* "riffkalk":
    {
        name: "Riffkalk",
        fundort: "Alpen (Wettersteinkalk), Schwäbische Alb (Massenkalk), Dolomiten (Italien), Devon-Riffe (Eifel)",
        fundland: "Deutschland, Österreich, Italien, USA (Texas), Australien (Great Barrier Reef)",
        bezeichnung: "Biohermer Riffkalk (marine Karbonatablagerung)",
        alter: "Variabel (z.B. Alpen: Trias-Jura, Eifel: Devon, ca. 400–150 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonatgestein)",
        struktur: "Massig bis bankig, hochfossilführend (Korallen, Stromatoporen, Schwämme)",
        koordinaten: "Beispiel Allgäuer Alpen: 47.4167° N, 10.2667° E",
        bild: "Hellgrau bis beige, oft mit deutlich sichtbaren Fossilien und Riffstrukturen",
        beschreibung: "Riffkalke entstanden durch die Akkumulation von Riffbildnern (Korallen, Schwämme, Algen) in flachen, tropischen Meeren. Charakteristisch sind eingeschaltete Riffschuttlagen und z.T. dolomitisierte Zonen. Wichtiger Rohstoff für Zementindustrie und als Naturwerkstein (z.B. 'Adneter Marmor').",
    },*/
"redwezit": {
  "name": "Redwitzit",
  "fundort": "Marktredwitz, Rothenbach, Auf der Wacht ",
  "fundland": "Deutschland (Bayern)",
  "bezeichnung": "Lamprophyr-artiges Ganggestein",
  "alter": "Spätvariszisch (Oberkarbon, ca. 300–320 Mio. Jahre)",
  "gesteinsgruppe": "Magmatisches Gestein (Ganggestein)",
  "struktur": "Porphyrisch mit Einsprenglingen in feinkörniger Grundmasse, typisch schokoladenbraune Färbung",
  "koordinaten": [
    [50.040099,12.114099],  // Marktredwitz
    [49.74906732,12.24509954],  // Auf der Wacht
    [49.74906732,12.24509954]   // Rothenbach
  ],
  "bild": "./Fotos/gestein/redwitzit.JPG",
  "beschreibung": "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Redwitzit ist ein intermediäres Ganggestein mit mineralogischer Ähnlichkeit zu Lamprophyren. Charakteristisch sind porphyrische Einsprenglinge von Plagioklas, Hornblende und Biotit in einer feinkörnigen Grundmasse. Die typische schokoladenbraune Färbung macht ihn leicht erkennbar.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Hauptvorkommen finden sich im Fichtelgebirge und Oberpfälzer Wald, mit der Typlokalität bei Martkredwitz. Das Gestein tritt in ähnlicher Ausbildung auch im Odenwald auf, ist dort aber makroskopisch nicht unterscheidbar. Der Abbau erfolgte vorwiegend in kleinen Steinbrüchen.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Zwischen 1879 und 1900 erlebte Redwitzit als Modegestein auf dem Alten Südfriedhof eine kurze Blütezeit. Neben Grabmalen wurde er häufig zu Pflastersteinen und sogar in der Schokoladenfabrikation (als Walzen) verarbeitet. Seine leichte Bearbeitbarkeit und dekorative Färbung machten ihn populär.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Wissenschaftlich bedeutsam als Zeiger für spätorogene Magmen im Varistikum. Trotz seiner regionalen Verbreitung blieb Redwitzit ein Nischenprodukt, das nach der Jahrhundertwende von anderen Gesteinen verdrängt wurde. Heute sind die historischen Verwendungen kaum noch bekannt.</p>",
  "hinweis": "<p style='text-align: justify;'>Achtung: Redwitzit aus verschiedenen Regionen (Fichtelgebirge, Odenwald) ist makroskopisch nicht unterscheidbar. Die Zuordnung erfordert petrographische Analysen oder Herkunftsnachweise.</p>"
},
    "lechbrucker-molassesandstein":
    {
        name: "Lechbrucker Molassesandstein",
        fundort: "Lechbruck am See (Oberbayern), Alpenvorland",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Fein- bis mittelkörniger, kalkgebundener Sandstein",
        alter: "Oligozän bis Miozän (ca. 30–10 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Molasse-Becken)",
        struktur: "Gleichkörnig, schwach gebankt, lokal schräggeschichtet",
        koordinaten: "Lechbruck am See: 47.7000° N, 10.8000° E",
        bild: "./Fotos/gestein/molasse_sandstein_scherer.JPG",
        beschreibung: "Der Lechbrucker Molassesandstein entstand durch Ablagerung von Flusssedimenten im alpinen Vorlandbecken. Charakteristisch ist seine kalkige Bindung und hohe Wetterbeständigkeit. Historisch wichtiger Baustein für Kirchen und Denkmäler im Allgäu. Oft mit fossilen Pflanzenabdrücken (Blattabdrücke) erhalten.",
    },
"jurakalk-grau": {
  "name": "Jura-Marmor (Treuchtlinger Marmor)",
  "fundort": "Fränkische Alb (Eichstätt, Treuchtlingen, Petersbuch-Erkertshofen, Titting, Kaldorf, Pappenheim)",
  "fundland": "Deutschland (Bayern)",
  "bezeichnung": "Fossilreicher Kalkstein (kein echter Marmor)",
  "alter": "Oberer Weißjura (ca. 150-145 Mio. Jahre)",
  "gesteinsgruppe": "Sedimentgestein (biogenes Karbonat)",
  "struktur": "Dicht bis feinkörnig, hellgelb bis blaugrau mit charakteristischen Fossilien (Ammoniten, Belemniten)",
  "koordinaten": [
    [48.90275191851211, 11.184478878411545],  // Eichstätt
    [48.93519422770228, 10.893221893957667],  // Treuchtlingen
    [48.89589973518316, 10.95480401974001]   // Pappenheim
  ],
  "bild": "./Fotos/gestein/jurastein_grau.JPG",
  "beschreibung": "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Jura-Marmor ist ein fossilreicher Kalkstein aus dem Oberen Weißjura, der durch Verdichtung von Kalkschlammsedimenten entstand. Trotz des Namens handelt es sich nicht um echten Marmor, da keine metamorphe Umwandlung stattfand. Charakteristisch sind die eingeschlossenen Ammoniten, Belemniten und Schwammstacheln.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Traditionelle Abbaugebiete liegen um Eichstätt und Treuchtlingen (daher auch 'Treuchtlinger Marmor'). Moderne Gewinnung erfolgt vorwiegend bei Titting und Kaldorf. Die Lagerstätten erstrecken sich über die gesamte Fränkische Alb mit Bankdicken bis 2 Metern.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Seit der Römerzeit als Bau- und Dekorstein genutzt. Berühmte Anwendungen finden sich in Münchner Prachtbauten (Residenz, Theatinerkirche) und barocken Kirchen. Seine Politurfähigkeit und Wetterbeständigkeit machten ihn zum bevorzugten Material für Fassaden und Skulpturen.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Die verschiedenen Farbvarianten (gelb, grau, bläulich) entstehen durch unterschiedliche Beimengungen von Tonmineralen. Als Naturstein von europäischem Rang wird Jura-Marmor heute noch extensiv abgebaut und vorwiegend für Restaurierungen und hochwertige Architektur verwendet.</p>",
  "hinweis": "<p style='text-align: justify;'>Wichtig: Trotz der Bezeichnung 'Marmor' handelt es sich geologisch um unmetamorphen Kalkstein. Die verschiedenen Farbvarietäten werden im Handel als 'Jura Gelb', 'Jura Grau' etc. angeboten.</p>"
},
"lithothamnienkalk": {
  "name": "Lithothamnienkalk (Granitmarmor, Rosenheimer Marmor, Neubeurer Marmor)",
  "fundort": "Alpennordrand (Neubeuern/Inn, Rohrdorf, Rosenheim), Allgäu bis Salzach",
  "fundland": "Deutschland (Bayern)",
  "bezeichnung": "Kalkalgen-Kalkstein (biogenes Karbonatgestein)",
  "alter": "Tertiär (Oligozän-Miozän, ca. 30-20 Mio. Jahre)",
  "gesteinsgruppe": "Sedimentgestein",
  "struktur": "Mittel- bis grobkörnig, geschichtet mit gelblichen Lithothamnien-Knollen und Quarz/Glaukonit-Einschlüssen",
  "koordinaten": [
    [47.7667, 12.1333],  // Neubeuern
    [47.8000, 12.1667],  // Rohrdorf
    [47.8500, 12.1333]   // Rosenheim
  ],
  "bild": "./Fotos/gestein/lithothamnienkalk.JPG",
  "beschreibung": "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Lithothamnienkalk entstand im Tertiärmeer des Alpenvorlands durch Ablagerung von Kalkalgen (Lithothamnien). Die charakteristischen gelblichen Algenknollen, zusammen mit Quarz- und Glaukonitkörnern in der kalkigen Grundmasse, verleihen dem Gestein sein granitähnliches Aussehen (daher 'Granitmarmor').</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Die wichtigsten Vorkommen erstrecken sich am Alpennordrand von Neubeuern bis Rosenheim mit Mächtigkeiten bis 30 Metern. Die isolierten Lagerstätten werden heute nur noch vereinzelt abgebaut. Historisch waren Brüche bei Neubeuern und Rohrdorf bedeutend.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Als dekorativer Werkstein unter Handelsnamen wie 'Rosenheimer Marmor' bekannt. Verwendung vor allem für lokale Sakralbauten und repräsentative Gebäude im Alpenvorland. Seine ungewöhnliche Textur machte ihn zu einem begehrten Material für Kunstgegenstände.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Das Gestein zeigt durch wechselnde Anteile von Algenknollen und mineralischen Beimengungen stark variierende Musterungen. Die bläuliche bis gelbgraue Färbung und grobe Textur unterscheiden es deutlich von anderen Kalksteinen der Region.</p>",
  "hinweis": "<p style='text-align: justify;'>Achtung: Trotz der Bezeichnungen 'Marmor' und 'Granit' handelt es sich weder um metamorphes Gestein noch um Granit. Die Namen beziehen sich ausschließlich auf das optische Erscheinungsbild dieses besonderen Kalksteins.</p>"
},
"hohenschwangauer-kalk": {
  name: "Hohenschwangauer Kalk",
  fundort: "Alpenvorland (Hohenschwangau)",
  fundland: "Deutschland (Bayern)",
  bezeichnung: "Fossilreicher Kalkstein (Oberkreide)",
  alter: "Oberkreide (ca. 90-70 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
  struktur: "Fein- bis mittelkörnig, bankig mit Rudisten- und Korallenfossilien",
  koordinaten: [
    [47.5572, 10.7375],  // Hohenschwangau
   
  ],
  bild: "./Fotos/gestein/hohenschwangauer_kalk.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Hohenschwangauer Kalk entstand in der Oberkreide in einem flachen Schelfmeer. Charakteristisch sind zahlreiche Fossilreste von Rudisten (ausgestorbene Muscheln) und Korallen, die dem Gestein seine typische Struktur verleihen. Die helle, beige-graue Färbung entsteht durch den hohen Kalkgehalt.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Traditionelle Abbaugebiete befinden sich im Dreieck Hohenschwangau-Füssen-Pfronten. Die Kalkbänke erreichen Mächtigkeiten bis 15 Meter und wurden seit dem Mittelalter in kleinen Steinbrüchen gewonnen. Heute findet nur noch vereinzelt Abbau statt.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Bereits für das Schloss Hohenschwangau (1832-1836) verwendet. Später beliebt für lokale Sakralbauten und Denkmäler im Allgäu. Seine gute Bearbeitbarkeit und Wetterbeständigkeit machten ihn zum bevorzugten Baumaterial der Region.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Als Zeugnis der Kreidezeit dokumentiert der Hohenschwangauer Kalk die tropischen Meeresbedingungen im Alpenvorland. Die charakteristischen Rudisten-Fossilien sind Leitfossilien für diese geologische Epoche. Das Gestein zeigt häufig schöne natürliche Musterungen.</p>",
  hinweis: "<p style='text-align: justify;'>Hinweis: Der Hohenschwangauer Kalk ist nicht zu verwechseln mit dem jüngeren Jura-Kalkstein der Fränkischen Alb. Für Restaurierungen wird ausschließlich Material aus den historischen Brüchen verwendet.</p>"
},
"diorit": {
  name: "Diorit",
  fundort: "Herkunft ungeklärt (mögliche Quellen: Bayerischer Wald, Fichtelgebirge, Alpen)",
  fundland: "Deutschland (Region unbekannt)",
  bezeichnung: "Magmatisches Tiefengestein (Plutonit)",
  alter: "Variskisch oder Alpidisch (ca. 300-50 Mio. Jahre)",
  gesteinsgruppe: "Magmatisches Gestein",
  struktur: "Mittel- bis grobkörnig, grau-schwarz mit hellen Feldspat-Einsprenglingen",
  koordinaten: null,
  bild: "./Fotos/gestein/diorit.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Diorit ist ein intermediäres Tiefengestein, das durch langsames Erstarren von Magma in der Erdkruste entstand. Charakteristisch ist seine salt-and-pepper-Textur durch die Kombination dunkler Minerale (Hornblende, Biotit) mit hellen Plagioklas-Feldspäten. Die genaue petrographische Zusammensetzung der am Südfriedhof verwendeten Varietät ist nicht dokumentiert.</p><br><p style='text-align: justify;'><strong>Historische Verwendung</strong><br>Am Alten Südfriedhof München wurde Diorit in der zweiten Hälfte des 19. Jahrhunderts vereinzelt für Grabsteine und Monumente verwendet. Trotz seiner attraktiven Optik blieb er ein Nischenmaterial, da Bearbeitung und Transport aufwändiger waren als bei lokalen Kalksteinen. Die exakte Herkunft der verbauten Steine ist archivalisch nicht belegt.</p><br><p style='text-align: justify;'><strong>Mögliche Herkunftsregionen</strong><br>Als mögliche Bezugsquellen kommen plutonische Vorkommen aus dem Bayerischen Wald, Fichtelgebirge oder den Zentralalpen in Frage. Eine petrographische Vergleichsstudie mit bekannten Diorit-Lagerstätten Süddeutschlands stünde noch aus.</p><br><p style='text-align: justify;'</p>",
},
"hoegler-sandstein": {
  name: "Högler Sandstein",
  fundort: "Dopplerbruch (Ainring), Gschwendtner Bruch, Högler Rundwanderweg (Salzburger Umgebung)",
  fundland: "Österreich (Salzburg)",
  bezeichnung: "Flysch-Sandstein (Altlengbach-Formation)",
  alter:"Kreidezeit (Rhenodanubischer Flysch, ca. 100-65 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (klastisch)",
  struktur: "Fein- bis mittelkörnig, blaugrau bis orange-beige mit welligen Schichtflächen und Rinnenkörpern",
  koordinaten: [
    [47.805483, 12.934944],  // Dopplerbruch bei Ainring
    [47.797541, 12.911810]   // Gschwendtner Bruch
  ],
  bild: "./Fotos/gestein/högler_sandstein.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Högler Sandstein gehört zur Altlengbach-Formation des Rhenodanubischen Flyschs. Charakteristisch sind seine welligen Schichtflächen und Rinnenkörper, die auf turbiditische Ablagerungen in einem Tiefseebecken hinweisen. Die variable Färbung von blaugrau bis orange-beige entsteht durch unterschiedliche Eisenoxid-Gehalte.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Historisch wurde der Sandstein vor allem im Dopplerbruch (17.-19. Jh.) und Gschwendtner Bruch (bis ca. 1950) gewonnen. Die Brüche liegen im Salzburger Umland und sind heute als Geotope mit Schautafeln erschlossen. Der letzte Abbau erfolgte um 1950 am Högler Rundwanderweg.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Der Högler Sandstein fand vorwiegend im Salzburger Raum Verwendung für Wetz- und Schleifsteine sowie Tür- und Fensterrahmen. Besondere Bedeutung erlangte er durch seinen Einsatz in der romanischen Basilika auf Herrenchiemsee. Seine gleichmäßige Körnung machte ihn ideal für feine Steinmetzarbeiten.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Als typischer Flysch-Sandstein zeigt der Högler ausgeprägte Sedimentstrukturen wie Gradierungsschichtung. Die historischen Steinbrüche sind heute Teil eines geologischen Lehrpfads (Högler Rundwanderweg) und dokumentieren die regionale Handwerkstradition.</p>",
  hinweis: "<p style='text-align: justify;'>Hinweis: Die historischen Steinbrüche bei Ainring und Gschwendt sind als Industriedenkmal erhalten und über den Högler Rundwanderweg mit informativen Schautafeln zugänglich.</p>"
},
   /* "forellen-sandstein":{
        name: "Forellensandstein",
        fundort: "Nördlicher Schwarzwald (z.B. Bad Liebenzell, Pforzheim), Kraichgau",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Buntsandstein mit charakteristischer Fleckung",
        alter: "Untere Trias (Buntsandstein, ca. 250–240 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, gebankt, mit dunklen Eisen-Mangan-Flecken",
        koordinaten: "Typuslokalität Bad Liebenzell: 48.7742° N, 8.7319° E",
        bild: "Hellgelber bis rötlicher Grundton mit dunkelbraunen, forellenartigen Flecken",
        beschreibung: "Der Forellensandstein erhielt seinen Namen durch die charakteristischen, an Fischhaut erinnernden Flecken (Mangan- und Eisenoxid-Ausscheidungen). Entstand in fluviatilen bis äolischen Ablagerungsmilieus. Wichtiger historischer Baustein für Sakralbauten und repräsentative Gebäude in Baden-Württemberg."
    },*/
"plattensandstein": {
  name: "Plattensandstein",
  fundort: "Süddeutschland (Fränkische Alb, Schwäbische Alb, Odenwald, Spessart, Pfalz, Saargebiet), Thüringen, Sachsen",
  fundland: "Deutschland (Bayern, Baden-Württemberg, Hessen, Rheinland-Pfalz, Saarland, Thüringen, Sachsen)",
  bezeichnung: "Dünnbankiger Sandstein mit plattiger Absonderung",
  alter: "Meist Unterer Keuper oder Oberer Buntsandstein (Trias, 250–200 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
  struktur: "Fein- bis mittelkörnig, ausgeprägte plattige Bankung (2–10 cm Schichtdicke), frostempfindlich",
  koordinaten: [
    [49.0000, 8.7500],  // Nordschwarzwald
    [49.8333, 9.0000],  // Spessart
    [50.1500, 10.5000]  // Hassberge
  ],
  bild: "./Fotos/gestein/Stein_Brey.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Plattensandsteine entstanden in flachen Meeres- oder Delta-Bereichen mit rhythmischer Sedimentation. Die charakteristische plattige Absonderung resultiert aus feinen Tonlagen zwischen den Sandsteinbänken. Die Farbe variiert je nach Region von rötlich bis gelblich-grau.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Historisch wurde der Stein in zahlreichen Brüchen gewonnen, besonders im südlichen Baden-Württemberg, Odenwald, Spessart, Pfalz und Saargebiet. Die plattige Struktur ermöglichte eine einfache Gewinnung von Dünnplatten, führte aber zu hohem Verschnitt.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Am Alten Südfriedhof trat Plattensandstein ab den 1840er Jahren auf, war aber nach 1900 kaum noch zu finden. Hauptsächlich verwendet für Fußbodenplatten, Tröge und architektonische Details. Trotz seiner Harte erwies er sich als frostempfindlich, was seine Nutzung einschränkte.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Der Stein zeigt ausgeprägte Reaktionen auf Frost-Tau-Wechsel, was zu vorzeitiger Verwitterung führen kann. Seine plattige Natur machte ihn ideal für bestimmte Anwendungen, begrenzte aber auch die Einsatzmöglichkeiten. Heute nur noch selten in Restaurierungen verwendet.</p>",
  hinweis: "<p style='text-align: justify;'>Achtung: Trotz seiner an sich robusten Natur ist Plattensandstein für frostexponierte Anwendungen ungeeignet. Bei historischen Grabmalen sind oft typische Schalenbildungen und Absandungen zu beobachten.</p>"
},
   /* "larvikit":
    {
        name: "Larvikit",
        fundort: "Larvik (Vestfold, Norwegen), Oslo-Graben",
        fundland: "Norwegen, Schweden (begrenzt)",
        bezeichnung: "Monzonitisches Ganggestein",
        alter: "Perm (ca. 290–250 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Gleichkörnig bis porphyrisch, mittel- bis grobkörnig",
        koordinaten: "Typuslokalität Larvik: 59.0500° N, 10.0333° E",
        bild: "Dunkelblau-grau mit charakteristischem bläulichem Schimmer ('Blue Pearl'-Effekt)",
        beschreibung: "Larvikit ist ein alkalireiches Ganggestein des Oslo-Grabens, charakterisiert durch seinen hohen Anteil an Anorthoklas-Feldspat (60–70%) und Augit (20–30%). Bekannt für seinen irisierenden Schimmer (Labradoreszenz), der durch Lichtbrechung in den Feldspäten entsteht. Weltweit geschätzter Naturwerkstein für Architektur und Design."
    },*/
"zoeblitzer-serpentinit": {
  name: "Zöblitzer Serpentinit (Granatserpentin)",
  fundort: "Zöblitz, Erzgebirge (Sachsen)",
  fundland: "Deutschland (Sachsen)",
  bezeichnung: "Metamorphes Ultramafitit mit Granat-Einschlüssen",
  alter: "Paläozoikum (ca. 380 Mio. Jahre)",
  gesteinsgruppe: "Metamorphes Gestein",
  struktur: "Dicht, schuppig mit roten Granat-Einsprenglingen in grüner Matrix",
  koordinaten: [
    [50.656208, 13.244576]  // Exakte Koordinaten des Abbaus in Zöblitz
  ],
  bild: "./Fotos/gestein/zöblitzer.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Zöblitzer Serpentinit ist ein besonders widerstandsfähiges Serpentingestein mit charakteristischen roten Granat-Einsprenglingen in grüner Matrix. Entstanden durch Metamorphose von ultramafischen Gesteinen im Erzgebirge. Die Granate (meist Almandin) machen diesen Typus einzigartig unter deutschen Serpentiniten.</p><br><p style='text-align: justify;'><strong>Abbau & Lagerstätten</strong><br>Gewonnen im historischen Steinbruch bei Zöblitz, der seit dem 16. Jahrhundert bekannt ist. Der Abbau wurde nach 1945 eingestellt, da keine Lieferungen mehr in die Bundesrepublik erfolgten. Die Lagerstätte gehört zum Erzgebirgischen Kristallin.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Am Alten Südfriedhof zeigt der Zöblitzer Granatserpentin eine ungewöhnlich gute Erhaltung - entgegen der literarischen Beschreibung als verwitterungsanfällig. Meist nur leicht angewittert, belegt dies seine besondere Resistenz. Verwendung vor allem für kunstvolle Grabmal-Elemente.</p><br><p style='text-align: justify;'><strong>Besonderheiten</strong><br>Als resistentester Serpentin-Typ Deutschlands widerlegt der Zöblitzer Granatserpentin das Klischee der Verwitterungsanfälligkeit. Seine charakteristische grün-rote Farbskala und politurfähige Oberfläche machten ihn zum begehrten Material für Drechsler und Steinmetze.</p>",
  hinweis: "<p style='text-align: justify;'>Wichtiger Hinweis: Der historische Abbau in Zöblitz ist heute als Schaubergwerk zugänglich. Für Restaurierungen muss auf Altbestände zurückgegriffen werden, da keine Neugewinnung mehr stattfindet.</p>"
},

"nero-portoro": {
  "name": "Nero Portoro (Mischio giallo e nero)",
  "fundort": "La Spezia-Provinz (Ligurien, Italien) - verschiedene Abbauorte",
  "fundland": "Italien",
  "bezeichnung": "Dekorativer Kalkstein mit charakteristischer Aderung",
  "alter": "Unterjura (Toarcium, ca. 180 Mio. Jahre)",
  "gesteinsgruppe": "Sedimentgestein (Karbonatgestein)",
  "struktur": "Feinkörnige schwarze Kalzit-Grundmasse mit hellgrauen Kalzit-Knollen, weißen Dolomitadern und goldgelben Dolomitlagen/Stylolithen",
  "koordinaten": [
    [44.08837343940697, 9.797281834538362],  // La Spezia Region

     [44.076533066405794, 9.813525883964205],
    [44.06093852517202, 9.823388253249872]   // Portovenere
  ],
  "bild": "./Fotos/gestein/portoro.JPG",
  "beschreibung": "<br><p style='text-align: justify;'><strong>Petrographie & Zusammensetzung</strong><br>Nero Portoro ist ein komplex aufgebauter Kalkstein mit feinkörniger, schwarzer Kalzit-Grundmasse (durch organische Pigmentierung), hellgrauen Kalzit-Knollen und zwei Aderungstypen: 1) weiße Dolomitadern, 2) goldgelbe Dolomitlagen und Stylolithen (durch Limonit-Eisenhydroxide gefärbt). Die Stylolithen bezeugen Lösungsprozesse während der Diagenese.</p><br><p style='text-align: justify;'><strong>Varietäten & Abbau</strong><br>Historisch als 'Mischio giallo e nero' bekannt. Wichtige Varianten: Portoro a macchia larga (großfleckig), Portoro a macchia fine (feinfleckig), Portoro corrente (gleichmäßig), Portargento (silbrig), Portorino (heller), Nero e Bianco (kontrastreich). Abbau in der La Spezia-Region, viele historische Brüche sind erschöpft.</p><br><p style='text-align: justify;'><strong>Technische Eigenschaften</strong><br>Trotz sedimentärer Herkunft zeigt Portoro hervorragende Politurfähigkeit. Die verschiedenen Varietäten unterscheiden sich in Grundton (tiefschwarz bis grau) und Aderungsintensität (fein bis ausgeprägt). Die goldgelben Partien können zentimeterdick sein oder als feine, gezackte Stylolithen auftreten.</p><br><p style='text-align: justify;'><strong>Kulturelle Bedeutung</strong><br>Seit der Römerzeit einer der prestigeträchtigsten italienischen Natursteine. Verwendung in Repräsentationsarchitektur und luxuriösen Innenausbauten. Die komplexe Entstehungsgeschichte macht jeden Block einzigartig - besonders geschätzt werden stark geaderte Varietäten für dekorative Zwecke.</p>",
  "hinweis": "<p style='text-align: justify;'>Wichtig: Obwohl häufig als 'Marmor' bezeichnet, handelt es sich petrographisch um einen Kalkstein. Die Bezeichnung 'Portoro' ist geschützt und darf nur für Steine aus der La Spezia-Region verwendet werden. Moderne Imitate erreichen nicht die Originalqualität.</p>"
},
  "adneter-marmor": {
  name: "Adneter Marmor",
  fundort: "Adnet, Salzburger Land (Österreich) - Adneter Marmorbrüche",
  fundland: "Österreich (Salzburg)",
  bezeichnung: "Fossilreicher Riff- und Knollenkalk (Adnet-Formation)",
  alter: "Unterjura (Lias, ca. 200-180 Mio. Jahre)",
  gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
  struktur: "Bankig bis knollig, hochfossilführend mit charakteristischer Rotfärbung",
  koordinaten: [
    [47.7000, 13.1333]  // Adnet, Austria
  ],
  bild: "./Fotos/gestein/adneter_marmor.JPG",
  beschreibung: "<br><p style='text-align: justify;'><strong>Petrographie & Entstehung</strong><br>Der Adneter Marmor (Adnet-Formation) ist ein fossilreicher Riff- und Knollenkalk aus dem Unterjura. Charakteristisch sind seine roten bis rosafarbenen Knollen in grauer Matrix, entstanden durch Eisenoxid-Pigmentierung in einem flachen tropischen Meer. Enthält zahlreiche Fossilien von Ammoniten und Belemniten.</p><br><p style='text-align: justify;'><strong>Abbau & Varietäten</strong><br>Gewonnen in den historischen Adneter Marmorbrüchen. Die Formation zeigt verschiedene Faziesausbildungen von massigen Riffkalken bis zu plattigen Knollenkalken. Zusammen mit Ruhpoldinger und Trientiner 'Marmor' bildet er die klassischen roten Knollenkalke Mitteleuropas.</p><br><p style='text-align: justify;'><strong>Historische Nutzung</strong><br>Seit dem 17. Jahrhundert in München nachgewiesen. Berühmte Verwendung in Meisterwerken der Spätgotik (Veit Stoß, Riemenschneider, Gerhaert van Leyden). Besonders geschätzt für Taufsteine, Grabmonumente und Sakralkunst. Seine Politurfähigkeit und Farbbrillanz machten ihn zum bevorzugten Material repräsentativer Kunstwerke.</p><br><p style='text-align: justify;'><strong>Kulturelle Bedeutung</strong><br>Trotz petrographisch korrekter Bezeichnung als Kalkstein hat sich der Begriff 'Adneter Marmor' kunsthistorisch etabliert. Die unverwechselbare Rotfärbung und Fossilführung machen ihn zu einem der bedeutendsten historischen Werksteine des Alpenraums, besonders für sakrale Kunst.</p>",
  hinweis: "<p style='text-align: justify;'>Wichtig: Es handelt sich petrographisch um Kalkstein, nicht um Marmor. Die Bezeichnung 'Marmor' ist traditionell und bezieht sich auf die Politurfähigkeit. Echte Adneter Varietäten zeigen immer charakteristische Fossilien und Knollenstrukturen.</p>"
},
/*        fundort: "Hierlatz (Dachsteingebirge, Österreich), Nördliche Kalkalpen",
        fundland: "Österreich (Oberösterreich, Steiermark), Deutschland (Bayern)",
        bezeichnung: "Crinoiden-Schuttkalk mit Seelilien-Stielgliedern",
        alter: "Obertrias (Norium, ca. 220–210 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
        struktur: "Grobbankig, stark zertrümmerte Crinoiden-Stielglieder in karbonatischer Matrix",
        koordinaten: "Typuslokalität: 47.5333° N, 13.6333° E",
        bild: "Hellgrau bis beige, mit deutlich sichtbaren runden Stielgliedern (Trochiten) in verschiedenen Größen",
        beschreibung: "Der Hierlatzkalk entstand in flachen Schelfmeeren durch Akkumulation von Crinoiden-Schutt. Charakteristisch sind massenhafte, millimeter- bis zentimetergroße Stielglieder (Trochiten) der Seelilie _Encrinus carnalli_. Wichtiger stratigraphischer Leithorizont in den Nördlichen Kalkalpen. Lokal als Naturwerkstein genutzt."
    }
*/
}; 


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#gesteinListe li');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Automatische active-Klasse Verwaltung
            items.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Zeige Details an
            const steinId = this.getAttribute('data-stein');
            const stein = gesteineDaten[steinId];
            
            if (stein) {
                document.getElementById('gesteinDetails').innerHTML = `
                <div class="details-content">
                    <h2>${stein.name}</h2>
                    <div class="gestein-info-grid">
                        <div class="gestein-info-item">
                            <span class="gestein-info-label">Fundort:</span>
                            <span class="gestein-info-value">${stein.fundort || 'Nicht verfügbar'}
                                ${stein.koordinaten ? `
                                <button class="show-on-map-btn" 
                                        onclick="window.showOnMapWithId('${steinId}')">
                                    Auf Karte zeigen
                                </button>` : ''}
                            </span>
                        </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Fundland:</span>
                                <span class="gestein-info-value">${stein.fundland || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Bezeichnung:</span>
                                <span class="gestein-info-value">${stein.bezeichnung || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Alter:</span>
                                <span class="gestein-info-value">${stein.alter || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Gesteinsgruppe:</span>
                                <span class="gestein-info-value">${stein.gesteinsgruppe || 'Nicht verfügbar'}</span>
                            </div>
                    
                               <div class="gestein-info-item">
                                <span class="gestein-info-label">Textur:</span>
                                <span class="gestein-info-value">${stein.struktur || 'Nicht verfügbar'}</span>
                            </div>
                        </div>

                                              ${stein.bild ? `
                        <div class="gestein-image-container">
                            <img src="${stein.bild}" alt="${stein.name}" class="gestein-image">
                            <div class="bildunterschrift">${stein.bildunterschrift || 'Gesteinsbild'}</div>
                               <br>
                               <br>
                        <div class="beschreibung-content">
                            <h3>Beschreibung</h3>
                            <p>${stein.beschreibung || 'Keine Beschreibung verfügbar.'}</p>
                            
                        </div>
                                <br>
                                <br>
                          <div class="hinweis-content">
                            <h3>Hinweis</h3>
                            
                            <p>${stein.hinweis || ''}</p>
                        </div>


                        ` : ''}
                    </div>
                `;
            }
        });
    });
    
    if (items.length > 0) {
        items[0].click();
        showSection('gesteine'); // Standardmäßig Gesteine anzeigen
    } else {
        showSection('home'); // Fallback
    }
});

document.getElementById('gesteinDropdown').addEventListener('change', function () {
  const steinId = this.value;
  if (steinId) {
    // Simuliere Klick auf entsprechendes Listenelement
    const item = document.querySelector(`.gestein-liste li[data-stein="${steinId}"]`);
    if (item) item.click();
  }
});

document.getElementById('personenDropdown').addEventListener('change', function () {
  const personId = this.value;
  if (personId) {
    const item = document.querySelector(`.personen-liste li[data-person="${personId}"]`);
    if (item) item.click();
  }
});

document.getElementById('gesteinDropdown').addEventListener('change', function () {
  const steinId = this.value;
  if (steinId) {
    // Entsprechendes Listenelement finden
    const item = document.querySelector(`.gestein-liste li[data-stein="${steinId}"]`);
    if (item) {
      item.click(); // Klick programmatisch auslösen
    }
  }
});
