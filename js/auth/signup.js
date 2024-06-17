// Implémenter le JS de ma page

const inputNom = document.getElementById("NameInput");
const InputPrenom = document.getElementById("PrenomInput");
const InputEmail = document.getElementById("EmailInput");
const InputPassword = document.getElementById("PasswordInput");
const InputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
InputPrenom.addEventListener("keyup", validateForm);
InputEmail.addEventListener("keyup", validateForm);
InputPassword.addEventListener("keyup", validateForm);
InputValidatePassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
  const nomOK = validateRequired(inputNom);
  const prenomOK = validateRequired(InputPrenom);
  const mailOk = validateMail(InputEmail);

  if(nomOK && prenomOK && mailOk){
    btnValidation.disabled = false;
  }
  else{
    btnValidation.disabled = true;
  }
}

function validateMail(input){
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if(mailUser.match(emailRegex)){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input){
  if(input.value != ''){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}