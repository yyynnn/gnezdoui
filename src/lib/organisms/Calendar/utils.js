/* eslint-disable no-magic-numbers */
export const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
export const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
export const today = () => {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date
}

export const isDate = date => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]'
  const isValidDate = date && !Number.isNaN(date.valueOf())
  return isDate && isValidDate
}

export const inRange = (date, _range) => {
  const range = _range[0] > _range[1] ? [_range[1], _range[0]] : [_range[0], _range[1]]
  return isDate(range[0]) && isDate(range[1]) && date > range[0] && date < range[1]
}
export const isEqual = (date, date1) => {
  return isDate(date) && isDate(date1) && date.getTime() === date1.getTime()
}
export const addMonths = (date, diff) => {
  const result = new Date(date)
  result.setMonth(result.getMonth() + diff)
  return result
}
export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate()
}

export const builder = (dual, month, year) => {
  const viewSize = 42
  const currMonthView = Array.apply(null, Array(getDaysInMonth(month, year))).map((_, i) => {
    return new Date(year, month, i + 1)
  })

  const prevMonth = month === 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const prevLength = currMonthView[0].getDay() === 0 ? 6 : currMonthView[0].getDay() - 1

  const prevMonthView =
    prevLength > 0
      ? Array.apply(null, Array(prevLength))
          .map((_, i) => {
            return dual ? 'd' : new Date(prevYear, prevMonth, parseInt(getDaysInMonth(prevMonth, prevYear)) - i)
          })
          .reverse()
      : []

  const nextMonth = month === 11 ? 0 : month + 1
  const nextYear = month === 11 ? year + 1 : year
  const nextLength = viewSize - (currMonthView.length + prevMonthView.length)
  const nextMonthView = Array.apply(null, Array(nextLength)).map((_, i) => {
    return dual ? 'd' : new Date(nextYear, nextMonth, i + 1)
  })

  return [...prevMonthView, ...currMonthView, ...nextMonthView]
}
