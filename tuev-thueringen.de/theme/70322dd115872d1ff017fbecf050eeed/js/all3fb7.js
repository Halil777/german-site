document.addEventListener("DOMContentLoaded", function () {
  // Select the div element
  const accountMenuDiv = document.querySelector(
    ".dropdown-menu.js-account-menu-dropdown"
  );

  // Add the missing classes
  accountMenuDiv.classList.add(
    "offcanvas",
    "offcanvas-start",
    "navigation-offcanvas"
  );

  // Add the missing id
  accountMenuDiv.id = "myOffcanvas";

  function openMobileNav() {
    const offcanvasElement = document.getElementById("myOffcanvas");
    offcanvasElement.classList.add("show");
  }

  function closeMobileNav() {
    const offcanvasElement = document.getElementById("myOffcanvas");
    offcanvasElement.classList.remove("show");
  }

  const toggleButton = document.querySelector(
    ".btn.nav-main-toggle-btn.header-actions-btn"
  );

  const closeButton = document.querySelector(
    ".btn.offcanvas-close.js-offcanvas-close"
  );

  toggleButton.addEventListener("click", function () {
    // Toggle the 'show' class on the offcanvas element
    openMobileNav();
  });

  closeButton.addEventListener("click", function () {
    // Toggle the 'show' class on the offcanvas element
    closeMobileNav();
  });

  // Get all navigation links that have a data-flyout-menu-trigger attribute
  const navLinks = document.querySelectorAll(
    ".main-navigation-link[data-flyout-menu-trigger]"
  );

  navLinks.forEach((link) => {
    // Mouse enter event
    link.addEventListener("mouseenter", function () {
      const menuId = link.getAttribute("data-flyout-menu-trigger");
      const flyoutMenu = document.querySelector(
        `.navigation-flyout[data-flyout-menu-id="${menuId}"]`
      );
      if (flyoutMenu) {
        flyoutMenu.style.display = "block"; // Show the flyout menu
        flyoutMenu.style.height = "auto";
      }
    });

    // Mouse leave event
    link.addEventListener("mouseleave", function () {
      const menuId = link.getAttribute("data-flyout-menu-trigger");
      const flyoutMenu = document.querySelector(
        `.navigation-flyout[data-flyout-menu-id="${menuId}"]`
      );
      if (flyoutMenu) {
        flyoutMenu.style.display = "none"; // Hide the flyout menu
        flyoutMenu.style.height = "0";
      }
    });
  });
});

document.getElementsByClassName("nav-main-toggle-btn");
