import fetch from "node-fetch";
import { PlayerResponse } from "../types/PlayerResponse";
import { BattleLogResponse } from "../types/BattleLogResponse";
import { GlobalBrawler } from "../types/Brawler";
import { RankingOfPlayersResponse } from "../types/RankingOfPlayerResponse";
import { RankingOfClubsResponse } from "../types/RankingOfClubsResponse";
import { ClubResponse } from "../types/ClubResponse";
import { EventsResponse } from "../types/EventsResponse";
import { BrawlAPIError } from "./BrawlAPIError";
import { Brawlers } from "../utils/Brawlers";


export class Request {
    public token: string | undefined
    constructor(token: string | undefined){
        this.token = token
    }
    private makeHeaders(): {"Authorization": string}{
        return { "Authorization": `Bearer ${this.token}`}
    }
    private async get(endpoint: string): Promise<any | BrawlAPIError>{
        const url = "https://api.brawlstars.com/v1/" + endpoint
        const response =  await fetch(url, {headers: this.makeHeaders()})
        if(response.ok){
            return await response.json()
        }else{
         throw new BrawlAPIError(response)
        }
    }
    public async getPlayer(tag: string): Promise<PlayerResponse> {
        return await this.get(`players/%23${tag.replace("#", "")}`).then(async(res: PlayerResponse) => Object.defineProperty(res, "battlelog", {value: await this.getBattleLog(res.tag)}))
    }
    public async getBattleLog(tag: string): Promise<BattleLogResponse[]>{
        return await this.get(`players/%23${tag.replace("#", "")}/battlelog`).then((res: any) => res.items)        
    }
    public async getClub(tag: string): Promise<ClubResponse> {
        return await this.get(`clubs/%23${tag.replace("#", "")}`)
    }
    public async getBrawler(id: number): Promise<GlobalBrawler>{
        return await this.get(`brawlers/${id}`)
    }
    public async getBrawlers(): Promise<GlobalBrawler[]>{
        return await this.get("brawlers").then((res: any) => res.items)
    }
    public async getRankingOfPlayers(countryCode:  string): Promise<RankingOfPlayersResponse[]>{
        return await this.get(`rankings/${countryCode}/players`).then((res: any) => res.items)
    }
    public async getRankingOfClubs(countryCode: string): Promise<RankingOfClubsResponse[]>{
        return await this.get(`rankings/${countryCode}/clubs`).then((res: any) => res.items)
    }
    public async getRankingOfBrawlers(countryCode: string = "global", brawler: Brawlers): Promise<RankingOfPlayersResponse[]>{
        return await this.get(`rankings/${countryCode}/brawlers/${brawler}`).then((res: any) => res.items) 
    }
    public async getEvents() : Promise<EventsResponse[]>{
        return await this.get("events/rotation")
    }
}
