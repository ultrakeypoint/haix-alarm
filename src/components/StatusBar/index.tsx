'use client'

import close from '@/assets/images/close.svg'
import windowMinimize from '@/assets/images/windowMinimize.svg'
import createTray from '@/helpers/createTray'
import useAgent from '@/hooks/useAgent'
import {getCurrentWindow} from '@tauri-apps/api/window'
import Image from 'next/image'

const StatusBar = () => {
  createTray(process.env.TRAY_ID!)
  useAgent()
  return (
    <div className="titlebar">
      <div
        className="titlebar-title"
        onMouseDown={() => getCurrentWindow().startDragging()}
      />
      <div
        className="titlebar-button"
        onClick={() => getCurrentWindow().minimize()}>
        <Image
          src={windowMinimize}
          alt="minimize"
          priority
        />
      </div>
      <div
        className="titlebar-button"
        onClick={() => getCurrentWindow().close()}>
        <Image
          src={close}
          alt="close"
          priority
        />
      </div>
    </div>
  )
}

export default StatusBar
