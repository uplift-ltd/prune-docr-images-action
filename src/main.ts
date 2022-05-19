import * as core from '@actions/core'
import {prune} from './prune'
import {Inputs, Outputs} from './types'

async function run(): Promise<void> {
  try {
    const inputs: Inputs = {
      repository: core.getInput('repository', {
        required: true,
        trimWhitespace: true
      }),
      keep: Number(
        core.getInput('keep', {required: false, trimWhitespace: true})
      )
    }

    const outputs: Outputs = await prune(inputs)

    core.setOutput('result', outputs.result)
  } catch (err) {
    const failedResult: Outputs['result'] = 'failed'
    core.setOutput('result', failedResult)
    const message = err instanceof Error ? err.message : `Unknown error ${err}`
    core.setFailed(message)
  }
}

run()
