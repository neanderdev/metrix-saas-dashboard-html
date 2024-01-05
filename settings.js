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

const accountSettingsContentUploadImage = document.querySelector(
  "main .container .account-settings .account-settings-content .account-settings-content-upload-image"
);
const inputImagemUser = document.querySelector(
  "main .container .account-settings .account-settings-content .account-settings-content-upload-image .image-user"
);

inputImagemUser.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      const readerTarget = e.target;

      const imagemUserContent = document.createElement("div");

      imagemUserContent.classList.add("img-user");

      const imagemUser = document.createElement("img");

      imagemUser.src = readerTarget.result;
      imagemUser.alt = file.name;

      const buttonDeleteImagemUser = document.createElement("button");

      buttonDeleteImagemUser.classList.add("delete-img-user");
      buttonDeleteImagemUser.type = "button";

      const iconTrash = document.createElement("i");

      iconTrash.classList.add("ph", "ph-trash");

      buttonDeleteImagemUser.appendChild(iconTrash);

      imagemUserContent.appendChild(imagemUser);
      imagemUserContent.appendChild(buttonDeleteImagemUser);

      accountSettingsContentUploadImage.appendChild(imagemUserContent);
    });

    reader.readAsDataURL(file);

    event.target.value = null;

    inputImagemUser.style.display = "none";
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
