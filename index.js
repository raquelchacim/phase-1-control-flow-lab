function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    console.log("this one is on me!");
  } else if (distance > 400 && distance < 2000) {
    console.log("That will be twenty bucks.");
  } else if (distance > 2000 && distance < 2500) {
    console.log("I will gladly take your thirty bucks.");
  } else if (distance > 2500) {
    console.log("No can do.");
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(destination) {
  if (destination === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburg"));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye.";
  }
}
console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip("thanks for everything"));
