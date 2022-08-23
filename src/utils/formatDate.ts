const dictionary_months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatDate = (date?: Date) => {
  if (!date) return

  const day = date.getDate()
  const month = dictionary_months[date.getMonth()]
  const year = date.getFullYear()

  const dayCurrent = new Date().getDate()
  const monthCurrent = dictionary_months[new Date().getMonth()]
  const yearCurrent = new Date().getFullYear()

  const dateFormatted = `${day} ${month} ${year}`
  const dateCurrentFormatted = `${dayCurrent} ${monthCurrent} ${yearCurrent}`

  return dateFormatted === dateCurrentFormatted ? 'Today' : dateFormatted
}
