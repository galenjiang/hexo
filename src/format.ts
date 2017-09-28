// 123456.7.format(3, 2);    // "12,34,56.700"
const numberFormat = (number: number, n: number, x: number) => {
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

const dateFormat = (() => {
  const RE_LIST = [/y+/, /M+/, /d+/, /h+/, /m+/, /s+/, /q+/, /S/]
  const LENGTH = RE_LIST.length
  const SYMBOL_LEFT = '$`'
  const SYMBOL_CURRENT = '$&'
  const SYMBOL_RIGHT = '$\''
  return (timestamp: number, format$: string) => {
    let format = format$
    const date = new Date(timestamp)
    const output = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      Math.floor(date.getMonth() / 3 + 1),
      date.getMilliseconds(),
    ]
    let result = ''
    if (RE_LIST[0].test(format)) {
      result = (<any>RegExp)[SYMBOL_LEFT] + output[0].toString().substr(4 - (<any>RegExp)[SYMBOL_CURRENT].length)
      format = (<any>RegExp)[SYMBOL_RIGHT]
    }
    // tslint:disable-next-line
    for (let i = 1; format && i < LENGTH; i++) {
      if (RE_LIST[i].test(format)) {
        result += (<any>RegExp)[SYMBOL_LEFT] + (output[i] >= 10 || (<any>RegExp)[SYMBOL_CURRENT].length === 1
          ? output[i]
          : '0' + output[i])
        format = (<any>RegExp)[SYMBOL_RIGHT]
      }
    }
    result += format
    return result
  }
})()
export {
  numberFormat,
  dateFormat,
}
