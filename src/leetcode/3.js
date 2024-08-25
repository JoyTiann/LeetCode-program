// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
// 返回 k 。


/**
 * @param {number[]} nums
 * @return {number}
 */

// 遍历数组，用map记录是否重复，重复则删除
// var removeDuplicates = function(nums) {
//     if(nums.length === new Set(nums).size){
//         return nums.length
//     }
//     const map = new Map()
//     let i = 0
//     let count = 0
//     let length = nums.length
//     while(count < length){
//         const num = nums[i]
//         if(!map[num]){
//             map[num] = 1
//             i++
//         }else{
//             nums.splice(i,1)
//         }
//         count++
//     }
// };


// 时间复杂度 O(N)   空间复杂度 O(1)
var removeDuplicates = function(nums) {
    let index = 1
    while (index < nums.length) {
        if(nums[index]===nums[index-1]){
            nums.splice(index,1)
        }else{
            index++
        }
    }
}

export default removeDuplicates