export const FormatNumber = (number: number) => {
  const newNumber = new Intl.NumberFormat('de-DE').format(number)
  return newNumber
}

export const FormatNumberK = (number: number) => {
  const newNumber = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2 })
    .format(number)
    .replace('.', ',')
  return newNumber
}
