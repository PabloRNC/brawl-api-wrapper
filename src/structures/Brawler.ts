import type { Gadget, StarPower, GlobalBrawler } from '../interfaces/Brawler'

export class Brawler {
	public id: number
	public name: string
	public starPowers: StarPower[]
	public gadgets: Gadget[]
	constructor(data: GlobalBrawler) {
		this.id = data.id
		this.name = data.name
		this.starPowers = data.starPowers
		this.gadgets = data.gadgets
	}
}
