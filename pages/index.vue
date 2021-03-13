<template>
  <div>
    <div>
      <img src="/dj-clarky.jpeg" alt="Dj Clark Orwick" />
    </div>
    <h1 class="text-2xl">DJ Clark Orwick</h1>
    <h2 class="text-xl">Playlists:</h2>
    <ul>
      <li v-for="(pl, i) in playlists" :key="i">
        <a :href="pl" class="text-yellow-100">
          {{ pl.replace('/clark/', '').replace('.m3u', '') }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playlists: [
        '/clark/Dance.m3u',
        '/clark/NewFavs.m3u',
        '/clark/Sex.m3u',
        '/clark/SlowBoil.m3u',
        '/clark/SlowDance.m3u',
        '/clark/Tonight.m3u',
      ],
    }
  },
}
</script>
