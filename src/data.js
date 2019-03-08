// Список фильтров
const FILTER_NAME_LIST = [
  `everything`,
  `future`,
  `past`
];

// Список типов маршрутов
const WAYPOINT_TYPE_LIST = [
  {
    name: `Taxi`,
    icon: `🚕`
  },
  {
    name: `Bus`,
    icon: `🚌`
  },
  {
    name: `Train`,
    icon: `🚂`
  },
  {
    name: `Ship`,
    icon: `🛳️`
  },
  {
    name: `Transport`,
    icon: `🚊`
  },
  {
    name: `Drive`,
    icon: `🚗`
  },
  {
    name: `Flight`,
    icon: `✈️`
  },
  {
    name: `Check-in`,
    icon: `🏨`
  },
  {
    name: `Sightseeing`,
    icon: `🏛️`
  },
  {
    name: `Restaurant`,
    icon: `🍴`
  }
];

// Список имен маршрутов
const WAYPOINT_DESTINATION_LIST = [
  `Airport`,
  `Geneva`,
  `Chamonix`,
  `hotel`,
  `London`,
  `New York`
];

// Список времени маршрутов
const WAYPOINT_TIME_LIST = [
  `9:00&nbsp;&mdash; 10:00`,
  `10:00&nbsp;&mdash; 11:00`,
  `11:00&nbsp;&mdash; 12:00`,
  `12:00&nbsp;&mdash; 13:00`
];

// Список продолительности маршрутов
const WAYPOINT_DURATION_LIST = [
  `1h 00m`,
  `1h 10m`,
  `1h 20m`,
  `1h 30m`
];

// Список стоимости маршрутов
const WAYPOINT_PRICE_LIST = [
  `10`,
  `20`,
  `30`,
  `40`
];

// Список предложений
const WAYPOINT_OFFER_LIST = [
  [
    `Order UBER +&euro;&nbsp;20`,
    `Upgrade to business +&euro;&nbsp;20`
  ],
  [
    `Upgrade to business +&euro;&nbsp;20`,
    `Rent a car +&euro;&nbsp;200`
  ],
  [
    `Rent a car +&euro;&nbsp;200`
  ],
  [
    `Rent a car +&euro;&nbsp;200`
  ]
];

export {
  FILTER_NAME_LIST,
  WAYPOINT_TYPE_LIST,
  WAYPOINT_DESTINATION_LIST,
  WAYPOINT_TIME_LIST,
  WAYPOINT_DURATION_LIST,
  WAYPOINT_PRICE_LIST,
  WAYPOINT_OFFER_LIST
};
