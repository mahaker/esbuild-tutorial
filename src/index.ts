import Utils from "./utils";

const greet = (name: string): void => {
  console.log(`Hello ${name}!`);
};

global.main1 = () => {
  greet("mahaker");

  console.log(Utils.add(2, 3));
  console.log(Utils.sub(0, 5));
};

global.main2 = () => {
  greet("Hideaki!");

  console.log(Utils.add(10, 5));
  console.log(Utils.sub(10, 5));
};
