<template>
  <div>
    <label class="btn btn-primary">
      Upload <input type="file" hidden @change="upload($event.target.files)" />
    </label>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/fileUpload'
export default {
  name: "ImageUpload",
  emits: ["uploaded"],
  setup(props, context) {
    if (files === null) return;
    const formData = new FormData();
    formData.append("image", files[0]);
    // const upload = async (files: FileList | null) => {
    //   if (files === null) return;
    //   // const file = files.item(0);
    //   const formData = new FormData();
    //   formData.append("image", files[0]);
    //   const { data } = await axios.post("upload", formData);
    //   context.emit("uploaded", data.url);
    // };

    // upload = this.$store.dispatch(actionTypes.uploadFile, formData);
    // return upload ;
  },
  methods: {
    upload(formData) {
      this.$store
       .dispatch(actionTypes.uploadImage, formData)
       .then((response) => {
          console.log('Successfully uploaded image', response)
          this.image = response.data.file
        })
       .catch((error) => {
          console.error('Error uploading image', error)
        })
    }
  }
};
</script>
