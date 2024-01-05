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

const switchPriceDiscount = document.querySelector(
  "main .container .content .inventory-info .inventory-info-container .switch-discount .switch-wrapper .switch input"
);
const inputPriceDiscount = document.querySelector(
  "main .container .content .inventory-info .inventory-info-container .input-price-discount"
);
const switchExpiryDate = document.querySelector(
  "main .container .content .inventory-info .inventory-info-container .switch-expiry-date .switch-wrapper .switch input"
);
const inputExpiryDate = document.querySelector(
  "main .container .content .inventory-info .inventory-info-container .input-expiry-date"
);

switchPriceDiscount.addEventListener("change", (event) => {
  if (event.target.checked) {
    inputPriceDiscount.style.display = "block";
  } else {
    inputPriceDiscount.style.display = "none";
  }
});

switchExpiryDate.addEventListener("change", (event) => {
  if (event.target.checked) {
    inputExpiryDate.style.display = "block";
  } else {
    inputExpiryDate.style.display = "none";
  }
});

const inputImagemPrincipal = document.querySelector(
  "main .container .content .inventory-images .imagem-principal-container input "
);
const inputImagemPrincipalContent = document.querySelector(
  "main .container .content .inventory-images .imagem-principal-container label .input-imagem-principal-content"
);
const imagemPrincipalContainer = document.querySelector(
  "main .container .content .inventory-images .imagem-principal-container label .imagem-principal"
);
const imagemPrincipal = document.querySelector(
  "main .container .content .inventory-images .imagem-principal-container label img"
);
const buttonDeleteImagemPrincipal = document.querySelector(
  "main .container .content .inventory-images .imagem-principal-container label .imagem-principal .delete-imagem-principal"
);

inputImagemPrincipal.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      const readerTarget = e.target;

      inputImagemPrincipalContent.style.display = "none";

      imagemPrincipal.src = readerTarget.result;
      imagemPrincipal.alt = file.name;
      imagemPrincipalContainer.style.display = "block";
    });

    reader.readAsDataURL(file);

    event.target.value = null;
  } else {
    inputImagemPrincipalContent.style.display = "flex";
  }
});

buttonDeleteImagemPrincipal.addEventListener("click", (event) => {
  imagemPrincipalContainer.style.display = "none";
  inputImagemPrincipalContent.style.display = "flex";
});

const inputImagemAdicional = document.querySelector(
  "main .container .content .inventory-images .additional-images-container .additional-image-container input"
);
const imagemAdicionalContainer = document.querySelector(
  "main .container .content .inventory-images .additional-images-container"
);
const buttonRemoveImagemAdicional = document.querySelector(
  "main .container .content .inventory-images .additional-images-container .imagem-additional .delete-imagem-additional"
);

inputImagemAdicional.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      const readerTarget = e.target;

      const imagemAdicionalContent = document.createElement("div");

      imagemAdicionalContent.classList.add("imagem-additional");

      const imagemAdicional = document.createElement("img");

      imagemAdicional.src = readerTarget.result;
      imagemAdicional.alt = file.name;

      const buttonDeleteImagemAdicional = document.createElement("button");

      buttonDeleteImagemAdicional.classList.add("delete-imagem-additional");
      buttonDeleteImagemAdicional.type = "button";

      const iconTrash = document.createElement("i");

      iconTrash.classList.add("ph", "ph-trash");

      buttonDeleteImagemAdicional.appendChild(iconTrash);

      imagemAdicionalContent.appendChild(imagemAdicional);
      imagemAdicionalContent.appendChild(buttonDeleteImagemAdicional);

      imagemAdicionalContainer.appendChild(imagemAdicionalContent);
    });

    reader.readAsDataURL(file);

    event.target.value = null;
  } else {
    console.log("else");
  }
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
