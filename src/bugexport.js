
const convertTime = (time) => {
  const [hour, ampm] = time.split(' ');
  const hourInt = parseInt(hour, 10);

  return hourInt + (ampm === 'p.m.' ? 12 : 0);
};

const convertMonth = (month) => ({
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
}[month.toLowerCase()]);

const convert = (f) => {
  const allDay = f.time === 'All day';
  const [startTime, endTime] = allDay
    ? [null, null]
    : f.time.split(' - ').map(convertTime);


  const i = 'March-June, September-October (Northern) / March-April, September-December (Southern)';

  const allYear = f.months === 'Year-round (Northern and Southern)';

  const [northernMonths, southernMonths] = allYear
    ? [[], []]
    : f.months
      .split(' / ')
      .map((s) => s.replace(/ \(.*\)/, '')
        .split(',')
        .map((x) => x.trim()));


  return {
    ...f,
    price: typeof f.price === 'number' ? f.price : parseInt(f.price.replace(',', ''), 10),
    time: {
      allDay,
      start: startTime,
      end: endTime,
    },
    months: {
      allYear,
      north: northernMonths.map((rangeString) => {
        const [start, end] = rangeString.split('-').map(convertMonth);
        return { start, end };
      }),
      south: southernMonths.map((rangeString) => {
        const [start, end] = rangeString.split('-').map(convertMonth);
        return { start, end };
      }),
    },
  };
};


