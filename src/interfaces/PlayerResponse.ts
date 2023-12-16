import type { BattleLogResponse } from './BattleLogResponse'
import type { Brawler } from './Brawler'

export type PlayerResponse = {
	tag: string
	name: string
	nameColor: string
	icon: { id: number }
	trophies: number
	expLevel: number
	expPoints: number
	highestTrophies: number
	highestPowerPlayPoints: number
	isQualifiedFromChampionshipChallenge: boolean
	soloVictories: number
	duoVictories: number
	'3vs3Victories': number
	bestRoboRumbleTime:
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
	club: { name: string; tag: string }
	brawlers: Brawler[]
	battlelog: BattleLogResponse[] | null
}
