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
    id: "2026-10-25-oppdatert",
    nivå: "info", // "info" (blå) eller "viktig" (oransje)
    tittel: "Oppdatert",
    tekst: "Overnatting på Knuts Hyttegrend og lørdagsmiddag på Lodge900 er klart. Treningstider er foreløpige. Påmelding og priser kommer når alt er avklart."
  },

  // ---------- NØKKELINFO (kortene under toppen) ----------
  nøkkelinfo: [
    { etikett: "Når", verdi: "4.–6. desember 2026" },
    { etikett: "Hvor", verdi: "Beitostølen skistadion" },
    { etikett: "Påmelding", verdi: "Åpner snart – info i Spond" },
    { etikett: "Overnatting", verdi: "Knuts Hyttegrend" }
  ],

  // ---------- SPORTSPROGRAM ----------
  // type: "trening", "felles", "mat", "praktisk"
  program: {
    Fredag: [
      { tid: "Ved ankomst", tittel: "Innsjekk", tekst: "Hent nøkkel i resepsjonen på Knuts Hyttegrend (åpen kl. 09–19). Se «Hytter» under.", type: "praktisk" },
      { tid: "18:00", tittel: "Skitrening i aldersgrupper", tekst: "For dem som rekker det. Treningstider per kull legges ut i Spond.", type: "trening" },
      { tid: "Kveld", tittel: "Middag på hytta", tekst: "Fredagsmiddag ordner hver familie selv – på hytta eller på veien opp.", type: "mat" }
    ],
    Lørdag: [
      { tid: "09:30–11:00", tittel: "Skitrening i aldersgrupper", tekst: "Stadion eller Garli. Foreldre hjelper med kjøring til Garli. Ta med drikkebelte.", type: "trening" },
      { tid: "15:30", tittel: "Fellesbilde", tekst: "Tradisjonsrikt og obligatorisk! Oppmøte på skistadion. Ta på TRY-klær.", type: "felles" },
      { tid: "15:45", tittel: "Felles stafett", tekst: "Alle gruppene sammen på skistadion.", type: "felles" },
      { tid: "16:15", tittel: "Skitrening i aldersgrupper", tekst: "Kan også tas før fellesøkta for dem som ønsker det.", type: "trening" },
      { tid: "18:00", tittel: "Felles middag på Lodge900", tekst: "Pizza og pasta for alle, servering kl. 18:00. Drikke kjøper hver familie selv. Etter maten blir det underholdning i egen del av lokalet. Lodge900 ligger i Beitostølen sentrum, over Velkomstsenteret.", type: "mat" }
    ],
    Søndag: [
      { tid: "09:30–11:00", tittel: "Skitrening i aldersgrupper", tekst: "Siste økt. Diplom til alle utøvere som avslutning.", type: "trening" },
      { tid: "Se hytta", tittel: "Utsjekk og nøkkelinnlevering", tekst: "Tidspunkt kommer – se «Hytter».", type: "praktisk" }
    ]
  },

  // ---------- HYTTER (uten navn på familier!) ----------
  hytter: [
    {
      navn: "Knuts Hyttegrend",
      adresse: "Bygdinvegen 3704, 2953 Beitostølen",
      telefon: "415 85 379",
      nøkler: "Hentes i resepsjonen fredag. Resepsjonen er åpen kl. 09–19.",
      utsjekk: "Nøkler leveres i resepsjonen søndag. Tidspunkt for utsjekk kommer.",
      merknad: "21 hytter og leiligheter med kjøkken og bad. Dyne og pute finnes. Sengetøy kan leies i resepsjonen for 100 kr per sett, håndkle for 10 kr."
    }
  ],
  hytteFordelingTekst: "Hvem som bor hvor, publiseres i Spond-gruppa for samlingen – ikke her, av hensyn til personvern.",

  // ---------- MÅLTIDER ----------
  måltider: [
    { når: "Fredag kveld", hva: "Middag på hytta eller på veien opp – hver familie ordner selv." },
    { når: "Frokost og lunsj", hva: "Lages på hytta. Husk matpakke/niste og drikke til øktene." },
    { når: "Lørdag 18:00", hva: "Felles middag med pizza og pasta på Lodge900 i sentrum. Drikke kjøpes selv. Allergier meldes ved påmelding." },
    { når: "Søndag", hva: "Frokost på hytta, niste til hjemturen." }
  ],

  // ---------- REISE OG PARKERING ----------
  reise: [
    "Oslo – Hønefoss – Fagernes (E16), deretter Fv51 til Beitostølen. Ca. 3 timer.",
    "Fredag ettermiddag er det mye trafikk over Sollihøgda – kjør så tidlig dere kan.",
    "Vinterføre: sjekk vegvesen.no/trafikk før avreise."
  ],

  // ---------- SIKKERHET ----------
  sikkerhet: [
    "Barna trener alltid med trener for sitt kull – foreldre har ansvar utenom øktene.",
    "Refleks og hodelykt i mørket – det er mørkt fra ca. kl. 15:30.",
    "Kle dere etter været. Sjekk yr.no for Beitostølen.",
    "Bruk gangfelt og vær forsiktig langs veien til stadion – mye trafikk og glatt."
  ],

  // ---------- KONTAKT ----------
  kontakter: [
    { rolle: "Spørsmål om samlingen", tekst: "Treneren for ditt kull, eller Elisabeth Jarland", epost: "lissie@outlook.com" }
  ],

  // ---------- PAKKELISTE ----------
  pakkeliste: [
    { gruppe: "Ski og smøring", ting: ["Klassiskski og skøyteski (om dere har)", "Staver og støvler", "Festesmøring og glider", "Drikkebelte med flaske"] },
    { gruppe: "Klær", ting: ["Ullundertøy (flere sett)", "Vindtett skijakke og -bukse", "Lue, buff, votter og ekstra votter", "TRY-klær til fellesbildet", "Tørre klær til lørdagsmiddagen"] },
    { gruppe: "Hytta", ting: ["Dynetrekk, putevar og laken (dyne og pute finnes)", "Håndkle", "Mat til frokost, lunsj og fredagsmiddag", "Toalettsaker"] },
    { gruppe: "Diverse", ting: ["Hodelykt og refleks", "Termos", "Ladekabel", "Plaster og skavsårplaster"] }
  ],

  // ---------- FAQ ----------
  faq: [
    { spm: "Hvor henter vi nøkkelen?", svar: "I resepsjonen på Knuts Hyttegrend, som er åpen kl. 09–19. Hvilken hytte dere har fått, står i hyttefordelingen i Spond." },
    { spm: "Må vi ta med sengetøy?", svar: "Ja. Alle hyttene har dyne og pute, men dere må ta med dynetrekk, putevar, laken og håndkle. Har dere glemt det, kan det leies i resepsjonen (100 kr per sett, håndkle 10 kr). Sluttrengjøring er inkludert." },
    { spm: "Når må vi sjekke ut?", svar: "Tidspunktet avklares med Knuts Hyttegrend og kommer her. Ta gjerne med bagasjen i bilen før søndagsøkta." },
    { spm: "Hvor er lørdagsmiddagen?", svar: "På Lodge900 i Beitostølen sentrum (over Velkomstsenteret). Servering kl. 18:00 med pizza og pasta, og underholdning etter maten. Drikke er ikke inkludert og kjøpes selv." },
    { spm: "Hvordan melder vi fra om allergier?", svar: "I påmeldingen. Gi beskjed til Elisabeth om noe endrer seg." },
    { spm: "Brukes bildene fra samlingen?", svar: "TRY ønsker å bruke fellesbildet på hjemmesiden og i sosiale medier. Si fra til Elisabeth om dere ikke ønsker det." },
    { spm: "Hvor finner vi treningstidene for vårt kull?", svar: "Detaljert opplegg per kull legges ut i Spond av trenerne." }
  ]
};
