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
        <div class="title">Tanken Mechanical Seal</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <ProductSection :items="items" @tab-changed="tabChanged" />

    <DocSection :docs="docs" :index="0"/>
  </Layout>
</template>

<script>
import OverviewSection from "@/components/products/OverviewSection.vue";
import ProductSection from "@/components/products/ProductSection.vue";
import DocSection from "@/components/products/DocSection.vue";

export default {
  metaInfo: {
    title: "Tanken Mechanical Seal",
    meta: [
      {
        name: 'description',
        content: "We provide Tanken Mechanical Seal that includes Mechanical Seal, Oil Seal, O-Ring, and Packing."
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
          title: "Hydro-Static Seal",
          desc: "Hydro-Static Seal is a non-contact static pressure dry gas seal using our Porous Carbon (carbon with uniform pores).It is possible to seal under harsh conditions such as high peripheral speed, high pressure and high temperature, which was not possible with the conventional Dry Seal.",
          imgs: [
            { name: "Hydro-Static Seal", path: "./tanken/ts-hss-1.png" },
          ],
          children: []
        },
        {
          title: "Cartridge Mechanical Seal",
          desc: "Compact and easy-to-install cartridge type Stationary mechanical seal Cartridge Master ®. The wide variety of Cartridge Mechanical Seals can be used for various fluids such as fresh water and slurries, as well as for shaft sealing devices such as chemical pumps and stirrers.",
          imgs: [
            { name: "Cartridge Mechanical Seal", path: "./tanken/ts-cms-1.png" },
          ],
          children: []
        },
        {
          title: "Stationary Mechanical Seal",
          desc: "The stuffing box accuracy of the mounting equipment, which is a feature of the static type, and the distortion caused by high temperature and high pressure are absorbed by the spring, maintain the squareness of the sliding surface and demonstrating high sealing performance. In addition, since the spring is located on the atmospheric side, there is no clogging due to slurry, etc., good operability is achieved, and there is no wear on the shaft or sleeve due to the O-ring. Stationary mechanical seal is a mechanical seal with a wide range of applications, which is effective for extending the life of the seal.",
          imgs: [
            { name: "Stationary Mechanical Seal", path: "./tanken/ts-sms-1.png" },
          ],
          children: []
        },
        {
          title: "Rotary Mechanical Seal",
          desc: "We will select and provide seals and materials suitable for your requirements, such as multi-spring type / monocoil spring type, slurry-resistant / corrosion-resistant environment, single / double / tandem, etc., according to the specifications / applications. As a general purpose seal, the pump can be mounted in an ISO 3069 stuffing box.It is also widely used in stirrers. We can handle sizes from small to over φ200.",
          imgs: [
            { name: "Rotary Mechanical Seal", path: "./tanken/ts-rms-1.gif" },
          ],
          children: []
        },
        {
          title: "Aqua-less Seal",
          desc: "Conventional mechanical seals are used by injecting treated water or clean water into the mechanical seal in order to avoid abnormal wear due to sludge (slurry), forced removal of sliding heat generation, and impaired operating performance due to accumulation. However, when the supply of clean water was stopped due to a major disaster, the sewage that flowed in one after another could not be sent to the treatment plant or relay station because water could not be injected into the mechanical seal. .. On the other hand, there is an increasing demand for the mechanical seal Non-Flushing Seal that does not require water injection in terms of environmental impact such as ISO and cost reduction of equipment and maintenance costs. At our company, for various problems of mechanical seal generated by sludge (slurry), based on the static structure cultivated over many years, we have adopted original special materials and optimized low heat generation design to meet various specification conditions. We propose the most suitable Non-Flushing Mechanical seal.",
          imgs: [
            { name: "Aqua-less Seal", path: "./tanken/ts-als-1.gif" },
          ],
          children: []
        },
        {
          title: "Safety Barrier Seal",
          desc: "By arranging the Safety Barrier Seal on the backup seal on the atmosphere side, the safety measures and environmental measures of the Mechanical seal can be realized at a lower cost than the reservoir tank type tandem seal.In addition, even if a temporary leak occurs when the vertical LPG pump is started, it can be started quickly without stopping. Furthermore, the Safety Barrier Seal is not only used as a tandem seal, but also as a main dry seal for stirrers, etc. because it hardly leaks in the  low pressure region. It supports high peripheral speed conditions that were possible. [Patent registration number: 2113552]",
          imgs: [
            { name: "Safety Barrier Seal", path: "./tanken/ts-sbs-1.gif" },
          ],
          children: []
        },
        {
          title: "Stationary Metal-bellows Seal",
          desc: "A static bellows seal for high temperature oil refining process fluids.By adopting a static structure, it is not easily affected by thermal strain, secures stable followability, and exhibits excellent sealing performance.",
          imgs: [
            { name: "Stationary Metal-bellows Seal", path: "./tanken/ts-smbs-1.gif" },
          ],
          children: []
        },
        {
          title: "Rotary Metal-Bellows Seal",
          desc: "The flexible bellows has excellent floating properties and is a structure that does not easily stick or malfunction, The damper spring that suppresses the resonance of the bellows is adopted as standard. The damper spring is installed on the inner circumference of the bellows and exhibits stable sealing performance, With its compact body, it can also be used in equipment with a narrow seal box, We have established an immediate inventory delivery system, so it is safe to respond to emergencies, It is also possible to integrate by replacing the rotary multi-spring type that has been used conventionally, F12 carbon with excellent blister resistance produced in-house is used as standard.",
          imgs: [
            { name: "Rotary Metal-Bellows Seal", path: "./tanken/ts-rmbs-1.gif" },
          ],
          children: []
        },
        {
          title: "Dry Seal",
          desc: "A lubricating film is indispensable on the sliding surface to operate the mechanical seal, and the double mechanical seal method has been widely adopted when sealing the gas zone like the upper Agitator.However, it has been pointed out that the use of a sealing liquid causes a decrease in product purity due to a slight leaked liquid, and adverse effects such as installation and management of accessory equipment, and the need for a Dry Seal that does not use a sealing liquid is increasing.The various Dry Seals developed by our company contribute to the stability of the quality of the manufacturing process by the user, the simplification of attached equipment, and the reduction of maintenance.",
          imgs: [
            { name: "Dry Seal", path: "./tanken/ts-ds-1.gif" },
          ],
          children: []
        },
        {
          title: "Split-master",
          desc: "Split Master is a mechanical seal with an outside split structure, and by adopting our original special carbon, it can support non-flushing operation and full water level full speed operation (preceding standby operation). It can be used as a non-flushing shaft sealing device for various water treatment pumps such as vertical mixed flow pump, vertical volute type mixed flow pump, and horizontal between bearing (over-hung) type pump.",
          imgs: [
            { name: "Split Master", path: "./tanken/ts-sm-1.png" },
          ],
          children: []
        },
        {
          title: "Tanken Dynamic Pressure Seal",
          desc: "Overview: Spiral grooves are provided on both sides of the rotating ring, and the rotation causes non-contact, Barrier gas is injected through the purge hole and the process gas is completely sealed by the gas film, Since the gap between the seals can be kept to a minimum, the amount of gas leaking into the machine can be minimized. <br /><br />Features: [Low power consumption] Since it is non-contact during operation, the power consumption is small. [Long life] In the non-contact rotating region, there is no solid contact on the sliding surface, so the wear life is almost negligible. [Minimum incidental equipment] No additional equipment such as sealing liquid circulation equipment is required. Eliminates the need for daily seal water management. [Easy handling] The cartridge structure makes it easy to handle.",
          imgs: [
            { name: "Tanken Dynamic Pressure Seal", path: "./tanken/ts-dps.png" },
          ],
          children: []
        },
      ],
      docs: [
        [
          { name: "Tanken DPS", path: "tanken/Tanken DPS.pdf" },
          { name: "Tanken Cartridge Master", path: "tanken/Tanken Cartridge Master.pdf" },
          { name: "Tanken Tanken Iso Standard Seal", path: "tanken/Tanken Iso Standard Seal.pdf" },
          { name: "Tanken Bellows Mates", path: "tanken/Tanken Bellows Mates.pdf" }
        ]
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
