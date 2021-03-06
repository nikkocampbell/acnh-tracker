let convertTime;
let convert;

convertTime = (time) => {
  const [hour, ampm] = time.split(' ');
  const hourInt = parseInt(hour, 10);

  return hourInt + (ampm === 'p.m.' ? 12 : 0);
};

convert = (f) => {
  console.log(f.id);
  const allDay = f.time === 'All day';
  const [startTime, endTime] = allDay
    ? [null, null]
    : f.time.split(' - ').map(convertTime);

  const allYear = f.months === 'Year-round (Northern and Southern)';
  const [,
    northernStartMonth,
    northerEndMonth,
    southernStartMonth,
    southerEndMonth,
  ] = allYear
    ? [null, null, null, null, null]
    : f.months.match(/(.*)-(.*) \(.*\) \/ (.*)-(.*) \(.*\)/);

  return {
    ...f,
    time: {
      allDay,
      startTime,
      endTime,
    },
    months: {
      allYear,
      north: {
        start: northernStartMonth,
        end: northerEndMonth,
      },
      south: {
        start: southernStartMonth,
        end: southerEndMonth,
      },
    },
  };
};


convert(this.data[0]);

exports.data = [
  {
    id: 1,
    name: 'Bitterling',
    location: 'River',
    size: 'Smallest',
    price: 900,
    time: 'All day',
    months: 'November-March (Northern) / May-September (Southern)',
  },
  {
    id: 2,
    name: 'Pale Chub',
    location: 'River',
    size: 'Smallest',
    price: 160,
    time: '9 a.m. - 4 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 3,
    name: 'Crucian Carp',
    location: 'River',
    size: 'Small',
    price: 160,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 4,
    name: 'Dace',
    location: 'River',
    size: 'Medium',
    price: 240,
    time: '4 p.m. - 9 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 5,
    name: 'Carp',
    location: 'Pond',
    size: 'Large',
    price: 300,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 6,
    name: 'Koi',
    location: 'Pond',
    size: 'Large',
    price: '4,000',
    time: '4 p.m. - 9 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 7,
    name: 'Goldfish',
    location: 'Pond',
    size: 'Smallest',
    price: '1,300',
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 8,
    name: 'Pop-eyed Goldfish',
    location: 'Pond',
    size: 'Smallest',
    price: '1,300',
    time: '9 a.m. - 4 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 9,
    name: 'Ranchu Goldfish',
    location: 'Pond',
    size: 'Small',
    price: '4,500',
    time: '9 a.m. - 4 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 10,
    name: 'Killifish',
    location: 'Pond',
    size: 'Smallest',
    price: 300,
    time: 'All day',
    months: 'April-August (Northern) / October-February (Southern)',
  },
  {
    id: 11,
    name: 'Crawfish',
    location: 'Pond',
    size: 'Small',
    price: 200,
    time: 'All day',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 12,
    name: 'Soft-shelled Turtle',
    location: 'River',
    size: 'Large',
    price: '3,750',
    time: '4 p.m. - 9 a.m.',
    months: 'August-September (Northern) / February-March (Southern)',
  },
  {
    id: 13,
    name: 'Snapping Turtle',
    location: 'River',
    size: 'X Large',
    price: '5,000',
    time: '9 a.m. - 4 a.m.',
    months: 'April-October (Northern) / October-April (Southern)',
  },
  {
    id: 14,
    name: 'Tadpole',
    location: 'Pond',
    size: 'Smallest',
    price: 100,
    time: 'All day',
    months: 'March-July (Northern) / September-January (Southern)',
  },
  {
    id: 15,
    name: 'Frog',
    location: 'Pond',
    size: 'Small',
    price: 120,
    time: 'All day',
    months: 'May-August (Northern) / November-Feburary (Southern)',
  },
  {
    id: 16,
    name: 'Freshwater Goby',
    location: 'River',
    size: 'Small',
    price: 400,
    time: '4 p.m. - 9 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 17,
    name: 'Loach',
    location: 'River',
    size: 'Small',
    price: 400,
    time: 'All day',
    months: 'March-May (Northern) / September-November (Southern)',
  },
  {
    id: 18,
    name: 'Catfish',
    location: 'Pond',
    size: 'Large',
    price: 800,
    time: '4 p.m. - 9 a.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 19,
    name: 'Giant Snakehead',
    location: 'Pond',
    size: 'X Large',
    price: '5,500',
    time: '9 a.m. - 4 p.m.',
    months: 'June-August (Northern) / December-February (Southern)',
  },
  {
    id: 20,
    name: 'Bluegill',
    location: 'River',
    size: 'Small',
    price: 180,
    time: '9 a.m. - 4 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 21,
    name: 'Yellow Perch',
    location: 'River',
    size: 'Medium',
    price: 300,
    time: 'All day',
    months: 'October-March (Northern) / April-September (Southern)',
  },
  {
    id: 22,
    name: 'Black Bass',
    location: 'River',
    size: 'Large',
    price: 400,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 23,
    name: 'Tilapia',
    location: 'River',
    size: 'Medium',
    price: 800,
    time: 'All day',
    months: 'June-October (Northern) / December-April (Southern)',
  },
  {
    id: 24,
    name: 'Pike',
    location: 'River',
    size: 'X Large',
    price: '1,800',
    time: 'All day',
    months: 'September-December (Northern) / March-June (Southern)',
  },
  {
    id: 25,
    name: 'Pond Smelt',
    location: 'River',
    size: 'Small',
    price: 500,
    time: 'All day',
    months: 'December-February (Northern) / June-August (Southern)',
  },
  {
    id: 26,
    name: 'Sweetfish',
    location: 'River',
    size: 'Medium',
    price: 900,
    time: 'All day',
    months: 'July-September (Northern) / January-March (Southern)',
  },
  {
    id: 27,
    name: 'Cherry Salmon',
    location: 'River (Clifftop)',
    size: 'Medium',
    price: '1,000',
    time: '4 p.m. - 9 a.m.',
    months: 'March-June, September-November (Northern) / March-May, September-December (Southern)',
  },
  {
    id: 28,
    name: 'Char',
    location: 'River (Clifftop)',
    size: 'Medium',
    price: '3,800',
    time: '4 p.m. - 9 a.m.',
    months: 'March-June, September-November (Northern) / March-May, September-December (Southern)',
  },
  {
    id: 29,
    name: 'Golden Trout',
    location: 'River (Clifftop)',
    size: 'Medium',
    price: '15,000',
    time: '4 p.m. - 9 a.m.',
    months: 'March-June, September-November (Northern) / March-May, September-December (Southern)',
  },
  {
    id: 30,
    name: 'Stringfish',
    location: 'River (Clifftop)',
    size: 'Largest',
    price: '15,000',
    time: '4 p.m. - 9 a.m.',
    months: 'December-March (Northern) / June-September (Southern)',
  },
  {
    id: 31,
    name: 'Salmon',
    location: 'River (mouth)',
    size: 'Small',
    price: 700,
    time: 'All day',
    months: 'September-September (Northern) / March-March (Southern)',
  },
  {
    id: 32,
    name: 'King Salmon',
    location: 'River (mouth)',
    size: 'Smallest',
    price: '1,800',
    time: 'All day',
    months: 'September-September (Northern) / March-March (Southern)',
  },
  {
    id: 33,
    name: 'Mitten Crab',
    location: 'River',
    size: 'Small',
    price: '2,000',
    time: '4 p.m. - 9 a.m.',
    months: 'September-November (Northern) / March-May (Southern)',
  },
  {
    id: 34,
    name: 'Guppy',
    location: 'River',
    size: 'Smallest',
    price: '1,300',
    time: '9 a.m. - 4 p.m.',
    months: 'April-November (Northern) / October-May (Southern)',
  },
  {
    id: 35,
    name: 'Nibble Fish',
    location: 'River',
    size: 'Small',
    price: '1,500',
    time: '9 a.m. - 4 p.m.',
    months: 'May-September (Northern) / November-March (Southern)',
  },
  {
    id: 36,
    name: 'Angelfish',
    location: 'River',
    size: 'Small',
    price: '3,000',
    time: '4 p.m. - 9 a.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 37,
    name: 'Betta',
    location: 'River',
    size: 'Small',
    price: '2,500',
    time: '9 a.m. - 4 p.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 38,
    name: 'Neon Tetra',
    location: 'River',
    size: 'Smallest',
    price: 500,
    time: '9 a.m. - 4 p.m.',
    months: 'April-November (Northern) / October-May (Southern)',
  },
  {
    id: 39,
    name: 'Rainbowfish',
    location: 'River',
    size: 'Small',
    price: 800,
    time: '9 a.m. - 4 p.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 40,
    name: 'Piranha',
    location: 'River',
    size: 'Small',
    price: '2,500',
    time: '9 a.m. - 4 p.m., 9 p.m. - 4 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 41,
    name: 'Arowana',
    location: 'River',
    size: 'Large',
    price: '10,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 42,
    name: 'Dorado',
    location: 'River',
    size: 'X Large',
    price: '15,000',
    time: '4 a.m. - 9 p.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 43,
    name: 'Gar',
    location: 'Pond',
    size: 'Largest',
    price: '6,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 44,
    name: 'Arapaima',
    location: 'River',
    size: 'Largest',
    price: '10,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 45,
    name: 'Saddled Bichir',
    location: 'River',
    size: 'Large',
    price: '4,000',
    time: '9 p.m. - 4 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 46,
    name: 'Sturgeon',
    location: 'River (mouth)',
    size: 'Largest',
    price: '10,000',
    time: 'All day',
    months: 'September-March (Northern) / March-September (Southern)',
  },
  {
    id: 47,
    name: 'Sea Butterfly',
    location: 'Sea',
    size: 'Smallest',
    price: '1,000',
    time: 'All day',
    months: 'December-March (Northern) / June-September (Southern)',
  },
  {
    id: 48,
    name: 'Sea Horse',
    location: 'Sea',
    size: 'Smallest',
    price: '1,100',
    time: 'All day',
    months: 'April-November (Northern) / October-May (Southern)',
  },
  {
    id: 49,
    name: 'Clown Fish',
    location: 'Sea',
    size: 'Smallest',
    price: 650,
    time: 'All day',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 50,
    name: 'Surgeonfish',
    location: 'Sea',
    size: 'Small',
    price: '1,000',
    time: 'All day',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 51,
    name: 'Butterfly Fish',
    location: 'Sea',
    size: 'Small',
    price: '1,000',
    time: 'All day',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 52,
    name: 'Napoleonfish',
    location: 'Sea',
    size: 'Largest',
    price: '10,000',
    time: '4 a.m. - 9 p.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 53,
    name: 'Zebra Turkeyfish',
    location: 'Sea',
    size: 'Medium',
    price: 500,
    time: 'All day',
    months: 'April-November (Northern) / October-May (Southern)',
  },
  {
    id: 54,
    name: 'Blowfish',
    location: 'Sea',
    size: 'Medium',
    price: '5,000',
    time: '6 p.m. - 4 a.m.',
    months: 'November-February (Northern) / May-August (Southern)',
  },
  {
    id: 55,
    name: 'Puffer Fish',
    location: 'Sea',
    size: 'Medium',
    price: 250,
    time: 'All day',
    months: 'July-September (Northern) / January-March (Southern)',
  },
  {
    id: 56,
    name: 'Anchovy',
    location: 'Sea',
    size: 'Small',
    price: 200,
    time: '4 a.m. - 9 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 57,
    name: 'Horse Mackerel',
    location: 'Sea',
    size: 'Small',
    price: 150,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 58,
    name: 'Barred Knifejaw',
    location: 'Sea',
    size: 'Medium',
    price: '5,000',
    time: 'All day',
    months: 'March-November (Northern) / September-May (Southern)',
  },
  {
    id: 59,
    name: 'Sea Bass',
    location: 'Sea',
    size: 'X Large',
    price: 400,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 60,
    name: 'Red Snapper',
    location: 'Sea',
    size: 'Large',
    price: '3,000',
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 61,
    name: 'Dab',
    location: 'Sea',
    size: 'Medium',
    price: 300,
    time: 'All day',
    months: 'October-April (Northern) / April-October (Southern)',
  },
  {
    id: 62,
    name: 'Olive Flounder',
    location: 'Sea',
    size: 'Large',
    price: 800,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 63,
    name: 'Squid',
    location: 'Sea',
    size: 'Medium',
    price: 500,
    time: 'All day',
    months: 'December-August (Northern) / June-February (Southern)',
  },
  {
    id: 64,
    name: 'Moray Eel',
    location: 'Sea',
    size: 'X Large',
    price: '2,000',
    time: 'All day',
    months: 'August-October (Northern) / February-April (Southern)',
  },
  {
    id: 65,
    name: 'Ribbon Eel',
    location: 'Sea',
    size: 'Narrow',
    price: 600,
    time: 'All day',
    months: 'June-October (Northern) / December-April (Southern)',
  },
  {
    id: 66,
    name: 'Tuna',
    location: 'Pier',
    size: 'X Large',
    price: '7,000',
    time: 'All day',
    months: 'November-April (Northern) / May-October (Southern)',
  },
  {
    id: 67,
    name: 'Blue Marlin',
    location: 'Pier',
    size: 'X Large',
    price: '10,000',
    time: 'All day',
    months: 'July-September, November-April (Northern) / January-March, May-November (Southern)',
  },
  {
    id: 68,
    name: 'Giant Trevally',
    location: 'Pier',
    size: 'Large',
    price: '4,500',
    time: 'All day',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 69,
    name: 'Mahi-mahi',
    location: 'Sea',
    size: 'Large',
    price: '6,000',
    time: 'All day',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 70,
    name: 'Ocean Sunfish',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '4,000',
    time: '4 a.m. - 9 p.m.',
    months: 'July-September (Northern) / January-March (Southern)',
  },
  {
    id: 71,
    name: 'Ray',
    location: 'Sea',
    size: 'X Large',
    price: '3,000',
    time: '4 a.m. - 9 p.m.',
    months: 'August-November (Northern) / February-May (Southern)',
  },
  {
    id: 72,
    name: 'Saw Shark',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '12,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 73,
    name: 'Hammerhead Shark',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '8,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 74,
    name: 'Great White Shark',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '15,000',
    time: '4 p.m. - 9 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 75,
    name: 'Whale Shark',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '13,000',
    time: 'All day',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 76,
    name: 'Suckerfish',
    location: 'Sea',
    size: 'Largest (Fin)',
    price: '1,500',
    time: 'All day',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 77,
    name: 'Football Fish',
    location: 'Sea',
    size: 'Large',
    price: '2,500',
    time: '4 p.m. - 9 a.m.',
    months: 'November-March (Northern) / May-September (Southern)',
  },
  {
    id: 78,
    name: 'Oarfish',
    location: 'Sea',
    size: 'Largest',
    price: '9,000',
    time: 'All day',
    months: 'December-May (Northern) / June-November (Southern)',
  },
  {
    id: 79,
    name: 'Barreleye',
    location: 'Sea',
    size: 'Small',
    price: '15,000',
    time: '9 p.m. - 4 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 80,
    name: 'Coelacanth',
    location: 'Sea (rainy days)',
    size: 'Largest',
    price: '15,000',
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
];
