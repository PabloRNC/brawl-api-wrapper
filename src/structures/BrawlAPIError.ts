import type { Response } from 'node-fetch'

export class BrawlAPIError extends Error {
	public override name: string
	public override message: string
	public readonly status: number
	public readonly originalError: string

	public constructor(response: Response, message: string) {
		super()
		this.name = '\x1b[31mBrawlApiError\x1b[0m'
		this.message = message
		this.status = response.status
		this.originalError = response.statusText
	}
}
