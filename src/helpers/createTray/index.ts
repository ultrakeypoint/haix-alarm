import {TrayIcon, type TrayIconOptions} from '@tauri-apps/api/tray'
import {Menu} from '@tauri-apps/api/menu'
import {defaultWindowIcon} from '@tauri-apps/api/app'
import {items} from './items'
import {app} from '@tauri-apps/api'

const createTray = async (id: string) => {
  try {
    const menu = await Menu.new({items})
    const options: TrayIconOptions = {
      id,
      menu,
      showMenuOnLeftClick: true,
      tooltip: await app.getName(),
      icon: await defaultWindowIcon().then(),
    }
    const trayIcon = await TrayIcon.getById(id)
    if (!trayIcon) {
      await TrayIcon.new(options)
    }
  } catch (e) {
  } finally {
  }
}

export default createTray
