const collapsibleSidebar = document.querySelector("aside .collapse-sidebar");
const expandedSidebar = document.querySelector("aside .expand-sidebar");
const openMenu = document.querySelector(
  "main header .header-container div .open-sidebar"
);
const closeMenu = document.querySelector("aside .close-sidebar");
const sidebar = document.querySelector("aside");

collapsibleSidebar.addEventListener("click", (event) => {
  sidebar.classList.toggle("collapsible");
});

expandedSidebar.addEventListener("click", (event) => {
  sidebar.classList.toggle("collapsible");
});

openMenu.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "0";
  sidebar.style.display = "flex";
  sidebar.style.zIndex = "1";
  sidebar.style.animationName = "showSidebar";
});

closeMenu.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "-100vw";
  sidebar.style.animationName = "";
  sidebar.style.zIndex = "0";
});

const modalOpen = document.querySelector(
  "main .container .container-header button"
);
const modalClose = document.querySelector(
  ".modal .modal-content header .close"
);
const modal = document.querySelector("#modal");

modalOpen.addEventListener("click", (event) => {
  modal.style.display = "flex";
});

modalClose.addEventListener("click", (event) => {
  modal.style.display = "none";
});

const contactsCard = document.querySelectorAll(
  "main .container .content .contacts-container .contacts .contact-card"
);
const chatEmpty = document.querySelector(
  "main .container .content .chat-empty"
);
const chat = document.querySelector("main .container .content .chat-container");

contactsCard.forEach((contact) => {
  contact.addEventListener("click", (event) => {
    chatEmpty.style.display = "none";
    chat.style.display = "flex";
  });
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 1024) {
    if (sidebar.style.marginLeft === "-100vw") {
      sidebar.style.marginLeft = "0";
    }
  }

  if (window.innerWidth <= 1024) {
    sidebar.removeAttribute("class");
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 27) {
    chat.style.display = "none";
    chatEmpty.style.display = "flex";
  }
});
