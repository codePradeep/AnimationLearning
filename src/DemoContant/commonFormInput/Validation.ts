let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const usernameRegex =/^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;




const EmailValidate = (text: string) => {
  if (Email.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const PasswordValidate = (text: string) => {
  if (password.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const UsernameValidation = (text: string) => {
  if (usernameRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};

export {EmailValidate, PasswordValidate, UsernameValidation};
