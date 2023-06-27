import jwt_decode from "jwt-decode";

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


export {
  paserly,
  handleValidate,
  decode
}
