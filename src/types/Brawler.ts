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

export type Brawler = {
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

export type GlobalBrawler = {
    id: string
    name: string
    gadgets: Gadget[]
    starPowers: StarPower[]
}