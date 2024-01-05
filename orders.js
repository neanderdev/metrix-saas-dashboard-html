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

const dropdownMoreActionsButton = document.querySelectorAll(
  "main .content table tbody tr td .actions div .more-actions"
);
const dropdownMoreActions = document.querySelectorAll(
  "main .content table tbody tr td .actions div .dropdown-more-actions"
);

dropdownMoreActionsButton.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();

    dropdownMoreActions[index].style.visibility = "visible";
    dropdownMoreActions[index].style.opacity = 1;
  });
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

const inputSearchProductName = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .items .items-header .input-wrapper #search-product-name"
);
const dropdownSearchProductName = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .items .items-header .input-wrapper .dropdown-search-product-name"
);

inputSearchProductName.addEventListener("change", (event) => {
  if (event.target.value.length > 3) {
    event.stopPropagation();

    dropdownSearchProductName.style.visibility = "visible";
    dropdownSearchProductName.style.opacity = 1;
  } else {
    dropdownSearchProductName.style.visibility = "hidden";
    dropdownSearchProductName.style.opacity = 0;
  }
});

const switchCustomer = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .new-order .new-order-header .switch-wrapper .switch input"
);
const inputCustomerName = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .new-order .form-container .input-customer-name"
);
const inputCustomerEmail = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .new-order .form-container .input-customer-email"
);
const inputCustomerPhone = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .new-order .form-container .input-customer-phone"
);
const selectCustomer = document.querySelector(
  ".modal .modal-content .modal-container .new-order-container .new-order .form-container .select-customer"
);

switchCustomer.addEventListener("change", (event) => {
  if (event.target.checked) {
    inputCustomerName.style.display = "flex";
    inputCustomerEmail.style.display = "flex";
    inputCustomerPhone.style.display = "flex";
    selectCustomer.style.display = "none";
  } else {
    selectCustomer.style.display = "flex";
    inputCustomerName.style.display = "none";
    inputCustomerEmail.style.display = "none";
    inputCustomerPhone.style.display = "none";
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

  dropdownMoreActions.forEach((element) => {
    if (element.style.visibility === "visible") {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    }
  });

  dropdownFilter.style.visibility = "visible";
  dropdownFilter.style.opacity = 1;
});

buttonFilterByDate.addEventListener("click", (event) => {
  event.stopPropagation();

  if (dropdownFilter.style.visibility === "visible") {
    dropdownFilter.style.visibility = "hidden";
    dropdownFilter.style.opacity = 0;
  }

  dropdownMoreActions.forEach((element) => {
    if (element.style.visibility === "visible") {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    }
  });

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
  dropdownMoreActions.forEach((element) => {
    if (element.style.visibility === "visible") {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    }
  });

  if (dropdownFilter.style.visibility === "visible") {
    dropdownFilter.style.visibility = "hidden";
    dropdownFilter.style.opacity = 0;
  }

  if (dropdownFilterByDate.style.visibility === "visible") {
    dropdownFilterByDate.style.visibility = "hidden";
    dropdownFilterByDate.style.opacity = 0;
  }
});
