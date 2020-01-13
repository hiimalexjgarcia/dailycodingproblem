/*
Sun, Jan 12, 2020 at 10:33 AM

Daily Coding Problem

Good morning! Here's your coding interview problem for today.
This problem was asked by Flexport.
Given a string s , rearrange the characters so that any two adjacent
characters are not the same. If this is not possible, return null.
For example, if s = yyz then return yzy . If s = yyy then
return null.
*/

function rearrangeString (s) {
  var result = s.charAt(0)
  var tmp = s.slice(1)

  var keepProcessing = true
  do {
    keepProcessing = false
    for (var i = 0; i < tmp.length; i++) {
      if (tmp.charAt(i) !== result.slice(-1)) {
        result += tmp.charAt(i)
        tmp = tmp.slice(0, i) + tmp.slice(i + 1)
        keepProcessing = true
        break
      }
    }
  } while (keepProcessing === true)

  return tmp.length === 0 ? result : null
}

module.exports = rearrangeString
