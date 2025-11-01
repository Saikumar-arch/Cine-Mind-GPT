

export const FormValidations = (email,password) => {
  const Validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const Validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/.test(password);

  if(!Validemail) return <h2>Invalid email format</h2>;
  if(!Validpassword) return <h2>Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number</h2>;

  return(null);
};


