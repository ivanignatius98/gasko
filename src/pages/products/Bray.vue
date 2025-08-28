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
        <div class="title">Bray Products</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <OverviewSection :overview="overview" />

    <ProductSection :items="items" @tab-changed="tabChanged" />

  </Layout>
</template>

<script>
import OverviewSection from "@/components/products/OverviewSection.vue";
import ProductSection from "@/components/products/ProductSection.vue";

export default {
  metaInfo: {
    title: "Bray Products",
  },
  components: {
    OverviewSection,
    ProductSection,
  },
  data() {
    return {
      index: 0,
      overview:
        "Bray International, Inc. is a global leader in providing innovative, high-quality flow control solutions to a wide variety of industries. Our products are known for their reliability, durability, and superior performance.",
      items: [
        {
          title: "Valves",
          desc: "Bray offers a complete line of butterfly, ball, and knife gate valves to meet the demands of today's flow control industry.",
          imgs: [],
          children: []
        },
        {
          title: "Activators",
          desc: "Bray's pneumatic and electric actuators are designed for reliable and efficient valve automation.",
          imgs: [],
          children: []
        },
        {
          title: "Accessories",
          desc: "Bray offers a full range of accessories to complement our valve and actuator lines, including positioners, solenoid valves, and limit switches.",
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
      font-weight: .700;
      text-align: center;
      color: var(--primary);
    }

    .separator {
      margin: auto;
    }
  }
}
</style>
