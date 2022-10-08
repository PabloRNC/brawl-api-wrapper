import type { Brawler } from '../types/Brawler'

export function seasonStarPoints(brawlers: Brawler[]): number {
	let starPoints = 0

	brawlers.forEach((brawler) => {
		if (brawler.trophies >= 501 && brawler.trophies < 525) starPoints = starPoints + 20
		if (brawler.trophies >= 525 && brawler.trophies < 550) starPoints = starPoints + 50
		if (brawler.trophies >= 550 && brawler.trophies < 575) starPoints = starPoints + 70
		if (brawler.trophies >= 575 && brawler.trophies < 600) starPoints = starPoints + 80
		if (brawler.trophies >= 600 && brawler.trophies < 625) starPoints = starPoints + 90
		if (brawler.trophies >= 625 && brawler.trophies < 650) starPoints = starPoints + 100
		if (brawler.trophies >= 650 && brawler.trophies < 675) starPoints = starPoints + 110
		if (brawler.trophies >= 675 && brawler.trophies < 700) starPoints = starPoints + 120
		if (brawler.trophies >= 700 && brawler.trophies < 725) starPoints = starPoints + 130
		if (brawler.trophies >= 725 && brawler.trophies < 750) starPoints = starPoints + 140
		if (brawler.trophies >= 750 && brawler.trophies < 775) starPoints = starPoints + 150
		if (brawler.trophies >= 775 && brawler.trophies < 800) starPoints = starPoints + 160
		if (brawler.trophies >= 800 && brawler.trophies < 825) starPoints = starPoints + 170
		if (brawler.trophies >= 825 && brawler.trophies < 850) starPoints = starPoints + 180
		if (brawler.trophies >= 850 && brawler.trophies < 875) starPoints = starPoints + 190
		if (brawler.trophies >= 875 && brawler.trophies < 900) starPoints = starPoints + 200
		if (brawler.trophies >= 900 && brawler.trophies < 925) starPoints = starPoints + 210
		if (brawler.trophies >= 925 && brawler.trophies < 950) starPoints = starPoints + 220
		if (brawler.trophies >= 950 && brawler.trophies < 975) starPoints = starPoints + 230
		if (brawler.trophies >= 975 && brawler.trophies < 1000) starPoints = starPoints + 240
		if (brawler.trophies >= 1000 && brawler.trophies < 1050) starPoints = starPoints + 250
		if (brawler.trophies >= 1050 && brawler.trophies < 1100) starPoints = starPoints + 260
		if (brawler.trophies >= 1100 && brawler.trophies < 1150) starPoints = starPoints + 270
		if (brawler.trophies >= 1150 && brawler.trophies < 1200) starPoints = starPoints + 280
		if (brawler.trophies >= 1200 && brawler.trophies < 1250) starPoints = starPoints + 290
		if (brawler.trophies >= 1250 && brawler.trophies < 1300) starPoints = starPoints + 300
		if (brawler.trophies >= 1300 && brawler.trophies < 1350) starPoints = starPoints + 310
		if (brawler.trophies >= 1350 && brawler.trophies < 1400) starPoints = starPoints + 320
		if (brawler.trophies >= 1400 && brawler.trophies < 1450) starPoints = starPoints + 330
		if (brawler.trophies >= 1450 && brawler.trophies < 1500) starPoints = starPoints + 340
		if (brawler.trophies >= 1500) starPoints = starPoints + 350
	})

	return starPoints
}

