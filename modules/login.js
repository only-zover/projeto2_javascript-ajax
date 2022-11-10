import { UserModal } from "./modal.js";

const Element = {
  msg: document.querySelector("#msg"),

  email: document.querySelector("#email"),
  labelEmail: document.querySelector("#labelEmail"),

  password: document.querySelector("#password"),
  labelPassword: document.querySelector("#labelPassword"),

  validPassword: false,
  validUser: false,
};

const Login = {
  loginBt: document.querySelector("#loginbt"),
  logoutBt: document.querySelector("#logoutbt"),
  login() {
    if (Element.validUser && Element.validPassword) {
      let userInfo = JSON.stringify({
        email: Element.email.value,
        password: Element.password.value,
      });

      var xhr = new XMLHttpRequest();

      xhr.open("POST", "https://reqres.in/api/login", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(userInfo);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let data = JSON.parse(xhr.responseText);
          let token = data["token"];

          localStorage.setItem("token", token);
          UserModal.modal.close();
          Login.loginBt.setAttribute("style", "display: none");
          Login.logoutBt.setAttribute("style", "display: inline");
        } else if (xhr.readyState == 4 && xhr.status == 400) {
          Element.msg.innerHTML = "Email ou senha inválida";
        }
      };
    } else {
      Element.msg.innerHTML =
        "A senha e/ou email não podem ter menos de 3 caracteres";
    }
  },

  checkUser() {
    if (Element.email.value.length < 3) {
      Element.labelEmail.setAttribute("style", "color: red");
      Element.labelEmail.innerHTML = "Email: (No mínimo 3 caracteres)";
      Element.validUser = false;
    } else {
      Element.labelEmail.setAttribute("style", "color: green");
      Element.labelEmail.innerHTML = "Email:";
      Element.validUser = true;
    }
  },

  checkPassword() {
    if (Element.password.value.length < 3) {
      Element.labelPassword.setAttribute("style", "color: red");
      Element.labelPassword.innerHTML = "Senha: (No mínimo 3 caracteres)";
      Element.validPassword = false;
    } else {
      Element.labelPassword.setAttribute("style", "color: green");
      Element.labelPassword.innerHTML = "Senha:";
      Element.validPassword = true;
    }
  },

  isLogged() {
    if (localStorage.getItem("token")) {
      Login.loginBt.setAttribute("style", "display: none");
      Login.logoutBt.setAttribute("style", "display: inline");

      return true;
    }

    return false;
  },

  logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
  },
};

export { Element, Login };
