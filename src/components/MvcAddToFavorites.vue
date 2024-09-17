<template>
  <div>
    <button
      class="pull-xs-right"
      @click="toggleFavorite"
      :class="{
        btn:true,
        'btn-sm': true,
        'btn-primary': isFavor,
        'btn-outline-primary': !isFavor,
      }"
      :disabled="isLoggedIn ? false : true"
    >
      <ion-icon name="heart"></ion-icon>
      <span class="counter"> {{ counter }} </span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {actionTypes} from '@/store/modules/articleAddToFavorites'
import {defineProps} from 'vue'
import {useStore} from 'vuex'
import { getterTypes } from '@/store/modules/auth'
const store = useStore()

const props = defineProps({
  articleSlug: {
    type: String,
    required: true,
  },
  isFavorited: {
    type: Boolean,
    required: false,
    default: false,
  },
  count: {
    type: Number,
    required: false,
    default: 0,
  },
})
const counter = ref(props.count)
const isFavor = ref(props.isFavorited)
const isLoggedIn = computed(() => store.getters[getterTypes.isLoggedIn])

const toggleFavorite = () => {
  store.dispatch(actionTypes.favoriteArticle, {slug: props.articleSlug, isFavorited:isFavor.value})
  if(isFavor.value) {
    counter.value--
  } else {
    counter.value++
  }
  isFavor.value = !isFavor.value
}
</script>

<style lang="scss" scoped></style>
