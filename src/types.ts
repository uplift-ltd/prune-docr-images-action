import {getOctokit} from '@actions/github'

export type OctokitInstance = ReturnType<typeof getOctokit>

export interface Inputs {
  repository: string
  keep: number
}

export interface Outputs {
  result: 'success' | 'failed'
}

export interface DOCTLTag {
  registry_name: string
  repository: string
  tag: string
  manifest_digest: string
  compressed_size_bytes: number
  size_bytes: number
  updated_at: number
}
