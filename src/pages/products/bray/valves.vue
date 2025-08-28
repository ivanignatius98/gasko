<template>
  <Layout class="bray">
    <section class="banner">
      <b-container>
        <div class="text-center">
          <g-image
            src="~/assets/img/bray-logo.svg"
            alt="Logo"
            immediate
          />
        </div>
        <div class="title">Bray Valves</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <ProductSection :items="items" @tab-changed="tabChanged" />

  </Layout>
</template>

<script>
import ProductSection from "@/components/products/ProductSection.vue";

export default {
  metaInfo: {
    title: "Bray Valves",
    meta: [
      {
        name: 'description',
        content: "We provide Bray Valves that includes Resilient Seated, Double Offset, and Triple Offset Butterfly Valves."
      }
    ]
  },
  components: {
    ProductSection,
  },
  data() {
    return {
      index: 0,
      items: [
        {
          title: "Series 20/21 Resilient Seated Butterfly Valve",
          desc: "The Bray Series 20/21 is a high-performance, resilient seated butterfly valve with a unique tongue and groove seat design.",
          imgs: [],
          children: []
        },
        {
          title: "Series 22/23 Resilient Seated Butterfly Valve",
          desc: "The Bray Series 22/23 is a wafer or lug style, resilient seated butterfly valve designed for a wide range of applications.",
          imgs: [],
          children: []
        },
        {
          title: "Series 30/31 Resilient Seated Butterfly Valve",
          desc: "The Bray Series 30/31 is a rugged and reliable resilient seated butterfly valve, ideal for industrial and commercial applications.",
          imgs: [],
          children: []
        },
      ],
    };
  },

  methods: {
    tabChanged(tab) {
      this.index = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout.bray {
  section.banner {
    padding-top: 15rem;
    padding-bottom: 15rem;
    margin-bottom: 5rem;
    background: linear-gradient(
        to bottom,
        rgba(#fff, 1),
        rgba(#fff, 0.9),
        rgba(#fff, 0.85)
      ),
      url("~@/assets/img/industry-1.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);

    .title {
      font-size: 5rem;
      font-weight: 700;
      text-align: center;
      color: var(--primary);
    }

    .separator {
      margin: auto;
    }
  }
}
</style>