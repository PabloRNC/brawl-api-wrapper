import type { Battle } from './Battle'

export type BattleLogResponse = {
	battleTime: string
	event: { id: number; mode: string; map: string }
	battle: Battle
}
