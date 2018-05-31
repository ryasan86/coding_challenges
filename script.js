function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    const currIdx = s.indexOf(s[i]);
    const nextIdx = s.indexOf(s[i], i + 1);
    if (currIdx === i && nextIdx === -1) {
      return s[i];
    }
  }
  return '_';
}

const s = 'abcxabc';
console.log(firstNotRepeatingCharacter(s));
