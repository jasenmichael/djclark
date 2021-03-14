<template>
  <div>
    <!-- <pre>
      {{ playlist }}
    </pre> -->
    <div v-for="(item, i) in playlist" :key="i">
      <PlaylistItem :item="item" />
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
  },
}
</script>
