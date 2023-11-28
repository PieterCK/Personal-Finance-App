function formatPrice(value) {
  const val = (value / 1).toFixed(2).replace('.', ',');
  return `Rp ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

function sortBalanceSummaryByDate(bs, order){
    if (order === 'asc') {
        return bs.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (order === 'dsc') {
        return bs.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        throw new Error("Invalid order parameter. Use 'asc' or 'dsc'.");
      }
}

function formatCurrency(number, locale = 'de-DE', currencyCode = 'IDR') {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(number);

  return formattedCurrency;
}

export {
  formatPrice,
  sortBalanceSummaryByDate,
  formatCurrency
};