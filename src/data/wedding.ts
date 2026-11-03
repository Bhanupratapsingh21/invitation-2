// All content transcribed from the groom's (Shekhawat family) printed card.
// `hi` holds the card's original Hindi; English fields are our renderings.

export type WeddingEvent = {
  id: string;
  name: string;
  nameHi: string;
  dateHi: string; // date and weekday as printed
  date: string; // ISO date + local time (IST)
  time: string;
  timeHi: string;
  venue?: string;
  venueHi?: string;
  venueMapUrl?: string;
  image: string; // illustration in /public/images
};

export const invocations = {
  top: ["॥ जय माँ जमुवाय ॥", "॥ श्री गणेशाय नमः ॥", "॥ जय भोम्यासा महाराज ॥"],
  shlokaLeft: [
    "ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।",
    "निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ।।",
  ],
  shlokaRight: [
    "विघ्न हरण मंगल करण, गणनायक गणराज।",
    "प्रथम निमंत्रण आपको, सकल सुधारो काज।।",
  ],
};

export const invitation = {
  blessingHi: "श्री विनायक जी महाराज व कुलदेवी जमुवाय माँ की असीम अनुकम्पा से",
  closingHi: [
    "॥ के मंगल परिणयोत्सव ॥",
    "की मधुर वेला पर सपरिवार पधार कर वर-वधु को आशीर्वाद प्रदान करें।",
  ],
  closing:
    "With the blessings of Shri Vinayak ji Maharaj and Kuldevi Jamuvay Maa, we invite you and your family to the auspicious wedding celebration, to bless the bride and groom.",
  familyHi: "शेखावत परिवार का स्नेहिल निमंत्रण",
  family: "With love, the Shekhawat family",
};

export const groom = {
  name: "Pavan Singh",
  nameHi: "आयुष्मान कुँ. पवन सिंह",
  grandsonOfHi: "स्व. ठा.सा. प्रेमसिंह जी शेखावत",
  sonOfHi: "ठा.सा. प्रतापसिंह जी शेखावत",
  placeHi: "ठिकाना-मानजी की ढाणी, घाटवा (डीडवाना-कुचामन)",
};

export const bride = {
  name: "Neha Kanwar",
  nameHi: "आयुष्मति नेहा कँवर",
  granddaughterOfHi: "स्व. ठा.सा. मोहनसिंहजी चौहान",
  daughterOfHi: "ठा.सा. गोविन्दसिंहजी चौहान",
  placeHi: "ठिकाना-कोठारिया (नाथद्वारा-राजसमंद)",
};

// Pre-wedding ceremonies are at the groom's home in Ghatwa (no map link yet).
export const homeVenue = {
  name: "Manji ki Dhani, Ghatwa (Didwana-Kuchaman)",
  nameHi: "मानजी की ढाणी, घाटवा (डीडवाना-कुचामन)",
  short: "Ghatwa",
};

// The pheras are at the bride's home in Kothariya.
export const weddingVenue = {
  name: "Kothariya (Nathdwara-Rajsamand)",
  nameHi: "ठि. कोठारिया (नाथद्वारा-राजसमंद)",
  short: "Kothariya",
  mapUrl: "https://maps.app.goo.gl/SoJ6ENs2Gz2JLivD8",
};

// The card gives no clock time for the pheras ("शुभ दिवालग्न में");
// the countdown uses the bride's card time.
export const weddingDate = "2026-11-21T09:00:00+05:30";

export const events: WeddingEvent[] = [
  {
    id: "ganesh-poojan",
    image: "/images/ganesh-poojan.webp",
    name: "Shri Ganesh Poojan",
    nameHi: "श्री गणेश पूजन",
    dateHi: "16 नवम्बर 2026, सोमवार",
    date: "2026-11-16T10:15:00+05:30",
    time: "10:15 AM",
    timeHi: "प्रातः 10.15 बजे",
  },
  {
    id: "peela-chawal",
    image: "/images/peela-chawal.webp",
    name: "Peela Chawal / Baan",
    nameHi: "पीला चावल / बान",
    dateHi: "16 नवम्बर 2026, सोमवार",
    date: "2026-11-16T10:15:00+05:30",
    time: "10:15 AM",
    timeHi: "प्रातः 10.15 बजे",
  },
  {
    id: "chak-bhat",
    image: "/images/chak-bhat.webp",
    name: "Chak-Bhat",
    nameHi: "चाक-भात",
    dateHi: "19 नवम्बर 2026, गुरूवार",
    date: "2026-11-19T13:15:00+05:30",
    time: "1:15 PM",
    timeHi: "दोपहर 01.15 बजे",
  },
  {
    id: "preetibhoj",
    image: "/images/preetibhoj.webp",
    name: "Preetibhoj / Mel",
    nameHi: "प्रीतिभोज / मेल",
    dateHi: "19 नवम्बर 2026, गुरूवार",
    date: "2026-11-19T14:15:00+05:30",
    time: "2:15 PM",
    timeHi: "दोपहर 02.15 बजे",
  },
  {
    id: "bindori",
    image: "/images/bindori.webp",
    name: "Bindori",
    nameHi: "बिन्दौरी",
    dateHi: "19 नवम्बर 2026, गुरूवार",
    date: "2026-11-19T19:15:00+05:30",
    time: "7:15 PM",
    timeHi: "सायं 07.15 बजे",
  },
  {
    id: "nikasi",
    image: "/images/nikasi.webp",
    name: "Nikasi",
    nameHi: "निकासी",
    dateHi: "20 नवम्बर 2026, शुक्रवार",
    date: "2026-11-20T13:15:00+05:30",
    time: "1:15 PM",
    timeHi: "दोपहर 01.15 बजे",
  },
  {
    id: "panigrahan",
    image: "/images/mandap.webp",
    name: "Panigrahan Sanskar",
    nameHi: "पाणिग्रहण संस्कार",
    dateHi: "21 नवम्बर 2026, शनिवार",
    date: "2026-11-21T09:00:00+05:30",
    time: "Auspicious day lagna",
    timeHi: "शुभ दिवालग्न में",
    venue: weddingVenue.short,
    venueHi: weddingVenue.nameHi,
    venueMapUrl: weddingVenue.mapUrl,
  },
];

