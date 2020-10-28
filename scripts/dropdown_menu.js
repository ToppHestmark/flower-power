
const dropdown = document.querySelector("#dropdown");
const dropdownContent = document.getElementsByClassName("products__dropdown-content");

function sortDropDown() {
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.products__dropdownButton')) {
    let dropdowns = dropdownContent;
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}