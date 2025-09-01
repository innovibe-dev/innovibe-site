import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import '@/assets/scss/style.scss'
import AppProviders from '../components/wrappers/AppProviders'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: {
    default:
      ' Evenues - | Tailwind App Landing Page Template',
    template:
      '%s |  Evenues-NextJs | Tailwind App Landing Page Template',
  },
  description:
    'A Fully Responsive Tailwind CSS Template, personal, agency, application, business, clean, creative, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc.',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <title> Evenues - | Tailwind App Landing Page Template</title>
      <body className={`antialiased`}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={112}
            height={24}
            src={logo}
            style={{ height: '6%', width: 'auto' }}
            priority
          />
        </div>
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  )
}
