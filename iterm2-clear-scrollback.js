export default function iterm2ClearScrollback() {
  // https://www.iterm2.com/documentation-escape-codes.html
  process.stdout.write('\u001b]1337;ClearScrollback\u0007');
}
