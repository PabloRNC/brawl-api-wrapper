# BRAWL API WRAPPER

<p>Brawl API Wrapper is a powerful module to interact with the brawl stars API</p>

<h1>INSTALATION</h1>

```diff
npm i brawl-api-wrapper
```

<h1>FIRST STEPS</h1>

First of all you have to get a <a href="https://developer.brawlstars.com/#/account" target="_blank">brawl stars API key</a>

```js
const { Client } = require('brawl-api-wrapper')
const client = new Client('YOUR API KEY GOES HERE')
```

Or if you're using ES6 import:

```js
import { Client } from 'brawl-api-wrapper'
const client = new Client('YOUR API KEY GOES HERE')
```

<h1>GET PLAYER</h1>

This method return a player object, we only have to provide the player's tag

```js
const player = await client.getPlayer('PLAYER TAG GOES HERE', true) //the second param is to select if you want the battlelog to show or not. The default is false

console.log(player.name) // return the player username

//NOTE: Requesting the battlelog might get a 500 error by the Brawl Stars Api.
```

<h1>GET PLAYER'S BATTLELOG</h1>

This method returns a player battlelog, we have to provide the player's tag

```js
const battlelog = await client.getBattleLog('PLAYER TAG GOES HERE')
```

Or you can access to a Player property called battlelog

```js
const player = await client.getPlayer('PLAYER TAG GOES HERE')
console.log(player.battlelog) // return the player battlelog
```

<h1>GET CLUB</h1>

This method return a club, we have only to provide the club's tag

```js
const club = await client.getClub('CLUB TAG GOES HERE')
console.log(club.memberCount) // return the number of members of the club
```

<h1>GET BRAWLER</h1>

To get a brawler you have to pass the brawlerId that this module provides to you in form of an enum

```js
const { Brawlers } = require('brawl-api-wrapper')
const brawler = await client.getBrawler(Brawlers.Amber)
console.log(brawler.gadgets) // return the gadgets in form of an array
```

<h1>GET ALL BRAWLERS</h1>

This method return all the brawlers in form of an array

```js
const brawlers = await client.getBrawlers()
console.log(brawlers) // return an array of all the brawlers
```

<h1>GET RANKINGS</h1>

<h3>GET RANKING OF PLAYERS TROPHIES</h3>

This method returns the 200 players with more trophies of a country.

```js
const topPlayers = await client.getRankingOfPlayers('es') // return the top 200 players with more trophies of Spain, by default return the global top.
console.log(topPlayers)
```

<h3>GET RANKING OF CLUBS</h3>

This method return the 200 clubs with more trophies of a country

```js
const topClubs = await client.getRankingOfClubs('es') // return the top 200 clubs with more trophies of Spain, by default return the global top.
console.log(topClubs)
```

<h3>GET RANKING OF BRAWLERS</h3>

This method return the 200 players with more trophies of a country.You have to pass the brawlerId in the method so we import the Brawlers enum

```js
const { Brawlers } = require('brawl-api-wrapper')
const topBrawlers = await client.getRankingOfBrawlers(Brawlers.Amber, 'es') // return the top 200 players with more trophies with Amber of Spain, by default is the global top
```

<h1>GET EVENT ROTATION</h1>

This method return the event rotation of the game

```js
const events = await client.getEvents()
console.log(event) // return an array of events
```

<h1>BUGS</h1>

If you find a bug create an issue in the <a href="https://github.com/PabloRNC/brawl-api-wrapper" target="_blank">official repository</a>
