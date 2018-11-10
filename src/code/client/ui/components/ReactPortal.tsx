import React from 'react'
import ReactDOM from 'react-dom'

export interface ReactPortalProps {
  children?: React.ReactNode
  isRendered?: boolean
  portalContainer?: HTMLElement
}

export interface ReactPortalState {
  mountNode: HTMLDivElement | null
}

class ReactPortal extends React.PureComponent<
  ReactPortalProps,
  ReactPortalState
> {
  static defaultProps = {
    isRendered: true,
  }
  state = {
    mountNode: null,
  }

  componentDidMount() {
    const anchor = document.querySelector(`.RootNode`)
    this.setState(state => ({...state, mountNode: anchor}))
  }

  getPortalContainer = () => {
    if (this.props.portalContainer) {
      return this.props.portalContainer
    }

    return this.state.mountNode
  }

  render() {
    const portalContainer = this.getPortalContainer()
    if (!this.props.isRendered || !portalContainer) {
      return null
    }

    return ReactDOM.createPortal(this.props.children, portalContainer)
  }
}

export {ReactPortal}
