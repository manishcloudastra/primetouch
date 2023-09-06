import { Playfair, Bodoni_Moda, Tenor_Sans, Lato, Ubuntu, Inter, Poppins } from 'next/font/google'
 
export const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
})
 
export const bodoni = Bodoni_Moda({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

export const tenor = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const ubuntu = Ubuntu({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({
  weight: ['300','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  weight: ['400','500','700'],
  subsets: ['latin'],
  display: 'swap',
})