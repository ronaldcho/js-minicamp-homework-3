// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object

   //function meow() { return 'Meow!';}
 function Cat (options) {
    this.catName = options.name;
    this.catAge = options.age;
    //this.meow = meow;
    this.meow = function( ) { return 'Meow!'; };
 }

 // function meow() { return 'Meow!';}
  /*this.catName = name;
  this.catAge = age;
  var meow = funciton() {return 'Meow!';};
    //var str = 'Meow!';
   // return 'Meow!';};
*/
 /*var cat = new Object();
   cat.catName = name;
   cat.catAge = age;
 //function meow() { return 'Meow!'; }
  */
 /* var cat = { 
    catName: name,
    catAge: age,
  
  //this.catName = name;
  //this.catAge = age;
  //this.meow = function() { return 'Meow!'; };
   meow: function() { return 'Meow!';}
 };
  //cat.meow = function() { return 'Meow!';};
*/
  var cat = new Cat( {
    name: 'Snowball',
    age: 10
  }); 
  
  return cat;

  //return Cat;

}
function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)

  //this.property[property.lenght + 1] = null; 
  //object.defineProperty( object, property , { z: null } );
  //console.log(object.property);
  //object.property = null;
  //set property( null)
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  //object.method = function(x) { x++; }; 
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  var result = mysteryNumberObject.mysteryNumber * 5;
  return result;
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  //delete this.property;
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  var newUser = {
     name: name,
     email: email,
     password: password
   };
  return newUser;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false

  if ( user['email']!= null ) return true;
  //for ( var key in user) {
    //console.log(user[key]);
  
  //console.log( user.hasOwnProperty('email'));
  // if ( user.email != null || user.email === '' ) { return true;}
  //if ( user.hasOwnProperty() === 'email'  ) { return true;}
   // retrun false;
  //} else 
   //{   return false;}
 //if ( 'email' in user); return true;
  //if ( user.getOwnPropertyNames('email') != null) return true;
  //return user;
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string'
  

  for ( var key in object){
   // console.log ('propertyName', key);
   // console.log ('propertyValue', object[key]);
  if ( key != null ) {return true;}
  }  //if ( object.property === property ) {return true;}

  //if ( object[property] === null) {return false;}
  // otherwise return false
  /*var checkName = property;
  for ( checkName in object ) {
     if ( object.hasOwnProperty(checkName) ){
       return true;
     } 
     else{
       return false;
     }
  }
  */
  //if ( object.hasOwnProperty('property') ); 
    //{return true;}
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  if ( user.password  === password ) 
    { return true;
      } else 
        {return false;}
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  var addFriendName = newFriend;
  user.friends.push(addFriendName);
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  
  /*for ( var i = 0; i <= users.length; i++ ){
    //users[i][isPremium] = true;
    users['isPremium'] = true;
    users.isPremium = true;
  } */
  
  for ( var key in users){
    //console.log ('propertyName', key);
    //console.log ('propertyValue', users[key]);
    users[key] = true;
    return users;
  }
  //return users[key];
  //return users;
 
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum

  var sum = 0;
  /* for ( var i = 0; i <= user.length; i++ ){
     sum +=  valueOf(user[i].posts.likes);
  }    */
for ( var key in user){
    //console.log ('propertyName', key);
    //console.log ('propertyValue', users[key]);
   // sum += user[key]['posts']['likes'];
    sum += user[key]['posts'];
}
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
 /* var item = {
     calculateDiscountPrice: function(){
     calculateDiscountPrice = price * discountPercentage;
      discountPrice = price - calculateDiscountPrice();
      return discountPrice;
     }
  };
item = new storeItem;

item.calculateDiscountPrice();

*/
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
