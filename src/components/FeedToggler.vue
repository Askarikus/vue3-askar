<template>
  <div class="feed-toggler">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <router-link
        v-if="isLoggedIn"
        :to="{ name:'yourFeed'}"
        class="nav-link"
        >
        YourFeed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
        :to="{ name:'globalFeed'}"
        class="nav-link"
        >
        GlobalFeed
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { getterTypes } from '@/store/modules/auth'

const store = useStore()

const isLoggedIn = computed(() => store.getters[getterTypes.isLoggedIn])
</script>

<style lang="scss" scoped></style>
