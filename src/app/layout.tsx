import '@/assets/styles/global.css'
import BottomNavbar from '@/components/BottomNavbar'
import TopNavbar from '@/components/TopNavbar'
import {Provider} from '@/components/ui/provider'

type RootLayoutProp = {children: React.ReactNode}
export default async function RootLayout({children}: Readonly<RootLayoutProp>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning>
      <body>
        <Provider>
          <TopNavbar />
          {children}
          <BottomNavbar />
        </Provider>
      </body>
    </html>
  )
}
