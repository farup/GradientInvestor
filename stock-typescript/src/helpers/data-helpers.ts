

export const converUnixTimeToDate = (unixTime: number) => {
    const milliseconds = unixTime
    return new Date(milliseconds).toLocaleDateString()
}


export const convertDateToUnix = (date: Date) => {
    return Math.floor(date.getTime())
}
