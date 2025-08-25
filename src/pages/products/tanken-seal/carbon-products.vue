<template>
  <Layout class="nippon">
    <section class="banner">
      <b-container>
        <div class="text-center">
          <g-image
            src="~/assets/img/logo_tanken.png"
            alt="Logo"
            immediate
          />
        </div>
        <div class="title">Tanken Carbon Products</div>
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
    title: "Tanken Carbon Products",
    meta: [
      {
        name: 'description',
        content: "We provide Tanken Carbon Products that includes porous carbon products and carbon bearings."
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
      overview:
        "Tanken Seal established in 1955 as the Carbon Research Laboratory, the company initially focused on developing carbon products for machinery. In 1959, it was renamed Sekiken Kogyo Co., Ltd., transitioning into a specialized manufacturer of industrial mechanical seals. The company expanded its production capabilities and established a nationwide service network by 1964, following a reorganization with Sekiken Seiko Co., Ltd. Over the years, it continued to grow, building a mass production plant in 1973 and a material center in 1982, while expanding its maintenance business through the opening of the Niigata Office in 1986. In 1990, the Yoshikawa NC Center was completed to enhance production of precision and metal products. Rebranding as TANKEN SEAL SEIKO Co., Ltd. in 1993, the company focused on providing continuous operation safety services for users. The 1990s and 2000s saw the company achieving ISO9001 and ISO14001 certifications, opening new offices, and expanding internationally with subsidiaries in China and Singapore. In 2011, it became a sub-subsidiary of Pillar Seal Solutions Industry Co., Ltd. following the acquisition of its parent company.",
      items: [
        {
          title: "Porous Carbon Products",
          desc: "We offer two types of porous carbon materials: low permeability and high permeability. We can manufacture to any dimensions within the dimensions of the original material. Additional processing such as centering, notches, drilled holes, countersinking, slotted holes, and spherical surfaces can be performed. We also manufacture products that combine metals and resins with adhesives and shrink fittings. In addition to the above, we can propose materials to suit your specifications.",
          imgs: [
            { name: "Porous Carbon Products", path: "./tanken/ts-pcp-1.jpg" },
          ],
          children: []
        },
        {
          title: "Carbon Bearings",
          desc: "We are the only seal manufacturer in the world that produces carbon in-house. The general characteristics of carbon are small thermal expansion, large thermal conduction, strong against thermal shock, high heat resistant temperature, self-lubricating, light, and light. It has excellent chemical resistance. ” We have various grades of carbon as shown below, and we use them properly according to the specifications and applications. We are also researching and developing higher performance carbon.",
          imgs: [
            { name: "Carbon Bearings", path: "./tanken/ts-cb-1.gif" },
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
