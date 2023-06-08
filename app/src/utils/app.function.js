import jwt_decode from "jwt-decode";
import {
  SetDomId,
  SetHover,
  SetOver,
} from "../Components/Navbar/element.slice";
import PointDom from "./class";
function decode() {
  let thisToken = localStorage.getItem("token");
  try {
    if (thisToken != null && thisToken != undefined && thisToken.length > 0) {
      let now = new Date();
      let de = jwt_decode(thisToken);
      if(now.getTime() > de.exp*1000) {
        localStorage.removeItem("token");
        return null
      }
      return de
    } else return null;
  } catch (e) {
    localStorage.removeItem("token");
    return null;
  }
}
let dispatch = null;
let rateScale = null;

let dragged;
var arrChildren = [];
function setDispatch(useDispatch) {
  dispatch = useDispatch
}
const paserly = (parsely, value) => {
  let validate = true;
  switch (parsely.name) {
    case "required":
      function validateRequired() {
        if (value.trim().length <= 0) {
          validate = false;
        }
      }
      validateRequired();
      break;
    case "pattern":
      function validateP() {
        const reg = new RegExp(parsely.required);
        if (!reg.test(value)) {
          validate = false;
        }
      }
      validateP();
      break;
    case "maxLength":
      function validateML() {
        if (Number(value.length) > Number(parsely.required)) {
          validate = false;
        }
      }
      validateML();
      break;
    case "minLength":
      function validatemL() {
        if (value.length < Number(parsely.required)) {
          validate = false;
        }
      }
      validatemL();
      break;
    case "whitespace":
      function validateTrim() {
        if (value.trim().length == 0) {
          validate = false;
        }
      }
      validateTrim();
      break;
    case "phone":
      function validatePhone() {
        const reg = new RegExp(parsely.required, "g");
        if (!reg.test(value)) {
          validate = false;
        }
      }
      validatePhone();
      break;
    default:
      console.log("No options!!");
  }
  return validate;
};

// function check all required validate input
function handleValidate(arrValue, listConfig) {
  var result;
  for (var i = 0; i < listConfig.length; i++) {
    for (var check of listConfig[i].dataCheck) {
      let validate = paserly(check, arrValue[i].value);
      result = validate;
      if (!validate) break;
    }
    if (!result) break;
  }
  return result;
}
const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
// drap

function getScale() {
  let root = document.getElementById("root-page");
  if (root == null) return;
  return parseFloat(root.style.transform.match(/scale\((.+?)\)/)[1]);
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
  initialMouseX = event.clientX;
  initialMouseY = event.clientY;
  oldTranslateX = Number(event.target.getAttribute("data-x"));
  oldTranslateY = Number(event.target.getAttribute("data-y"));
  rateScale = getScale();
  event.target.addEventListener("mousemove", moveHandler);
  event.target.addEventListener("mouseup", upHandler);
  // event.target.addEventListener("dragstart", (e)=> dragStartCopy(e));
  // event.target.setAttribute("draggable", "true");
  event.target.addEventListener('drop', function(event) {
    event.stopPropagation();
  });
  // add event drag and drop
  let root = document.getElementById('root-page')
  root.addEventListener("dragleave", dragLeave);
  root.addEventListener("drop", handleDrop);
  root.addEventListener("dragover", dragOver);
  root.addEventListener("dragenter", dragEnter);

}
function moveHandler(e) {
  var deltaX = e.clientX - initialMouseX;
  var deltaY = e.clientY - initialMouseY;

  let newX = oldTranslateX + deltaX / rateScale;
  let newY = oldTranslateY + deltaY / rateScale;
  e.target.style.transform = `translate(${newX.toFixed(4)}px,${newY.toFixed(
    4
  )}px)`;
  e.target.setAttribute("data-x", oldTranslateX + deltaX / rateScale);
  e.target.setAttribute("data-y", oldTranslateY + deltaY / rateScale);
}
function upHandler(event) {
  event.target.removeEventListener("mousemove", moveHandler);
  event.target.removeEventListener("mouseup", upHandler);
  // remove event drag and drop
  let root = document.getElementById('root-page')
  root.addEventListener("dragleave", dragLeave);
  root.addEventListener("drop", handleDrop);
  root.addEventListener("dragover", dragOver);
  root.addEventListener("dragenter", dragEnter);
  root.setAttribute("draggable", "false");
}

