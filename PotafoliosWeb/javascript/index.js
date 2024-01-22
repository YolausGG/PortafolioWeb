/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector(".dropdown_nav-menu")

toggleBtn.addEventListener("click", () => {

  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fi fi-br-cross'
    : 'fi fi-br-menu-burger'
})

const btnsCerrarInfo = document.getElementsByClassName("btnCerrarInfo")
console.log(btnsCerrarInfo);
const btnsAbrirInfo = document.getElementsByClassName("btnAbrirInfo")
console.log(btnsAbrirInfo);
const dialogsInfo = document.querySelectorAll("dialog")
console.log(dialogsInfo);


Array.prototype.forEach.call(btnsAbrirInfo, (btnAbrirInfo) => {
  btnAbrirInfo.addEventListener("click", () => {
    dialogsInfo.forEach(dialgoInfo => {
      if (btnAbrirInfo.id == "btnGDB" && dialgoInfo.id == "dialogGDB") {
        dialgoInfo.showModal()
      }
      if (btnAbrirInfo.id == "btnECommerce" && dialgoInfo.id == "dialogEcommerce") {
        dialgoInfo.showModal()
      }
      if (btnAbrirInfo.id == "btnProyectosDuranteLaCarrera" && dialgoInfo.id == "dialogProyectosDuranteLaCarrera") {
        dialgoInfo.showModal()
      }
      if (btnAbrirInfo.id == "btnPortafoliosWeb" && dialgoInfo.id == "dialogPortafoliosWeb") {
        dialgoInfo.showModal()
      }
    })
  })
})

Array.prototype.forEach.call(btnsCerrarInfo, (btnCerrarInfo) => {
  btnCerrarInfo.addEventListener("click", () => {
    dialogsInfo.forEach(dialgoInfo => {
      dialgoInfo.close()
    })
  })
}
)

