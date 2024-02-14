const input = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function anagram(array) {
  let result = {};
  for (let word of array) {
    const a = [];
    for (var i = 0; i < word.length; i++) {
      a.push(word.charAt(i));
    }

    const b = processA(a);
    const c = processB(b);

    if (result[c]) {
      result[c].push(word);
    } else {
      result[c] = [word];
    }
  }
  return Object.values(result);
}

function processA(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

function processB(array) {
  var result = "";
  for (i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      result += array[i];
      return result;
    }
    result += array[i];
  }
}

console.log(anagram(input));
