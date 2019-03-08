/**
 * Генерирует html-код оферов
 * @param {array} offerList
 * @return {array}
 */
const getOffersHtml = (offerList) => {
  return offerList.reduce((resultHtml, offerItem) => {
    return resultHtml + `
      <li>
        <button class="trip-point__offer">${offerItem}</button>
      </li>
    `;
  }, ``);
};

/**
 * Отрисовка маршрута
 * @param {object} waypointSettings
 * @return {string}
 */
export default (waypointSettings) => {
  return `
    <article class="trip-point">
      <i class="trip-icon">${waypointSettings.type.icon}</i>
      <h3 class="trip-point__title">${waypointSettings.type.name} to ${waypointSettings.destination}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">${waypointSettings.time}</span>
        <span class="trip-point__duration">${waypointSettings.duration}</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${waypointSettings.price}</p>
      <ul class="trip-point__offers">
      ${getOffersHtml(waypointSettings.offers)}
      </ul>
    </article>
  `;
};
