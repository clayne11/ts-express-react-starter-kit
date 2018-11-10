import qs from 'qs'

export const parse = (search: string): string => {
  return qs.parse(search, {
    ignoreQueryPrefix: true,
    decoder: str => {
      const keywords = {
        true: true,
        false: false,
        null: null,
        undefined: undefined,
      }

      if (str in keywords) {
        return keywords[str]
      }

      try {
        return decodeURIComponent(str.replace(/\+/g, ' '))
      } catch (e) {
        return str
      }
    },
  })
}
