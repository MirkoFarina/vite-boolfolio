    <script>
export default {
  name: "ProjectCard",
  props: {
    cardTitle: String,
    cardClient: String,
    cardDescription: String,
    cardTechnologies: Object,
    cardType: Object
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
      <ul v-if="cardTechnologies.length > 0">
        <li v-for="(technlogy, key) in cardTechnologies" :key="key">
            {{ technlogy.name }}
        </li>
      </ul>
      <div v-if="cardType">
        <h5>
            Tipo
        </h5>
        <p>
            {{ cardType.name  }}
        </p>
    </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>