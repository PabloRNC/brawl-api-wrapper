import type { Response } from 'node-fetch'

export class BrawlAPIError extends Error {
	public response: Response
	constructor(response: Response) {
		super()
		this.response = response
		this.message = `${this.response.status} ${this.response.statusText}`
	}
}
