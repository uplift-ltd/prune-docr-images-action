import {execaCommand} from 'execa'
import {DOCTLTag, Inputs, Outputs} from './types'

export async function prune(inputs: Inputs): Promise<Outputs> {
  const result = await execaCommand(
    `doctl registry repository list-tags ${inputs.repository} --output json`
  )
  const tags: DOCTLTag[] = JSON.parse(result.stdout)
  return {
    result: 'success'
  }
}
