/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["his", "her", "the", "my", "our", "your"];
let adjectives = ["clumsy", "valiant", "proud", "galant", "snazzy", "swift"];
let nouns = ["zebra", "giraffe", "koala", "monkey", "tucan", "tiger"];
let domainType = [".com", ".edu", ".gov", ".net", ".mx", ".io"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < domainType.length; l++) {
        console.log(
          `${pronouns[i]}${adjectives[j]}${nouns[k]}${domainType[l]}`
        );
      }
    }
  }
}
