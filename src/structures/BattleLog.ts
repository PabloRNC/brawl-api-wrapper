import type { BattleLogResponse } from '../interfaces/BattleLogResponse'

export class BattleLog {
	public battles: BattleLogResponse[]
	constructor(data: BattleLogResponse[]) {
		this.battles = data
	}
}
