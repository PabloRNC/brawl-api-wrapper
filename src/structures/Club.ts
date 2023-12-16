import { ClubMember } from './ClubMember'
import type { ClubResponse } from '../interfaces/ClubResponse'
import type { Client } from './Client'


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
	constructor(data: ClubResponse, client: Client) {
		this.tag = data.tag
		this.name = data.name
		this.description = data.description
		this.type = data.type
		this.badgeId = data.badgeId
		this.requiredTrophies = data.requiredTrophies
		this.trophies = data.trophies
		this.members = data.members.map((x) => new ClubMember(x, client))
		this.memberCount = this.members.length
	}

	public sortClubMembersByTrophies(type: 'ASCENDING' | 'DESCENDING'): ClubMember[] {
		return this.members.sort((a, b) => {
			if (type === 'DESCENDING') {
				return a.trophies - b.trophies
			} else {
				return b.trophies - a.trophies
			}
		})
	}
}
