/* eslint-disable complexity */
class BRHeader {
    constructor(name, component) {
      this.name = name
      this.component = component
      this.flex_container = component.querySelector('.flex-container')
      this.sticky = component.hasAttribute('sticky')
      this._setBehavior()
    }
    _setBehavior() {
      // Inicializa Layout
      if (this.sticky) {
        //this.component.style.paddingTop = `${this.flex_container.offsetHeight}px`
        //this.component.setAttribute('compact', '')
        const compact = this.component.hasAttribute('compact')
        const noSubtitle = this.component.hasAttribute('no-subtitle')
        window.onscroll = () => {
          if (window.pageYOffset > this.component.offsetTop) {
            this.component.classList.add('sticky')
            if (!compact) this.component.setAttribute('compact', '')
            if (!noSubtitle) this.component.setAttribute('no-subtitle', '')
          } else {
            this.component.classList.remove('sticky')
            if (!compact) this.component.removeAttribute('compact', '')
            if (!noSubtitle) this.component.removeAttribute('no-subtitle')
          }
        }
      }
    }   
}
  export default BRHeader
  