<template>
  <span class="my-text"></span>
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
