const myEmailAddress = "emrecakmak93@hotmail.co.uk";
const myPassword = "hello123";


function check(form) {
  if(form.userid.value === myEmailAddress && form.password.value === myPassword) {
    window.open("target.html")
  } else if(form.userid.value === "" || form.password.value === ""){
    alert("Please ensure both fields are filled");
  } else {
    alert("Incorrect email address or password");

  }
}
