import type { Brawler } from '../interfaces/Brawler'

export function seasonBlings(brawlers: Brawler[]): number {
	let blings = 0

	const filteredBrawlers = brawlers.filter((brawler) => brawler.trophies > 500).sort((a, b) => b.trophies - a.trophies)
.slice(0, 10)

	filteredBrawlers.forEach((brawler) => {
		const { trophies } = brawler

		if (trophies >= 501 && trophies <= 524) {
			blings += 4
		} else if (trophies <= 549) {
			blings += 6
		} else if (trophies <= 574) {
			blings += 8
		} else if (trophies <= 599) {
			blings += 10
		} else if (trophies <= 624) {
			blings += 12
		} else if (trophies <= 649) {
			blings += 14
		} else if (trophies <= 674) {
			blings += 16
		} else if (trophies <= 699) {
			blings += 18
		} else if (trophies <= 724) {
			blings += 20
		} else if (trophies <= 749) {
			blings += 22
		} else if (trophies <= 774) {
			blings += 24
		} else if (trophies <= 799) {
			blings += 26
		} else if (trophies <= 824) {
			blings += 28
		} else if (trophies <= 849) {
			blings += 30
		} else if (trophies <= 874) {
			blings += 32
		} else if (trophies <= 899) {
			blings += 34
		} else if (trophies <= 924) {
			blings += 36
		} else if (trophies <= 949) {
			blings += 38
		} else if (trophies <= 974) {
			blings += 40
		} else if (trophies <= 999) {
			blings += 42
		} else if (trophies <= 1049) {
			blings += 44
		} else if (trophies <= 1099) {
			blings += 46
		} else if (trophies <= 1149) {
			blings += 48
		} else if (trophies <= 1199) {
			blings += 50
		} else if (trophies <= 1249) {
			blings += 52
		} else if (trophies <= 1299) {
			blings += 54
		} else if (trophies <= 1349) {
			blings += 56
		} else if (trophies <= 1399) {
			blings += 58
		} else if (trophies <= 1449) {
			blings += 60
		} else if (trophies <= 1499) {
			blings += 62
		} else if (trophies >= 1500) {
			blings += 64
		}
	})


	return blings
}

export function remainingTrophies(brawlers: Brawler[], totalTrophies: number): number {
	let removedTrophies = 0

	const filteredBrawlers = brawlers.filter((brawler) => brawler.trophies > 500).sort((a, b) => b.trophies - a.trophies)
.slice(0, 10)

	filteredBrawlers.forEach((brawler) => {
		const { trophies } = brawler

		if (trophies >= 501 && trophies < 525) {
			removedTrophies += trophies - 500
		} else if (trophies >= 525 && trophies < 550) {
			removedTrophies += trophies - 524
		} else if (trophies >= 550 && trophies < 575) {
			removedTrophies += trophies - 549
		} else if (trophies >= 575 && trophies < 600) {
			removedTrophies += trophies - 574
		} else if (trophies >= 600 && trophies < 625) {
			removedTrophies += trophies - 599
		} else if (trophies >= 625 && trophies < 650) {
			removedTrophies += trophies - 624
		} else if (trophies >= 650 && trophies < 675) {
			removedTrophies += trophies - 649
		} else if (trophies >= 675 && trophies < 700) {
			removedTrophies += trophies - 674
		} else if (trophies >= 700 && trophies < 725) {
			removedTrophies += trophies - 699
		} else if (trophies >= 725 && trophies < 750) {
			removedTrophies += trophies - 724
		} else if (trophies >= 750 && trophies < 775) {
			removedTrophies += trophies - 749
		} else if (trophies >= 775 && trophies < 800) {
			removedTrophies += trophies - 774
		} else if (trophies >= 800 && trophies < 825) {
			removedTrophies += trophies - 799
		} else if (trophies >= 825 && trophies < 850) {
			removedTrophies += trophies - 824
		} else if (trophies >= 850 && trophies < 875) {
			removedTrophies += trophies - 849
		} else if (trophies >= 875 && trophies < 900) {
			removedTrophies += trophies - 874
		} else if (trophies >= 900 && trophies < 925) {
			removedTrophies += trophies - 899
		} else if (trophies >= 925 && trophies < 950) {
			removedTrophies += trophies - 924
		} else if (trophies >= 950 && trophies < 975) {
			removedTrophies += trophies - 949
		} else if (trophies >= 975 && trophies < 1000) {
			removedTrophies += trophies - 974
		} else if (trophies >= 1000 && trophies < 1050) {
			removedTrophies += trophies - 999
		} else if (trophies >= 1050 && trophies < 1100) {
			removedTrophies += trophies - 1049
		} else if (trophies >= 1100 && trophies < 1150) {
			removedTrophies += trophies - 1099
		} else if (trophies >= 1150 && trophies < 1200) {
			removedTrophies += trophies - 1149
		} else if (trophies >= 1200 && trophies < 1250) {
			removedTrophies += trophies - 1199
		} else if (trophies >= 1250 && trophies < 1300) {
			removedTrophies += trophies - 1249
		} else if (trophies >= 1300 && trophies < 1350) {
			removedTrophies += trophies - 1299
		} else if (trophies >= 1350 && trophies < 1400) {
			removedTrophies += trophies - 1349
		} else if (trophies >= 1400 && trophies < 1450) {
			removedTrophies += trophies - 1399
		} else if (trophies >= 1450 && trophies < 1500) {
			removedTrophies += trophies - 1449
		} else if (trophies >= 1500) {
			removedTrophies += trophies - 1499
		}
	})

	return totalTrophies - removedTrophies
}
