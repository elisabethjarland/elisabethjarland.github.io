/*
  ============================================================
  ALT INNHOLD PÅ SIDEN STÅR I DENNE FILEN.
  Endre tekst her – index.html trenger du ikke røre.

  VIKTIG: Siden er offentlig på internett.
  Ikke skriv inn navn på barn/familier, fødselsår eller
  hvem som bor i hvilken hytte. Hyttefordeling med navn
  deles kun i den lukkede Spond-gruppa.
  ============================================================
*/
window.SAMLING = {
  tittel: "IL TRY – Beitostølen Samling",
  undertittel: "Familiesamling for TRY langrenn",
  datoTekst: "Fredag 4. – søndag 6. desember 2026",
  startDato: "2026-12-04", // fredagen – brukes til å åpne riktig dag i programmet
  sted: "Beitostølen skistadion",
  sistOppdatert: "25.10.2026",

  // ---------- LIVE VARSEL ----------
  // Sett aktiv: true for å vise varselet øverst.
  // Endre "id" hver gang du legger inn et NYTT varsel,
  // ellers vises det ikke for dem som har lukket det forrige.
  varsel: {
    aktiv: true,
    id: "2026-10-25-foreløpig",
    nivå: "info", // "info" (blå) eller "viktig" (oransje)
    tittel: "Foreløpig program",
    tekst: "Program, hytter og priser for 2026 er foreløpige og bygger på fjorårets opplegg. Endelig informasjon kommer her og i Spond."
  },

  // ---------- NØKKELINFO (kortene under toppen) ----------
  nøkkelinfo: [
    { etikett: "Når", verdi: "4.–6. desember 2026" },
    { etikett: "Hvor", verdi: "Beitostølen skistadion" },
    { etikett: "Påmelding", verdi: "Åpner snart – info i Spond" },
    { etikett: "Kjøretid fra Oslo", verdi: "Ca. 3 timer" }
  ],

  // ---------- SPORTSPROGRAM ----------
  // type: "trening", "felles", "mat", "praktisk"
  program: {
    Fredag: [
      { tid: "Fra 14:00", tittel: "Innsjekk", tekst: "Hent nøkkel i resepsjonen der dere bor. Se «Hytter» under.", type: "praktisk" },
      { tid: "18:00", tittel: "Skitrening i aldersgrupper", tekst: "For dem som rekker det. Treningstider per kull legges ut i Spond.", type: "trening" },
      { tid: "19:00–20:30", tittel: "Idrettens hus åpent", tekst: "Klubbhuset på stadion. Lagring av ski.", type: "praktisk" },
      { tid: "Kveld", tittel: "Middag på hytta", tekst: "Fredagsmiddag ordner hver familie selv – på hytta eller på veien opp.", type: "mat" }
    ],
    Lørdag: [
      { tid: "09:30–11:00", tittel: "Skitrening i aldersgrupper", tekst: "Stadion eller Garli. Foreldre hjelper med kjøring til Garli. Ta med drikkebelte.", type: "trening" },
      { tid: "15:00–16:30", tittel: "Idrettens hus åpent", tekst: "Varme, mat og opphold mellom øktene.", type: "praktisk" },
      { tid: "15:30", tittel: "Fellesbilde", tekst: "Tradisjonsrikt og obligatorisk! Oppmøte på skistadion. Ta på TRY-klær.", type: "felles" },
      { tid: "15:45", tittel: "Felles stafett", tekst: "Alle gruppene sammen på skistadion.", type: "felles" },
      { tid: "16:15", tittel: "Skitrening i aldersgrupper", tekst: "Kan også tas før fellesøkta for dem som ønsker det.", type: "trening" },
      { tid: "18:00", tittel: "Pizza og sosialt på Idrettens hus", tekst: "Felles middag for alle. Lørdagsgodteri deles ut – ikke ta med eget. Avslutning ca. 20:30.", type: "mat" }
    ],
    Søndag: [
      { tid: "09:30–11:00", tittel: "Skitrening i aldersgrupper", tekst: "Siste økt. Diplom til alle utøvere som avslutning.", type: "trening" },
      { tid: "09:30–11:00", tittel: "Idrettens hus åpent", tekst: "", type: "praktisk" },
      { tid: "Se hytta", tittel: "Utsjekk og nøkkelinnlevering", tekst: "Tidspunkt avhenger av hvor dere bor – se «Hytter».", type: "praktisk" }
    ]
  },

  // ---------- HYTTER (uten navn på familier!) ----------
  hytter: [
    {
      navn: "Knuts Hyttegrend",
      adresse: "Bygdinvegen 3704, 2953 Beitostølen",
      telefon: "415 85 379",
      nøkler: "Hentes i resepsjonen fredag kveld.",
      utsjekk: "Nøkler leveres i resepsjonen søndag. Utsjekk senest kl. 14:00.",
      merknad: "Hytter og leiligheter i gangavstand til stadion. Kjøkken, bad og sofagruppe."
    },
    {
      navn: "Bitigrenda",
      adresse: "Ca. 700 m før Beitostølen sentrum, venstre side av Fv51 (skiltet)",
      telefon: "61 34 01 00",
      nøkler: "Konvolutt med ditt navn på døra til resepsjonen, fra kl. 14:00 fredag.",
      utsjekk: "Nøkler i postkassen ved resepsjonsbygningen. Avreise senest kl. 11:00.",
      merknad: "Parkering på oversiden av de øverste hyttene. Kun av- og pålessing mellom hyttene."
    },
    {
      navn: "Beitostølen Hytter & Camping",
      adresse: "Finntøppvegen 2A, Beitostølen",
      telefon: "481 07 054",
      nøkler: "Hentes i resepsjonen.",
      utsjekk: "Nøkler leveres i resepsjonen søndag.",
      merknad: ""
    }
  ],
  hytteFordelingTekst: "Hvem som bor hvor, publiseres i Spond-gruppa for samlingen – ikke her, av hensyn til personvern.",

  // ---------- MÅLTIDER ----------
  måltider: [
    { når: "Fredag kveld", hva: "Middag på hytta eller på veien opp – hver familie ordner selv." },
    { når: "Frokost og lunsj", hva: "Lages på hytta. Husk matpakke/niste og drikke til øktene." },
    { når: "Lørdag 18:00", hva: "Felles pizza på Idrettens hus. Allergier meldes ved påmelding." },
    { når: "Søndag", hva: "Frokost på hytta, niste til hjemturen." }
  ],

  // ---------- REISE OG PARKERING ----------
  reise: [
    "Oslo – Hønefoss – Fagernes (E16), deretter Fv51 til Beitostølen. Ca. 3 timer.",
    "Fredag ettermiddag er det mye trafikk over Sollihøgda – kjør så tidlig dere kan.",
    "Vinterføre: sjekk vegvesen.no/trafikk før avreise.",
    "Idrettens hus ligger på skistadion, Stadionvegen 2."
  ],

  // ---------- SIKKERHET ----------
  sikkerhet: [
    "Barna trener alltid med trener for sitt kull – foreldre har ansvar utenom øktene.",
    "Refleks og hodelykt i mørket – det er mørkt fra ca. kl. 15:30.",
    "Kle dere etter været. Sjekk yr.no for Beitostølen.",
    "Bruk gangfelt og vær forsiktig langs veien til stadion – mye trafikk og glatt."
  ],

  // ---------- KONTAKT ----------
  nødnumre: [
    { navn: "Medisinsk nødhjelp", nummer: "113" },
    { navn: "Politi", nummer: "112" },
    { navn: "Brann", nummer: "110" },
    { navn: "Legevakt", nummer: "116 117" }
  ],
  kontakter: [
    { rolle: "Spørsmål om samlingen", tekst: "Treneren for ditt kull, eller Elisabeth Jarland", epost: "lissie@outlook.com" }
  ],

  // ---------- PAKKELISTE ----------
  pakkeliste: [
    { gruppe: "Ski og smøring", ting: ["Klassiskski og skøyteski (om dere har)", "Staver og støvler", "Festesmøring og glider", "Drikkebelte med flaske"] },
    { gruppe: "Klær", ting: ["Ullundertøy (flere sett)", "Vindtett skijakke og -bukse", "Lue, buff, votter og ekstra votter", "TRY-klær til fellesbildet", "Tørre klær og innesko til Idrettens hus"] },
    { gruppe: "Hytta", ting: ["Dynetrekk, putevar og laken (dyne og pute finnes)", "Håndkle", "Mat til frokost, lunsj og fredagsmiddag", "Toalettsaker"] },
    { gruppe: "Diverse", ting: ["Hodelykt og refleks", "Termos", "Ladekabel", "Plaster og skavsårplaster"] }
  ],

  // ---------- FAQ ----------
  faq: [
    { spm: "Hvor henter vi nøkkelen?", svar: "Det avhenger av hvor dere bor – se «Hytter». Hvilken hytte dere har fått, står i hyttefordelingen i Spond." },
    { spm: "Må vi ta med sengetøy?", svar: "Ja. Alle hyttene har dyne og pute, men dere må ta med dynetrekk, putevar, laken og håndkle. Sluttrengjøring er inkludert." },
    { spm: "Når må vi sjekke ut?", svar: "Knuts Hyttegrend: senest kl. 14:00. Bitigrenda: senest kl. 11:00. Ta gjerne med bagasjen i bilen før søndagsøkta." },
    { spm: "Hvor er lørdagsmiddagen?", svar: "Pizza på Idrettens hus på skistadion kl. 18:00. De eldste kullene sitter oppe, de yngste nede." },
    { spm: "Hvordan melder vi fra om allergier?", svar: "I påmeldingen. Gi beskjed til Elisabeth om noe endrer seg." },
    { spm: "Kan vi lagre ski på stadion?", svar: "Ja, i Idrettens hus når det er åpent." },
    { spm: "Brukes bildene fra samlingen?", svar: "TRY ønsker å bruke fellesbildet på hjemmesiden og i sosiale medier. Si fra til Elisabeth om dere ikke ønsker det." },
    { spm: "Hvor finner vi treningstidene for vårt kull?", svar: "Detaljert opplegg per kull legges ut i Spond av trenerne." }
  ]
};
