export default class PointDom {
  constructor(element) {
    this.element = element;
    this.height = element.clientHeight;
    this.width = element.clientWidth;
    this.offset = {
      left: element.offsetLeft,
      top: element.offsetTop,
    };
    this.coordinates = this.getCoordinates();
    this.id = element.id;
  }

  getCoordinates() {
    const rect = this.element.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      right: rect.right + window.scrollX,
      bottom: rect.bottom + window.scrollY,
    };
  }
}
