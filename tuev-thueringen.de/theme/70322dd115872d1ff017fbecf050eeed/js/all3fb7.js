document.addEventListener("DOMContentLoaded", function () {
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