export function remainingTrophies(brawlers: Brawler[]): number {
	let remainingTrophies = 0

	brawlers.forEach((brawler) => {
		if (brawler.trophies >= 501 && brawler.trophies < 525) { remainingTrophies = remainingTrophies + (brawler.trophies - 500) }
		if (brawler.trophies >= 525 && brawler.trophies < 550) { remainingTrophies = remainingTrophies + (brawler.trophies - 524) }
		if (brawler.trophies >= 550 && brawler.trophies < 575) { remainingTrophies = remainingTrophies + (brawler.trophies - 549) }
		if (brawler.trophies >= 575 && brawler.trophies < 600) { remainingTrophies = remainingTrophies + (brawler.trophies - 574) }
		if (brawler.trophies >= 600 && brawler.trophies < 625) { remainingTrophies = remainingTrophies + (brawler.trophies - 599) }
		if (brawler.trophies >= 625 && brawler.trophies < 650) { remainingTrophies = remainingTrophies + (brawler.trophies - 624) }
		if (brawler.trophies >= 650 && brawler.trophies < 675) { remainingTrophies = remainingTrophies + (brawler.trophies - 649) }
		if (brawler.trophies >= 675 && brawler.trophies < 700) { remainingTrophies = remainingTrophies + (brawler.trophies - 674) }
		if (brawler.trophies >= 700 && brawler.trophies < 725) { remainingTrophies = remainingTrophies + (brawler.trophies - 699) }
		if (brawler.trophies >= 725 && brawler.trophies < 750) { remainingTrophies = remainingTrophies + (brawler.trophies - 724) }
		if (brawler.trophies >= 750 && brawler.trophies < 775) { remainingTrophies = remainingTrophies + (brawler.trophies - 749) }
		if (brawler.trophies >= 775 && brawler.trophies < 800) { remainingTrophies = remainingTrophies + (brawler.trophies - 774) }
		if (brawler.trophies >= 800 && brawler.trophies < 825) { remainingTrophies = remainingTrophies + (brawler.trophies - 799) }
		if (brawler.trophies >= 825 && brawler.trophies < 850) { remainingTrophies = remainingTrophies + (brawler.trophies - 824) }
		if (brawler.trophies >= 850 && brawler.trophies < 875) { remainingTrophies = remainingTrophies + (brawler.trophies - 849) }
		if (brawler.trophies >= 875 && brawler.trophies < 900) { remainingTrophies = remainingTrophies + (brawler.trophies - 874) }
		if (brawler.trophies >= 900 && brawler.trophies < 925) { remainingTrophies = remainingTrophies + (brawler.trophies - 885) }
		if (brawler.trophies >= 925 && brawler.trophies < 950) { remainingTrophies = remainingTrophies + (brawler.trophies - 900) }
		if (brawler.trophies >= 950 && brawler.trophies < 975) { remainingTrophies = remainingTrophies + (brawler.trophies - 920) }
		if (brawler.trophies >= 975 && brawler.trophies < 1000) { remainingTrophies = remainingTrophies + (brawler.trophies - 940) }
		if (brawler.trophies >= 1000 && brawler.trophies < 1050) { remainingTrophies = remainingTrophies + (brawler.trophies - 960) }
		if (brawler.trophies >= 1050 && brawler.trophies < 1100) { remainingTrophies = remainingTrophies + (brawler.trophies - 980) }
		if (brawler.trophies >= 1100 && brawler.trophies < 1150) { remainingTrophies = remainingTrophies + (brawler.trophies - 1000) }
		if (brawler.trophies >= 1150 && brawler.trophies < 1200) { remainingTrophies = remainingTrophies + (brawler.trophies - 1020) }
		if (brawler.trophies >= 1200 && brawler.trophies < 1250) { remainingTrophies = remainingTrophies + (brawler.trophies - 1040) }
		if (brawler.trophies >= 1250 && brawler.trophies < 1300) { remainingTrophies = remainingTrophies + (brawler.trophies - 1060) }
		if (brawler.trophies >= 1300 && brawler.trophies < 1350) { remainingTrophies = remainingTrophies + (brawler.trophies - 1080) }
		if (brawler.trophies >= 1350 && brawler.trophies < 1400) { remainingTrophies = remainingTrophies + (brawler.trophies - 1100) }
		if (brawler.trophies >= 1400 && brawler.trophies < 1450) { remainingTrophies = remainingTrophies + (brawler.trophies - 1120) }
		if (brawler.trophies >= 1450 && brawler.trophies < 1500) { remainingTrophies = remainingTrophies + (brawler.trophies - 1140) }
		if (brawler.trophies >= 1500) { remainingTrophies = remainingTrophies + (brawler.trophies - 1150) }
	})

	return remainingTrophies
}
