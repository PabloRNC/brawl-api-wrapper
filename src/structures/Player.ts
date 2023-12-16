import { RoboRumble } from '../utils/RoboRamble'
import type { PlayerResponse } from '../interfaces/PlayerResponse'
import type { BattleLogResponse } from '../interfaces/BattleLogResponse'
import type { Brawler, Gadget, Gear, StarPower } from '../interfaces/Brawler'
import type { SeasonReset } from '../interfaces/SeasonReset'
import { remainingTrophies, seasonBlings } from '../utils/SeasonReset'
import type { Client } from './Client'
import { PlayerBrawler } from './PlayerBrawler'
export class Player {
	public tag: string
	public name: string
	public nameColor: string
	public icon: { id: number }
	public trophies: number
	public level: number
	public xp: number
	public highestTrophies: number
	public highestPowerPlayPoints: number
	public isQualifiedFromChampionshipChallenge: boolean
	public soloVictories: number
	public duoVictories: number
	public '3vs3Victories': number
	public bestRoboRumbleTime: string
	public club: { name: string; tag: string } | null
	public brawlers: PlayerBrawler[]
	public battlelog: BattleLogResponse[]
	constructor(data: PlayerResponse, client: Client) {
		this.name = data.name
		this.tag = data.tag
		this.nameColor = data.nameColor
		this.icon = data.icon
		this.trophies = data.trophies
		this.level = data.expLevel
		this.xp = data.expPoints
		this.highestTrophies = data.highestTrophies
		this.highestPowerPlayPoints = data.highestPowerPlayPoints
		this.isQualifiedFromChampionshipChallenge = data.isQualifiedFromChampionshipChallenge
		this.soloVictories = data.soloVictories
		this.duoVictories = data.duoVictories
		this['3vs3Victories'] = data['3vs3Victories']
		this.bestRoboRumbleTime = RoboRumble[data.bestRoboRumbleTime]
		this.club = Object.keys(data.club).length === 0 ? null : data.club
		this.brawlers = data.brawlers.map((x) => new PlayerBrawler(x, client))
		this.battlelog = data.battlelog
	}
	public getBrawler(name: string): Brawler | undefined {
		return this.brawlers.find(
			(brawler) => brawler.name.toLowerCase() === name.toLowerCase()
		)
	}
	public getGadget(name: string): Gadget | undefined {
		return this.brawlers
			.find((brawler: Brawler) =>
				brawler.gadgets.some((gadget) => gadget.name.toLowerCase() === name.toLowerCase())
			)
			?.gadgets.find((gadget) => gadget.name.toLowerCase() === name.toLowerCase())
	}
	public getStarPower(name: string): StarPower | undefined {
		return this.brawlers
			.find((brawler) =>
				brawler.starPowers.some(
					(starPower) => starPower.name.toLowerCase() === name.toLowerCase()
				)
			)
			?.starPowers.find(
				(starPower) => starPower.name.toLowerCase() === name.toLowerCase()
			)
	}
	public getGear(name: string): Gear | undefined {
		return this.brawlers
			.find((brawler) =>
				brawler.gears.some((gear) => gear.name.toLowerCase() === name.toLowerCase())
			)
			?.gears.find((gear) => gear.name.toLowerCase() === name.toLowerCase())
	}
	public sortBrawlers(
		filter: 'TROPHIES' | 'POWER' | 'RANK',
		criteria: 'ASCENDING' | 'DESCENDING'
	): Brawler[] {
		switch (filter) {
			case 'TROPHIES':
				{
					return criteria === 'ASCENDING'
						? this.brawlers.sort((a, b) => b.trophies - a.trophies)
						: this.brawlers.sort((a, b) => a.trophies - b.trophies)
				}
				break
			case 'POWER':
				{
					return criteria === 'ASCENDING'
						? this.brawlers.sort((a, b) => b.power - a.power)
						: this.brawlers.sort((a, b) => a.power - b.power)
				}
				break
			case 'RANK':
				{
					return criteria === 'ASCENDING'
						? this.brawlers.sort((a, b) => b.rank - a.rank)
						: this.brawlers.sort((a, b) => a.rank - b.rank)
				}
				break
			default: {
				return this.brawlers
			}
		}
	}

	public getSeasonReset(): SeasonReset {
          return { remainingTrophies: remainingTrophies(this.brawlers, this.trophies), blings: seasonBlings(this.brawlers) }
	}
}
