//1.create a menu object
const menu = {
//2.Add a _courses property to contain each course
  _courses: {
//3.Create three properties 
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  //4.Create getter and setter methods for properties
  get appetizers() {
   const {appetizers} = menu;
    return appetizers;
  },
  
  set appetizers(appetizerIn) {
    this.appetizers = appetizerIn;
  },
  
    get mains() {
   const {mains} = menu;
    return mains;
  },
  
  set mains(mainsIn) {
    this.mains = mainsIn;
  },
  
    get desserts() {
   const {desserts} = menu;
    return desserts;
  },
  
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },
  
  //5 & 6. Create getter method for _courses 
  get courses() {
 return {
  appetizers: this.appetizers,
  mains: this.mains,
  desserts: this.desserts
}
},
  
//7.Create a method called .addDishToCourse()
  addDishToCourse(courseName, dishName, dishPrice) {
//8.This method create a dish object which has name and price
   dish = {
     name: dishName,
     price: dishPrice,
   };
    
    if(courseName==='appetizers') {
      this._courses.appetizers.push(dish);
    }
    else if(courseName==='mains') {
      this._courses.mains.push(dish);
    } 
    else if(courseName==='desserts') {
      this._courses.desserts.push(dish);
    }
      },
  
//9. Create a method called .getRandomDishFromCourse() which allow us to get a random dish from a course on the menu
  getRandomDishFromCourse(courseName) {
    
//10.1 Retrieve the array of the given course's dishes and store in a variable
    let dishes = this._courses[courseName];
//10.2 - 10.3 Generate a random index and round to a whole number
    let index = Math.floor(Math.random()*dishes.length);
//10.4 Return the dish 
    return dishes[index];
  },
  
//11 - create .generateRandomMeal() function which will automatically generate a three-course meal
  generateRandomMeal() {
//11.1 & 11.2 & 11.3 store the random results in each variable
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    console.log(`Appetizer----> ${appetizer.name}  £${appetizer.price}
Main-----> ${main.name} £${main.price}
Dessert-----> ${dessert.name} £${dessert.price}
Total price: £${appetizer.price +main.price+dessert.price}`);
  }
};

//12. adding some appetizers, mains, and desserts with the .addDishToCourse() function.
menu.addDishToCourse('appetizers', 'Crab Cake', 7);
menu.addDishToCourse('appetizers', 'Crackers', 6);
menu.addDishToCourse('appetizers', 'Deviled Eggs', 5);

menu.addDishToCourse('mains', 'Meatballs', 15);
menu.addDishToCourse('mains', 'Spaghetti', 12);
menu.addDishToCourse('mains', 'Pizza', 13);

menu.addDishToCourse('desserts', 'Ice Cream', 5);
menu.addDishToCourse('desserts', 'Brownie', 6);
menu.addDishToCourse('desserts', 'Creme Brulee', 6);

//13. generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated 
let meal = menu.generateRandomMeal();
console.log(meal);

  
