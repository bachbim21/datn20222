import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");

let decoded = null;
if (token) {
  decoded = jwt_decode(token);
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
        console.log(value.length, parsely.required);
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

// drap
function dragstart_handler(e) {
  // Add different types of drag data
  console.log(e.target.tagName);
  e.dataTransfer.dropEffect = "copy";
  e.dataTransfer.setData("text/html", e.target.outerHTML);
  e.dataTransfer.setData("id", e.target.id);
  e.dataTransfer.setData("tagName", e.target.tagName);
}
function dragover_handler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}
function drop_handler(e, boxDrag) {
  e.preventDefault();
  console.log("X: " + e.clientX + " | Y: " + e.clientY);
  const html = e.dataTransfer.getData("text/html");
  boxDrag.current.innerHTML = boxDrag.current.innerHTML + html;
}

export {
  paserly,
  handleValidate,
  dragover_handler,
  dragstart_handler,
  drop_handler,
  decoded,
};
