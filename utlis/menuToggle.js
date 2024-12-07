export function menuOpen(e) {
  e.preventDefault();
  document.querySelector(".popup-mobile-menu")?.classList.add("menu-open");
  document.documentElement.style.overflow = "hidden";
}

export function closeMobileMenu(e) {
  const target = e.target;
  const href = target.getAttribute("href");

  if (href && href.includes("#")) {
    e.preventDefault();
  }
  document.querySelector(".popup-mobile-menu")?.classList.remove("menu-open");

  document.documentElement.style.overflow = "";
}
export function mobileMenuOpen(e) {
  if (e.target === this) {
    document.querySelector(".popup-mobile-menu")?.classList.remove("menu-open");
    document.documentElement.style.overflow = "";
  }
}
// document
//   .querySelectorAll(".popup-mobile-menu .has-droupdown > a")
//   ?.forEach(function (item) {
//     item?.addEventListener("click", function (e) {
//       e.preventDefault();
//       var submenu = this.nextElementSibling;
//       submenu?.classList.toggle("active");
//       if (submenu?.classList.contains("active")) {
//         submenu.style.display = "block";
//       } else {
//         submenu.style.display = "none";
//       }
//       this?.classList.toggle("open");
//       document.documentElement.style.overflow = "";
//     });
//   });