let mouse = {
  x: null,
  y: null,
};
function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}

function dragEnter(e) {
  e.preventDefault();
  e.stopPropagation();
  let children = e.target.querySelectorAll(".node");
  arrChildren = Array.from(children).map((child) => {
    return new PointDom(child);
  });
  dispatch(SetOver(e.target.id));
}

function dragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("over");
}
const handleClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(SetDomId(e.target.id));
};
const handleMouseLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.target.classList.remove("hover-dashed");
};

const handleMouseOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(SetHover(event.target.id));
};

function handleDrop(e) {
  e.preventDefault();
  let root = document.getElementById("root-page");
  if (root == null) return;
  rateScale = parseFloat(root.style.transform.match(/scale\((.+?)\)/)[1]);
  mouse = {
    x: e.clientX,
    y: e.clientY,
  };
  e.target.classList.remove("over");
  const id = generateUniqueId();

  // set event
  let element = SetDataElement(id, dragged);
  console.log(element);
  if (element.id == e.target.id) return;
  setLocation(element, e, rateScale);
  e.target.appendChild(element);
  element.addEventListener("click", handleClick);
  element.addEventListener("mouseover", (e) => handleMouseOver(e, dispatch));
  element.addEventListener("mouseleave", handleMouseLeave);
  // element.addEventListener("dragstart", dragStart);
  element.addEventListener("mousedown", handleMouseDown);
  // element.setAttribute("draggable", "true");
  dragged = null;
  arrChildren = [];
  e.target.removeEventListener("dragleave", dragLeave);
  e.target.removeEventListener("drop", handleDrop);
  e.target.removeEventListener("dragover", dragOver);
  e.target.removeEventListener("dragenter", dragEnter);
}

function SetDataElement(id, data) {
  let element = null;
  if (data?.tag) {
    var size = setSize(data.tag);
    element = document.createElement(`${data.tag}`);
    element.id = id;
    element.classList.add("bg-black", "text-white", "node");
    element.style.minWidth = size[0];
    element.style.minHeight = size[1];
    element.style.display = size[2];
    element.style.boxSizing = "border-box";
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
  element.style.transform = `translate(${(
    (mouse.x - rect.left) /
    rateScale
  ).toFixed(4)}px,${((mouse.y - rect.top) / rateScale).toFixed(4)}px)`;
  element.setAttribute("data-x", (mouse.x - rect.left) / rateScale);
  element.setAttribute("data-y", (mouse.y - rect.top) / rateScale);
}

function setSize(tag) {
  switch (tag) {
    case "div":
      return ["100%", "50px", "block"];
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

function setLocal(o, id) {
  let present = localStorage.getItem("projects");
  if (present != null && present != undefined) {
    let array = JSON.parse(present);
    for (var value of array) {
      if (value.id == id) {
        value.path = o.path;
        value.key = o.key;
      }
    }
    localStorage.setItem("projects", JSON.stringify(array));
  } else {
    localStorage.setItem("projects", JSON.stringify([{ ...o, id: id }]));
  }
}
function getLocal(id) {
  let present = localStorage.getItem("projects");
  if (present == null || present == undefined) {
    return null;
  } else {
    let array = JSON.parse(present);
    for (var value of array) {
      if (value.id == id) return value;
    }
  }
}

function handleCheckClass(dom, listClass) {
  var arrClass = listClass.map((object) => {
    return object.classCustom;
  });
  if (dom == null) return;
  const containsClass = Array.from(dom.classList).filter((className) => {
    if (arrClass.includes(className)) return className;
  });
  dom?.classList.remove(containsClass[0]);
}
function getClass(dom, listClass) {
  var arrClass = listClass.map((object) => {
    return object.classCustom;
  });
  if (dom == null) return;
  const currentClass = Array.from(dom.classList).filter((className) => {
    if (arrClass.includes(className)) return className;
  });
  return currentClass;
}

export {
  handleMouseDown,
  paserly,
  handleValidate,
  dragOver,
  dragStartCopy,
  handleDrop,
  dragLeave,
  decode,
  setLocal,
  getLocal,
  handleCheckClass,
  getClass,
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  dragEnter,
  setDispatch
};
