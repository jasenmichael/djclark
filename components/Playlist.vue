<template>
  <div>
    <!-- <pre>
      {{ playlist }}
    </pre> -->
    <!-- <pre>{{ artistThumbs }}</pre> -->
    <div v-for="(item, i) in playlist" :key="i">
      <PlaylistItem :item="item" :thumb="artistThumbs[item.artist]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Array,
      default: () => {
        return []
      },
    },
    artistThumbs: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
