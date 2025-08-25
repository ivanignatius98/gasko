<template>
  <section class="overview">
    <b-container>
      <b-row>
        <b-col>
          <div class="title text-title mb-5">Overview</div>
          <p class="text-center">
            {{ overview }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ["overview"],
};
</script>

<style lang="scss" scoped>
section.overview {
  margin-bottom: 5rem;
}
</style>