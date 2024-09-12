<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="publish">
            <fieldset :disabled="isSubmitting">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="title"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="description"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="body"
                  placeholder="Write your article (in markdown)"
                >
                </textarea>
              </fieldset>
              <!-- ///-----------------------------------------------//
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagInput"
                  @keypress.enter.prevent="addTag(tagInput)"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) of article.tagList"
                    :key="tag + index"
                  >
                    <ion-icon
                      name="close-circle-outline"
                      @click="removeTag(tag)"
                    >
                    </ion-icon>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              ///-----------------------------------------------// -->
            </fieldset>
            <button
              :disabled="isSubmitting"
              class="btn btn-lg pull-xs-right btn-primary"
              type="submit"
            >
              Publish Article
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {actionTypes} from '@/store/modules/article'
import {useStore} from 'vuex'

const store = useStore()

const title = ref('')
const description = ref('')
const body = ref('')

const isSubmitting = computed(() => store.state.article.isSubmitting)

const publish = () => {
  store
    .dispatch(actionTypes.createArticle, {
      title: title.value,
      description: description.value,
      body: body.value,
    })
    .then((article) => {
      console.log('successfully create article', article)
      // router.push({name: 'globalFeed'})
    }).catch((error) => {
      console.error('Failed to create article', error)

    })
}
</script>

<style lang="scss" scoped></style>
