<template>
  <div class="max-w-6xl flex flex-col mx-auto pt-2">
    <div class="flex mx-auto rounded-md" style="max-height: 50vh">
      <img
        src="/dj-clarky.jpeg"
        alt="Dj Clark Orwick"
        class="mx-auto object-contain rounded-md"
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
          <div class="flex">
            <h3
              class="cursor-pointer text-lg font-bold md:1/3 lg:w-1/2"
              @click.prevent="
                showingPlaylist === playlistTitle
                  ? (showingPlaylist = null)
                  : (showingPlaylist = playlistTitle)
              "
            >
              {{ playlistTitle }}
              <span
                v-if="showingPlaylist === playlistTitle"
                class="ml-6 items-center"
                >^</span
              >
            </h3>
            <a
              :href="playlistFiles[playlistTitle]"
              class="ml-auto pr-2 text-gray-600 text-sm cursor-pointer"
            >
              download playlist {{ playlistTitle }}.m3u
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
        <hr class="w-full py-2 mt-2 border-gray-700 mx-auto" />
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
  async asyncData({ $axios }) {
    const isDev = false
    const playlistsUrl = isDev
      ? 'http://localhost:3000/playlistData.json'
      : 'https://djclark.netlify.app/playlistData.json'
    const artistThumbsUrl = 'http://localhost:3000/artistThumbs.json'
    // : 'https://djclark.netlify.app/artistThumbs.json'
    const playlists = await $axios.$get(playlistsUrl)
    const artistThumbs = await $axios.$get(artistThumbsUrl)
    // require('static/playlistData.json') // .then(res => res.json())
    return { playlists, artistThumbs }
  },
  data: () => {
    return {
      showingPlaylist: null,
      playlistFiles: {
        DANCE: '/clark/Dance.m3u',
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
