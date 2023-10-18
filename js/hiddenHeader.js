(function () {
  const header = document.getElementById("header");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("header--no-transparency");
    } else {
      header.classList.remove("header--no-transparency");
    }
  }

  window.addEventListener("scroll", handleScroll);
})();