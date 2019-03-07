 class Dropdown {
  constructor(element) {
    this.element = element; 
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => { this.toggleContent() });

  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}




// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));