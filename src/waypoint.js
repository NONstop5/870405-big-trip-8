class Waypoint {
  constructor(data) {
    this._type = data.type;
    this._destination = data.destination;
    this._time = data.time;
    this._duration = data.duration;
    this._price = data.price;
    this._photo = data.photo;
    this._offers = data.offers;
    this._text = data.text;
    this._element = null;

    this._onClick = null;
  }

  /**
   * Генерирует html-код оферов
   * @param {array} offerList
   * @return {array}
   */
  _generateOffersHtml(offerList) {
    return offerList.reduce((resultHtml, offerItem) => {
      return resultHtml + `
      <li>
        <button class="trip-point__offer">${offerItem}</button>
      </li>
    `;
    }, ``);
  }

  /**
   * Генерирует html - код текстовых предложений
   * @param {array} textList
   * @return {string}
   */
  _generateTextHtml(textList) {
    return textList.reduce((resultHtml, textItem) => {
      return resultHtml + `${textItem}<br>`;
    }, ``);
  }

  /**
   * Отрисовка маршрута
   * @return {string}
   */
  get template() {
    return `
    <article class="trip-point">
      <i class="trip-icon">${this._type.icon}</i>
      <h3 class="trip-point__title">${this._type.name} to ${this._destination}<br><br>${this._generateTextHtml(this._text)}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">${this._time}</span>
        <span class="trip-point__duration">${this._duration}</span>
      </p>
      <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
      <ul class="trip-point__offers">
      ${this._generateOffersHtml(this._offers)}
      </ul>
    </article>
  `;
  }

  _onWaypointClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  get element() {
    return this._element;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  /**
   * Создаем обработчики событий
   */
  addEvents() {
    this._element.addEventListener(`click`, this._onWaypointClick.bind(this));
  }

  removeEvents() {
    this._element.removeEventListener(`click`, this._onWaypointClick.bind(this));
  }

  /**
   * Отрисовка задачи в заданном элементе
   * @return {link}
   */
  render() {
    this._element = null || document.createElement(`div`);

    this._element.innerHTML = this.template;
    this._element = this._element.firstElementChild;

    this.addEvents();

    return this._element;
  }

  unrender() {
    this.removeEvents();
    this._element = null;
  }
}

export {
  Waypoint
};
