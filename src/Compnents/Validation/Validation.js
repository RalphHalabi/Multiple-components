const Validation = (values) => {
  const errors = {}

  const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  const phoneNumber_pattern = /^[0-9]{8}$/;
  
    if (values.firstName === "") {
      errors.firstName = 'First name is required';
    }
  
    if (values.lastName === "") {
      errors.lastName = 'Last name is required';
    }
  
    if (values.email === "") {
      errors.email = 'Email is required';
    } 
    else if (!email_pattern.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
  
    if (values.phoneNumber === "") {
      errors.phoneNumber = 'Phone number is required';
    }
    else if (!phoneNumber_pattern.test(values.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
  
    if (!values.gender) {
      errors.gender = 'Gender is required';
    }
  
    if (!values.country) {
      errors.country = 'Country is required';
    }
  
    if (values.subject === "") {
      errors.subject = 'Subject is required';
    }
  
    if (values.message === "") {
      errors.message = 'Message is required';
    }
  
    return errors;
  };
  


export default Validation;
