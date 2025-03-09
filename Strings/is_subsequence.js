/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (t === s) return true;
  let smove = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[smove]) {
      smove++;
    }
  }
  return smove === s.length;
};
