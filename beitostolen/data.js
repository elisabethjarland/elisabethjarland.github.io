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
  sistOppdatert: "28.10.2026",

  // ---------- LIVE VARSEL ----------
  // Sett aktiv: true for å vise varselet øverst.
  // Endre "id" hver gang du legger inn et NYTT varsel,
  // ellers vises det ikke for dem som har lukket det forrige.
  varsel: {
    aktiv: true,
    id: "2026-10-28-kun-vipps",
    nivå: "viktig", // "info" (blå) eller "viktig" (oransje)
    tittel: "Bindende påmelding KUN med Vipps",
    tekst: "«Delta» i Spond er IKKE en påmelding til Beitostølen. Du er bare påmeldt når du har betalt med Vipps 23698. Påmeldingen åpner snart – ikke betal før vi gir beskjed i Spond."
  },

  // ---------- NØKKELINFO (kortene under toppen) ----------
  nøkkelinfo: [
    { etikett: "Når", verdi: "4.–6. desember 2026" },
    { etikett: "Hvor", verdi: "Beitostølen skistadion" },
    { etikett: "Påmelding", verdi: "Bindende, KUN Vipps 23698" },
    { etikett: "Overnatting", verdi: "Knuts Hyttegrend" }
  ],

  // ---------- PRIS OG PÅMELDING ----------
  påmelding: {
    priser: [
      { hva: "Med overnatting", pris: "1 350 kr", per: "per person" },
      { hva: "Uten overnatting", pris: "570 kr", per: "per person" },
      { hva: "Tillegg for egen hytte", pris: "1 200 kr", per: "per familie" }
    ],
    inkludert: "Middag på Lodge900 lørdag, løypeavgift begge dager og trening med TRY-trenere (skileik for 1. og 2. klasse). Med overnatting også seng og utvask. Drikke er ikke inkludert.",
    støtte: "Alle skal kunne bli med på Beitostølen 💙 Trenger dere litt drahjelp med kostnadene, send en melding til Finn Borchgrevink ({epost}), så tar vi det derfra.",
    støtteEpost: "finnborc@outlook.com",
    vipps: "23698",
    merking: "Barnets navn og årskull",
    statusTittel: "Bindende påmelding – KUN ved betaling med Vipps 23698",
    status: "Påmeldingsfrist: torsdag 12. november. I fjor ble det helt fullt, så ikke vent for lenge. «Delta» i Spond er ikke en påmelding til Beitostølen og blir ikke godkjent. Påmeldingen er bindende og er ikke åpnet ennå – ikke betal før vi gir beskjed i Spond. Hytteplassene fordeles etter når betalingen kommer inn."
  },

  // ---------- SPORTSPROGRAM ----------
  // type: "trening", "felles", "mat", "praktisk"
  program: {
    Fredag: [
      { tid: "Fra 14:00", tittel: "Innsjekk", tekst: "Hent nøkkel i resepsjonen der dere bor. Se «Hytter» under.", type: "praktisk" },
      { tid: "18:00", tittel: "Skitrening i aldersgrupper", tekst: "For dem som rekker det. Trening fra 3. klasse, skileik for 1. og 2. klasse. Økta kommer i Spond fra hovedtreneren for kullet.", type: "trening" },
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
      { tid: "Se hytta", tittel: "Utsjekk og nøkkelinnlevering", tekst: "Tidspunkt avhenger av hvor dere bor – se «Hytter».", type: "praktisk" }
    ]
  },

  // ---------- HYTTER (uten navn på familier!) ----------
  hytter: [
    {
      navn: "Knuts Hyttegrend",
      adresse: "Bygdinvegen 3704, 2953 Beitostølen",
      telefon: "415 85 379",
      nøkler: "Hentes i resepsjonen fredag kveld. Resepsjonen er åpen kl. 09–19.",
      utsjekk: "Nøkler leveres i resepsjonen søndag. Utsjekk senest kl. 14:00.",
      merknad: "Hytter og leiligheter i gangavstand til stadion. Kjøkken, bad og sofagruppe. Dyne og pute finnes. Sengetøy kan leies i resepsjonen for 100 kr per sett, håndkle for 10 kr."
    },
    {
      navn: "Bitigrenda",
      adresse: "Ca. 700 m før Beitostølen sentrum, venstre side av Fv51 (skiltet)",
      telefon: "61 34 01 00",
      nøkler: "Konvolutt med ditt navn på døra til resepsjonen, fra kl. 14:00 fredag.",
      utsjekk: "Nøkler i postkassen ved resepsjonsbygningen. Avreise senest kl. 11:00.",
      merknad: "Parkering på oversiden av de øverste hyttene. Kun av- og pålessing mellom hyttene."
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
    { rolle: "🎿 Om treningen", tekst: "Spør treneren som har ansvaret for ditt kull." },
    { rolle: "📖 Om opplegget", tekst: "Les denne siden én gang til – svaret står nesten helt sikkert her 😉" },
    { rolle: "🆘 Fortsatt i tvil", tekst: "Da har du tre livlinjer, akkurat som i «Vil du bli millionær»: send mail, send SMS eller ring Lissie (telefon finner du i Spond). Hver livline kan bare brukes én gang – så bruk den med omhu! 😄", epost: "lissie@outlook.com" }
  ],

  // ---------- PAKKELISTE ----------
  pakkeliste: [
    { gruppe: "⛷️ Ski og utstyr", ting: ["Klassiske ski og skøyteski (om dere har)", "Staver og skisko", "Smøring (feste og glider)", "Drikkebelte med saft og energi (nøtter, sjokolade eller bar)"] },
    { gruppe: "🧥 Klær", ting: ["Ullundertøy (flere sett)", "Vindtett skijakke og -bukse", "Lue, buff og votter (gjerne ekstra votter)", "TRY-klær til fellesbildet", "Tørre klær og sko til kvelden"] },
    { gruppe: "🏡 Til hytta", ting: ["Dynetrekk, putevar og laken (dyne og pute finnes)", "Håndkle", "Mat til frokost, lunsj og fredagsmiddag", "Toalettsaker"] }
  ],

  // ---------- FAQ ----------
  faq: [
    { spm: "Når er påmeldingsfristen?", svar: "Torsdag 12. november. I fjor ble det helt fullt, og hytteplassene går etter førstemann til mølla – så ikke vent for lenge." },
    { spm: "Er vi påmeldt når vi har trykket «delta» i Spond?", svar: "Nei. Påmelding i Spond gjelder ikke. Dere er påmeldt når dere har betalt med Vipps 23698, og påmeldingen er bindende. Hytteplassene fordeles etter når betalingen kommer inn." },
    { spm: "Hvor henter vi nøkkelen?", svar: "Det avhenger av hvor dere bor – se «Hytter». Hvilken hytte dere har fått, står i hyttefordelingen i Spond." },
    { spm: "Må vi ta med sengetøy?", svar: "Ja. Alle hyttene har dyne og pute, men dere må ta med dynetrekk, putevar, laken og håndkle. Har dere glemt det, kan det leies i resepsjonen (100 kr per sett, håndkle 10 kr). Sluttrengjøring er inkludert." },
    { spm: "Når må vi sjekke ut?", svar: "Knuts Hyttegrend: senest kl. 14:00. Bitigrenda: senest kl. 11:00. Ta gjerne med bagasjen i bilen før søndagsøkta." },
    { spm: "Hvor er lørdagsmiddagen?", svar: "På Lodge900 i Beitostølen sentrum (over Velkomstsenteret). Servering kl. 18:00 med pizza og pasta, og underholdning etter maten. Drikke er ikke inkludert og kjøpes selv." },
    { spm: "Hvordan melder vi fra om allergier?", svar: "I påmeldingen. Gi beskjed til Lissie om noe endrer seg." },
    { spm: "Brukes bildene fra samlingen?", svar: "TRY ønsker å bruke fellesbildet på hjemmesiden og i sosiale medier. Si fra til Lissie om dere ikke ønsker det." },
    { spm: "Hva gjør de yngste?", svar: "TRY-trenerne har treningsopplegg fra 3. klasse. 1. og 2. klasse får skileik på stadion." },
    { spm: "Hvor finner vi treningstidene for vårt kull?", svar: "Øktene kommer i Spond fra hovedtreneren for hvert kull. Det gjelder også skileiken for 1. og 2. klasse." }
  ]
};
