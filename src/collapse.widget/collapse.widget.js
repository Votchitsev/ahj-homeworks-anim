class CollapseWidget {
  constructor(element) {
    this.element = element;

    this.showContent = this.showContent.bind(this);
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    const button = this.element.querySelector('.collapse-btn');

    button.addEventListener('click', this.showContent);
  }

  showContent() {
    this.element.classList.toggle('show');
  }
}

export default CollapseWidget;
