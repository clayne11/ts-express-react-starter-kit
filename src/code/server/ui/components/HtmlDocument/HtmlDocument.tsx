import React from 'react'

export interface HtmlDocumentProps {
  apolloClientState?: Object
  css?: Array<string>
  head?: string
  helmetHead?: any
  inlineCss?: any
  markup?: string
  scripts?: Array<string>
  storeState?: Object
  styleElements?: Array<React.ReactNode>
}

const HtmlDocument: React.StatelessComponent<HtmlDocumentProps> = ({
  apolloClientState,
  head,
  helmetHead,
  inlineCss,
  markup,
  styleElements,
  css = [],
  scripts = [],
  storeState = {},
}) => {
  return (
    <html {...helmetHead && helmetHead.htmlAttributes.toComponent()}>
      <head>
        {scripts.map(src => (
          <link
            {...{
              key: src,
              rel: 'preload',
              as: 'script',
              href: src,
            }}
          />
        ))}

        {!!head && head}
        {helmetHead && helmetHead.base.toComponent()}
        {helmetHead && helmetHead.link.toComponent()}
        {helmetHead && helmetHead.meta.toComponent()}
        {helmetHead && helmetHead.script.toComponent()}
        {helmetHead && helmetHead.style.toComponent()}
        {helmetHead && helmetHead.title.toComponent()}

        <meta {...{charSet: 'utf-8'}} />

        {!!inlineCss && (
          <style {...{dangerouslySetInnerHTML: {__html: inlineCss}}} />
        )}

        {/* Sets application state into a global variable */}
        <script
          {...{
            dangerouslySetInnerHTML: {
              __html: `window.__INITIAL_STATE__=${JSON.stringify(storeState)}`,
            },
          }}
        />

        {/* Sets apollo state into a global variable */}
        {apolloClientState && (
          <script
            {...{
              dangerouslySetInnerHTML: {
                __html: `window.__APOLLO_CLIENT_STATE__=${JSON.stringify(
                  apolloClientState
                )}`,
              },
            }}
          />
        )}

        {styleElements}

        {/* Listing all css files from webpack */}
        {css.map((href, index) => (
          <link
            {...{
              href,
              key: index,
              rel: 'stylesheet',
            }}
          />
        ))}
      </head>

      <body>
        {/* Adds markup for a given route element */}
        <div
          {...{
            className: 'RootNode',
            dangerouslySetInnerHTML: {__html: markup ? markup : ''},
          }}
        />

        {/* Adds all scripts from webpack */}
        {scripts.map(src => (
          <script
            {...{
              key: src,
              src,
            }}
          />
        ))}
      </body>
    </html>
  )
}

export default HtmlDocument
