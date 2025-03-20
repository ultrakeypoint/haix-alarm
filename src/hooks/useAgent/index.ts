'use client';

import {platform} from '@tauri-apps/plugin-os'
import {useEffect} from 'react'
// import {windowAgent} from './windos'

function useAgent() {
  useEffect(() => {
    async function checkTask() {
      // let fatalPrograms = []
      const osType = await platform()
      switch (osType) {
        case 'windows':
          // fatalPrograms = await windowAgent()
          // await windowAgent()
          break
        case 'macos':
          break
      }
    }
    checkTask()
  }, [])
}

export default useAgent
