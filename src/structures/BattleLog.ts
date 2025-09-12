import type { BattleLogResponse } from '../interfaces'

export class BattleLog {
	public battles: BattleLogResponse[]
	constructor(data: BattleLogResponse[]) {
		this.battles = data
	}
}
