import { Login } from "./modules/login.js";
import { showPokemon } from "./modules/search.js";
import { Modal, SearchModal, UserModal } from "./modules/modal.js";
// Login
Login.loginBt.addEventListener("click", Modal.openLogin);
Login.logoutBt.addEventListener("click", Login.logout);
// Modal de login
UserModal.closeBt.addEventListener("click", Modal.closeLogin);
UserModal.loginBt.addEventListener("click", Login.login);
UserModal.email.addEventListener("keyup", Login.checkUser);
UserModal.password.addEventListener("keyup", Login.checkPassword);
// Modal de busca
SearchModal.openBt.addEventListener("click", Modal.openSearch);
SearchModal.closeBt.addEventListener("click", Modal.closeSearch);
SearchModal.searchBt.addEventListener("click", showPokemon);

onload = Login.isLogged();
