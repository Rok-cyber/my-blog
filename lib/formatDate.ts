const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
}

export function formatDate(date: string, locale = 'ko-KR') {
  return new Intl.DateTimeFormat(locale, dateOptions).format(new Date(date))
}
