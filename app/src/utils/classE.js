export class CustomElement {
  constructor(element,width, height, display, text, className) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.display = display;
    this.text = text;
    this.className = className
  }

  render() {
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.className = this.className
    if(this.element.tagName == 'input') {
      debugger
      this.element.disabled = false
    }
    this.element.textContent = this.text;
    this.element.style.boxSizing = "border-box";
    this.element.style.position = "absolute";
    this.element.style.minWidth = "5px";
    this.element.style.minHeight = "5px";
    this.element.style.transition =
      "min-width 0.5s ease-in-out, min-height 0.5s ease-in-out";;
    return this.element;
  }
}

