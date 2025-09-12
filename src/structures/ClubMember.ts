import type { ClubMember as ClubMemberType } from '../interfaces/ClubMember'
import type { Client } from './Client'
import { Player } from './Player'

export class ClubMember implements ClubMemberType {
    public tag: string
    public name: string
    public nameColor: string
    public role: string
    public trophies: number
    public icon: { id: number; }
    public client: Client
    constructor(data: ClubMemberType, client: Client){
        this.tag = data.tag
        this.name = data.name
        this.nameColor = data.nameColor
        this.role = data.role
        this.trophies = data.trophies
        this.icon = data.icon
        this.client = client
    }

    public async fetch(battlelog = false) : Promise<Player> {
        return new Player(await this.client.requestManager.getPlayer(this.tag, battlelog), this.client)
    }
}
