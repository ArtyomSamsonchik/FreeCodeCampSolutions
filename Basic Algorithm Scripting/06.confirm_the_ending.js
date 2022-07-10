function confirmEnding(str, target) {
  let count = 0;
  for (let i = target.length - 1; i >= 0; i--) {
    if (target[i] !== str[str.length - count++]) return false;
  }

  return true;
}