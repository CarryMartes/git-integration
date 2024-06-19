export function toDate(date: string) {
    const newDate = new Date(date)
        .toISOString()
        .match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)
    return newDate ? newDate[1] + ' ' + newDate[2] : ''
}