module.exports = async function() {
  await Promise.all(global.__TEARDOWN__.map(fn => fn))
}
