/* eslint-disable no-console */
const fs = require('fs')
const M3U8FileParser = require('m3u8-file-parser')
const albumArt = require('album-art')

const playlists = [
  '/clark/Dance.m3u',
  '/clark/NewFavs.m3u',
  '/clark/Sex.m3u',
  '/clark/SlowBoil.m3u',
  '/clark/SlowDance.m3u',
  '/clark/Tonight.m3u',
]
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-const
let playlistData = []
async function init() {
  await Promise.resolve(
    playlists.forEach((pl) => {
      const data = fs.readFileSync('static/' + pl, { encoding: 'utf-8' })
      const reader = new M3U8FileParser()
      reader.read(data)
      const result = reader.getResult().segments
      reader.reset()
      // console.log(result)
      Promise.resolve(
        result.forEach((item) => {
          // console.log(item)
          playlistData.push(item)
        })
      )
      // console.log('DONE====')
    })
  )

  const finalData = await Promise.all(
    playlistData
      .filter((item) => item.inf)
      .map((data) => {
        const artist = data.inf.title.split(' - ')[0] || null
        const rating = data.inf.title.split(' ').pop().replace(/\D/g, '')
        return {
          duration: data.inf.duration,
          artist,
          title:
            data.inf.title
              // .substring(0, data.inf.title.split(' - ')[1].lastIndexOf(' '))
              .replace('*', '')
              .replace(rating, '')
              .trim()
              .split(' - ')[1] || data.inf.title.split(' - ')[1],
          clarks_rating: parseInt(rating),
          playlist: data.url.split('-djdb')[0],
          url: data.url.split('/')[1],
          // artistThumb: albumArt || null,
        }
      })
  )
  const finalFinalData = {}
  const artistThumbs = {}

  finalData.forEach((song) => {
    finalFinalData[song.playlist] = finalFinalData[song.playlist] || []
    finalFinalData[song.playlist].push(song)

    albumArt(song.artist, (error, response) => {
      if (!error) {
        console.log(response)
        artistThumbs[song.artist] = response
        return response
      } else {
        return null
      }
    }).catch(() => {
      return null
    })
  })

  // console.log(finalFinalData.length)
  const json = JSON.stringify(finalFinalData, null, 2)

  fs.writeFileSync('static/playlistData.json', json)

  const artistThumbsJson = JSON.stringify(artistThumbs, null, 2)

  fs.writeFileSync('static/artistThumbs.json', artistThumbsJson)
}

init()
