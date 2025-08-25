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
        <div class="title">PILLAR Mechanical Seals and Accessories</div>
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
    title: "PILLAR Mechanical Seals and Accessories",
    meta: [
      {
        name: 'description',
        content: "We provide PILLAR Mechanical Seals and Accessories that includes API Standard Seal, Mixer & Agitator Mechanical Seal, Cassette Seal, Heavy Duty Seal, Split Seal, G1 Seal, Metal Bellows, Dry Gas Seal, and Accessories."
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
          title: "API Standard Seal",
          desc: "There are two types of mechanical seals being described: Type A is a balanced pusher seal with a cartridge design, incorporating multiple springs and O-rings as secondary seals. It is a rotating type seal, where the seal components rotate with the shaft. Type B and Type C are both non-pusher seals featuring metal bellows and a balanced cartridge design. Type B is a rotating type seal, while Type C is a stationary type seal, where the primary sealing components remain stationary as the shaft rotates.",
          imgs: [
            { name: "Type A", path: "./nippon/np-api-a.png" },
            { name: "Type B & C", path: "./nippon/np-api-bc.png" },
          ],
          children: []
        },
        {
          title: "Mixer & Agitator Mechanical Seal",
          desc: "Pillar “CHEMI-MIGHTY-II” type EAB is a general-purpose type dry contact seal for agitator, in which the stationary seat and shaft packing use the fluorine rubber O-ring having excellent heat and chemical resistance. Since this seal does not require such sealant supply unit like in double seal, it is possible to reduce the equipment cost. *The PTFE bellows type (type WCB) is also available, in which the O-ring is not used for shaft packing.",
          imgs: [
            { name: "CHEMI-MIGHTY-II", path: "./nippon/np-ma-1.png" },
          ],
          children: []
        },
        {
          title: "Cassette Seal",
          desc: "Pillar cassette seal type GAKEM adopted the knife edge seal(*1) to the seal surface, which reduce the power consumption, making it possible to reduce the running cost. Pillar cassette seal is applicable to a wide range of fluids from fresh water to chemical fluid and slurry liquid. Pillar cassette seal will not require any experience of installation, can easily install by only four actions.",
          imgs: [
            { name: "GAKEM", path: "./nippon/np-cs-1.png" },
          ],
          children: []
        },
        {
          title: "Heavy Duty Seal",
          desc: "Type JAB and YAB seal is for high load condition, which assures the stabilized sealing performance under high-temperature/high-pressure with high velocity and great pressure fluctuation condition. Since bilaterally symmetric floating ring is used, this mechanical seal is resistible against the pressure fluctuation and is so designed that the frictional heat is removed effectively by the flushing liquid flowing through a lot of holes arranged on the floating ring.",
          imgs: [
            { name: "Heavy Duty Seal", path: "./nippon/np-hds-1.png" },
          ],
          children: []
        },
        {
          title: "Split Seal",
          desc: "The Pillar type AR II seal adopts special carbon having excellent lubricity make it possible for the pump to perform the dry operation (preceding stand-by operation). Consequently, it is possible to simplify the accessories, no need of flushing and water injection. Splitting the consumable parts make it possible to improve the maintainability.",
          imgs: [
            { name: "Type AR II", path: "./nippon/np-ss-1.png" },
          ],
          children: []
        },
        {
          title: "G1 Seal",
          desc: "The Pillar end surface rubber sliding seal, Type G1 seal use the special U-shape rubber. Since this seal has full of flexibility, it is suitable for low-speed rotary equipment such as roll neck of each industrial machine, rudder of ship, etc. in which the shaft may frequently vibrate or become eccentric.",
          imgs: [
            { name: "G1 Seal", path: "./nippon/np-g1-1.png" },
          ],
          children: []
        },
        {
          title: "Metal Bellows",
          desc: "Pillar stationary Metal bellows type QBS is mechanical seal having welded double bellows without shaft packing which provides excellent resistance against pressure and temperature. Using Pillar QBS with the combination of secondary seal will make contribution to secure the safety and prevent the leak of toxic/inflammable fluid to atmosphere.",
          imgs: [
            { name: "Type QBS", path: "./nippon/np-mb-1.png" },
          ],
          children: []
        },
        {
          title: "Dry Gas Seal",
          desc: "The Pillar PEC seal is a Hydrostatic Dry Gas seal designed with non-contact type seal to prevent the leak of the gas base fluid, etc. to the atmosphere. It is used for rotary units such as turbine, blower, compressor, agitator, etc. Since PEC seal unit is designed for non-contact, it assures the cleanliness (non-generation of contamination) and energy-saving (limited power loss, etc.)",
          imgs: [
            { name: "PEC Seal", path: "./nippon/np-dgs-1.png" },
          ],
          children: []
        },
        {
          title: "Accessories",
          desc: "",
          imgs: [
            { name: "Reservoir", path: "./nippon/np-r-1.jpg" },
            { name: "Flushing Cooler", path: "./nippon/np-r-2.jpg" },
          ],
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
