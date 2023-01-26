    <script>
export default {
  name: "ProjectCard",
  props: {
    cardTitle: String,
    cardClient: String,
    cardDescription: String,
  },
};
</script>

<template>
  <div class="project-card">
    <div class="top">
      <h1>
        {{ cardTitle }}
      </h1>
      <h3>Commisionato da: {{ cardClient }}</h3>
    </div>
    <div class="bottom">
      <p>
        {{ cardDescription }}
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>