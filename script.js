var forWhile = document.body.querySelector(".forwhile");
var dragon = 0;
var user = 0;
while (dragon < 10 && user < 5) {
  var userInput = Number(
    prompt(
      "Please enter the numbers of hits you are going to attempt to hit the dragon with up to 5"
    )
  );
  let userDamage = Math.floor(Math.random() * userInput) + 1;
  let dragonDamage = Math.floor(Math.random() * 2) + 1;
  if (user === 5) {
    dragon = dragon;
  } else {
    if (userDamage > 5) {
      dragon++;
    } else {
      dragon = dragon + userDamage;
      if (dragon > 10) {
        dragon = 10;
      }
    }
    if (dragon === 10) {
      user = user;
    } else {
      user = user + dragonDamage;
      if (user > 5) {
        user = 5;
      }
    }
  }
}
if (dragon === 10) {
  forWhile.innerHTML =
    "User Damage: " +
    user +
    "<br/>" +
    "Dragron Damage: " +
    dragon +
    "<br/>" +
    "User win!";
} else {
  forWhile.innerHTML =
    "User Damage: " +
    user +
    "<br/>" +
    "Dragron Damage: " +
    dragon +
    "<br/>" +
    "User Loses!";
}