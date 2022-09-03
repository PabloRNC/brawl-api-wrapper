import fetch from 'node-fetch'
import type { PlayerResponse } from '../types/PlayerResponse'
import type { BattleLogResponse } from '../types/BattleLogResponse'
import type { GlobalBrawler } from '../types/Brawler'
import type { RankingOfPlayersResponse } from '../types/RankingOfPlayerResponse'
import type { RankingOfClubsResponse } from '../types/RankingOfClubsResponse'
import type { ClubResponse } from '../types/ClubResponse'
import type { EventsResponse } from '../types/EventsResponse'
import { BrawlAPIError } from './BrawlAPIError'
import type { Brawlers } from '../utils/Brawlers'

export class Request {
	public token?: string | undefined
	constructor(token?: string | undefined) {
		this.token = token
	}
	private makeHeaders(): { Authorization: string } {
		return { Authorization: `Bearer ${this.token}` }
	}
	private async get(endpoint: string): Promise<any | BrawlAPIError> {
		const url = `https://api.brawlstars.com/v1/${endpoint}`
		const response = await fetch(url, { headers: this.makeHeaders() })
		if (response.ok) {
			return await response.json()
		} else {
			throw new BrawlAPIError(response)
		}
	}
	public async getPlayer(tag: string | undefined): Promise<PlayerResponse> {
		return await this.get(`players/%23${tag?.replace('#', '')}`).then(
			async (res: PlayerResponse) =>
				Object.defineProperty(res, 'battlelog', {
					value: await this.getBattleLog(res.tag),
				})
		)
	}
	public async getBattleLog(tag: string | undefined): Promise<BattleLogResponse[]> {
		return await this.get(`players/%23${tag?.replace('#', '')}/battlelog`).then(
			(res: { items: BattleLogResponse[] }) => res.items
		)
	}
	public async getClub(tag: string | undefined): Promise<ClubResponse> {
		return (await this.get(`clubs/%23${tag?.replace('#', '')}`)) as Promise<ClubResponse>
	}
	public async getBrawler(id: number | undefined): Promise<GlobalBrawler> {
		return (await this.get(`brawlers/${id}`)) as Promise<GlobalBrawler>
	}
	public async getBrawlers(): Promise<GlobalBrawler[]> {
		return await this.get('brawlers').then((res: { items: GlobalBrawler[] }) => res.items)
	}
	public async getRankingOfPlayers(
		countryCode: string | undefined = 'global'
	): Promise<RankingOfPlayersResponse[]> {
		return await this.get(`rankings/${countryCode}/players`).then(
			(res: { items: RankingOfPlayersResponse[] }) => res.items
		)
	}
	public async getRankingOfClubs(countryCode: string | undefined = 'global'): Promise<RankingOfClubsResponse[]> {
		return await this.get(`rankings/${countryCode}/clubs`).then(
			(res: { items: RankingOfClubsResponse[] }) => res.items
		)
	}
	public async getRankingOfBrawlers(
		countryCode: string | undefined = 'global',
		brawler: Brawlers | undefined
	): Promise<RankingOfPlayersResponse[]> {
		return await this.get(`rankings/${countryCode}/brawlers/${brawler}`).then(
			(res: { items: RankingOfPlayersResponse[] }) => res.items
		)
	}
	public async getEvents(): Promise<EventsResponse[]> {
		return (await this.get('events/rotation')) as Promise<EventsResponse[]>
	}
}