exports.data = [
  {
    id: 1,
    name: 'Common Butterfly',
    location: 'Flying',
    price: 160,
    time: '4 a.m. - 7 p.m.',
    months: 'September-June (Northern) / March-December (Southern)',
  },
  {
    id: 2,
    name: 'Yellow Butterfly',
    location: 'Flying',
    price: 160,
    time: '4 a.m. - 7 p.m.',
    months: 'March-June, September-October (Northern) / March-April, September-December (Southern)',
  },
  {
    id: 3,
    name: 'Tiger Butterfly',
    location: 'Flying',
    price: 240,
    time: '4 a.m. - 7 p.m.',
    months: 'March-September (Northern) / September-March (Southern)',
  },
  {
    id: 4,
    name: 'Peacock Butterfly',
    location: 'Flying',
    price: '2,500',
    time: '4 a.m. - 7 p.m.',
    months: 'March-June (Northern) / September-December (Southern)',
  },
  {
    id: 5,
    name: 'Common Bluebottle',
    location: 'Flying',
    price: 300,
    time: '4 a.m. - 7 p.m.',
    months: 'April-August (Northern) / October-February (Southern)',
  },
  {
    id: 6,
    name: 'Paper Kite Butterfly',
    location: 'Flying',
    price: '1,000',
    time: '8 a.m. - 7 p.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 7,
    name: 'Great Purple Emperor',
    location: 'Flying',
    price: '3,000',
    time: '4 a.m. - 7 p.m.',
    months: 'May-August (Northern) / November-February (Southern)',
  },
  {
    id: 8,
    name: 'Monach Butterfly',
    location: 'Flying',
    price: 140,
    time: '4 a.m. - 5 p.m.',
    months: 'September-November (Northern) / March-May (Southern)',
  },
  {
    id: 9,
    name: 'Emperor Butterfly',
    location: 'Flying',
    price: '4,000',
    time: '5 p.m. - 8 a.m.',
    months: 'June-September, December-March (Northern) / December-March, June-September (Southern)',
  },
  {
    id: 10,
    name: 'Agrias Butterfly',
    location: 'Flying',
    price: '3,000',
    time: '8 a.m. - 5 p.m.',
    months: 'April-September (Northern) / November-March (Southern)',
  },
  {
    id: 11,
    name: "Raja Brooke's Birdwing",
    location: 'Flying',
    price: '2,500',
    time: '8 a.m. - 5 p.m.',
    months: 'April-September, December-February (Northern) / November-March, June-August (Southern)',
  },
  {
    id: 12,
    name: "Queen Alexandra's Birdwing",
    location: 'Flying',
    price: '4,000',
    time: '8 a.m. - 4 p.m.',
    months: 'May-September (Northern) / November-March (Southern)',
  },
  {
    id: 13,
    name: 'Moth',
    location: 'Flying by light',
    price: 130,
    time: '7 p.m. - 4 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 14,
    name: 'Atlas Moth',
    location: 'On trees',
    price: '3,000',
    time: '7 p.m. - 4 a.m.',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 15,
    name: 'Madagascan Sunset Moth',
    location: 'Flying',
    price: '2,500',
    time: '8 a.m. - 4 p.m.',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 16,
    name: 'Long Locust',
    location: 'On ground',
    price: 200,
    time: '8 a.m. - 7 p.m.',
    months: 'April-November (Northern) / November-May (Southern)',
  },
  {
    id: 17,
    name: 'Migratory Locust',
    location: 'On ground',
    price: 600,
    time: '8 a.m. - 7 p.m.',
    months: 'August-November (Northern) / February-May (Southern)',
  },
  {
    id: 18,
    name: 'Rice Grasshopper',
    location: 'On ground',
    price: 160,
    time: '8 a.m. - 7 p.m.',
    months: 'August-November (Northern) / February-May (Southern)',
  },
  {
    id: 19,
    name: 'Grasshopper',
    location: 'On ground',
    price: 160,
    time: '8 a.m. - 5 p.m.',
    months: 'July-September (Northern) / January-March (Southern)',
  },
  {
    id: 20,
    name: 'Cricket',
    location: 'Dig at cricket noise',
    price: 130,
    time: '5 p.m. - 8 a.m.',
    months: 'September-November (Northern) / March-May (Southern)',
  },
  {
    id: 21,
    name: 'Bell Cricket',
    location: 'On ground',
    price: 430,
    time: '5 p.m. - 8 a.m.',
    months: 'September-October (Northern) / March-April (Southern)',
  },
  {
    id: 22,
    name: 'Mantis',
    location: 'On flowers',
    price: 430,
    time: '8 a.m. - 5 p.m.',
    months: 'March-November (Northern) / September-May (Southern)',
  },
  {
    id: 23,
    name: 'Orchid Mantis',
    location: 'On white flowers',
    price: '2,400',
    time: '8 a.m. - 5 p.m.',
    months: 'March-November (Northern) / September-May (Southern)',
  },
  {
    id: 24,
    name: 'Honeybee',
    location: 'Flying',
    price: 200,
    time: '8 a.m. - 5 p.m.',
    months: 'March-July (Northern) / March-July (Southern)',
  },
  {
    id: 25,
    name: 'Wasp',
    location: 'Falls from shaking trees',
    price: '2,500',
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 26,
    name: 'Brown Cicada',
    location: 'On trees',
    price: 250,
    time: '8 a.m. - 5 p.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 27,
    name: 'Robust Cicada',
    location: 'On trees',
    price: 300,
    time: '8 a.m. - 5 p.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 28,
    name: 'Giant Cicada',
    location: 'On trees',
    price: 600,
    time: '8 a.m. - 5 p.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 29,
    name: 'Walker Cicada',
    location: 'On trees',
    price: 400,
    time: '8 a.m. - 5 p.m.',
    months: 'August-September (Northern) / February-March (Southern)',
  },
  {
    id: 30,
    name: 'Evening Cicada',
    location: 'On trees',
    price: 660,
    time: '4 a.m. - 8 a.m., 4 p.m. - 7 p.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 31,
    name: 'Cicada Shell',
    location: 'On trees',
    price: 10,
    time: 'All day',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 32,
    name: 'Red Dragonfly',
    location: 'Flying',
    price: 180,
    time: '8 a.m. - 7 p.m.',
    months: 'September-October (Northern) / March-April (Southern)',
  },
  {
    id: 33,
    name: 'Darner Dragonfly',
    location: 'Flying',
    price: 230,
    time: '8 a.m. - 5 p.m.',
    months: 'April-October (Northern) / October-April (Southern)',
  },
  {
    id: 34,
    name: 'Banded Dragonfly',
    location: 'Flying',
    price: '4,500',
    time: '8 a.m. - 5 p.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
  {
    id: 35,
    name: 'Damselfly',
    location: 'Flying',
    price: 500,
    time: 'All day',
    months: 'November-February (Northern) / May-August (Southern)',
  },
  {
    id: 36,
    name: 'Firefly',
    location: 'Flying',
    price: '',
    time: '7 p.m. - 4 a.m.',
    months: 'June (Northern) / December (Southern)',
  },
  {
    id: 37,
    name: 'Mole Cricket',
    location: 'Underground',
    price: 500,
    time: 'All day',
    months: 'November-May (Northern) / May-November (Southern)',
  },
  {
    id: 38,
    name: 'Pondskater',
    location: 'Ponds',
    price: 130,
    time: '8 a.m. - 7 p.m.',
    months: 'May-September (Northern) / November-March (Southern)',
  },
  {
    id: 39,
    name: 'Diving Beetle',
    location: 'Ponds and rivers',
    price: 800,
    time: '8 a.m. - 7 p.m.',
    months: 'May-September (Northern) / November-March (Southern)',
  },
  {
    id: 40,
    name: 'Giant Water Bug',
    location: 'Ponds and rivers',
    price: '2,000',
    time: '7 p.m. - 8 a.m.',
    months: 'April-September (Northern) / October-March (Southern)',
  },
  {
    id: 41,
    name: 'Stinkbug',
    location: 'On flowers',
    price: 120,
    time: 'All day',
    months: 'March-November (Northern) / September-May (Southern)',
  },
  {
    id: 42,
    name: 'Man-faced Stink Bug',
    location: 'On flowers',
    price: '1,000',
    time: '7 p.m. - 8 a.m.',
    months: 'March-November (Northern) / September-May (Southern)',
  },
  {
    id: 43,
    name: 'Ladybug',
    location: 'On flowers',
    price: 200,
    time: '8 a.m. - 5 p.m.',
    months: 'March-June, October (Northern) / September-December, April (Southern)',
  },
  {
    id: 44,
    name: 'Tiger Beetle',
    location: 'On ground',
    price: '1,500',
    time: 'All day',
    months: 'February-November (Northern) / August-May (Southern)',
  },
  {
    id: 45,
    name: 'Jewel Beetle',
    location: 'On trees',
    price: '2,400',
    time: 'All day',
    months: 'April-August (Northern) / October-February (Southern)',
  },
  {
    id: 46,
    name: 'Violin Beetle',
    location: 'On tree stumps',
    price: 450,
    time: 'All day',
    months: 'May-June, September-November (Northern) / November-December, March-April (Southern)',
  },
  {
    id: 47,
    name: 'Citrus Long-horned Beetle',
    location: 'On tree stumps',
    price: 350,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 48,
    name: 'Rosalia Batesi Beetle',
    location: 'On tree stumps',
    price: '3,000',
    time: 'All day',
    months: 'May-September (Northern) / November-March (Southern)',
  },
  {
    id: 49,
    name: 'Blue Weevil Beetle',
    location: '',
    price: 800,
    time: 'All day',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 50,
    name: 'Dung Beetle',
    location: 'Pushing snowballs',
    price: '3,000',
    time: '',
    months: 'December-February (Northern) / June-August (Southern)',
  },
  {
    id: 51,
    name: 'Earth-boring Dung Beetle',
    location: 'On ground',
    price: 300,
    time: 'All day',
    months: 'July-September (Northern) / January-March (Southern)',
  },
  {
    id: 52,
    name: 'Scarab Beetle',
    location: 'On trees',
    price: '10,000',
    time: '11 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 53,
    name: 'Drone Beetle',
    location: 'On trees',
    price: 200,
    time: 'All day',
    months: 'June-August (Northern) / December-February (Southern)',
  },
  {
    id: 54,
    name: 'Goliath Beetle',
    location: 'On trees',
    price: '8,000',
    time: '5 p.m. - 8 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 55,
    name: 'Saw Stag',
    location: 'On trees',
    price: '2,000',
    time: 'All day',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 56,
    name: 'Miyama Stag',
    location: 'On trees',
    price: '1,000',
    time: 'All day',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 57,
    name: 'Giant Stag',
    location: 'On trees',
    price: '10,000',
    time: '11 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 58,
    name: 'Rainbow Stag',
    location: 'On trees',
    price: '6,000',
    time: '7 p.m. - 8 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 59,
    name: 'Cyclommatus Stag',
    location: 'On trees',
    price: '8,000',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 60,
    name: 'Golden Stag',
    location: 'On trees',
    price: '',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 61,
    name: 'Giraffe Stag',
    location: 'On trees',
    price: '',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 62,
    name: 'Horned Dynastid',
    location: 'On trees',
    price: '1,350',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 63,
    name: 'Horned Atlas',
    location: 'On trees',
    price: '8,000',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 64,
    name: 'Horned Elephant',
    location: 'On trees',
    price: '8,000',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 65,
    name: 'Horned Herucles',
    location: 'On trees',
    price: '',
    time: '5 p.m. - 8 a.m.',
    months: 'July-August (Northern) / January-February (Southern)',
  },
  {
    id: 66,
    name: 'Walking Stick',
    location: 'Falls from shaking trees',
    price: 600,
    time: '4 a.m. - 8 a.m., 5 p.m. - 7 p.m.',
    months: 'July-November (Northern) / January-May (Southern)',
  },
  {
    id: 67,
    name: 'Walking Leaf',
    location: 'Near trees, disguised as furniture leaf',
    price: 600,
    time: 'All day',
    months: 'July-August (Northern) / January-March (Southern)',
  },
  {
    id: 68,
    name: 'Bagworm',
    location: 'Falls from shaking trees',
    price: 600,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 69,
    name: 'Ant',
    location: 'On rotten food',
    price: 80,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 70,
    name: 'Hermit Crab',
    location: 'Beach',
    price: '1,000',
    time: '7 p.m. - 8 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 71,
    name: 'Wharf Roach',
    location: 'On rocks at beach',
    price: 200,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 72,
    name: 'Fly',
    location: 'On trash items',
    price: 60,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 73,
    name: 'Mosquito',
    location: 'Flying',
    price: 130,
    time: '5 p.m. - 4 a.m.',
    months: 'June-September (Northern) / December-March (Southern)',
  },
  {
    id: 74,
    name: 'Flea',
    location: 'On villagers',
    price: 70,
    time: 'All day',
    months: 'April-November (Northern) / October-May (Southern)',
  },
  {
    id: 75,
    name: 'Snail',
    location: 'On rocks (raining)',
    price: 250,
    time: 'All day',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 76,
    name: 'Pill Bug',
    location: 'Hit rocks',
    price: 250,
    time: '11 p.m. - 4 p.m.',
    months: 'September-June (Northern) / March-December (Southern)',
  },
  {
    id: 77,
    name: 'Centipede',
    location: 'Hit rocks',
    price: 300,
    time: '4 p.m. - 11 p.m.',
    months: 'September-June (Northern) / March-December (Southern)',
  },
  {
    id: 78,
    name: 'Spider',
    location: 'Falls from shaking trees',
    price: 480,
    time: '7 p.m. - 8 a.m.',
    months: 'Year-round (Northern and Southern)',
  },
  {
    id: 79,
    name: 'Tarantula',
    location: 'On ground',
    price: '8,000',
    time: '7 p.m. - 4 a.m.',
    months: 'November-April (Northern) / May-October (Southern)',
  },
  {
    id: 80,
    name: 'Scorpion',
    location: 'On ground',
    price: '8,000',
    time: '7 p.m. - 4 a.m.',
    months: 'May-October (Northern) / November-April (Southern)',
  },
];

// console.log(JSON.stringify(convert(this.data[14]), null, 2));

console.log(JSON.stringify(this.data.map((i) => convert(i))));
