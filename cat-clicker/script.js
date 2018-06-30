// let catImage = document.getElementById("cat-pic");
// let counterDiv = document.querySelector(".counter");
//
// let catImage2 = document.getElementById("cat-pic2");
// let counterDiv2 = document.querySelector(".counter2");
//
// let counter = 0;
// let counter2 = 0;
//
// catImage.addEventListener("click", () => {
//   counter++;
//   counterDiv.innerHTML = `Cat has been clicked <b>${counter}</b> times`;
//   return;
// });
//
// catImage2.addEventListener("click", () => {
//   counter2++;
//   counterDiv2.innerHTML = `Cat has been clicked <b>${counter2}</b> times`;
//   return;
// });

//when the app is loaded, the list is created
//it gets populated with cats  --- both things done by the controller
//the controller tells the view to render itself
//the controller also changes the current cat
//it gets set to the first cat on the list
//when it happens, the controller tells the view to render the current cat (render itself)
//when the user clicks on a cat on the list, the controller notifies the "current cat view"
//the controller is keeping track of where the user clicks and it increases the count: first in the model, then in the view
//when a cat on the list is clicked, the controller updates the model (sets the clicked cat to the current cat), then
//it tells the view to rerender itself


//In the HTML there is a <ul> for the cats' list and a div "cat", which includes <h2>catname</h2>, cat count and cat image


let model {

  let currentCat: null;s

  let listOfCats = [
    { name: 'Cat',
      clickCount: 0,
      imgSrc:null,
    }
  ]

}

let controller {
  //init method, which sets current cat to the first on in the list
  //model.currentCat = model.listOfCats[0];

  //tells the view to initialize
  //catListView.init();

  //getCurrentCat: function() {return: model.currentCat}

  //getCats: function() {return: model.listOfCats}

  //incrementCounter: function() { model.currectCat.clickCount++;
  //catView.render();
  //}
}

let view {

  //init function
  //get all elements this.catElem = document.getElementById('blabla')

  //add event listeners
  //this.catImageElem.addEventListener('click', function(e) {
  //controler.incrementCounter();}
  //this.render();


  //render: function(){
  //update the DOM elements with values fro the current cat
  //var currentCar = controller.getCurrentCar();
  //this.currentElem.textContent = currentCat.clickCount;
  //this.catNameElem.textContent = currentCate.name;
  //this.catImageElem.src = currentCat.imgSrc
//}


  //let catListView = {
  // init: function() {
  //   this.catListElem = document.getElementById('cat-list');
  //   this.render
  // },

  render: function() {
    var cats = controller.getCats();
    //empty the cats list;
    this.catListElem.innerHTML = '';
    //a loop over the cats and set elem.textContent = cat.name
    //to make an event listener work inside the for loop:
    //elem.addEventListener('click', (function(cat){
  //   return function(){
  //     controller.setCurrentCat(cat);
  //     catView.render();
  //   };
  // })(cat))

  //finally, add the elements to the listener
  //this.catListElem.appendChild(elem);
  // }
// }
})

  //render function

  //renders every time the page is loaded
  let clickableList = [];
  // lenders when a list item is clicked on
  let currentCar = {}


}
