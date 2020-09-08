const validate = (selectedElement, formData) => {
  let error = [true, ""];
  if (selectedElement.validation.email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const valid = re.test(String(selectedElement.value).toLowerCase());
    const message = `${!valid ? "صيغة ايميل خاطئة" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (selectedElement.validation.confirm) {
    const valid =
      selectedElement.value ===
      formData[selectedElement.validation.confirm].value;
    const message = `${!valid ? "passwords does not match" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (selectedElement.validation.required) {
    const valid = selectedElement.value !== "";
    const message = `${!valid ? "مطلوب" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};
// the element consisits of event, id, and blur
export const update = (element, formData, formNmae) => {
  const newFormData = { ...formData };
  //this will select the data of id: email or password

  const selectedElement = { ...newFormData[element.id] };
  if (selectedElement.element === "file") {
    debugger;
    const file = element.event.target.files[0];
    const data = new FormData();
    data.append("myFile", file, file.name);
    selectedElement.value = data;
  } else {
    selectedElement.value = element.event.target.value;
  }
  if (
    selectedElement.element === "select" &&
    selectedElement.value === "other"
  ) {
    newFormData["how_known_other"].config.hidden = false;
    newFormData["how_known_other"].validation.required = true;
  } else if (
    selectedElement.element === "select" &&
    selectedElement.value !== "other" &&
    selectedElement.step === 1
  ) {
    newFormData["how_known_other"].config.hidden = true;
    newFormData["how_known_other"].validation.required = false;
  }

  if (
    selectedElement.element === "select" &&
    selectedElement.config.name === "tedx_prev_attendance" &&
    selectedElement.value === "yes"
  ) {
    newFormData["tedx_prev_info"].config.hidden = false;
    newFormData["tedx_prev_info"].validation.required = true;
  } else if (
    selectedElement.element === "select" &&
    selectedElement.config.name === "tedx_prev_attendance" &&
    selectedElement.value !== "yes" &&
    selectedElement.step === 3
  ) {
    newFormData["tedx_prev_info"].config.hidden = true;
    newFormData["tedx_prev_info"].validation.required = false;
  }
  if (
    selectedElement.config.name === "tedx_prev_member" &&
    selectedElement.value === "yes"
  ) {
    newFormData["tedx_prev_member_info"].config.hidden = false;
    newFormData["tedx_prev_member_info"].validation.required = true;
  } else if (
    selectedElement.config.name === "tedx_prev_member" &&
    selectedElement.value !== "yes"
  ) {
    newFormData["tedx_prev_member_info"].config.hidden = true;
    newFormData["tedx_prev_member_info"].validation.required = false;
  }
  if (
    selectedElement.config.name === "attatchments" &&
    selectedElement.value === "yes"
  ) {
    newFormData["files_to_attach"].config.hidden = false;
    newFormData["files_to_attach"].validation.required = true;
  } else if (
    selectedElement.config.name === "attatchments" &&
    selectedElement.value !== "yes"
  ) {
    newFormData["files_to_attach"].config.hidden = true;
    newFormData["files_to_attach"].validation.required = false;
  }
  if (
    selectedElement.config.name === "tedx_prev_speaker" &&
    selectedElement.value === "yes"
  ) {
    newFormData["tedx_prev_speaker_idea"].config.hidden = false;
    newFormData["tedx_prev_speaker_idea"].validation.required = true;
    newFormData["tedx_prev_speaker_url"].config.hidden = false;
    newFormData["tedx_prev_speaker_url"].validation.required = true;
  } else if (
    selectedElement.config.name === "tedx_prev_speaker" &&
    selectedElement.value !== "yes"
  ) {
    newFormData["tedx_prev_speaker_idea"].config.hidden = true;
    newFormData["tedx_prev_speaker_idea"].validation.required = false;
    newFormData["tedx_prev_speaker_url"].config.hidden = true;
    newFormData["tedx_prev_speaker_url"].validation.required = false;
  }
  if (element.blur) {
    const validData = validate(selectedElement, formData);
    selectedElement.valid = validData[0];
    selectedElement.validationMessage = validData[1];
  }

  selectedElement.touched = element.blur;
  newFormData[element.id] = selectedElement;

  return newFormData;
};

export const generateData = (formData, formName) => {
  let dataToSubmit = {};

  for (let key in formData) {
    if (
      key !== "confirmPassword" &&
      key !== "phone1" &&
      key !== "phone2" &&
      key !== "city" &&
      key !== "street"
    ) {
      dataToSubmit[key] = formData[key].value;
    } else if (key === "phone1") {
      dataToSubmit["phones"] = [formData[key].value, formData["phone2"].value];
    } else if (key === "city") {
      dataToSubmit["address"] = {
        city: formData[key].value,
        street: formData["street"].value,
      };
    }
  }
  return dataToSubmit;
};

export const isFormValid = (formData, formName) => {
  let formIsValid = true;

  for (let key in formData) {
    const validData = validate(formData[key], formData);
    formData[key].valid = validData[0];
    formData[key].touched = true;
    formData[key].validationMessage = validData[1];
    formIsValid = formData[key].valid && formIsValid; // checking the whole form
  }

  return formIsValid;
};
export const populateOptionFeilds = (formData, arrayData = [], feild) => {
  const newArray = [];
  const newFormData = { ...formData };
  arrayData.forEach((item) => {
    newArray.push({ key: item._id, value: item.name });
  });

  newFormData[feild].config.options = newArray;
  return newFormData;
};
export const reserFeildData = (fromData, type) => {
  const newFormData = { ...fromData };
  for (let key in newFormData) {
    newFormData[key].value = "";
    newFormData[key].valid = false;
    newFormData[key].touched = false;
    newFormData[key].validationMessage = "";
  }
  return newFormData;
};
