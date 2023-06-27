export default class PointDom {
  constructor(element) {
    this.element = element;
    this.offset = this.getOffset();
    this.totalSize = this.getTotalSize();
    this.corners = this.getCorners();
  }

  getOffset() {
    const offsetLeft = this.element.offsetLeft;
    const offsetTop = this.element.offsetTop;

    return {
      left: offsetLeft,
      top: offsetTop,
    };
  }

  getTotalSize() {
    const styles = window.getComputedStyle(this.element);
    const width = this.element.offsetWidth;
    const height = this.element.offsetHeight;
    const marginLeft = parseFloat(styles.marginLeft);
    const marginRight = parseFloat(styles.marginRight);
    const marginTop = parseFloat(styles.marginTop);
    const marginBottom = parseFloat(styles.marginBottom);
    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingRight = parseFloat(styles.paddingRight);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    const totalWidth =
      width + marginLeft + marginRight + paddingLeft + paddingRight;
    const totalHeight =
      height + marginTop + marginBottom + paddingTop + paddingBottom;

    return {
      width: totalWidth,
      height: totalHeight,
    };
  }
  getCorners() {
    const rect = this.element.getBoundingClientRect();
    const topLeft = { x: rect.left, y: rect.top };
    const topRight = { x: rect.right, y: rect.top };
    const bottomRight = { x: rect.right, y: rect.bottom };
    const bottomLeft = { x: rect.left, y: rect.bottom };

    return {
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
    };
  }
}
