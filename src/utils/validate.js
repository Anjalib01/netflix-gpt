export const validatedata = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail && !isValidPassword) {
    return "Email Address and Password are not valid!";
  } else if (!isValidEmail) {
    return "Email Address is not valid!";
  } else if (!isValidPassword) {
    return "Password is not valid!";
  } else {
    return null;
  }
};
