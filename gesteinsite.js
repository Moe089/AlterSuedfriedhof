// Initialisierung

('home');

const gesteineDaten = {
    "tegernseer-marmor": {
        name: "Tegernseer Marmor",
        fundort: "Tegernsee, Bayern",
        koordinaten: [47.67378102710026, 11.74826137299096],
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Jura",
        gesteinsgruppe: "Sedimentgestein",
        bild: "./Fotos/gestein/Tegernseer_Marmor.png",
        struktur: "brekziös bzw. knollig",
        beschreibung: "Der sogenannte Tegernseer Marmor ist ein polierfähiger, biogener Kalkstein aus dem Oberjura, der in der Umgebung des Tegernsees (Bayern) vorkommt. Petrographisch handelt es sich um einen fein- bis mittelkörnigen Kalkstein mit fossilen Einschlüssen, der durch seine hell- bis blaugraue Farbgebung und hohe Polierfähigkeit geschätzt wird. Im Grabmalbereich findet der Stein seit dem 19. Jahrhundert Anwendung. Er wird für Grabplatten, Stelen und Inschriftentafeln verwendet, da er witterungsbeständig, gut beschriftbar und ästhetisch ansprechend ist."
        },
    "kelheimer-kalkstein": {
        name: "Kelhheimer Kalkstein",
        fundort: "Neuessing/ Kelhheim, Bayern",
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Jura",
        gesteinsgruppe: "Sedimentgestein",
        bild: "./Fotos/gestein/Stein_Klenze.jpg",
        struktur: "weitgehend richtungslos",
        koordinaten: [48.92815148446526, 11.83520637865144] ,
    },
    "rosenheimer-granit": {
        name: "Rosenheimer Granit",
        fundort: "Rohrbach/ Rosenheim, Bayern",
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Tertiär",
        gesteinsgruppe: "Sedimentgesteine",
        struktur: "brekziös bzw. knollig",
        koordinaten: [[47.788089069308334, 12.192795732476736], [47.788933846086735, 12.184783826998231]],
        bild: "./Fotos/gestein/Unterstein_Reichenbach.jpg",
        beschreibung: "Der Rosenheimer Kalkstein ist eine typische Kalkbrekzie des alpinen Molassebeckens. Entstanden durch Umlagerung von Kalkgeröllen in Flusssystemen des jungen Alpenvorlands. Charakteristisch sind die eingebetteten, bis faustgroßen Kalkknollen in einer kalkigen Matrix. Historisch als Mauerstein und für Fundamentbauten genutzt."
    },
    
        "nummulitenkalk": {
            name: "Nummulitenkalk",
            fundort: "Enzenauer Marmor (Bad Heilbrunn), Sonthofen, Rohrdorf, Reichenhall",
            fundland: "Deutschland (Alpennordrand)",
            bezeichnung: "Enzenauer Marmor / Enzenauer Kalkstein",
            alter: "Alttertiär",
            gesteinsgruppe: "Fossilschuttkalk",
            struktur: "dickbankig, dicht, grau oder rötlich-braun mit Nummuliten, Mollusken, Seeigeln und Kalkalgen",
            koordinaten:   [
                [47.7512, 11.4347],  // Beispiel: Bad Heilbrunn
                [47.5144, 10.2814],  // Beispiel: Sonthofen
                [47.7972, 12.1700]   // Beispiel: Rohrdorf
            ],
            bild: "./Fotos/gestein/Stein_Zenetti.JPG",
            beschreibung: "Ein im Alttertiär abgelagerter Fossilschuttkalk mit charakteristischen Nummuliten-Einschlüssen (münzenförmige Foraminiferen-Gehäuse). Wirtschaftlich bedeutendstes Vorkommen war der Enzenauer Marmor bei Bad Heilbrunn. Rohdichte: 2,72 g/cm³, Druckfestigkeit: 45–136 N/mm². Wurde als Dekorationsmarmor und Mauerstein genutzt, Abbau mittlerweile eingestellt."
        
    },
    "rillenkarren": {
        
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
        
    },

    "molassesandstein": {
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
    },
    "getigerter-schilfsandstein": {
        name: "roter getigerter Schilfsandstein",
        fundort: "Stuttgart (Deutschland), speziell im Stuttgarter Raum (z.B. Bad Cannstatt), Keuperbergland",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Feinkörniger Sandstein mit tigerartiger Bänderung (Wechsellagerung von hellen und dunklen Schichten)",
        alter: "Obere Trias (Keuper, ca. 220–205 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Sandstein)",
        struktur: "Dünnbankig, wechselnd tonig-sandige Lagen, typische Wechselschichtung („Tigerung“)",
        koordinaten: "Beispiel Stuttgart-Bad Cannstatt: 48.8039° N, 9.2107° E",
        bild: "./Fotos/gestein/jolly_stein.JPG",
        beschreibung: "Der Getigerte Schilfsandstein ist ein charakteristischer Sandstein des Keupers, der durch rhythmische Ablagerung in flachen Meeres- oder Delta-Bereichen entstand. Die „Tigerung“ entsteht durch Wechsellagerung von tonigen und sandigen Lagen. Wichtiger historischer Baustein (z.B. in Stuttgarter Altbauten).",
    },
   
    "carrara-marmor": {
        name: "Getigerter Schilfsandstein",
        fundort: "Stuttgart (Deutschland), speziell im Stuttgarter Raum (z.B. Bad Cannstatt), Keuperbergland",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Feinkörniger Sandstein mit tigerartiger Bänderung (Wechsellagerung von hellen und dunklen Schichten)",
        alter: "Obere Trias (Keuper, ca. 220–205 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Sandstein)",
        struktur: "Dünnbankig, wechselnd tonig-sandige Lagen, typische Wechselschichtung („Tigerung“)",
        koordinaten: "Beispiel Stuttgart-Bad Cannstatt: 48.8039° N, 9.2107° E",
        bild: "./Fotos/gestein/Albert_Stein_carrara.JPG",
        beschreibung: "Der Getigerte Schilfsandstein ist ein charakteristischer Sandstein des Keupers, der durch rhythmische Ablagerung in flachen Meeres- oder Delta-Bereichen entstand. Die „Tigerung“ entsteht durch Wechsellagerung von tonigen und sandigen Lagen. Wichtiger historischer Baustein (z.B. in Stuttgarter Altbauten).",
    },
    "gelber-sandstein": {
        name: "gelb-bräunlicher Sandstein",
        fundort: "Elbsandsteingebirge (Deutschland/Tschechien), Pfälzerwald, Thüringen, Frankreich (Vosges)",
        fundland: "Deutschland, Tschechien, Frankreich, USA (Colorado)",
        bezeichnung: "Eisenoxid-reicher Sandstein (häufig als 'Postaer Sandstein' oder 'Naturgelb' bezeichnet)",
        alter: "Kreidezeit (ca. 100–70 Mio. Jahre, z.B. Elbsandstein = Oberkreide)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, quarzdominiert, gebankt oder massig",
        koordinaten: "Elbsandstein-Beispiel: 50.9236° N, 14.0714° E (Posta, Sächsische Schweiz)",
        bild: "Gelblich bis ockerfarben (durch Limonit-Beimengungen), teils mit Schrägschichtung",
        beschreibung: "Gelber Sandstein entsteht durch klastische Ablagerung in Fluss- oder Küstenbereichen. Die Färbung resultiert aus Eisenoxid-Hydraten (Limonit). Wichtiger historischer Baustein für Denkmäler (z.B. Dresdner Frauenkirche) und Bildhauerei. Varianten zeigen unterschiedliche Verwitterungsbeständigkeit.",
    },
    "muschelkalk": {
        name: "Muschelkalk",
        fundort: "Kirchheim unter Teck (Baden-Württemberg), Schwäbische Alb",
        fundland: "Deutschland",
        bezeichnung: "Feinkörniger Trochitenkalk (Unterer Muschelkalk)",
        alter: "Trias (Unterer Muschelkalk, ca. 240 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Dicht bis feinkörnig, reich an Trochiten (Encrinus liliiformis-Fossilien), teils bankig",
        koordinaten: "Kirchheim unter Teck: 48.6489° N, 9.4518° E",
        bild: "./Fotos/gestein/Ohm_Stein.JPG",
        beschreibung: "Der Kirchheimer Muschelkalk ist ein fossilreicher Kalkstein der Unteren Muschelkalk-Formation. Charakteristisch sind massenhafte Vorkommen von Trochiten (Crinoideen-Stielglieder). Wichtiger historischer Baustein für regionale Architektur (z.B. Kirchheimer Altstadt).",
    },
    "kösseine-granit":
    {
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
    },
    "ochsenkopf-proterobas":
    {
        name: "Ochsenkopf-Proterobas",
        fundort: "Ochsenkopf-Massiv, Fichtelgebirge (Bayern)",
        fundland: "Deutschland",
        bezeichnung: "Nephelinbasalt (alkalibasaltisches Ganggestein)",
        alter: "Tertiär (ca. 20–25 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Subvulkanit)",
        struktur: "Dicht bis feinkörnig, teilweise porphyrisch mit Olivin-Einsprenglingen",
        koordinaten: "Ochsenkopf-Gipfel: 50.0319° N, 11.8086° E",
         bild: "./Fotos/gestein/ochsenkopf.JPG",
        beschreibung: "Der Ochsenkopf-Proterobas ist ein alkalireicher Basalt, der als Gangfüllung im Fichtelgebirgsgranit auftritt. Charakteristisch ist sein Reichtum an Nephelin und Olivin. Wichtiges geologisches Archiv für die tertiäre Vulkanaktivität in Nordbayern. Verwendung als Schottermaterial und lokaler Naturwerkstein.",
    },
    "diabas":
    {
        name: "Diabas",
        fundort: "Rheinisches Schiefergebirge (Deutschland), Harz, Thüringer Wald, Odenwald; weltweit verbreitet",
        fundland: "Deutschland, Österreich, Schweden, USA, Indien, Australien",
        bezeichnung: "Basaltähnliches Ganggestein (subvulkanisches Äquivalent zu Gabbro)",
        alter: "Meist paläozoisch (z.B. devonisch im Rheinischen Schiefergebirge, ca. 400 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit/Ganggestein)",
        struktur: "Dicht bis feinkörnig, ophitisch (typische Verzahnung von Plagioklas und Pyroxen)",
        koordinaten: "Beispiel Lahn-Dill-Gebiet: 50.5667° N, 8.5000° E",
        bild: "Dunkelgrau bis schwarzgrün, frisch bläulich schimmernd, verwittert bräunlich",
        beschreibung: "Diabase entstanden durch langsameres Erkalten basaltischer Magmen in der Erdkruste (im Vergleich zu Vulkaniten). Charakteristische Mineralogie: Plagioklas (Labradorit), Augit, ± Olivin, ± Magnetit. Wichtiger Rohstoff für Schotter, Straßenbau und historisch als Mühlstein.",
    },
    "untersberger-marmor":{
        name: "Untersberger Marmor",
        fundort: "Fürstenbrunn / Salzburg Grödig Fürstenbrunn Veitlbruch (seit 1919 nicht mehr betrieben) Hofbruch Neu- und Mittelbruch Mayr-Melnhof-Bruch",
        fundland: "Deutschland",
        bezeichnung: "",
        bild: "./Fotos/gestein/schlagintweit.JPG",


    },
    "schwarz-schwedisch-basalt":{
        name: "schwarz-schwedisch Basalt",
        bild: "./Fotos/gestein/schwarz_basalt_robl.JPG",
        fundort: "Saganäs/ Älmhult"
    },
    "serpentinit":
    {
        name: "Serpentinit",
        fundort: "Zöblitz (Erzgebirge), Hohe Tauern (Österreich), Ligurien (Italien), Kalifornien (USA)",
        fundland: "Deutschland, Österreich, Italien, USA, Russland, Griechenland",
        bezeichnung: "Metamorphes Ultramafitit (Serpentingestein)",
        alter: "Meist paläozoisch bis mesozoisch (z.B. Erzgebirge: ~380 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein",
        struktur: "Dicht, faserig bis schuppig (Antigorit/Chrysotil-Texturen), oft mit Magnetitadern",
        koordinaten: "Zöblitz-Steinbruch: 50.6581° N, 13.2294° E",
                bild: "./Fotos/gestein/Wandplatten_Knorr.JPG",
        beschreibung: "Serpentinite entstehen durch Metamorphose von ultramafischen Gesteinen (Peridotit, Dunite) unter hydratisierenden Bedingungen. Hauptminerale: Antigorit, Chrysotil, Lizardit ± Magnetit. Historisch als Zöblitzer Serpentin für Kunstgegenstände genutzt. Heute als Dämmstoff und Dekorstein relevant.",
    },
    "kalktuff":
    {
        name: "Kalktuff",
        fundort: "Karstquellen (z.B. Schwäbische Alb, Fränkische Alb), Flussläufe (Travertin-Terassen von Pamukkale/Türkei), Yellowstone-Nationalpark (USA)",
        fundland: "Deutschland, Türkei, USA, Italien, Island",
        bezeichnung: "Süßwasserkalk (poröser Kalkstein)",
        alter: "Holozän bis Pleistozän (meist < 1 Mio. Jahre alt)",
        gesteinsgruppe: "Sedimentgestein (chemisch-biogenes Karbonat)",
        struktur: "Hochporös (30-60% Hohlräume), schaumig bis blasig, oft mit Pflanzenabdrücken",
        koordinaten: "Beispiel Blaubeuren (Schwäbische Alb): 48.4125° N, 9.7853° E",
                bild: "./Fotos/gestein/Stein_ett.JPG",
        beschreibung: "Kalktuff entsteht durch chemische Ausfällung von Kalk (CaCO₃) aus kalkgesättigtem Quellwasser, oft begünstigt durch Moose/Algen. Charakteristisch sind eingeschlossene Pflanzenreste und hohe Porosität. Wichtiger historischer Baustein (z.B. Kloster Maulbronn) und Ökosystem für Spezialisten.",
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
    "redwezit":
    {
        name: "Redwitzit",
        fundort: "Redwitz an der Rodach (Oberfranken), Fichtelgebirge, Bayerischer Wald",
        fundland: "Deutschland, Tschechien (Böhmische Masse), Österreich",
        bezeichnung: "Lamprophyr-artiges Ganggestein",
        alter: "Spätvariszisch (Oberkarbon, ca. 300–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Ganggestein)",
        struktur: "Porphyrisch mit Einsprenglingen in feinkörniger Grundmasse",
        koordinaten: "Typuslokalität Redwitz: 50.1667° N, 11.2000° E",
        bild: "Knorr Säule Foto",
        beschreibung: "Redwitzit ist ein intermediäres Ganggestein mit mineralogischer Ähnlichkeit zu Lamprophyren. Charakteristische Zusammensetzung: Plagioklas, Hornblende, Biotit ± Quarz. Benannt nach der Ortschaft Redwitz. Wissenschaftlich bedeutend als Zeiger für spätorogene Magmen im Varistikum.",
    },
  /*  "lechbrucker-molassesandstein":
    {
        name: "Lechbrucker Molassesandstein",
        fundort: "Lechbruck am See (Oberbayern), Alpenvorland",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Fein- bis mittelkörniger, kalkgebundener Sandstein",
        alter: "Oligozän bis Miozän (ca. 30–10 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Molasse-Becken)",
        struktur: "Gleichkörnig, schwach gebankt, lokal schräggeschichtet",
        koordinaten: "Lechbruck am See: 47.7000° N, 10.8000° E",
        bild: "Hellgrau bis gelblich, teils mit rostfarbenen Eisenoxid-Flecken",
        beschreibung: "Der Lechbrucker Molassesandstein entstand durch Ablagerung von Flusssedimenten im alpinen Vorlandbecken. Charakteristisch ist seine kalkige Bindung und hohe Wetterbeständigkeit. Historisch wichtiger Baustein für Kirchen und Denkmäler im Allgäu. Oft mit fossilen Pflanzenabdrücken (Blattabdrücke) erhalten.",
    },*/
    "jurakalk-grau":
    {
        name: "Grauer Jurakalk (Braunjura)",
        fundort: "Schwäbische Alb (z.B. Blumberg, Hegau), Fränkische Alb",
        fundland: "Deutschland (Baden-Württemberg, Bayern), Schweiz, Frankreich (Jura-Gebirge)",
        bezeichnung: "Fossilreicher mergeliger Kalkstein",
        alter: "Mittlerer Jura (Dogger, ca. 175–160 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Bankig bis plattig, oft mit Eisenoolith-Lagen und Fossilien (Ammoniten, Belemniten)",
        koordinaten: "Beispiel Blumberg: 47.8406° N, 8.5336° E",
        bild: "Graubraun bis bläulich-grau, verwittert gelblich, typische Eisenoxid-Flecken",
        beschreibung: "Der Graue Jurakalk entstand in flachen Meeresbereichen des Jurameers. Charakteristisch ist sein Wechsel zwischen Kalk- und Mergellagen mit hohem Fossilgehalt. Wirtschaftlich wichtig als Naturwerkstein und Zementrohstoff. Besondere Varietäten enthalten Eisenoolithe („Eisenstein“).",
    },
  /*  "lithothammnienkalk":
        {
            name: "Lithothamnienkalk",
            fundort: "Mittelmeerregion (z.B. Sizilien, Malta), Atlantikküste (Bretagne), Nordsee (Doggerbank)",
            fundland: "Italien, Frankreich, Spanien, Deutschland (Nordsee), Dänemark",
            bezeichnung: "Rotalgenkalk (korallenroter Algenkalk)",
            alter: "Neogen bis Quartär (meist pliozän bis holozän, < 5 Mio. Jahre)",
            gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
            struktur: "Feinkörnig, porös bis dicht, oft schaumig mit Algenstrukturen",
            koordinaten: "Beispiel Malta: 35.9042° N, 14.5189° E",
            bild: "Weißlich bis korallenrot, typische stängelige Mikrostruktur",
            beschreibung: "Lithothamnienkalk besteht überwiegend aus den Kalkskeletten krustenbildender Rotalgen (Lithothamnium spp.). Entsteht in flachen Subtidalzonen durch Algenrasen. Wichtiger Rohstoff für Düngemittel (Algenkalk) und als pH-Regulator in der Landwirtschaft. Kommerziell in der Aquaristik verwendet.",
        },
    "hohenschwangauer-kalk":{
        name: "Hohenschwangauer Kalk",
        fundort: "Umgebung Hohenschwangau (Allgäuer Alpen), Pfronten, Schwangau",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Kalkstein der Allgäu-Decke (Helvetikum)",
        alter: "Kreidezeit bis Paläogen (ca. 100–50 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Bankig bis massig, fein- bis mittelkörnig, teilweise mergelig",
        koordinaten: "Typusgebiet: 47.5578° N, 10.7372° E (Hohenschwangau)",
        bild: "Hellgrau bis bläulich-grau, verwittert gelblich, teils mit Fossilresten",
        beschreibung: "Der Hohenschwangauer Kalk gehört zur Allgäu-Formation der helvetischen Decken. Charakteristisch sind Wechsellagerungen von reinen Kalkbänken und mergeligen Zwischenlagen. Lokal mit Einschaltungen von Flysch-Sedimenten. Wichtiger historischer Baustein für Schlösser (Neuschwanstein) und Kirchenbauten im Allgäu."
    },
    "diorit":{
        name: "Diorit",
        fundort: "Odenwald (Deutschland), Adamello-Massiv (Italien), Sierra Nevada (USA), Cornwall (UK)",
        fundland: "Deutschland, Italien, USA, Großbritannien, Norwegen, Türkei",
        bezeichnung: "Intermediäres Tiefengestein",
        alter: "Meist paläozoisch bis mesozoisch (z.B. Odenwald: 340–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Gleichkörnig bis porphyrisch, mittel- bis grobkörnig",
        koordinaten: "Beispiel Finkenbach/Odenwald: 49.6833° N, 8.9167° E",
        bild: "Grau bis graugrün, salz-pfeffer-ähnliches Erscheinungsbild",
        beschreibung: "Diorit ist ein quarzarmes Plutonitgestein mit typischer Zusammensetzung aus Plagioklas (50–70%), Hornblende/Biotit (20–40%) und <5% Quarz. Entsteht durch Differentiation basaltischer Magmen. Wichtiger Naturwerkstein seit der Antike (z.B. ägyptische Statuen). Moderne Nutzung als Schotter und Dekorstein."
    },
    "högler-sandstein":{
        name: "Högler Sandstein",
        fundort: "Högl, Bayern",
        struktur: "geadert",
        fundland: "Deutschland",
        bezeichnung: "Sandstein",
        alter: "Tertiär",
        gesteinsgruppe: "Sedimentgesteine",
        bild: "./Fotos/gestein/kelheimer_kalkstein.png",
        beschreibung: "Vom 17. bis ins frühe 20. Jahrhundert wurde der wertvolle Högler Sandstein am Högl (unter anderem im Gemeindegebiet von Piding) abgebaut. Dieser widerstandsfähige Naturstein fand nicht nur bei bedeutenden Salzburger Bauwerken wie der St.-Erhard-Kirche und der Residenz Verwendung, sondern prägte auch das Stadtbild Münchens.\n\nBesonders bemerkenswert:\n• Der Alte Südliche Friedhof in München (gegründet 1563) zeigt an zahlreichen historischen Grabmalen die charakteristische Struktur des Högler Sandsteins\n• Viele der kunstvollen Epitaphe und Denkmäler aus dem 18. und 19. Jahrhundert wurden aus diesem Material gefertigt\n• Der Stein eignete sich ideal für aufwändige Steinmetzarbeiten und widerstand den Witterungseinflüssen\n\nDie wichtigsten Abbaugebiete bei Piding:\n✓ Gschwendtner Bruch (bis 1960er aktiv) - lieferte u.a. Material für die Pidinger Friedhofsmauer\n✓ Schneidergrube (bis 1860 Wetzsteinproduktion)\n✓ Meisterbruch und Dopplerbruch in Nachbargemeinden\n\nSeit 2004 macht die Gemeinde Piding mit dem erschlossenen Gschwendtner Bruch und einer Infotafel diese bedeutende Handwerkstradition erlebbar. Die Spuren des Högler Sandsteins reichen damit von lokalen Bauwerken bis in die Münchner Stadtgeschichte."
    },
    "forellen-sandstein":{
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
    "plattensandstein":
    {
        name: "Plattensandstein",
        fundort: "Süddeutschland (Fränkische Alb, Schwäbische Alb), Thüringen, Sachsen",
        fundland: "Deutschland (Bayern, Baden-Württemberg, Thüringen, Sachsen)",
        bezeichnung: "Dünnbankiger Sandstein mit plattiger Absonderung",
        alter: "Meist Unterer Keuper oder Oberer Buntsandstein (Trias, 250–200 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, ausgeprägte plattige Bankung (2–10 cm Schichtdicke)",
        koordinaten: "Beispiel Hassberge (Unterfranken): 50.1500° N, 10.5000° E",
                bild: "./Fotos/gestein/Stein_Brey.JPG",
        beschreibung: "Plattensandsteine entstanden in flachen Meeres- oder Delta-Bereichen mit rhythmischer Sedimentation. Charakteristisch ist die lechte Spaltbarkeit entgelagerten Schichtflächen. Wichtiger historischer Baustein für Dacheindeckungen und Bodenbeläge in Süddeutschland."
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
    "zoeblitzer-serpentinit":
    {
        name: "Zöblitzer Serpentinit",
        fundort: "Zöblitz (Erzgebirge, Sachsen), historische Steinbrüche um Marienberg",
        fundland: "Deutschland (Sachsen)",
        bezeichnung: "Metamorphes Olivinit-Gestein (Serpentinisierter Peridotit)",
        alter: "Paläozoikum (variszische Metamorphose, ca. 380–340 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein (Ultramafitit)",
        struktur: "Dicht bis faserig, grün-schwarze Maserung, typische Magnetitadern",
        koordinaten: "Zöblitz: 50.6581° N, 13.2294° E",
                        bild: "./Fotos/gestein/Wandplatten_Knorr.JPG",

        beschreibung: "Der Zöblitzer Serpentinit entstand durch Metamorphose von Olivin-reichem Mantelgestein. Charakteristisch sind faserige Antigorit- und Chrysotil-Ausbildungen. Historisch berühmt als 'Grüner Stein von Zöblitz' für Kunstgegenstände (Dresdner Grünes Gewölbe). Enthält oft Chromit-Einschlüsse und Magnetitadern."
    },
    "ruhpoldinger-marmor":
    {
        name: "Ruhpoldinger Marmor",
        fundort: "Ruhpolding (Chiemgauer Alpen), Steinbrüche am Zinnkopf und Georgenberg",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Kalkmarmor der Kalkalpen",
        alter: "Trias bis Jura (ca. 220–150 Mio. Jahre), alpidisch metamorph überprägt",
        gesteinsgruppe: "Metamorphes Gestein (Marmor)",
        struktur: "Gleichkörnig, mittel- bis grobkristallin (Calcitkristalle 1–5 mm)",
        koordinaten: "Zinnkopf-Steinbruch: 47.7500° N, 12.6500° E",
        bild: "Weiß bis hellgrau mit charakteristischen grauen Adern (Graphit-Einschlüsse)",
        beschreibung: "Der Ruhpoldinger Marmor entstand durch Metamorphose von Kalksteinen der Nördlichen Kalkalpen. Charakteristisch sind seine gleichmäßige Textur und gute Polierfähigkeit. Historisch wichtiger Baustein für Kirchen und Denkmäler in Süddeutschland (z.B. Münchener Residenz). Enthält typischerweise Graphitfahnen als Relikte organischen Materials."
    },
    "untersberger-ruhpoldinger":{
        name: "Untersberger Ruhpoldinger"
    },
    "nero-portoro":
    {
        name: "Nero Portoro",
        fundort: "Portovenere (Ligurien, Italien), La Spezia-Provinz",
        fundland: "Italien",
        bezeichnung: "Schwarzer Goldader-Marmor",
        alter: "Unterjura (Toarcium, ca. 180 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein (Marmor)",
        struktur: "Kompatte schwarze Grundmasse mit goldgelben Calcitadern",
        koordinaten: "Historische Steinbrüche: 44.0500° N, 9.8333° E",
        bild: "Tiefschwarzer Hintergrund mit dramatischen goldgelben Aderungen",
        beschreibung: "Der Nero Portoro entstand durch Metamorphose kalkiger Sedimente mit bituminösen Einlagerungen. Seine charakteristischen Goldadern bestehen aus Calcit mit Eisenoxid-Beimengungen. Seit der Römerzeit begehrter Luxusstein für repräsentative Bauten (Pantheon, Versailles). Heute nur noch limitiert aus wenigen, schwer zugänglichen Küstensteinbrüchen gewinnbar."
    },
    "adneter-marmor":
    {
        name: "Adneter Marmor",
        fundort: "Adnet (Salzburg, Österreich), Steinbrüche im Haunsberggebiet",
        fundland: "Österreich",
        bezeichnung: "Roter Ammonitenkalk",
        alter: "Unterjura (Lias, ca. 200–180 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
        struktur: "Dicht bis feinkörnig, hochfossilführend (Ammoniten, Belemniten)",
        koordinaten: "Hauptsteinbruch: 47.7167° N, 13.1333° E",
        bild: "Tiefrot bis rosa mit weißen Fossilabdrücken und Adern",
        beschreibung: "Der Adneter Marmor ist ein fossilreicher Kalkstein, der durch Eisenoxide rot gefärbt wurde. Berühmt für seine spektakulären Ammoniten-Einschlüsse. Seit dem Mittelalter wichtiger Sakralstein (Salzburger Dom, Wiener Stephansdom). Die typische Rotfärbung entstand durch diagenetische Umwandlung von Pyrit zu Hämatit."
    },
    "hierlatzkalk-crinoiden-Schuttkalk-mit-seelilien-stielgliedern":{
        name: "Hierlatzkalk",
        fundort: "Hierlatz (Dachsteingebirge, Österreich), Nördliche Kalkalpen",
        fundland: "Österreich (Oberösterreich, Steiermark), Deutschland (Bayern)",
        bezeichnung: "Crinoiden-Schuttkalk mit Seelilien-Stielgliedern",
        alter: "Obertrias (Norium, ca. 220–210 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
        struktur: "Grobbankig, stark zertrümmerte Crinoiden-Stielglieder in karbonatischer Matrix",
        koordinaten: "Typuslokalität: 47.5333° N, 13.6333° E",
        bild: "Hellgrau bis beige, mit deutlich sichtbaren runden Stielgliedern (Trochiten) in verschiedenen Größen",
        beschreibung: "Der Hierlatzkalk entstand in flachen Schelfmeeren durch Akkumulation von Crinoiden-Schutt. Charakteristisch sind massenhafte, millimeter- bis zentimetergroße Stielglieder (Trochiten) der Seelilie _Encrinus carnalli_. Wichtiger stratigraphischer Leithorizont in den Nördlichen Kalkalpen. Lokal als Naturwerkstein genutzt."
    }



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
                            <div class="bildunterschrift">${stein.bildunterschrift || 'Gesteinsprobe'}</div>
                               <br>
                               <br>
                        <div class="beschreibung-content">
                            <h3>Beschreibung</h3>
                            <p>${stein.beschreibung || 'Keine Beschreibung verfügbar.'}</p>
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