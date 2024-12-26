import { Controller } from "./controller/controller.js";

const formulario:HTMLElement = document.querySelector(".form");

formulario.addEventListener("submit", event => {
    event.preventDefault();
    const controller = new Controller();
    controller.criarLink();
});

