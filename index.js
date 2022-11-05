function superbowlWin(record) {
    const yearWon = record.find(record => record.result === 'W')
    if (yearWon) {
        return yearWon.year
    } else {return undefined}
}


