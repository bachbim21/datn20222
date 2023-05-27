import jwt_decode from "jwt-decode";
import React from "react";
import { Element } from "../Components/Navbar/element";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";

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
function dragStartCopy(e, dispatch, setData) {
  // Add different types of drag data
  e.dataTransfer.dropEffect = "copy";
  e.dataTransfer.setData("text/html", e.target.outerHTML);
  e.dataTransfer.setData("tagName", e.target.tagName);
  dispatch(
    setData({
      tag: e.target.tagName.toLowerCase(),
      text: e.target.innerHTML,
      type: null,
      width: "100%",
      height: "50px",
    })
  );
}
function dragOverCopy(e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = "move";
  e.target.classList.add("over");
}
function dragLeaveCopy(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("over");
}

// const html = e.dataTransfer.getData("text/html");
// // boxDrag.current.innerHTML = boxDrag.current.innerHTML + html;

function dropCopy(e, data, dispatch) {
  e.preventDefault();
  e.target.classList.remove("over");
  const id = generateUniqueId();
  // set event
  var size = setSize(data.tag);
  const element = React.createElement(Element, {
    id: id,
    tag: data.tag,
    className: "hover-dashed bg-black text-white",
    width: size[0],
    height: size[1],
    display: size[2],
    text: data.text,
    dispatch: dispatch,
  });

  const container = document.createElement("div");
  console.log(container);
  // ReactDOM.render(element, container);
  ReactDOM.createRoot(container).render(element);
  const parentElement = e.target; // Phần tử cha
  let child = container.getElementsByClassName("hover-dashed");
  let a = container.getRootNode();
  console.log(container.firstChild, a.firstChild);
  // parentElement.appendChild(tempElement.firstChild);
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

export {
  paserly,
  handleValidate,
  dragOverCopy,
  dragStartCopy,
  dropCopy,
  dragLeaveCopy,
  decoded,
  decode,
};
