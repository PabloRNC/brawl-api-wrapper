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
	teams: {
		tag: string
		name: string
		brawler: {
			id: number
			name: string
			power: number
			trophies: number
		}
	}[][]
}

export type BattleLogResponse = {
	battleTime: string
	event: { id: number; mode: string; map: string }
	battle: Battle
}

export type GlobalBrawler = {
	id: string
	name: string
	gadgets: Gadget[]
	starPowers: StarPower[]
}
export type PlayerBrawler = {
	id: string
	name: string
	power: number
	rank: number
	highestTrophies: number
	trophies: number
	gears: Gear[]
	starPowers: StarPower[]
	gadgets: Gadget[]
}
export type Gadget = {
	id: number
	name: string
}

export type Gear = {
	id: number
	name: string
	level: number
}

export type StarPower = {
	id: number
	name: string
}
export type ClubMember = {
	tag: string
	name: string
	nameColor: string
	role: string
	trophies: number
	icon: { id: number }
}

export type ClubResponse = {
	tag: string
	name: string
	description: string
	type: string
	badgeId: string
	requiredTrophies: number
	trophies: number
	members: ClubMember[]
}
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
	brawlers: PlayerBrawler[]
	battlelog: BattleLogResponse[]
}
export type RankingOfClubsResponse = {
	tag: string
	name: string
	badgeId: number
	trophies: number
	rank: number
	memberCount: number
}
export type RankingOfPlayersResponse = {
	name: string
	tag: string
	rank: number
	trophies: number
	icon: { id: number }
	club: { name: string }
	nameColor: string
}
export enum Brawlers {
	Shelly = 16000000,
	Colt,
	Bull,
	Brock,
	Rico,
	Spike,
	Barley,
	Jessie,
	Nita,
	Dynamike,
	ElPrimo,
	Mortis,
	Crow,
	Poco,
	Bo,
	Piper,
	Pam,
	Tara,
	Darrly,
	Penny,
	Frank,
	Gene,
	Tick,
	Leon,
	Rosa,
	Carl,
	Bibi,
	'8Bit',
	Sandy,
	Bea,
	Emz,
	MrP,
	Max,
	Jacky = 16000034,
	Gale,
	Nani,
	Sprout,
	Surge,
	Collete,
	Amber,
	Lou,
	Byron,
	Edgar,
	Ruffs,
	Stu,
	Belle,
	Squeak,
	Grom,
	Buzz,
	Griff,
	Ash,
	Meg,
	Lola,
	Fang,
	Eve = 16000056,
	Jannet,
	Bonnie,
	Otis,
	Sam,
	Gus,
}

export type EventsResponse = {
	startTime: string
	endTime: string
	slotId: number
	event: { id: number; mode: string; map: string; modifiers?: string[] }
}

export class BattleLog {
	public battles: BattleLogResponse[]
	constructor(data: BattleLogResponse[])
}
export class Brawler {
	public id: string
	public name: string
	public starPowers: StarPower[]
	public gadgets: Gadget[]
	constructor(data: GlobalBrawler)
}
export class Client {
	public token: string | undefined
	constructor(token: string | undefined)
	public getPlayer(tag: string | undefined): Promise<Player>
	public getBattleLog(tag: string | undefined): Promise<BattleLog>
	public getClub(tag: string | undefined): Promise<Club>
	public getRankingOfPlayers(): Promise<RankingOfPlayersResponse[]>
	public getRankingOfClubs(): Promise<RankingOfClubsResponse[]>
	public getEvents(): Promise<EventsResponse[]>
	public getBrawler(brawler: Brawlers | undefined): Promise<GlobalBrawler>
	public getBrawlers(): Promise<GlobalBrawler[]>
	public getRankingOfPlayers(countryCode: string): Promise<RankingOfPlayersResponse[]>
	public getRankingOfClubs(countryCode: string): Promise<RankingOfClubsResponse[]>
	public getRankingOfBrawlers(
		brawler: Brawlers | undefined,
		countryCode: string
	): Promise<RankingOfPlayersResponse[]>
	public getEvents(): Promise<EventsResponse[]>
}

export class Club {
	public tag: string
	public name: string
	public description: string
	public type: string
	public badgeId: string
	public requiredTrophies: number
	public trophies: number
	public members: ClubMember[]
	public memberCount: number
	constructor(data: ClubResponse)
	public sortClubMembersByTrophies(type: 'ASCENDING' | 'DESCENDING'): ClubMember[]
}
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
	public club: { name: string; tag: string }
	public brawlers: PlayerBrawler[]
	public battlelog: BattleLogResponse[]
	constructor(data: PlayerResponse)
	public getBrawler(name: string): PlayerBrawler
	public getGadget(name: string): Gadget
	public getStarPower(name: string): StarPower
	public getGear(name: string): Gear
	public sortBrawlers(
		filter: 'TROPHIES' | 'POWER' | 'RANK',
		criteria: 'ASCENDING' | 'DESCENDING'
	): PlayerBrawler[]
}
