import type { Gadget, StarPower, GlobalBrawler } from '../types/Brawler'

export class Brawler {
	public id: string
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
