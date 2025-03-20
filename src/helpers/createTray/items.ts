import {openUrl} from '@tauri-apps/plugin-opener'
import {exit} from '@tauri-apps/plugin-process'

export const handleMenuClick = async (itemId: string) => {
  switch (itemId) {
    case 'web':
      await openUrl(process.env.NEXT_PUBLIC_WEB_URL!)
      break
    case 'quit':
      await exit(0)
      break
  }
}

export const items = [
  {
    id: 'web',
    text: '단꿈e 홈페이지',
    action: handleMenuClick,
  },
  {
    id: 'quit',
    text: '종료',
    action: handleMenuClick,
  },
]
