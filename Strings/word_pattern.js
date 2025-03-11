/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr_p = pattern.split("");
  const arr_s = s.split(" ");
  const arr = new Array();
  let temp = new Array();
  if (arr_p.length != arr_s.length) {
    return false;
  }
  for (let i = 0; i < arr_p.length; i++) {
    arr.push(arr_p[i] + ":" + arr_s[i]);
  }
  for (i = 0; i < arr.length; i++) {
    temp = arr[i].split(":");
    for (let j = i; j < arr.length; j++) {
      if (arr[j].split(":")[0] === temp[0]) {
        if (arr[j].split(":")[1] != temp[1]) {
          return false;
        }
      }
      if (arr[j].split(":")[1] === temp[1]) {
        if (arr[j].split(":")[0] != temp[0]) {
          return false;
        }
      }
    }
  }
  return true;
};

/**
 * ChatGPT Solution
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const mapPatternToWord = new Map();
  const mapWordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (!mapPatternToWord.has(char) && !mapWordToPattern.has(word)) {
      mapPatternToWord.set(char, word);
      mapWordToPattern.set(word, char);
    } else {
      if (
        mapPatternToWord.get(char) !== word ||
        mapWordToPattern.get(word) !== char
      ) {
        return false;
      }
    }
  }

  return true;
};
