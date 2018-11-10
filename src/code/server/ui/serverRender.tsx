import {ServerResponse} from 'http'
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import HtmlDocument from './components/HtmlDocument'

interface RenderHtmlDocumentParams {
  apolloClientState?: Object
  head?: string
  helmetHead?: any
  markup?: string
  res: ServerResponse
  webpackUrls: {
    'vendors~main': {js: string}
    main: {js: string}
  }
  styleElements?: Array<React.ReactNode>
  bundles?: Array<string>
}
const renderHtmlDocument = ({
  apolloClientState,
  head,
  helmetHead,
  markup,
  res,
  webpackUrls,
  styleElements,
  bundles = [],
}: RenderHtmlDocumentParams) => {
  // The application component is rendered to static markup
  // and sent as response.
  const render = () =>
    renderToStaticMarkup(
      <HtmlDocument
        {...{
          apolloClientState,
          head,
          scripts: [
            webpackUrls.main.js,
            webpackUrls['vendors~main'].js,
            ...bundles,
          ],
          helmetHead,
          markup,
          styleElements,
        }}
      />
    )
  const html = render()
  const doctype = '<!DOCTYPE html>'
  res.write(doctype + html)
  res.end()
}

interface RenderParams {
  res: ServerResponse
  webpackUrls: {
    'vendors~main': {js: string}
    main: {js: string}
  }
}

export const serverRender = async ({res, webpackUrls}: RenderParams) => {
  await renderHtmlDocument({
    res,
    webpackUrls,
  })
}

export {HtmlDocument}
