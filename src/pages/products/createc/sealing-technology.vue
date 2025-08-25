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
        <div class="title">Createc Sealing Technology</div>
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
    title: "Createc Sealing Technology",
    meta: [
      {
        name: 'description',
        content: "We provide Createc Sealing Technology that includes Creaflex (Versatile O-Ring), Creaflon (Spring Elastic PTFE Seal), and Crealloy (Metal Seal)."
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
          title: "Creaflex (Versatile O-Ring)",
          desc: "Creaflex (Versatile O-Ring), are special, high-quality processed elastomers. The O-rings meet the highest demands for reliability and safety for the oil and gas industry, the pharmaceutical and food industries, the chemical industry and for standart applications. <br/><br/> [For High temperatures] Hardly any other medium causes more problems for O-ring seals than hot water and steam, especially when it comes to applications in the high-temperature range above 150°C. CREAFLEX® HT elastomers have a temperature resistance of up to +280°C. <br/><br/> [For Low temperatures] The low-temperature range is also a challenge for O-ring seals. CREAFLEX® LT elastomers are characterized by their low-temperature flexibility down to -50°C. <br/> <br/> [Chemical Resistance] CREAFLEX® perfluoroelastomers offer universal chemical resistance - even in the most aggressive pumped media - and are reliable for high pressure and high temperature applications. The sealing systems meet the strict standards of purity and traceability of the materials used and have full FDA approval for perfluoroelastomers 21 CFR 177.2400 (d1); (d2).",
          imgs: [
            { name: "Creaflex (Versatile O-Ring)", path: "./createc/c-ors-1.png" },
          ],
          children: []
        },
        {
          title: "Creaflon (Spring Elastic PTFE Seal)",
          desc: "Creaflon (Spring Elastic PTFE Seal) made of the material polytetrafluorothylene are characterzied by universal resistance to most media compared to all other plastics and elastomers. Creaflon (Spring Elastic PTFE Seal) can be used in the temperature range from -200 to +300 Celcius. <br /> <br /> CREAFLON® spring-elastic PTFE seals made of polytetrafluoroethylene are characterized by universal resistance to most media compared to all other plastics and elastomers. <br /> <br />CREAFLON® PTFE seals are spring-reinforced grooved rings that generate sealing action through spring preload and the applied pressure. When pressure is applied, the sealing effect is increased in proportion to the pressure.",
          imgs: [
            { name: "Creaflon (Spring Elastic PTFE Seal)", path: "./createc/c-ors-2.png" },
          ],
          children: []
        },
        {
          title: "Crealloy (Metal Seal)",
          desc: "In application with extreme high or low temperature (+650 to -250 Celcius ), very long service life, high radiation exposure and wherever very low leakage rate are required, Crealloy (Metal Seal) are used. <br /><br />CREALLOY® metal seals are perfect for use in the temperature range from -250°C to +650°C, for required long service lives, for high radiation exposure and wherever very low leak rates are required. CREALLOY® metal seals are seals that are used in force shunt. <br /> <br />CREALLOY® metal seals are available as axial seals as well as radial seals. Compared to other seals, they have the lowest leakage rate up to 10-⁹ ml/s, withstand a pressure range up to 5,000 bar. Due to the elastic recovery, deformations of the sealing surfaces can be compensated.",
          imgs: [
            { name: "Crealloy (Metal Seal)", path: "./createc/c-ors-3.png" },
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
