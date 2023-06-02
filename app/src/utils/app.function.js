import jwt_decode from "jwt-decode";
import {
  SetDomId,
  SetHover,
  SetOver,
} from "../Components/Navbar/element.slice";
import PointDom from "./class";
function decode(token) {
  let thisToken = token ? token : localStorage.getItem("token");
  try {
    if (thisToken != null) {
      return jwt_decode(thisToken);
    } else return null;
  } catch (e) {
    localStorage.removeItem("token");
    return null;
  }
}
let decoded = decode(null);

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
function dragStartCopy(e) {
  // Add different types of drag data
  // e.dataTransfer.dropEffect = "copy";
  e.dataTransfer.setData(
    "application/json",
    JSON.stringify({ tag: e.target.tagName, text: e.target.innerText })
  );
}
function dragStart(e) {
  // e.dataTransfer.dropEffect = "move";
  e.dataTransfer.setData(
    "application/json",
    JSON.stringify({ html: e.target.outerHTML })
  );
  e.target.style.opacity = "0.5";
  e.target.style.border = "2px dashed red";
}
function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  // e.dataTransfer.dropEffect = "move";
  // dispatch(SetOver(e.target.id));
}
function dragEnter(e, dispatch) {
  e.preventDefault();
  e.stopPropagation();
  dispatch(SetOver(e.target.id));
}

function dragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("over");
}
const handleClick = (e, dispatch) => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(SetDomId(e.target.id));
};
const handleMouseLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.target.classList.remove("hover-dashed");
};

const handleMouseOver = (event, dispatch) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(SetHover(event.target.id));
};

function handleDrop(e, dispatch) {
  e.preventDefault();
  e.target.classList.remove("over");
  var data = JSON.parse(e.dataTransfer.getData("application/json"));
  const id = generateUniqueId();
  // set event
  let element = SetDataElement(id, data);
  e.target.appendChild(element);
  element.addEventListener("click", (e) => handleClick(e, dispatch));
  element.addEventListener("mouseover", handleMouseOver(e, dispatch));
  element.addEventListener("mouseleave", handleMouseLeave(e));
  element.addEventListener("dragstart", dragStart);
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
    element.setAttribute("draggable", "true");
    element.textContent = data.tag == "input" ? null : data.text;
    element.style.transition =
      "min-width 0.5s ease-in-out, min-height 0.5s ease-in-out";
  } else {
    let d = document.createElement("div");
    d.innerHTML = data.html;
    element = d.firstChild;
    element.id = id;
  }
  return element;
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
  paserly,
  handleValidate,
  dragOver,
  dragStartCopy,
  handleDrop,
  dragLeave,
  decoded,
  decode,
  setLocal,
  getLocal,
  handleCheckClass,
  getClass,
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  dragEnter,
};
