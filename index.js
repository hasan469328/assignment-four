function mindGame(positiveNumber){
  /* This function is all about math. By this function we can take a positive number as a value. Then doing some multiplication, addition, division and finally with subtraction we return the result.*/
  if(typeof positiveNumber !== typeof 9 || positiveNumber < 1){
    return "please input a positive number";
  };
    let multiplication = (positiveNumber * 3);
    let addition = multiplication + 10;
    let division = addition / 2;
    let result = division - 5;
    return result;
}

function evenOdd(str){
  /* This function take a string as a input and count the string length. If string length is even number its return even string. If string length is odd number its simply return odd string */
  if(typeof str !== typeof "string"){
    return "please input a string"
  }
  else if(str.length % 2 === 0){
    return 'even';
  }
  else{
    return 'odd';
  }
}

function isLGSeven(number){
  /* This function take a number as a input.  Then find the difference between input number and a constant number 7. If difference is less than 7, then return the difference. Otherwise return double of the input value.  */
  if(typeof number !== typeof 9){
    return "please input a number"
  };
  const constValue = 7;
  let difference = number - constValue;
  if(difference < constValue){
    return difference;
  }
  else{
    return number * 2;
  };  
}

function findingBadData(array){
  /* This function take an array of numbers as a input. Then check the arrays element. And find how many of them element has negative number. And return total negative number as output*/
  if(Array.isArray(array) !== true) {
    return "please input an array";
  };
  let badData = [];
  for(let i = 0; i< array.length; i++){
    let index = i;
    let element = array[index];
    if(typeof element !== typeof 9){
      return "please input a number";
    }
    else if(element < 0){
      badData.push(element);
    }
  }
  return badData.length;
}

function gemsToDiamond(gems1, gems2, gems3){
  /* This function take three number which represent three friends gems quantity as input. Here we can convert gems to diamond. 1st friend 1 gem = 21 diamond, 2nd friend 1gem = 32 diamond, 3rd friend 1gem = 43 diamond. Convert all friends gems to diamond. Then find the total quantity of diamonds. If total quantity of diamond is more than double of 1000, at that case you can minus 2000 from total diamond and return as output.  */
  if(typeof gems1 !== typeof 9 || typeof gems2 !== typeof 9 || typeof gems3 !== typeof 9){
    return "please input a number";
  };
  let firstFriendGemsToDiamond = gems1 * 21;
  let secondFriendGemsToDiamond = gems2 * 32;
  let thirdFriendGemsToDiamond = gems3 * 43;
  let totalDiamond = firstFriendGemsToDiamond + secondFriendGemsToDiamond + thirdFriendGemsToDiamond;
  if(totalDiamond > 1000 * 2){
    return totalDiamond - 2000;
  }
  else {
    return totalDiamond;
  };
}
