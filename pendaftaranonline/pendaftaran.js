const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const noKTP = document.getElementById("noKTP");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const tmptLahir = document.getElementById("tmptLahir");
const alamat = document.getElementById("alamat");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Password do not match");
  }
}

function checkLength(input, min, max) {
  if (input.value.length <= min) {
    showError(input, `${getFieldName(input)} must be more than ${min} characters`);
  } else if (input.value.length >= max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([fullname, noKTP, email, phone, tmptLahir, alamat]);
  checkLength(fullname, 2, 100);
  checkLength(noKTP, 9, 11);
  checkLength(phone, 10, 13);
  checkLength(tmptLahir, 2, 20);
  checkLength(alamat, 2, 150);

//   if (password2.value !== "") {
//     checkPasswordsMatch(password, password2);
//   }

 


  // if (fullname.value !== "" && checkLength(fullname, 2, 50)) {
  //   if (username.value !== "" && checkLength(username, 3, 50)) {
  //     if (email.value !== "" && checkEmail(email)) {
  //       if (phone.value !== "" && checkLength(phone, 10, 13)) {
  //         if (password.value !== "" && password2.value !== "" && checkLength(password, 6, 25)) {
  //           if (password.value === password2.value) {
  //             window.location.href = "../index_sesudahLogin.html";
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  if (fullname.value !== "" && noKTP.value !== "" && email.value !== "" && phone.value !== "") {
    if (tmptLahir.value !== "" && alamat.value !== "") {
        window.location.href = "../index_sesudahLogin.html";
    }
  }
});
