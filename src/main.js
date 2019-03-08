import createFilterItem from './create-filter.js';
import createWaypointItem from './create-waypoint.js';
import {
  FILTER_NAME_LIST,
  WAYPOINT_TYPE_LIST,
  WAYPOINT_DESTINATION_LIST,
  WAYPOINT_TIME_LIST,
  WAYPOINT_DURATION_LIST,
  WAYPOINT_PRICE_LIST,
  WAYPOINT_OFFER_LIST
} from './data.js';
import {
  getRandomValueRange
} from './utils.js';

const tripFilterElem = document.querySelector(`.trip-filter`);
const wayPointsElem = document.querySelector(`.trip-day__items`);

/**
 * Создание заданного перечня фильтров
 * @param {array} filterList
 */
const generateFilters = (filterList) => {
  tripFilterElem.innerHTML = filterList.reduce((resultHtml, filterNameItem) => {
    return resultHtml + createFilterItem(filterNameItem);
  }, ``);
};

/**
 * Создание заданного числа маршрутов
 * @param {int} pointsNumber
 */
const generateWaypoints = (pointsNumber) => {
  let waypointsHtml = ``;
  for (let i = 1; i <= pointsNumber; i++) {
    let type = WAYPOINT_TYPE_LIST[getRandomValueRange(0, WAYPOINT_TYPE_LIST.length - 1)];
    waypointsHtml += createWaypointItem({
      type: {
        name: type.name,
        icon: type.icon
      },
      destination: WAYPOINT_DESTINATION_LIST[getRandomValueRange(0, WAYPOINT_DESTINATION_LIST.length - 1)],
      time: WAYPOINT_TIME_LIST[getRandomValueRange(0, WAYPOINT_TIME_LIST.length - 1)],
      duration: WAYPOINT_DURATION_LIST[getRandomValueRange(0, WAYPOINT_DURATION_LIST.length - 1)],
      price: WAYPOINT_PRICE_LIST[getRandomValueRange(0, WAYPOINT_PRICE_LIST.length - 1)],
      offer: WAYPOINT_OFFER_LIST[getRandomValueRange(0, WAYPOINT_OFFER_LIST.length - 1)],
    });
  }
  wayPointsElem.innerHTML = waypointsHtml;
};

/**
 * Обработчики события для фильтров
 */
const addFiltersEvents = () => {
  tripFilterElem.addEventListener(`click`, () => {
    wayPointsElem.innerHTML = ``;
    generateWaypoints(getRandomValueRange(0, 7));
  });
};

// Отрисовываем фильтры
generateFilters(FILTER_NAME_LIST);

// Отрисовываем маршруты
generateWaypoints(7);

// Добавляем обработчики событий фильтрам
addFiltersEvents();
