import * as fs from "fs";
const input = fs.readFileSync("./input.txt", "utf-8");

const elfs = input.trim().split("\n\n");

const sum = (value: number[]): number => {
  const result = value.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
};

let highestCal = 0;

elfs.forEach((elf) => {
  const calories = sum(elf.split("\n").map((el) => Number(el)));
  if (calories > highestCal) {
    highestCal = calories;
  }
});
