console.log("Test");

let name = "Kenney";
let age = 29;
let birthday = "August 28";
let detroitGC = true;
let lifeEvents = [
  "I am from Detroit, Michigan",
  "I attend Oakland University",
  "I was a mathlete in grade school",
  "I reside in Sterling Heights"
];

if ((detroitGC = true)) {
  console.log(
    "My name is ",
    +name + " and I am a student at Grand Circus in Detroit, MI.",
    +"I am currently",
    +age + " years old and my birthday is on ",
    +birthday,
    " "
  );
} else {
  console.log(
    "My name is ",
    +name + " and I am a student at Grand Circus in Grand Rapids, MI.",
    +"I am currently",
    +age + " years old and my birthday is on ",
    +birthday,
    " "
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
