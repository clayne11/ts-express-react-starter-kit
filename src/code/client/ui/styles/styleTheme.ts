export interface StyleTheme {
  fontFamily: string
  fontSize: number
  palette: Palette
}

interface Palette {
  backgroundColor: string
}

export const styleTheme: StyleTheme = {
  fontFamily: 'sans serif',
  fontSize: 15,
  palette: {
    backgroundColor: '#f7f9fA',
  },
}
