//https://github.com/abdullahalmamun17/js-assignment

//convert kilometer to meter

function kilometerToMeter(kilometer) {
  if (kilometer >= 0) {
    return kilometer * 1000;
  }
  else {
    return 'Invalid Kilometer';
  }
}

//budget calculator

function budgetCalculator(watch, mobile, laptop) {
  if (watch < 0 || mobile < 0 || laptop < 0) {
    return 'Invalid quantity'
  }
  else {
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost
  }
}

//hotel cost

function hotelCost(days) {
  if (days >= 0) {
    if (days <= 10) {
      var cost = days * 100;
      return cost;
    }
    else if (days <= 20) {
      var first10DaysCost = 10 * 100;
      var remainingDays = days - 10;
      var second10DaysCost = remainingDays * 80;
      var totalCost = first10DaysCost + second10DaysCost;
      return totalCost;

    }
    else {
      var first10DaysCost = 10 * 100;
      var second10DaysCost = 10 * 80;
      var remainingDays = days - 20;
      var thirdDaysCost = remainingDays * 50;
      var totalCost = first10DaysCost + second10DaysCost + thirdDaysCost;
      return totalCost;
    }
  }
  else {
    return 'You Entered an Invalid Days'
  }
}

//print largest name from array

function megaFriend(names) {
  var largestName = names[0];
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > largestName.length) {
      largestName = names[i]
    }
  }
  return largestName;
}
var namesArray = ['Abdur Rahman', 'Abdul Karim', 'Saimun Hossain Rajib', 'Ridoy', 'Rone Ahmed Mojumder soikot', 'Sourov Paul', 'Jackson', 'Mitchell Jonshon'];
console.log(megaFriend(namesArray));