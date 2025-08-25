<template>
  <section class="product">
    <b-container>
      <b-row>
        <b-col>
          <div class="text-title mb-5">Products</div>
          <b-tabs pills align="center" @activate-tab="tabChanged">
            <b-tab
              v-for="i in items"
              :key="i.title"
              :title="i.title"
              class="py-5"
            >
              <b-row style="justify-content: center;">
                <b-col
                  v-if="i.desc.length > 0"
                  sm="12"
                  lg="6"
                  class="mb-4 mb-lg-0 pr-0 pr-lg-4 text-justify"
                  >
                  <article class="text-justify">
                    <p v-html="i.desc"></p>
                  </article>
                </b-col
                >
                <b-col sm="12" lg="6" v-if="i.imgs && i.imgs.length > 0">
                  <b-carousel fade indicators class="custom-carousel">
                    <b-carousel-slide
                      v-for="img in i.imgs"
                      :key="img.path"
                      :caption="img.name"
                      :img-src="imgUrl(img.path)"
                      class="item carousel-image"
                    >
                    </b-carousel-slide>
                  </b-carousel>
                </b-col>
              </b-row>
              <b-row v-if="false">
                <b-tabs pills align="center">
                  <b-tab
                    v-for="k in i.children"
                    :key="k.title"
                    :title="k.title"
                    class="py-5"
                  >
                    <b-row>
                      <b-col
                        sm="12"
                        lg="6"
                        class="mb-4 mb-lg-0 pr-0 pr-lg-4 text-justify"
                        v-html="k.desc"
                        ></b-col
                      >
                      <b-col sm="12" lg="6">
                        <b-carousel fade indicators class="custom-carousel">
                          <b-carousel-slide
                            v-for="img in k.imgs"
                            :key="img.path"
                            :caption="img.name"
                            :img-src="imgUrl(img.path)"
                            class="item carousel-image"
                          >
                          </b-carousel-slide>
                        </b-carousel>
                      </b-col>
                    </b-row>
                  </b-tab>
                </b-tabs>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
const images = require.context("@/assets/img/products/", true);

export default {
  props: ["items"],
  methods: {
    imgUrl(path) {
      return images(path);
    },

    tabChanged(tab) {
      this.$emit("tab-changed", tab);
    },
  },
};
</script>

<style lang="scss">
section.product {
  .custom-carousel {
    .item {
      .carousel-caption {
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        padding-bottom: 3rem;
        padding-top: 1rem;
      }
    }
  }
}

.carousel-image {
  max-height: 200px;
}

.carousel-image img {
  max-height: 200px;
  object-fit: contain;
}
</style>
