class WaypointComponent {
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
   */
  get template() {
    throw new Error(`You have to define template() method.`);
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
    throw new Error(`You have to define addEvents() method.`);
  }

  removeEvents() {
    throw new Error(`You have to define removeEvents() method.`);
  }

  /**
   * Отрисовка точки маршрута в заданном элементе
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
  WaypointComponent
};
