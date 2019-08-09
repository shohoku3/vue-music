export const transformTime = seconds => {
  let min, second;
  min = Math.floor(seconds / 60)
  min = min.toString().length == 1 ? ('0' + min) : min;
  second = Math.floor(seconds - 60 * min);
  second = second.toString().length == 1 ? ('0' + second) : second
  return min + ':' + second
}
