<template>
  <Layout class="nippon">
    <section class="banner">
      <b-container>
        <div class="text-center">
          <g-image
            src="~/assets/img/createc-logo.svg"
            alt="Logo"
            immediate
            width="300"
            height="300"
          />
        </div>
        <div class="title">Createc Pump Bearing</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <ProductSection :items="items" @tab-changed="tabChanged" />
  </Layout>
</template>

<script>
import OverviewSection from "@/components/products/OverviewSection.vue";
import ProductSection from "@/components/products/ProductSection.vue";
import DocSection from "@/components/products/DocSection.vue";

export default {
  metaInfo: {
    title: "Createc Pumb Bearing",
    meta: [
      {
        name: 'description',
        content: "We provide Createc Pump Bearing that includes Crealite (Salt water and High Temp) and Creacomp (PEEK/CF Composites)."
      }
    ]
  },
  components: {
    OverviewSection,
    ProductSection,
    DocSection,
  },
  data() {
    return {
      index: 0,
      items: [
        {
          title: "Crealite (Salt water and High Temp)",
          desc: "Crealite (Salt water and High Temp) stands for the highest material demands: extremely resistant due salt water resistance and enormous impact and shock resistance. Thanks to the same coeffcient of thermal expansion of stainless steel Crealite (Salt water and High Temp) pumping solutions are universally applicable.",
          imgs: [
            { name: "Crealite (Salt water and High Temp)", path: "./createc/c-cl-1.png" },
          ],
          children: []
        },
        {
          title: "Creacomp (PEEK/CF Composites)",
          desc: "Creacomp (PEEK/CF Composites) are the ideal material for any pump application: PEEK material has excellent tribological, mechanical and damping properties and is wear and corrosion resistant.",
          imgs: [
            { name: "Creacomp (PEEK/CF Composites)", path: "./createc/c-cl-2.jpg" },

          ],
          children: []
        },
      ],
      docs: [],
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
.layout.nippon {
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
      url("~@/assets/img/industry-2.jpg");
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
