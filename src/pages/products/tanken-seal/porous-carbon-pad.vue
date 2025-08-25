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
        <div class="title">Tanken Porous Carbon Pad</div>
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
    title: "Tanken Porous Carbon Pad",
    meta: [
      {
        name: 'description',
        content: "We provide Tanken Porous Carbon Pad that is a high-performance solution tailored for precision environments, especially in semiconductor manufacturing. Made entirely from carbon materials, it offers excellent thermal resistance (up to 250°C in air and 900°C in inert gases) and superior electrical conductivity, making it ideal for managing static electricity."
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
          title: "Porous Carbon Pad",
          desc: "The porous carbon vacuum adsorption pad is a high-performance solution tailored for precision environments, especially in semiconductor manufacturing. Made entirely from carbon materials, it offers excellent thermal resistance (up to 250°C in air and 900°C in inert gases) and superior electrical conductivity, making it ideal for managing static electricity. Its low density reduces mechanical stress on equipment, allowing for more flexible design options while ensuring dimensional stability under extreme temperatures for consistent, high-precision performance. <br /> <br /> Optimized for uniform adsorption of silicon wafers and other films, this pad is essential for addressing issues like thermal deformation and electrostatic discharge damage in semiconductor production. With customizable sizes, materials, and surface treatments, it can be precisely tailored to meet specific operational needs. Its robust performance and versatility make it a critical component in enhancing productivity and yield in advanced manufacturing processes.",
          imgs: [
            { name: "Suction Roll", path: "./tanken/ts-pcb-1.jpg" },
            { name: "Air Bearing Roll", path: "./tanken/ts-pcb-2.png" },
            { name: "Air Bearing Bar", path: "./tanken/ts-pcb-3.png" },
            { name: "Large Suction Pad", path: "./tanken/ts-pcb-4.png" },
            { name: "Precision Suction Pad", path: "./tanken/ts-pcb-5.png" },
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
