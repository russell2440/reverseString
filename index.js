function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

s = reverseStringRecursive('yoyo master');
console.log("here: "+s);