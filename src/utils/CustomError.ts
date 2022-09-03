import type { Response } from 'node-fetch'

export function CustomError(response: Response): string {
	const { status, statusText } = response
	const errorFiltered = errors
		.filter((e) => e.status === status)
		.map((e) => e.message)
		.toString()
	if (errorFiltered) return errorFiltered
	return statusText
}

const errors = [
	{ status: 404, message: 'The user tag provided is invalid' },
	{ status: 403, message: 'The api key provided is invalid' },
	{ status: 500, message: 'Unexpected Error' },
	{ status: 503, message: 'API Down' },
]
