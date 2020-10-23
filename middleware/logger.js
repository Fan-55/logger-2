function logger(req, res, next) {
  const reqTime = new Date()
  const timeStamp = getTimestamp(reqTime)
  const method = req.method
  const url = req.url

  //finish event listener (native of Node.js)
  res.on('finish', () => {
    const resTime = new Date()
    const cycleTime = resTime - reqTime
    console.log(`${timeStamp} | ${method} from ${url} | total time: ${cycleTime}ms`)
  })
  next()
}

function getTimestamp(reqTime) {
  const [day, month, date, year, time] = reqTime.toString().split(' ')
  const monthNum = 'JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(month) / 3 + 1
  return `${year}-${monthNum}-${date} ${time}`
}

module.exports = logger