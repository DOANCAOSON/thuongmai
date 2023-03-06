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

const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str?.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name)?.replace(/\s/g, '-') + `-i,${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i,')
  return arr[arr.length - 1]
}
