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

const switchAddress = document.querySelector(
  ".modal .modal-content .modal-container .form-container .switch-wrapper .switch input"
);
const inputAddress = document.querySelector(
  ".modal .modal-content .modal-container .form-container .input-address"
);
const inputCity = document.querySelector(
  ".modal .modal-content .modal-container .form-container .input-city"
);
const selectsContainer = document.querySelector(
  ".modal .modal-content .modal-container .form-container .selects-container"
);
const switchContainer = document.querySelector(
  ".modal .modal-content .modal-container .form-container .switch-container"
);

switchAddress.addEventListener("change", (event) => {
  if (event.target.checked) {
    inputAddress.style.display = "flex";
    inputCity.style.display = "flex";
    selectsContainer.style.display = "flex";
    switchContainer.style.display = "flex";
  } else {
    inputAddress.style.display = "none";
    inputCity.style.display = "none";
    selectsContainer.style.display = "none";
    switchContainer.style.display = "none";
  }
});

const buttonFilter = document.querySelector(
  "main .content .header-content .header-filters .filter-container button"
);
const dropdownFilter = document.querySelector(
  "main .content .header-content .header-filters .filter-container .dropdown-filter"
);
const buttonFilterByDate = document.querySelector(
  "main .content .header-content .header-filters .filter-by-date-container button"
);
const dropdownFilterByDate = document.querySelector(
  "main .content .header-content .header-filters .filter-by-date-container .dropdown-filter-by-date"
);

buttonFilter.addEventListener("click", (event) => {
  event.stopPropagation();

  if (dropdownFilterByDate.style.visibility === "visible") {
    dropdownFilterByDate.style.visibility = "hidden";
    dropdownFilterByDate.style.opacity = 0;
  }

  dropdownFilter.style.visibility = "visible";
  dropdownFilter.style.opacity = 1;
});

buttonFilterByDate.addEventListener("click", (event) => {
  event.stopPropagation();

  if (dropdownFilter.style.visibility === "visible") {
    dropdownFilter.style.visibility = "hidden";
    dropdownFilter.style.opacity = 0;
  }

  dropdownFilterByDate.style.visibility = "visible";
  dropdownFilterByDate.style.opacity = 1;
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

document.documentElement.addEventListener("click", () => {
  if (dropdownFilter.style.visibility === "visible") {
    dropdownFilter.style.visibility = "hidden";
    dropdownFilter.style.opacity = 0;
  }

  if (dropdownFilterByDate.style.visibility === "visible") {
    dropdownFilterByDate.style.visibility = "hidden";
    dropdownFilterByDate.style.opacity = 0;
  }
});
