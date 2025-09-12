import { Request } from './Request'
import { Player } from './Player'
import { BattleLog } from './BattleLog'
import { Club } from './Club'
import { Brawler } from './Brawler'
import type {
	RankingOfPlayersResponse,
	RankingOfClubsResponse,
	EventsResponse,
} from '../interfaces'
import type { Brawlers } from '../utils'

export class Client {
	public requestManager: Request
	constructor(token: string | undefined) {
		this.requestManager = new Request(token)
	}

	public async getPlayer(tag: string | undefined, battlelog = false): Promise<Player> {
		return new Player(await this.requestManager.getPlayer(tag, battlelog), this)
	}
	public async getBattleLog(tag: string | undefined): Promise<BattleLog> {
		return new BattleLog(await this.requestManager.getBattleLog(tag))
	}
	public async getClub(tag: string | undefined): Promise<Club> {
		return new Club(await this.requestManager.getClub(tag), this)
	}
	public async getBrawler(brawler: Brawlers | undefined): Promise<Brawler> {
		return new Brawler(await this.requestManager.getBrawler(brawler))
	}
	public async getBrawlers(): Promise<Brawler[]> {
		return await this.requestManager.getBrawlers()
	}
	public async getRankingOfPlayers(
		countryCode = 'global'
	): Promise<RankingOfPlayersResponse[]> {
		return await this.requestManager.getRankingOfPlayers(countryCode)
	}
	public async getRankingOfClubs(
		countryCode = 'global'
	): Promise<RankingOfClubsResponse[]> {
		return await this.requestManager.getRankingOfClubs(countryCode)
	}
	public async getRankingOfBrawlers(
		brawler: Brawlers | undefined,
		countryCode = 'global'
	): Promise<RankingOfPlayersResponse[]> {
		return await this.requestManager.getRankingOfBrawlers(countryCode, brawler)
	}
	public async getEvents(): Promise<EventsResponse[]> {
		return await this.requestManager.getEvents()
	}
}