export const baraatNote = {
  hi: "बारात दिनांक 20 नवम्बर 2026, शुक्रवार को सांय 06.15 बजे ठि. घाटवा से ठि. कोठारिया (नाथद्वारा-राजसमंद) के लिए प्रस्थान करेगी।",
  en: "The baraat leaves Ghatwa for Kothariya (Nathdwara-Rajsamand) on Friday, 20 November 2026 at 6:15 PM.",
};

// Family lists, kept in the card's original Hindi.
export const families = {
  uttarakankshi: {
    titleHi: "उत्तराकांक्षी",
    names: ["ठा.सा. भंवरसिंह जी", "ठा.सा. गुलाबसिंह जी", "ठा.सा. गोपालसिंह जी"],
  },
  darshanabhilashi: {
    titleHi: "दर्शनाभिलाषी",
    names: [
      "ठा. मदनसिंह",
      "भवानीसिंह",
      "महेन्द्रसिंह",
      "कुँ. गिरधारीसिंह",
      "विजेन्द्रसिंह",
      "रविन्द्रसिंह",
      "सूर्यदेवसिंह",
      "आयुषसिंह",
      "धीरेन्द्रसिंह",
      "राजपालसिंह",
      "भँ. राजवीरसिंह",
      "परमजीतसिंह",
      "तन्मयसिंह एवं समस्त शेखावत परिवार",
    ],
  },
  nanihal: {
    titleHi: "ननिहाल पक्ष",
    names: [
      "ठा.सा. समदरसिंहजी",
      "ठा.सा. हरिसिंहजी",
      "ठा.सा. अमरसिंहजी",
      "ठा.सा. रतनसिंह",
      "ठा.सा. जगदीशसिंहजी",
      "ठा.सा. महेन्द्रसिंहजी",
      "ठा.सा. रूड़सिंहजी",
      "कुँ. सूरजसिंह",
      "सुनिलसिंह एवं समस्त राठौड़ परिवार",
    ],
    place: "ठिकाना-गैलासर",
  },
  dadera: {
    titleHi: "दादेरा पक्ष",
    names: [
      "ठा.सा. मदनसिंहजी",
      "मनोहरसिंहजी",
      "बजरंगसिंहजी",
      "रतनसिंहजी",
      "दिलीपसिंहजी",
      "मूलसिंहजी",
      "दशरथसिंहजी एवं समस्त राठौड़ परिवार",
    ],
    place: "ठिकाना-जालसू नानक",
  },
  jawai: {
    titleHi: "जंवाई पक्ष",
    names: [
      "ठा.सा. हिन्दुसिंहजी (हिरासनी)",
      "ठा.सा. मदनसिंहजी (बड़ी खाटू)",
      "ठा.सा. दीपसिंहजी (रेवाड़ा)",
      "ठा.सा. जगदीशसिंहजी (कुकनवाली)",
      "कुँ. मनोहरसिंहजी (रासलियावास)",
    ],
  },
  masosa: {
    titleHi: "मासोसा पक्ष",
    names: [
      "ठा.सा. मदनसिंहजी (भारीजा)",
      "ठा.सा. भंवरसिंहजी (भारीजा)",
      "ठा.सा. भवानीसिंहजी (पलसाना)",
    ],
  },
  bhanej: {
    titleHi: "भाणेज पक्ष",
    names: [
      "ठा.सा. करणसिंह (रताऊ)",
      "कुँ. भंवरसिंह (हिरासनी)",
      "कुँ. लालसिंह (बड़ी खाटू)",
      "कुँ. विक्रमसिंह (बड़ी खाटू)",
      "कुँ. सुरेन्द्रसिंह (रेवाड़ा)",
      "कुँ. राजेश्वरसिंह (कुकनवाली)",
      "कुँ. अजयसिंह",
      "नवदीपसिंह (रासलियावास)",
    ],
  },
  meethiManuhar: {
    titleHi: "मीठी मनुहार",
    names: ["दिव्या", "अभि", "गगन", "पीहू", "कुलवंश", "नियति"],
  },
  // The card also lists phone numbers; left off the public site.
  preshak: {
    titleHi: "प्रेषक",
    names: ["ठा.सा. प्रतापसिंह शेखावत", "S/o स्व. ठा.सा. प्रेमसिंह जी पटवारी"],
    place: "ठिकाना-घाटवा, जिला-डीडवाना-कुचामन",
  },
};
