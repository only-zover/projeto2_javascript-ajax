import { Login } from "./login.js";

const errMsg = document.querySelector("#msgerr");

const UserModal = {
  modal: document.querySelector("#modal"),
  closeBt: document.querySelector("#exit"),
  loginBt: document.querySelector("#doLoginBt"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const SearchModal = {
  modal: document.querySelector("#search"),
  openBt: document.querySelector("#apibt"),
  closeBt: document.querySelector("#closeapi"),
  searchBt: document.querySelector("#searchbt"),
};

const Modal = {
  openLogin() {
    UserModal.modal.showModal();
    errMsg.innerHTML = "";
  },

  closeLogin() {
    UserModal.modal.close();
  },

  openSearch() {
    if (Login.isLogged()) {
      SearchModal.modal.showModal();
    } else {
      errMsg.innerHTML =
        "<strong>Faça login para buscar dados da API!</strong>";
    }
  },

  closeSearch() {
    SearchModal.modal.close();
  },
};

export { Modal, SearchModal, UserModal };
