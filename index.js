// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const feetInBlocks = 264;
    return Math.abs(distanceFromHqInBlocks(pickupLocation) * feetInBlocks);
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
  }

  function calculatesFarePrice (start, destination){
    const distance = distanceTravelledInFeet(start, destination)
      if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * .02);
      } else if (distance <= 2500) {
        return 25;
      } else {
          return ("cannot travel that far");
        }
  }







// function calculatesFarePrice (start, destination){

// const distance =  distanceTravelledInFeet(start, destination);

// if (distance < 400){
//   return 0
// }
// else if (distance >=400 && distance<=2000){
//   const price = 0.02 * (distance - 400);

//   return price;
// }
// else if (distance <2500){
//   return 25
// }
// else{
//   return "cannot travel that far"
// }

// }







  // function calculatesFarePrice(start, destination, callback) {
  //   //returns the fare for the customer    
  //   return callback(start, destination);
  //   let distance = distanceTravelledInFeet(start, destination);
  //   // The first four hundred feet are free. 
  //     if (distance <= 400) {
  //       return 
  // // For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).      
  //     } else if (distance >= 401 && distance < 2000) {
  //       console.log("The price is 2 cents per foot")
  //   // Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. 
  //     } else if (distance >= 2000 && distance < 2500) {
  //       console.log("Your fee is a flat fare of $25")
  //   // Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
  //     } else {
  //       console.log ("Cannot travel that far.")
  //     }
  // }