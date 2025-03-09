/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.split(" ");
    let str = [];
    let strArray = [];
    let k = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] != " " || arr[j].includes(" ")) {
            str[k] = arr[j];
            k++;
        }
    }
    k = 0;
    for (j = 0; j < str.length; j++) {
        if (str[j] !== "") {
            strArray[k] = str[j];
            k++;
        }
    }
    let string = "";
    console.log(strArray);
    for (let i = strArray.length - 1; i >= 0; i--) {
        if (i != 0)
            string += strArray[i] + " ";
        else string += strArray[i];
    }
    return string;
};