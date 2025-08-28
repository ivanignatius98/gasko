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
        <div class="title">Bray Actuators</div>
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
    title: "Bray Actuators",
    meta: [
      {
        name: 'description',
        content: "We provide Bray Actuators that includes Pneumatic and Electric Actuators."
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
          title: "Series 92/93 Pneumatic Actuator",
          desc: "The Bray Series 92/93 is a rack and pinion pneumatic actuator that is compact, lightweight and ideal for quarter-turn applications.",
          imgs: [],
          children: []
        },
        {
          title: "Series 98 Pneumatic Actuator",
          desc: "The Bray Series 98 is a scotch yoke pneumatic actuator designed for high-torque applications.",
          imgs: [],
          children: []
        },
        {
          title: "Series 70 Electric Actuator",
          desc: "The Bray Series 70 is a compact, intelligent electric actuator for precise and reliable valve control.",
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