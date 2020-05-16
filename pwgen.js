/**
 * Get the value of the flag
 */
const pick = flag => {
  const index = process.argv.indexOf(flag) + 1
  if (!index) return undefined
  return process.argv[index]
}

/**
 * Check for existence of a given flag
 */
const exists = flag => {
  return process.argv.includes(flag)
}

/**
 * Get a random character from a set of characters
 */
const getRandomCharacter = (set) => {
  return set[Math.floor(Math.random() * (set.length - 1))]
}

/**
 * Generate a password
 */
const generatePassword = (length, alphabet) => {
  let result = []
  while (length--) {
    result.push(getRandomCharacter(alphabet))
  }
  return result.join('')
}

if (exists('-h') || exists('--help')) {
  console.log('usage: pw [-l num] [-n num] [--no-upper] [--no-digits]')
  process.exit()
}

const length = pick('-l') || 20
let quantity = pick('-n') || 1

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
if (!exists('--no-upper')) {
  alphabet += alphabet.toUpperCase()
}
if (!exists('--no-digits')) {
  alphabet += '1234567890'
}

while (quantity--) {
  console.log(generatePassword(length, alphabet))
}
