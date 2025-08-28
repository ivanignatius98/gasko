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
        <div class="title">Bray Accessories</div>
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
    title: "Bray Accessories",
    meta: [
      {
        name: 'description',
        content: "We provide Bray Accessories that includes Positioners, Solenoid Valves, and Limit Switches."
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
          title: "Series 6A Positioner",
          desc: "The Bray Series 6A is a digital positioner that provides accurate and reliable valve positioning.",
          imgs: [],
          children: []
        },
        {
          title: "Series 50 Solenoid Valve",
          desc: "The Bray Series 50 is a direct-acting solenoid valve designed for dependable on/off service.",
          imgs: [],
          children: []
        },
        {
          title: "Series 54 Limit Switch",
          desc: "The Bray Series 54 is a compact and rugged limit switch that provides discrete feedback on valve position.",
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