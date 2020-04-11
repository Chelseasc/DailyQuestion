// 8.
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：
// 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
// 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
// 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。
// 在任何情况下，若函数不能进行有效的转换时，请返回 0 。
// 提示：
// 本题中的空白字符只包括空格字符 ' ' 。
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
var myAtoi = function(str) {
    const parseNum = parseInt(str, 10);
    if(parseNum < Math.pow(-2, 31) || parseNum > Math.pow(2, 31) -1) {
        return parseNum > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
    } else if(isNaN(parseNum)) {
        return 0;
    } else {
        return parseNum;
    }
};

// 9.
// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
var isPalindrome = function(x) {
    if(x < 0) return false;
    let temp = 0;
    let num = x;
    while(num > 0) {
        temp = num % 10 + temp * 10;
        num = Math.floor(num / 10);
    }
    return temp === x;
};

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let minus;
        minus = target - nums[i];
        const index = nums.indexOf(minus);
        if(index !== -1 && index !== i) {
            return [parseInt(i), index];
        }
    }
};

// 整数反转
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 输入: 123   输出: 321
// 输入: -123  输出: -321
// 输入: 120   输出: 21
// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。
var reverse = function(x) {
    if(x === 0 || x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) return 0;
    let x1 = x;
    if(x < 0) {
        x1 = -x;
    }
    let arr = [];
    while(x1>0) {
        let rem = x1 % 10;
        arr.push(rem);
        x1 = Math.floor(x1 / 10);
    }
    let result = '';
    for(let i = arr.length; i > 0; i--) {
        result += arr.shift();
    }
    if(result > Math.pow(2, 31)-1 || result < Math.pow(-2, 31)) {
        result = 0;
    }
    return x < 0 ? -result : result;
};
var reverse = function(x) {
    const border = 2**31
    const max = border - 1
    const min = -border

    const result = (x > 0 ? 1 : -1) * String(x).split('').filter(x => x !== '-').reverse().join('')
    return result > max || result < min ? 0 : result 
};

// 13. 罗马数字转整数
var romanToInt = function(s) {
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000  
    }
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] < hash[s[i+1]] ? result -= hash[s[i]] : result += hash[s[i]];
    }
    if(result < 0) {
        return 0;
    } else if (result > 3999) {
        return 3999;
    } else {
        return result;
    }
};

// 14. 最长公共前缀
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    if(strs.length === 1) return strs[0];
    let result = '';
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
};

var isValid = function(s) {
    let s1 = s;
    var hash = {'}': '{', ']': '[', ')': '('};
    var stk = new Array();
    var stk_len = 0;
    for (let i = 0; i < s.length; ++i) {
      let ss = s[i];
      if (ss == '{' || ss == '[' || ss == '(') {
        stk[stk_len] = ss;
        stk_len += 1;
      } else {
        if (stk_len == 0) return false;
        if (stk[stk_len-1] != hash[ss]) {
          return false;
        }
        --stk_len;
      }
    }
    return stk_len == 0;
  };