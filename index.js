function block (millisecond) {
    if (millisecond <= 0) return

    let now = performance.now()
    const end = now + millisecond

    while(now <= end) {
        now = performance.now()
    }
}

module.exports = block