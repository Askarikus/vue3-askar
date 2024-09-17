<template>
  <div class="feed-toggler">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <router-link
        v-if="isLoggedIn"
        :to="{ name:'yourFeed'}"
        class="nav-link"
        :class="{ active: route.name === 'yourFeed' }"
        >
        YourFeed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
        :to="{ name:'globalFeed'}"
        class="nav-link"
        :class="{ active: route.name === 'GlobalFeed' }"
        >
        GlobalFeed
        </router-link>
      </li>
      <li class="nav-item" v-if="tagName">
        <router-link
        :to="{ name:'tagFeed'}"
        class="nav-link"
        :class="{ active: route.name === 'tagFeed' }"
        >
        #{{ tagName }}
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import { getterTypes } from '@/store/modules/auth'

const store = useStore()
const router = useRouter()
const route = router.currentRoute

const tagName = router.currentRoute.value.params.slug

const isLoggedIn = computed(() => store.getters[getterTypes.isLoggedIn])
</script>

<style lang="scss" scoped></style>
