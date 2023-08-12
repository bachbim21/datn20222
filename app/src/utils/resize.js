import { getScale } from "./drag";
export function makeResizable(element, minW, minH, top, left, bottom, right, corner1, corner2, corner3, corner4) {
  var rateScale = getScale()

  element.appendChild(top);
  element.appendChild(bottom);
  element.appendChild(left);
  element.appendChild(right);
  element.appendChild(corner1);
  element.appendChild(corner2);
  element.appendChild(corner3);
  element.appendChild(corner4);
  top.addEventListener("mousedown", resizeYNegative());
  bottom.addEventListener("mousedown", resizeYPositive());
  left.addEventListener("mousedown", resizeXNegative());
  right.addEventListener("mousedown", resizeXPositive());

  corner1.addEventListener("mousedown", resizeXNegative());
  corner1.addEventListener("mousedown", resizeYNegative());

  corner2.addEventListener("mousedown", resizeXPositive());
  corner2.addEventListener("mousedown", resizeYNegative());

  corner3.addEventListener("mousedown", resizeXNegative());
  corner3.addEventListener("mousedown", resizeYPositive());

  corner4.addEventListener("mousedown", resizeXPositive());
  corner4.addEventListener("mousedown", resizeYPositive());


  function get_int_style(key) {
    return parseFloat(window.getComputedStyle(element).getPropertyValue(key));
  }

  function resizeXPositive() {
    let initMouseX;
    let initW
    function dragMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      element = top.parentNode
      const { clientX } = e;
      initMouseX = clientX ;
      initW = get_int_style("width")
      e.target.addEventListener("mouseup", closeDragElement);
      e.target.addEventListener("mousemove", elementDrag);
      return false
    }

    function elementDrag(e) {
      e.preventDefault()
      e.stopPropagation();
      const { clientX } = e;
      let x = (clientX - initMouseX )/rateScale + initW;
      if (x < minW) x = minW;
      element.style.width = x + "px";
      return false
    }

    function closeDragElement(e) {
      e.target.removeEventListener("mouseup", closeDragElement);
      e.target.removeEventListener("mousemove", elementDrag);
    }
    return dragMouseDown;
  }

  function resizeYPositive() {
    let initMouseY;
    let initH
    function dragMouseDown(e) {
      e.preventDefault()
      e.stopPropagation();
      element = top.parentNode
      const { clientY } = e;
      initMouseY = clientY ;
      initH = get_int_style("height")
      e.target.addEventListener("mouseup", closeDragElement);
      e.target.addEventListener("mousemove", elementDrag);
      return false
    }

    function elementDrag(e) {
      e.preventDefault()
      e.stopPropagation();
      const { clientY } = e;
      let y = (clientY - initMouseY)/rateScale + initH;
      if (y < minH) y = minH;
      element.style.height = y + "px";
      return false
    }

    function closeDragElement(e) {
      e.target.removeEventListener("mouseup", closeDragElement);
      e.target.removeEventListener("mousemove", elementDrag);
    }
    return dragMouseDown;
  }

  function resizeXNegative() {
    let initMouseX;
    let startX;
    let startW;
    let maxX;
    function dragMouseDown(e) {
      e.preventDefault()
      e.stopPropagation();
      element = top.parentNode
      const { clientX } = e;
      startX = get_int_style("left");
      startW = get_int_style("width");
      initMouseX = clientX;
      maxX = startX + startW - minW;

      e.target.addEventListener("mouseup", closeDragElement);
      e.target.addEventListener("mousemove", elementDrag);
      return false
    }

    function elementDrag(e) {
      e.preventDefault()
      e.stopPropagation();
      const { clientX } = e;
      let x = (clientX - initMouseX)/rateScale + startX ;
      let w = startW + startX - x;
      if (w < minW) w = minW;
      if (x > maxX) x = maxX;
      element.style.left = x + "px";
      element.style.width = w + "px";
      return false
    }

    function closeDragElement(e) {
      e.target.removeEventListener("mouseup", closeDragElement);
      e.target.removeEventListener("mousemove", elementDrag);
    }
    return dragMouseDown;
  }

  function resizeYNegative() {
    let initMouseY;
    let startY;
    let startH;
    let maxY;
    function dragMouseDown(e) {
      e.preventDefault()
      e.stopPropagation();
      element = top.parentNode
      const { clientY } = e;
      startY = get_int_style("top");
      startH = get_int_style("height");
      initMouseY = clientY;
      maxY = startY + startH - minH;
      e.target.addEventListener("mouseup", closeDragElement);
      e.target.addEventListener("mousemove", elementDrag);
      return false
    }

    function elementDrag(e) {
      e.preventDefault()
      e.stopPropagation();
      const { clientY } = e;
      let y = (clientY - initMouseY)/rateScale + startY;
      let h = (startH + startY - y);
      if (h < minH) h = minH;
      if (y > maxY) y = maxY;
      element.style.top = y + "px";
      element.style.height = h + "px";
      return false
    }

    function closeDragElement(e) {
      e.target.removeEventListener("mouseup", closeDragElement);
      e.target.removeEventListener("mousemove", elementDrag);
    }
    return dragMouseDown;
  }

}

