const featuresLi = document.querySelector(".nav__link--features")
const companyLi = document.querySelector(".nav__link--company")
const submenuFeatures = document.querySelector(".submenu--features")
const submenuCompany = document.querySelector(".submenu--company")
const arrowIconFeatures = document.querySelector(
  ".nav__link--features .arrow-icon"
)
const arrowIconCompany = document.querySelector(
  ".nav__link--company .arrow-icon"
)
const hamburgerEl = document.querySelector(".hamburger")
const hamburgerCloseEl = document.querySelector(".hamburger-close")
const bodyEl = document.querySelector("body")

featuresLi.addEventListener("click", (e) => {
  if (arrowIconFeatures.attributes.src.value === "imgs/icon-arrow-down.svg") {
    arrowIconFeatures.attributes.src.value = "imgs/icon-arrow-up.svg"
  } else {
    arrowIconFeatures.attributes.src.value = "imgs/icon-arrow-down.svg"
  }
  arrowIconCompany.attributes.src.value = "imgs/icon-arrow-down.svg"
  const offset = e.target.offsetLeft
  submenuFeatures.classList.toggle("open")
  submenuCompany.classList.remove("open")
  submenuFeatures.style.left = `${offset}px`
})

companyLi.addEventListener("click", (e) => {
  if (arrowIconCompany.attributes.src.value === "imgs/icon-arrow-down.svg") {
    arrowIconCompany.attributes.src.value = "imgs/icon-arrow-up.svg"
  } else {
    arrowIconCompany.attributes.src.value = "imgs/icon-arrow-down.svg"
  }
  arrowIconFeatures.attributes.src.value = "imgs/icon-arrow-down.svg"
  const offset = e.target.offsetLeft
  submenuCompany.classList.toggle("open")
  submenuFeatures.classList.remove("open")
  submenuCompany.style.left = `${offset}px`
})

hamburgerEl.addEventListener("click", () => {
  bodyEl.classList.toggle("nav-open")
})

hamburgerCloseEl.addEventListener("click", () => {
  bodyEl.classList.toggle("nav-open")
  submenuFeatures.classList.remove("open")
  submenuCompany.classList.remove("open")
  arrowIconCompany.attributes.src.value = "imgs/icon-arrow-down.svg"
  arrowIconFeatures.attributes.src.value = "imgs/icon-arrow-down.svg"
})
