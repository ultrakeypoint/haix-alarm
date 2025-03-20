import {platform} from '@tauri-apps/plugin-os'
import {useEffect} from 'react'
import {windowAgent} from './windos'

function Agent() {
  useEffect(() => {
    async function checkTask() {
      // let fatalPrograms = []
      const osType = await platform()
      switch (osType) {
        case 'windows':
          // fatalPrograms = await windowAgent()
          await windowAgent()
          break
        case 'macos':
          break
      }
    }
    checkTask()
  }, [])
  return <></>
}

export default Agent
