<template>
  <section class="doc">
    <b-container>
      <b-row>
        <b-col>
          <div class="text-subtitle text-left mb-5 font-weight-bold">
            Download PDF File Here:
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="doc in docs[index]"
          :key="doc.name"
          class="mb-4 text-center"
        >
          <a
            :href="docUrl(doc.path)"
            target="_blank"
            norel
            noreferer
            class="btn btn-outline-secondary"
          >
            {{ doc.name }}
          </a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ["docs", "index"],
  methods: {
    docUrl(path) {
      return "/doc/products/" + path;
    },
  },
};
</script>

<style lang="scss" scoped>
section.doc {
  padding-bottom: 5rem;
}
</style>
