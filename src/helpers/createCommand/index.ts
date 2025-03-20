import {Command} from '@tauri-apps/plugin-shell'

export const createCommand = async (program: string, args?: string[]) => {
  try {
    const cmd = await Command.create(program, args, {encoding: 'utf-8'})
    const output = await cmd.execute()
    return output
  } catch (e) {
  } finally {
  }
}
