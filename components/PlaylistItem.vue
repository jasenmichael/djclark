<template>
  <div class="flex border-2 border-gray-600 rounded-sm w-full my-1 py-2 px-1">
    <!-- <pre>{{ item }}</pre> -->
    <div class="flex flex-col w-full">
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
    <!-- <pre>{{ thumb }}</pre> -->
    <!-- <div class="w-10 h-10 bg-red-500">
      <img src="" alt="" />
    </div> -->
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
    thumb: {
      type: String,
      default: () => {
        return null
      },
    },
  },
  data: () => {
    return {
      spotifySearch: 'https://open.spotify.com/search/', // A%20Night%20In%20Tunisia%20Snowboy%20%26%20The%20Latin%20Section
      youtubeSearch: 'https://www.youtube.com/results?search_query=', // samsies as above
    }
  },
}
</script>
