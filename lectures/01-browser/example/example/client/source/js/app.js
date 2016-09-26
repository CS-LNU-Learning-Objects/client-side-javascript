class Something{

  constructor (element) {
      this.name = 'Something Good';
 
      this.onclick1 = (event) => {
          console.log(this.name);
      };

      element.addEventListener('click', this.onclick1, false);

      element.addEventListener('click', (event) => {
        console.log(this.name); // 'Something Good', as this is the binded Something object
      }, false);
  }
}

new Something(document.querySelector("#firstHead"));
