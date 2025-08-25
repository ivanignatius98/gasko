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
        <div class="title">PILLAR Gland Packings</div>
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
    title: "PILLAR Gland Packings",
    meta: [
      {
        name: 'description',
        content: "We provide PILLAR Gland Packings that includes Carbonized Fiber Packing, Carbon Fiber Packing, Pillarfoil Packing, PTFE Packing, and Aramid Fiber Packing."
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
          title: "Carbonized Fiber Packing",
          desc: "The Pillar P#6501L is a square braid gland packing made from Pillar carbonized yarn impregnated with a PTFE dispersion and special lubricant. It is also an excellent gland packing assuring the excellent sealing performance and handling performance with little worn shaft. It is applicable to a wide range of applications such as rotary machine, reciprocating machine, etc.",
          imgs: [
            { name: "P#6501L", path: "./nippon/np-cfp-1.png" },
          ],
          children: []
        },
        {
          title: "Carbon Fiber Packing",
          desc: "Pillar P#6527L is a gland packing consists of carbon fibers interlock braided and processed with a special lubricant. It has excellent heat and chemical resistance, suitable for pumps and agitators.",
          imgs: [
            { name: "P#6527L", path: "./nippon/np-cf-1.png" },
          ],
          children: []
        },
        {
          title: "Pillarfoil Packing",
          desc: "The combination of “P#6616CH + P#6710CH” is one of the solution for high temperature & high pressure valves. Middle ring P#6616CH is one cut type made with Pillar original high grade graphite, “Pillarfoil” and wire mesh. End ring / adapter P#6710CH is also made with Pillarfoil and reinforced by Inconel wire mesh which allows high flexibility and excellent mechanical strength properties.",
          imgs: [
            { name: "Pillarfoil Packing", path: "./nippon/np-pp-1.png" },
          ],
          children: []
        },
        {
          title: "PTFE Packing",
          desc: "The Pillar P#4525L is a gland packing interlocked braided packing consist of the PTFE fiber impregnated with a special lubricant and PTFE dispersion. By Pillar unique interlock braiding system, P#4525L is extremely flexible and makes uniform contact to shaft that ensures a stable sealing performance for long period. For square braided packing, we also have P#4505L.",
          imgs: [
            { name: "P#4525L", path: "./nippon/np-ptfe-1.png" },
          ],
          children: []
        },
        {
          title: "Aramid Fiber Packing",
          desc: "Pillar P#4526L is a packing consisting of the ARAMID FIBER impregnated with PTFE dispersion & heat resistant lubricant. It is unique interlocking braided packing which is in 36 strands and creates a stable sealing ability and stability for a long period of time.",
          imgs: [
            { name: "P#4525L", path: "./nippon/np-afp-1.png" },
            { name: "P#4525L Detail", path: "./nippon/np-afp-2.png" },
          ],
          children: []
        },
      ],
      docs: [
        [{ name: "Gland Packing", path: "nippon/GP/Gland Packing.pdf" }],
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
