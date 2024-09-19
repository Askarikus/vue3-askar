export const rangesCount = (start, end) => {
  return [...Array(end).keys()].map( el => el + start)
}
