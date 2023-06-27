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
export {
  setLocal,
  getLocal,
  handleCheckClass,
  getClass,
}