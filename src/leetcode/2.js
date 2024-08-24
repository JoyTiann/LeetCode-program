// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// 字符转数组，反转后再转为字符
var isPalindrome = function(s) {
    // 去除数字、字母
    let sGood = s.replace(/[^a-zA-Z0-9]/g,'')
    // 大写转小写
    sGood = sGood.toLowerCase()
    const res = sGood.split('').reverse().join('')
    return sGood === res
};

// 双指针
export var isPalindrome2 = function(s) {
    // 去除数字、字母
    let sGood = s.replace(/[^a-zA-Z0-9]/g,'')
    // 大写转小写
    sGood = sGood.toLowerCase()
    let i=0,j=sGood.length-1
    let flag = true
    
    while(i<=j){
        console.log('====i:',i)
        if(sGood.charAt(i)!==sGood.charAt(j)){
            flag = false
            
            break
        }else{
            i++
            j--
        }
    }
    return flag
};

export default isPalindrome