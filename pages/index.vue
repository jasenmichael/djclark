<template>
  <div class="w-full max-w-6xl flex flex-col mx-auto pt-2">
    <div class="flex mx-auto" style="max-height: 50vh">
      <img
        src="/dj-clarky.jpeg"
        alt="Dj Clark Orwick"
        class="mx-auto object-contain md:rounded-md"
      />
    </div>
    <div class="p-2 sm:p-6">
      <h1 class="text-2xl">DJ Clark Orwick</h1>
      <h2 class="text-xl">Playlists:</h2>
      <!-- <ul>
        <li v-for="(pl, i) in playlistFiles.sort()" :key="i">
          <a :href="pl" class="text-yellow-100">
            {{ pl.replace('/clark/', '').replace('.m3u', '') }}
          </a>
        </li>
      </ul> -->
      <hr class="w-full py-2 border-gray-700 mx-auto" />
      <!-- <pre>showing: {{ playlists }}</pre> -->
      <div v-for="(playlistTitle, i) in Object.keys(playlists)" :key="i">
        <div>
          <div class="flex py-1">
            <div
              class="flex items-center text-center border-gray-700 mb-1 pl-1 border-2 rounded-md cursor-pointer text-base md:text-lg font-bold w-1/2"
              @click.prevent="
                showingPlaylist === playlistTitle
                  ? (showingPlaylist = null)
                  : (showingPlaylist = playlistTitle)
              "
            >
              <h3 class="mr-1">
                {{ playlistTitle }}
              </h3>
              <div
                v-if="showingPlaylist === playlistTitle"
                class="ml-auto mr-1 text-sm items-center transform rotate-90"
              >
                >
              </div>
              <div v-else class="ml-auto mr-1 text-sm items-center">></div>
            </div>
            <a
              :href="playlistFiles[playlistTitle]"
              class="ml-auto pr-1 md:pr-2 text-gray-600 text-xs cursor-pointer"
            >
              download {{ playlistTitle }}.m3u
            </a>
          </div>
        </div>
        <div v-if="showingPlaylist === playlistTitle">
          <!-- <pre>{{ artistThumbs }}</pre> -->
          <Playlist
            :playlist="selectedPlaylist"
            :artist-thumbs="artistThumbs"
          />
        </div>
        <!-- <hr class="w-full py-2 mt-2 border-gray-700 mx-auto" /> -->
      </div>
      <!-- class="totop ml-auto rounded-full bg-black z-50 border-black items-center border-2 h-8 w-8 flex pl-2" -->
      <div
        v-if="showingPlaylist"
        class="totop flex rounded-full z-50 text-center ml-auto shadow-sm border-black bg-gray-700 pl-3 pt-1 hover:bg-gray-600 h-10 w-10 pb-2 items-center"
        @click="scrollToTop()"
      >
        &#8593;
      </div>
      <!-- <pre>{{ playlist }}</pre> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    // const isDev = false
    const playlistsUrl = $config.isDev
      ? 'http://localhost:3000/playlistData.json'
      : 'https://djclark.netlify.app/playlistData.json'
    // const artistThumbsUrl = 'https://djclark.netlify.app/artistThumbs.json'
    const playlists = await $axios.$get(playlistsUrl)
    // const artistThumbs = await $axios.$get(artistThumbsUrl)
    // require('static/playlistData.json') // .then(res => res.json())
    // return { playlists, artistThumbs }
    return { playlists }
  },
  data: () => {
    return {
      showingPlaylist: null,
      playlistFiles: {
        DANCE: '/clark/Dance.m3u',
        FULLTILT: '/clark/FullTilt.m3u',
        NEWFAVS: '/clark/NewFavs.m3u',
        SEX: '/clark/Sex.m3u',
        SLOWBALL: '/clark/SlowBoil.m3u',
        SLOWDANCE: '/clark/SlowDance.m3u',
        TONIGHT: '/clark/Tonight.m3u',
      },
    }
  },
  computed: {
    selectedPlaylist() {
      return this.playlists[this.showingPlaylist]
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
.totop {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  font-size: 18px; /* Increase font size */
}
</style>
