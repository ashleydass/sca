export default function validate(values) {
  let errors = {};

  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // First Name
  if (!values.firstName) {
    errors.firstName = "Required First Name";
  }

  // Last Name
  if (!values.lastName) {
    errors.lastName = "Required Last Name";
  }

  return errors;
}
