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
        <div class="title">PILLAR Gaskets</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <ProductSection :items="items" @tab-changed="tabChanged" />

    <DocSection :docs="docs" :index="0" />
  </Layout>
</template>

<script>
import OverviewSection from "@/components/products/OverviewSection.vue";
import ProductSection from "@/components/products/ProductSection.vue";
import DocSection from "@/components/products/DocSection.vue";

export default {
  metaInfo: {
    title: "PILLAR Gaskets",
    meta: [
      {
        name: 'description',
        content: "We provide PILLAR Gaskets that includes Spiral Wound Gasket, Joint Sheet Gasket, Rubber Sheet Gasket, Pilaflon Gasket, Pillarfoil Sheet Gasket, Metal Gasket, Semi Metallic Gasket, and PTFE Joint Sealant."
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
          title: "Spiral Wound Gasket",
          desc: "Pillar P#2600 is a Spiral Wound Gasket using Pillarfoil (expanded graphite) tape for the filler. P#2600 has high reliability for high pressure and high temperature applications such as high pressure steam, ammonia, etc.",
          imgs: [
            { name: "P#2600", path: "./nippon/np-swg-1.png" },
          ],
          children: []
        },
        {
          title: "Joint Sheet Gasket",
          desc: "Pillar P#5600 TECHNOGRAPH® is a sheet gasket composed of expanded graphite and inorganic fiber as a main raw material, ensuring strength with aramid fiber and rubber binder. P#5600 has excellent seal performance under high temperature steam conditions and has an excellent flexibility for handling properties.",
          imgs: [
            { name: "P#5600", path: "./nippon/np-jsg-1.png" },
          ],
          children: []
        },
        {
          title: "Rubber Sheet Gasket",
          desc: "Pillar P#5003 is a composite reinforced rubber sheet gasket with aramid short fibers in NBR. It shows excellent pressure resistance, creep resistance and corrosion resistance.",
          imgs: [
            { name: "P#5003", path: "./nippon/np-rsg-1.png" },
          ],
          children: []
        },
        {
          title: "Pilaflon Gasket",
          desc: "“Pilaflon🄬” is Pillar original PTFE resin, has many excellent characteristics such as chemical resistance, flame resistance, electricity resistance and cleanliness. Pilaflon gasket is mainly used in chemical industry (acid, alkali), food industry and medicine industry. Pillar P#4001, P#4002 and P#4003 main raw material is Pilaflon (PTFE) combined with suitable filler material for each application. This improved the creep characteristic which often become main problem in general PTFE gasket.",
          imgs: [
            { name: "Pilaflon Gasket", path: "./nippon/np-pg-1.png" },
          ],
          children: []
        },
        {
          title: "Pillarfoil Sheet Gasket",
          desc: "The Pillarfoil🄬 Sheet gasket is utilizing expanded graphite’s excellent flame resistance, chemical resistance, sealing property and elasticity. There are features such as flexible, fit easily with flange surface and usable from cryogenic temperature to high temperature. P#6633：Pillarfoil🄬 Expanded Graphite Sheet Gasket with Metal Foil Hylamina🄬, P#6631：Pillarfoil🄬 Expanded Graphite Sheet Gasket with Metal Plate, P#6630：Pillarfoil🄬 Expanded Graphite Sheet Gasket",
          imgs: [
            { name: "Pillarfoil🄬 Sheet Gasket", path: "./nippon/np-psg-1.png" },
          ],
          children: []
        },
        {
          title: "Metal Gasket",
          desc: "The Metal Gasket designed & manufactured to withstand high temperature, high pressure and chemicals according to the characteristics of various metals under strict quality control. Mainly soft steel, pure iron, copper and stainless steel are used as metal materials.",
          imgs: [
            { name: "Metal Gasket", path: "./nippon/np-mg-1.png" },
          ],
          children: []
        },
        {
          title: "Semi Metallic Gasket",
          desc: "Pillar P#1200G-H is a gasket with metal plate (SUS316L or eq.) corrugated and laminated by Pillarfoil🄬 sheet. It has excellent features such as high sealability at low tightening pressure, high compression amount and high followability of equipment precision.",
          imgs: [
            { name: "P#1200G-H", path: "./nippon/np-smg-1.png" },
          ],
          children: []
        },
        {
          title: "PTFE Joint Sealant",
          desc: "The Pillar P#3300-F is a rod type joint sealant made by uniaxial stretched ePTFE (soft PTFE) with adhesive on one side. ePTFE has excellent chemical resistance, heat resistance, high flexibility and cleanliness which is best for chemical plant and clean room area. P#3300-F can cut by customer’s required dimension at the site during Turn Around maintenance or emergency maintenance.",
          imgs: [
            { name: "P#3300-F", path: "./nippon/np-ptfp-1.png" },
          ],
          children: []
        },
      ],
      docs: [
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
