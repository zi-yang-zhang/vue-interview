
let counting = (list, key) => {
  let count = 0
  if (list.length > 0) {
    list.forEach((value) => {
      count += key ? value[key] : value
    })
  }
  return count
}

let toFixedDemical = (num, bit = 2) => {
  let mid = Math.pow(10, bit)
  return Math.round(num * mid) / mid
}

let toTimeFormat = (time, format = 'Y-M-D h:m:s') => {
  if (typeof time === 'string') {
    time = new Date(time)
  }
  let obj = {
    'Y': time.getFullYear(),
    'M': time.getMonth() + 1, // 月份
    'D': time.getDate(), // 日
    'h': time.getHours(), // 小时
    'm': time.getMinutes(), // 分
    's': time.getSeconds(), // 秒
    'Q': Math.floor((time.getMonth() + 3) / 3), // 季度
    'S': time.getMilliseconds() // 毫秒
  }
  for (var key in obj) {
    let check = new RegExp('(' + key + ')', 'g')
    if (check.test(format)) {
      format = format.replace(check, obj[key])
    }
  }
  return format
}

let randomNumber = (max = 20) => Math.floor(Math.random() * Math.floor(max))

export { counting, toFixedDemical, toTimeFormat, randomNumber }
