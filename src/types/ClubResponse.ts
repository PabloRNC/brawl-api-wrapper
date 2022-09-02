import type { ClubMember } from './ClubMember'

export type ClubResponse = {
	tag: string
	name: string
	description: string
	type: string
	badgeId: string
	requiredTrophies: number
	trophies: number
	members: ClubMember[]
}
