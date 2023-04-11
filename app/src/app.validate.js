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
      if (parsely.required == false) {
        validateTrim();
      }
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

export { paserly, handleValidate };
