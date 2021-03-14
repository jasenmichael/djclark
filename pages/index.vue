<template>
  <div class="max-w-6xl flex flex-col mx-auto">
    <div class="flex mx-auto" style="max-height: 60vh">
      <img src="/dj-clarky.jpeg" alt="Dj Clark Orwick" class="object-contain" />
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
              class="cursor-pointer text-lg font-bold w-1/2"
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
              download playlist file {{ playlistTitle }}.m3u
            </a>
          </div>
        </div>
        <div v-if="showingPlaylist === playlistTitle">
          <Playlist :playlist="selectedPlaylist" />
        </div>
        <hr class="w-full py-2 mt-2 border-gray-700 mx-auto" />
      </div>
      <!-- <pre>{{ playlist }}</pre> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const isDev = false
    const url = isDev
      ? 'http://localhost:3000/playlistData.json'
      : 'https://djclark.netlify.app/playlistData.json'
    const playlists = await $axios.$get(url)
    // require('static/playlistData.json') // .then(res => res.json())
    return { playlists }
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
}
</script>
