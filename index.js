function formatNumber(number){
    const formattedNumber = Intl.NumberFormat('en', {
        notation: 'compact',
        minimumFractionDigits: '1'
    }).format(number);
    return formattedNumber;
}
console.log(formatNumber(100));
