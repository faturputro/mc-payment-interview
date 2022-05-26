function findTwoSums(arr, target) {
  console.log(`Array: [${arr}]\n Target: ${target}`)
  const prevVals = {}
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    const pairVal = target - curr
    const idx = prevVals[pairVal]
    if (idx != null) {
      return [idx, i]
    } else {
      prevVals[curr] = i
    }
  }
}
const nums = [1,2,3,4,5,6,10,11]
console.log(`Index result: ${findTwoSums(nums, 12)}`)