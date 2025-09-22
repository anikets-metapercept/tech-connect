const firstNameValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorFIRSTNAME");
  const Name = "(^[A-Z]{0,1})+([a-z ]{2,19})$";

  errorMessage.style.display = "block";
  if (value.length < 1) {
    errorMessage.innerHTML = "Name is required";
    errorMessage.style.display = "none";
  } else if (!value.match(Name)) {
    errorMessage.innerHTML = "Please type correct name";
  } else {
    errorMessage.style.display = "none";
  }
};

const lastNameValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorLASTNAME");
  const Name = "(^[A-Z]{0,1})+([a-z ]{2,19})$";

  errorMessage.style.display = "block";
  if (value.length < 1) {
    errorMessage.innerHTML = "Name is required";
    errorMessage.style.display = "none";
  } else if (!value.match(Name)) {
    errorMessage.innerHTML = "Please type correct name";
  } else {
    errorMessage.style.display = "none";
  }
};

const emailValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorEMAIL");
  const emailRegex = "^[A-Za-z0-9_.]{3,}@[A-za-z0-9]{3,}[.]{1}[A-Za-z.]{2,6}$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Please provide a email id";
    errorMessage.style.display = "none";
  } else if (!value.match(emailRegex)) {
    errorMessage.innerHTML = "Please provide a valid email id";
  } else {
    errorMessage.style.display = "none";
  }
};

const addressValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorAddress");
  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Address is required";
  } else {
    errorMessage.style.display = "none";
  }
};

const phoneValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorMOBILE");
  const mobileRegex = "(^[6-9]{1,1})+([0-9]{9,9})$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Phone number is required";
    errorMessage.style.display = "none";
  }
  if (!value.match(mobileRegex)) {
    errorMessage.innerHTML = "Please enter a valid phone number";
  } else {
    errorMessage.style.display = "none";
  }
};

const isFormValid = () => {
  const ErrorMsg = document.getElementsByClassName("errorMessage");

  let count = 0;
  for (let ele of ErrorMsg) {
    if (ele.style.display === "block") count++;
  }
  return count ? false : true;
};

const clearError = (e) => {
  const removeError = document.getElementById(e);
  removeError.style.display = "none";
};

export {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  addressValidation,
  phoneValidation,
  isFormValid,
  clearError,
};