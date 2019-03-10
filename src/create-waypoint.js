/**
 * Генерирует html-код оферов
 * @param {array} offerList
 * @return {array}
 */
const generateOffersHtml = (offerList) => {
  return offerList.reduce((resultHtml, offerItem) => {
    return resultHtml + `
      <li>
        <button class="trip-point__offer">${offerItem}</button>
      </li>
    `;
  }, ``);
};

/**
 * Генерирует html - код текстовых предложений
 * @param {array} textList
 * @return {string}
 */
const generateTextHtml = (textList) => {
  return textList.reduce((resultHtml, textItem) => {
    return resultHtml + `${textItem}<br>`;
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
      <h3 class="trip-point__title">${waypointSettings.type.name} to ${waypointSettings.destination}<br><br>${generateTextHtml(waypointSettings.text)}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">${waypointSettings.time}</span>
        <span class="trip-point__duration">${waypointSettings.duration}</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${waypointSettings.price}</p>
      <ul class="trip-point__offers">
      ${generateOffersHtml(waypointSettings.offers)}
      </ul>
      <img src="${waypointSettings.photo}" alt="Фотография">
    </article>
  `;
};
