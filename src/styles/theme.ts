const baseTheme = {
  colors: {
    white: '#FFFFFF',
    background: '#F8FAFC',
    text: '#111725',
    textLight: '#909EB2',
    focus: '#EFF3F8',
    success: '#12EFB3',
    themeBlue: '#0077EF',
    themePurple: '#6500EF',
    themePink: '#C100EF',
    themeOrange: '#EF8100',
    themeYellow: '#EFCA00',
    themeGreen: '#00EFA5',
    shadow: '#0000001A',
  },
} as const

export type Colors = typeof baseTheme.colors

export type Color = keyof Colors

export const theme = {
  base: baseTheme,
}
