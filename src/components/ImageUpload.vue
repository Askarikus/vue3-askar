<template>
  <div>
    <label class="btn btn-primary">
      Upload <input type="file" hidden @change="upload($event.target.files)" />
    </label>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { actionTypes } from '@/store/modules/fileUpload'

const store = useStore()

const upload = (files) => {
  if (files === null) return
  const formData = new FormData()
  formData.append("image", files[0])

  store
    .dispatch(actionTypes.uploadImage, formData)
    .then((response) => {
      console.log('Successfully uploaded image', response)
      // Emit the uploaded event with the image URL
      context.emit('uploaded', response.data.file)
    })
    .catch((error) => {
      console.error('Error uploading image', error)
    })
}
</script>
