<template>
  <div>
    <!-- <pre>{{ item }}</pre> -->
    <div
      class="flex flex-col border-2 border-gray-600 rounded-sm w-full my-2 py-2 px-1"
    >
      <div>
        <span class="text-gray-500 font-bold"> Title: </span>
        <span class="font-light text-xl text-white">{{ item.title }}</span>
      </div>
      <div>
        <span class="text-gray-500 font-bold"> Artist: </span>
        <span class="font-light text-white">{{
          item.artist.includes('�') ? 'unknown' : item.artist
        }}</span>
      </div>
      <!-- <div>
        Artist:
        <span class="font-bold">
          {{ item.artist.includes('�') ? 'unknown' : item.artist }}
        </span>
      </div> -->
      <div>
        <span class="text-gray-500 font-bold"> Clark's Rating: </span>
        <span class="font-light text-white">{{ item.clarks_rating }}</span>
      </div>
      <!-- <div>
        <span class="font-bold">Clark's Rating:: </span>{{ item.clarks_rating }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
