import { TrophyBox } from './TrophyBox';
import type { Brawler } from '../interfaces'

export function getSeasonReset(brawlers: Brawler[], totalTrophies: number): { remainingTrophies: number, trophyBox: TrophyBox } {

	const reducedTrophies = brawlers.reduce((acc, x) => acc + (x.trophies > 1000 ? x.trophies - 1000 : 0), 0);

	let trophyBox: TrophyBox;

	if(reducedTrophies >= 3000) trophyBox = TrophyBox.UltraBox;
	else if(reducedTrophies >= 1000) trophyBox = TrophyBox.OmegaBox;
	else if(reducedTrophies >= 400) trophyBox = TrophyBox.MegaBox;
	else if(reducedTrophies >= 100) trophyBox = TrophyBox.BigBox;
	else trophyBox = TrophyBox.SmallBox;

	return { remainingTrophies: totalTrophies - reducedTrophies, trophyBox };

}
