<template>
  <Layout class="nippon">
    <section class="banner">
      <b-container>
        <div class="text-center">
          <g-image
            src="~/assets/img/NP-logo.png"
            alt="Logo"
            immediate
          />
        </div>
        <div class="title">Pillar Seal Solutions</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <OverviewSection :overview="overview" />

    <ProductSection :items="items" @tab-changed="tabChanged" />

    <DocSection :index="index" :docs="docs" />
  </Layout>
</template>

<script>
import OverviewSection from "@/components/products/OverviewSection.vue";
import ProductSection from "@/components/products/ProductSection.vue";
import DocSection from "@/components/products/DocSection.vue";

export default {
  metaInfo: {
    title: "Pillar Seal Solutions",
  },
  components: {
    OverviewSection,
    ProductSection,
    DocSection,
  },
  data() {
    return {
      index: 0,
      overview:
        "Pillar Seal Solutions was established in 1924 in Japan, having more than 700 global employees, 24 office and 8 factories in 8 countries. Pillar Seal Solutions superior products are used in a broad range of industrial fields, including electric power, water supply & sewerage systems, petroleum refining, petrochemical, marine vessels, automobiles and electronics, playing an important role in each respective field. By making full use of the advanced material engineering, design engineering and machining technologies accumulated throughout its long history in the field of sealing technology, Pillar Seal Solutions has developed a wide variety of fluid control-related equipment for semiconductor/liquid crystal manufacturing equipment. Products in these new fields have acquired a high reputation in both domestic and overseas markets.",
      items: [
        {
          title: "Mechanical Seal",
          desc: "We have a variety of mechanical seal products depending on applications and use conditions. They are dry gas seals, split type seal, easy installation cassette seal, and Knife edge seal.  These mechanical seals are applied in a wide range of industries, including petroleum refinery, petrochemical, chemical, paper, mining, marine vessels.  Wherever a fluid transportation exists, these items are used at invisible places and humbly assist industrial systems.",
          imgs: [
            { name: "Oil and Gas", path: "./nippon/ms-1.jpg" },
            { name: "Power Plant", path: "./nippon/ms-2.jpg" },
            { name: "Chemical Plant", path: "./nippon/ms-3.jpg" },
            { name: "Marine Service", path: "./nippon/ms-4.jpg" },
          ],
          children: []
        },
        {
          title: "Gland Packing",
          desc: "As same as Mechanical seal, we have a variety of gland packing products depending on applications and use conditions. Flexible graphite, carbonized, PTFE packing and so on. Through our long history of gland packing development, we have been accumulating our knowledge and technology of the product. We especially have a strong position in the market of heavy duty application. We developed our own material of flexible graphite which is used as a packing material for high pressure and high temperature. We are not only product manufacturer, but also material supplier to other packing manufacturers around the world.",
          imgs: [
            { name: "MRO Packing", path: "./nippon/gp-1.jpg" },
            { name: "OEM Packing", path: "./nippon/gp-2.jpg" },
          ],
          children: []
        },
        {
          title: "Gasket",
          desc: "We have various Gasket products including sheet gaskets, PTFE gaskets, Spiral wound gaskets, and metallic gaskets like ring joints. Here, let me tell about our strength. We have Gland packing, Mechanical seal, and gasket. In Japan, nor any other countries, it is rare to produce three of them in one company. Among three business units in our company, we share the knowledge and experience concerning a sealing technology, and then re-enhance our progress as a sealing company. This is one of our company strength.",
          imgs: [{ name: "Gasket", path: "./nippon/gt-1.jpg" }],
          children: []
        },
      ],
      docs: [
        [
          { name: "Oil & Gas", path: "nippon/MS/MS-OG-and-Petrochemical.pdf" },
          { name: "General (Heavy)", path: "nippon/MS/MS general (Heavy).pdf" },
          { name: "Power Plant", path: "nippon/MS/MS-Power_Plant.pdf" },
          { name: "Chemical Plant", path: "nippon/MS/MS-Chemical_Plant.pdf" },
          { name: "Marine Service", path: "nippon/MS/MS-Marine_Service.pdf" },
          { name: "Piping Plan ", path: "nippon/MS/API-682-Piping-Plan.pdf" },
        ],
        [{ name: "Gland Packing", path: "nippon/GP/Gland Packing.pdf" }],
        [{ name: "VG Catalog", path: "nippon/GP/VG catalog.pdf" }],
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
