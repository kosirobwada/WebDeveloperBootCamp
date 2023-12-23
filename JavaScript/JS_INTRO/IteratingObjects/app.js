const testScores = {
  ken: 80,
  yuki: 67,
  taro: 89,
  ryota: 91,
  yuma: 72,
  yuko: 77,
  chiaki: 83,
  kota: 97,
  saeko: 81,
  koki: 60,
};

for (let student of Object.keys(testScores)) {
  console.log(`${student}さんは${testScores[student]}`);
}

// for (let student in testScores) {
//   console.log(`${student}さんは${testScores[student]}`);
// }