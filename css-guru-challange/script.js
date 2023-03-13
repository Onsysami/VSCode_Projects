class Box {
  constructor() {
    this.box = {
      $el: document.querySelector('.box'),
      $image: document.querySelector('.box__image'),
      $line: document.querySelector('.box__line') };
    this.bindEvents();
  }


  onMouseMove(e, that) {
    const mouse_x = e.clientX;
    const $box = that.box.$el;
    const bounds = $box.getBoundingClientRect();
    const targetMovement = mouse_x - bounds.left;
    that.box.$image.style.clipPath = `inset(0px 0px 0px ${targetMovement}px)`;
    that.box.$line.style.left = `${targetMovement}px`;
  }


  bindEvents() {
    let that = this;
    this.box.$el.addEventListener('mousemove', e => {that.onMouseMove(e, that);});
  }}


new Box();