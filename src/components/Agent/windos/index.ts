import {createCommand} from '../../../helpers/createCommand'

export const windowAgent = async () => {
  const response = await createCommand('run-tasklist')
  const processes = response?.stdout?.split('\r\n')
  const exes = processes?.map((p) => p.match(/^.+(exe)/g)).filter((r) => r)
  const exe = exes?.filter((e, i) => exes?.indexOf(e) === i)
  return exe
}
