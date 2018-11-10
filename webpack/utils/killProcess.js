const MAX_EXIT_TIME = 5000

const killSlaveWithStrategy = ({
  slave,
  killStrategy,
  maxExitTime = MAX_EXIT_TIME,
}) => {
  return new Promise((resolve, reject) => {
    if (!slave) {
      resolve()
      return
    }

    slave.on('exit', code => {
      clearTimeout(exitHandler)
      resolve(code)
    })
    killStrategy(slave)
    const exitHandler = setTimeout(reject, maxExitTime)
  })
}

const gracefullyKillSlave = slave => {
  return killSlaveWithStrategy({
    slave,
    killStrategy: slave => slave.kill('SIGHUP'),
  })
}

const forceKillSlave = slave => {
  return killSlaveWithStrategy({
    slave,
    killStrategy: slave => process.kill(slave.pid),
  })
}

export const killProcess = async slave => {
  try {
    await gracefullyKillSlave(slave)
    console.log('Gracefully killed slave')
  } catch (err) {
    await forceKillSlave(slave)
    console.log(`Force killed slave ${slave.pid}`)
  }
}
