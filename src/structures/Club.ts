import type { ClubMember } from '../types/ClubMember'
import type { ClubResponse } from '../types/ClubResponse'

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
	constructor(data: ClubResponse) {
		this.tag = data.tag
		this.name = data.name
		this.description = data.description
		this.type = data.type
		this.badgeId = data.badgeId
		this.requiredTrophies = data.requiredTrophies
		this.trophies = data.trophies
		this.members = data.members
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
