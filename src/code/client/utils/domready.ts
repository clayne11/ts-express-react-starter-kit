const domContentLoaded = 'DOMContentLoaded'
const fns = []

let domready

if (typeof document === 'undefined') {
  domready = () => {}
} else {
  const isLoaded = () => {
    const hack = document.documentElement.doScroll
    return (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(document.readyState)
  }

  const loadListener = () => {
    document.removeEventListener(domContentLoaded, loadListener)
    loaded = true
    let listener
    while ((listener = fns.shift())) {
      listener()
    }
  }

  let loaded = isLoaded()

  if (!loaded) {
    document.addEventListener(domContentLoaded, loadListener)
  }

  domready = fn => {
    if (loaded) {
      setTimeout(fn, 0)
      return
    }
    fns.push(fn)
  }
}

export {domready}
