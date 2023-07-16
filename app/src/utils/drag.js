import { makeResizable } from "./resize";
import {
  SetDomId,
  SetHover,
  SetOver,
  SetMove
} from "../Components/Navbar/element.slice";
import PointDom from "./matrixClass";

var size = 15;
const top = document.createElement("div");
top.classList.add("resize");
top.style.width = "100%";
top.style.height = size + "px";
top.style.backgroundColor = "transparent";
top.style.position = "absolute";
top.style.top = -(size / 2) + "px";
top.style.left = "0px";
top.style.cursor = "n-resize";
const bottom = document.createElement("div");
bottom.classList.add("resize");
bottom.style.width = "100%";
bottom.style.height = size + "px";
bottom.style.backgroundColor = "transparent";
bottom.style.position = "absolute";
bottom.style.bottom = -(size / 2) + "px";
bottom.style.left = "0px";
bottom.style.cursor = "n-resize";
const left = document.createElement("div");
left.classList.add("resize");
left.style.width = size + "px";
left.style.height = "100%";
left.style.backgroundColor = "transparent";
left.style.position = "absolute";
left.style.top = "0px";
left.style.left = -(size / 2) + "px";
left.style.cursor = "e-resize";
const right = document.createElement("div");
right.classList.add("resize");
right.style.width = size + "px";
right.style.height = "100%";
right.style.backgroundColor = "transparent";
right.style.position = "absolute";
right.style.top = "0px";
right.style.right = -(size / 2) + "px";
right.style.cursor = "e-resize";
const corner1 = document.createElement("div");
corner1.classList.add("resize");
corner1.style.width = size + "px";
corner1.style.height = size + "px";
corner1.style.backgroundColor = "transparent";
corner1.style.position = "absolute";
corner1.style.top = -(size / 2) + "px";
corner1.style.left = -(size / 2) + "px";
corner1.style.cursor = "nw-resize";
const corner2 = document.createElement("div");
corner2.classList.add("resize");
corner2.style.width = size + "px";
corner2.style.height = size + "px";
corner2.style.backgroundColor = "transparent";
corner2.style.position = "absolute";
corner2.style.top = -(size / 2) + "px";
corner2.style.right = -(size / 2) + "px";
corner2.style.cursor = "ne-resize";
const corner3 = document.createElement("div");
corner3.classList.add("resize");
corner3.style.width = size + "px";
corner3.style.height = size + "px";
corner3.style.backgroundColor = "transparent";
corner3.style.position = "absolute";
corner3.style.bottom = -(size / 2) + "px";
corner3.style.left = -(size / 2) + "px";
corner3.style.cursor = "sw-resize";
const corner4 = document.createElement("div");
corner4.classList.add("resize");
corner4.style.width = size + "px";
corner4.style.height = size + "px";
corner4.style.backgroundColor = "transparent";
corner4.style.position = "absolute";
corner4.style.bottom = -(size / 2) + "px";
corner4.style.right = -(size / 2) + "px";
corner4.style.cursor = "se-resize";

function clickResize(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

function hoverResize(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

top.addEventListener("click", clickResize);
left.addEventListener("click", clickResize);
bottom.addEventListener("click", clickResize);
right.addEventListener("click", clickResize);
corner1.addEventListener("click", clickResize);
corner2.addEventListener("click", clickResize);
corner3.addEventListener("click", clickResize);
corner4.addEventListener("click", clickResize);
top.addEventListener("mouseover", hoverResize);
left.addEventListener("mouseover", hoverResize);
bottom.addEventListener("mouseover", hoverResize);
right.addEventListener("mouseover", hoverResize);
corner1.addEventListener("mouseover", hoverResize);
corner2.addEventListener("mouseover", hoverResize);
corner3.addEventListener("mouseover", hoverResize);
corner4.addEventListener("mouseover", hoverResize);

let dispatch = null;
let rateScale = null;
let dragged;
var arrChildren = [];

function setDispatch(useDispatch) {
  dispatch = useDispatch;
}

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// drap

function getScale() {
  let root = document.getElementById("root-page");
  if (root == null) return;
  const transformValue = root.style.transform;
  const scaleRegex = /scale\((.+?)\)/;
  const scaleMatch = transformValue.match(scaleRegex);

  if (scaleMatch) {
    return parseFloat(scaleMatch[1]);
  }
}

function dragStartCopy(e) {
  // Add different types of drag data
  let root = document.getElementById("root-page");
  if (root == null) return;
  rateScale = getScale();
  root.addEventListener("dragleave", dragLeave);
  root.addEventListener("drop", handleDrop);
  root.addEventListener("dragover", dragOver);
  root.addEventListener("dragenter", dragEnter);
  if (e.target.id.includes("root")) {
    dragged = { tag: e.target.tagName, text: e.target.innerText };
  } else {
    dragged = e.target;
  }
  console.log(dragged);
}

var initialMouseX = null;
var initialMouseY = null;
var oldTranslateX = null;
var oldTranslateY = null;

function handleMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
  initialMouseX = event.clientX;
  initialMouseY = event.clientY;
  oldTranslateX = Number(event.target.getAttribute("data-x"));
  oldTranslateY = Number(event.target.getAttribute("data-y"));
  rateScale = getScale();
  event.target.classList.add("move");
  event.target.addEventListener("mousemove", moveHandler);
  event.target.addEventListener("mouseup", upHandler);
}

function moveHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  var deltaX = event.clientX - initialMouseX;
  var deltaY = event.clientY - initialMouseY;
  if (deltaX > 0 || deltaY > 0) {
    dispatch(SetMove(event.target.id));
  }
  let newX = oldTranslateX + deltaX / rateScale;
  let newY = oldTranslateY + deltaY / rateScale;
  event.target.style.left = `${newX.toFixed(4)}px`;
  event.target.style.top = `${newY.toFixed(4)}px`;
  event.target.setAttribute("data-x", newX);
  event.target.setAttribute("data-y", newY);
}

function upHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  event.target.removeEventListener("mousemove", moveHandler);
  event.target.removeEventListener("mouseup", upHandler);
  event.target.classList.remove("move");
}

let mouse = {
  x: null,
  y: null
};

function dragOver(event) {
  event.preventDefault();
  event.stopPropagation();
}

function dragEnter(event) {
  event.preventDefault();
  event.stopPropagation();
  let children = event.target.querySelectorAll(".node");
  arrChildren = Array.from(children).map((child) => {
    return new PointDom(child);
  });
  dispatch(SetOver(event.target.id));
}

function dragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  event.target.classList.remove("over");
}

const handleClick = (event) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(SetDomId(event.target.id));
};
const handleMouseLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.target.classList.remove("hover-dashed");
  removeEvent(event.target);
};

function removeEvent(dom) {
  var resizeElements = dom.querySelectorAll(".resize");
  resizeElements.forEach(function(element) {
    element.remove();
  });
}

const handleMouseOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(SetHover(event.target.id));
  removeEvent(event.target.parentNode)
  removeEvent(event.target);
  makeResizable(event.target, parseFloat(event.target.style.minWidth), parseFloat(event.target.style.minHeight), top, left, bottom, right, corner1, corner2, corner3, corner4);
};

function handleDrop(event) {
  event.preventDefault();
  let root = document.getElementById("root-page");
  if (root == null) return;
  rateScale = parseFloat(root.style.transform.match(/scale\((.+?)\)/)[1]);
  mouse = {
    x: event.clientX,
    y: event.clientY
  };
  event.target.classList.remove("over");
  const id = generateUniqueId();

  // set event
  let element = SetDataElement(id, dragged);
  if (element.id == event.target.id) return;
  setLocation(element, event, rateScale);
  event.target.appendChild(element);
  element.addEventListener("click", handleClick);
  element.addEventListener("mouseover", handleMouseOver);
  element.addEventListener("mouseleave", handleMouseLeave);
  // element.addEventListener("dragstart", dragStart);
  element.addEventListener("mousedown", handleMouseDown);
  // element.setAttribute("draggable", "true");
  dragged = null;
  arrChildren = [];
  event.target.removeEventListener("dragleave", dragLeave);
  event.target.removeEventListener("drop", handleDrop);
  event.target.removeEventListener("dragover", dragOver);
  event.target.removeEventListener("dragenter", dragEnter);
}

function SetDataElement(id, data) {
  let element;
  if (data?.tag) {
    var size = setSize(data.tag);
    element = document.createElement(`${data.tag}`);
    element.id = id;
    element.classList.add("bg-blue-600", "text-white", "node");
    element.style.width = size[0];
    element.style.height = size[1];
    element.style.minWidth = "5px";
    element.style.minHeight = "5px";
    element.style.display = size[2];
    element.style.boxSizing = "border-box";
    element.style.position = "absolute";
    element.style.verticalAlign = "top";
    element.textContent = data.tag == "input" ? null : data.text;
    element.style.transition =
      "min-width 0.5s ease-in-out, min-height 0.5s ease-in-out";
  } else {
    element = dragged;
  }
  return element;
}

function setLocation(element, event, rateScale) {
  var rect = event.target.getBoundingClientRect();
  element.style.left = `${(
    (mouse.x - rect.left) /
    rateScale
  ).toFixed(4)}px`;
  element.style.top = `${(
    (mouse.y - rect.top) /
    rateScale
  ).toFixed(4)}px`;
  element.setAttribute("data-x", (mouse.x - rect.left) / rateScale);
  element.setAttribute("data-y", (mouse.y - rect.top) / rateScale);
}

function setSize(tag) {
  switch (tag) {
    case "div":
      return ["100%", "50px", "inline-block"];
    case "h1":
      return ["200px", "50px", "inline-block"];
    case "h2":
      return ["200px", "50px", "inline-block"];
    case "h3":
      return ["200px", "50px", "inline-block"];
    case "h4":
      return ["200px", "50px", "inline-block"];
    case "h5":
      return ["200px", "50px", "inline-block"];
    case "button":
      return ["170px", "40px", "inline-block"];
    case "input":
      return ["200px", "30px", "inline-block"];
    default:
      return ["300px", "50px", "inline-block"];
  }
}


export {
  handleMouseDown,
  dragOver,
  dragStartCopy,
  handleDrop,
  dragLeave,
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  dragEnter,
  setDispatch,
  getScale,
  removeEvent
};
