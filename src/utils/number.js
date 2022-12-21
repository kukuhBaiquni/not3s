const currencyFormat = (num) => {
  const currency = 'IDR'
  return `${currency} ${num?.toLocaleString()}`
}

export default currencyFormat
