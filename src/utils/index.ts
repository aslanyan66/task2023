export const getCurrentTimeToStr = (duration: number) => {
  const dateObj = new Date(duration)
  const minutes = dateObj.getMinutes()
  const seconds = dateObj.getSeconds()
  const milliseconds = dateObj.getMilliseconds().toString()[0]

  const timeToShow = [minutes, seconds].map((val) => (val < 10 ? '0' + val : val)).join(':')

  return `${timeToShow}.${milliseconds}`
}

export const timeToMilliseconds = (time: number, unit: number) => time * unit

export const isValidTimeForCount = (duration: number) => {
  if (duration === 0) {
    alert('Please enter positive time.')
    return
  } else if (duration > 3600 * 1000) {
    alert('Please enter time less or equals one hour.')
    return
  }
  return true
}
