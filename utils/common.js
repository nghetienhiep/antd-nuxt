import moment from 'moment';

export function roundNumber(value, decimals = 2) {
    if (!value) return '';
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);
}

export function formatCurrency(value) {
    if (value) {
        return (value / 1).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
}

export function formatTimeStampToDateTime(value, format) {
    if (value) {
        return moment.unix(value).format(format)
    }
}

export function formatTimeStampToDate(value, format) {
    if (value) {
        return moment.unix(value).format(format)
    }
}
