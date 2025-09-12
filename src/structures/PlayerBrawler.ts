import type { Brawler, Gear, StarPower, Gadget } from '../interfaces/Brawler'
import { Brawler as GlobalBrawler } from '../structures/Brawler'
import type { Client } from './Client'
import { Request } from './Request'

export class PlayerBrawler implements Brawler {

    public id: number
	public name: string
	public power: number
	public rank: number
	public highestTrophies: number
	public trophies: number
	public gears: Gear[]
	public starPowers: StarPower[]
	public gadgets: Gadget[]
    public client: Client

    constructor(data: Brawler, client: Client){
        this.id = data.id
        this.name = data.name
        this.power = data.power
        this.rank = data.rank
        this.highestTrophies = data.highestTrophies
        this.trophies = data.trophies
        this.gears = data.gears
        this.starPowers = data.starPowers
        this.gadgets = data.gadgets
        this.client = client
    }

    public async fetch() : Promise<GlobalBrawler>{
       return new GlobalBrawler(await this.client.requestManager.getBrawler(this.id))
    }
}
