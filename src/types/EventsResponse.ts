export type EventsResponse = {
	startTime: string
	endTime: string
	slotId: number
	event: { id: number; mode: string; map: string }
}
