<template>
  <span class="my-text" v-text="text"></span>
</template>

<script>
export default {
  name: 'my-text',

  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
