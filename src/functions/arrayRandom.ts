export default (el: any[]): any[] => {
  return el
    .map((value) => ({ value, random: Math.random() }))
    .sort((obj, obj2) => obj.random - obj2.random)
    .map((obj) => obj.value)
}
