import { BattleLogResponse } from "../types/BattleLogResponse"

export class BattleLog{
    public battles: BattleLogResponse[]
    constructor(data: BattleLogResponse[]){
        this.battles = data
    }
}
