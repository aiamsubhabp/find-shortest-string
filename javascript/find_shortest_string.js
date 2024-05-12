function findShortestString(arr) {
  // type your code here
  let shortestStr = arr[0]
  // let shortestStr = shortArr
  // console.log(shortArr)
  // console.log(shortestStr)

  for (let i = 0; i < arr.length; i++){
    if (arr[i].length < shortestStr.length) {
      shortestStr = arr[i]
    }
  }
  return shortestStr
}

let answer = findShortestString(['paul', 'pat', 'Plum', 'pin', 'jk']);

console.log('answer:', answer)



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
