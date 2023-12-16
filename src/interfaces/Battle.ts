export type Battle = {
	mode: string
	type: string
	result: string
	duration: number
	trophyChange: number
	starPlayer: {
		tag: string
		name: string
		brawler: {
			id: number
			name: string
			power: number
			trophies: number
		}
	}
	teams: Array<
		Array<{
			tag: string
			name: string
			brawler: {
				id: number
				name: string
				power: number
				trophies: number
			}
		}>
	>
}
