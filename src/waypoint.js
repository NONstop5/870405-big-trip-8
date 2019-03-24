import {WaypointComponent} from "./waypointComponent";

class Waypoint extends WaypointComponent {
  constructor(data) {
    super(data);

    this._onClick = null;
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
}

export {
  Waypoint
};
