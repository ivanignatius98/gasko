<template>
  <Layout class="bray">
    <section class="banner">
      <b-container>
        <div class="banner-content">
          <div class="logo-container h-full w-auto">
            <g-image
              src="~/assets/img/bray-logo.svg"
              alt="Bray Logo"
              immediate
              class="brand-logo"
            />
          </div>
          <div class="title-section">
            <h1 class="title">Bray Valves</h1>
            <p class="subtitle">Premium Industrial Valve Solutions</p>
            <div class="separator"></div>
          </div>
        </div>
      </b-container>
    </section>

    <HierarchicalProductSection
      :items="items"
      :initial-tab="index"
      @main-tab-changed="mainTabChanged"
      @sub-tab-changed="subTabChanged"
    />
  </Layout>
</template>

<script>
import HierarchicalProductSection from "@/components/products/HierarchicalProductSection.vue";

export default {
  metaInfo: {
    title: "Bray Valves",
    meta: [
      {
        name: "description",
        content:
          "We provide Bray Valves that includes Butterfly Valves, Ball Valves, Knife Gate Valves, and Control Valves."
      }
    ]
  },
  components: {
    HierarchicalProductSection
  },
  data() {
    return {
      index: 0,
      items: [
        {
          title: "Butterfly Valves",
          desc:
            "High-performance butterfly valves designed for various industrial applications with superior sealing and durability.",
          img: "nippon/ms-1.jpg",
          children: [
            {
              title: "Resilient Seated",
              desc:
                "Butterfly valves with resilient seats for tight shut-off and extended service life.",
              products: [
                {
                  name: "Series 20/21 Resilient Seated Butterfly Valve",
                  description:
                    "High-performance, resilient seated butterfly valve with unique tongue and groove seat design.",
                  img: "nippon/gp-1.jpg"
                },
                {
                  name: "Series 22/23 Resilient Seated Butterfly Valve",
                  description:
                    "Wafer or lug style, resilient seated butterfly valve for wide range of applications.",
                  img: "nippon/gp-2.jpg"
                },
                {
                  name: "Series 30/31 Resilient Seated Butterfly Valve",
                  description:
                    "Rugged and reliable resilient seated butterfly valve for industrial and commercial use.",
                  img: "nippon/gt-1.jpg"
                }
              ]
            },
            {
              title: "High Performance",
              desc:
                "Advanced butterfly valves engineered for demanding applications and harsh environments.",
              products: [
                {
                  name: "Series 40 High Performance Butterfly Valve",
                  description:
                    "Double offset design for improved sealing and reduced wear.",
                  img: "nippon/ms-2.jpg"
                },
                {
                  name: "Series 41 High Performance Butterfly Valve",
                  description:
                    "Lug style high performance valve with metal seat technology.",
                  img: "nippon/ms-3.jpg"
                }
              ]
            },
            {
              title: "Triple Offset",
              desc:
                "Metal seated butterfly valves with triple offset design for zero leakage applications.",
              products: [
                {
                  name: "Series 50 Triple Offset Butterfly Valve",
                  description:
                    "Premium triple offset design for critical applications requiring zero leakage.",
                  img: "nippon/ms-4.jpg"
                },
                {
                  name: "Series 51 Triple Offset Butterfly Valve",
                  description:
                    "Fire-safe triple offset valve with metal-to-metal sealing.",
                  img: "nippon/np-afp-1.png"
                }
              ]
            },
            {
              title: "Lined",
              desc:
                "Chemically resistant lined butterfly valves for corrosive media applications.",
              products: [
                {
                  name: "Series 35 PTFE Lined Butterfly Valve",
                  description:
                    "PTFE lined valve for handling corrosive chemicals and acids.",
                  img: "nippon/np-afp-2.png"
                },
                {
                  name: "Series 36 PFA Lined Butterfly Valve",
                  description:
                    "PFA lined valve for high purity and ultra-corrosive applications.",
                  img: "nippon/np-api-a.png"
                }
              ]
            }
          ]
        },
        {
          title: "Ball Valves",
          desc:
            "Reliable ball valves offering excellent flow control and tight shut-off capabilities for various industrial needs.",
          img: "nippon/np-api-bc.png",
          children: [
            {
              title: "3-Piece",
              desc:
                "Three-piece ball valves offering easy maintenance and superior performance.",
              products: [
                {
                  name: "Series 91 3-Piece Ball Valve",
                  description:
                    "Full port 3-piece ball valve with blow-out proof stem design.",
                  img: "nippon/np-cf-1.png"
                },
                {
                  name: "Series 92 3-Piece Ball Valve",
                  description:
                    "Reduced port 3-piece ball valve for general purpose applications.",
                  img: "nippon/np-cfp-1.png"
                }
              ]
            },
            {
              title: "Threaded",
              desc:
                "Threaded connection ball valves for easy installation in piping systems.",
              products: [
                {
                  name: "Series 81 Threaded Ball Valve",
                  description:
                    "NPT threaded ball valve with stainless steel ball and stem.",
                  img: "nippon/np-cs-1.png"
                },
                {
                  name: "Series 82 Threaded Ball Valve",
                  description:
                    "BSP threaded ball valve with PTFE seats and seals.",
                  img: "nippon/np-dgs-1.png"
                }
              ]
            },
            {
              title: "Flanged",
              desc:
                "Flanged ball valves designed for high pressure and temperature applications.",
              products: [
                {
                  name: "Series 71 Flanged Ball Valve",
                  description:
                    "ANSI 150 flanged ball valve for water and general service.",
                  img: "nippon/np-g1-1.png"
                },
                {
                  name: "Series 72 Flanged Ball Valve",
                  description:
                    "ANSI 300 flanged ball valve for high pressure applications.",
                  img: "nippon/np-hds-1.png"
                }
              ]
            },
            {
              title: "Trunnion Mounted",
              desc:
                "Trunnion mounted ball valves for high pressure and large diameter applications.",
              products: [
                {
                  name: "Series 61 Trunnion Ball Valve",
                  description:
                    "Large diameter trunnion mounted ball valve with metal seats.",
                  img: "nippon/np-jsg-1.png"
                },
                {
                  name: "Series 62 Trunnion Ball Valve",
                  description:
                    "High pressure trunnion ball valve with fire-safe design.",
                  img: "nippon/np-ma-1.png"
                }
              ]
            },
            {
              title: "Severe Service",
              desc:
                "Heavy-duty ball valves engineered for the most demanding applications.",
              products: [
                {
                  name: "Series 95 Severe Service Ball Valve",
                  description:
                    "Armored ball valve for abrasive and erosive service conditions.",
                  img: "nippon/np-mb-1.png"
                }
              ]
            },
            {
              title: "Multi-Port",
              desc:
                "Multi-port ball valves for complex flow control and diverting applications.",
              products: [
                {
                  name: "Series 85 3-Way Ball Valve",
                  description:
                    "Three-way ball valve for diverting and mixing applications.",
                  img: "nippon/np-mg-1.png"
                },
                {
                  name: "Series 86 4-Way Ball Valve",
                  description:
                    "Four-way ball valve for complex flow control systems.",
                  img: "nippon/np-pg-1.png"
                }
              ]
            },
            {
              title: "Lined Ball",
              desc:
                "Chemically resistant lined ball valves for corrosive media handling.",
              products: [
                {
                  name: "Series 75 PFA Lined Ball Valve",
                  description:
                    "PFA lined ball valve for handling aggressive chemicals.",
                  img: "nippon/np-pp-1.png"
                }
              ]
            },
            {
              title: "Accessories",
              desc:
                "Ball valve accessories including actuators, position indicators, and mounting kits.",
              products: [
                {
                  name: "Ball Valve Actuator Mounting Kit",
                  description: "ISO 5211 mounting kit for pneumatic actuators.",
                  img: "nippon/np-psg-1.png"
                },
                {
                  name: "Ball Valve Position Indicator",
                  description:
                    "Visual position indicator for manual ball valves.",
                  img: "nippon/np-ptfe-1.png"
                }
              ]
            }
          ]
        },
        {
          title: "Knife Gate Valves",
          desc:
            "Specialized knife gate valves designed for slurry, powder, and viscous media applications.",
          img: "nippon/np-ptfp-1.png",
          children: [
            {
              title: "Bidirectional",
              desc:
                "Bidirectional knife gate valves suitable for flow in either direction.",
              products: [
                {
                  name: "Series KG1 Bidirectional Knife Gate Valve",
                  description:
                    "Wafer style bidirectional knife gate valve for slurry applications.",
                  img: "nippon/np-r-1.jpg"
                },
                {
                  name: "Series KG2 Bidirectional Knife Gate Valve",
                  description:
                    "Lug style bidirectional knife gate valve with metal seats.",
                  img: "nippon/np-r-2.jpg"
                }
              ]
            },
            {
              title: "Unidirectional",
              desc:
                "Unidirectional knife gate valves optimized for single direction flow.",
              products: [
                {
                  name: "Series KG3 Unidirectional Knife Gate Valve",
                  description:
                    "Heavy-duty unidirectional knife gate valve for mining applications.",
                  img: "nippon/np-rsg-1.png"
                }
              ]
            },
            {
              title: "Slurry",
              desc:
                "Specialized knife gate valves designed specifically for slurry and abrasive media.",
              products: [
                {
                  name: "Series KG5 Slurry Knife Gate Valve",
                  description:
                    "Abrasion resistant knife gate valve for mining and dredging.",
                  img: "nippon/np-smg-1.png"
                },
                {
                  name: "Series KG6 Slurry Knife Gate Valve",
                  description:
                    "Rubber lined knife gate valve for corrosive slurries.",
                  img: "nippon/np-ss-1.png"
                }
              ]
            }
          ]
        },
        {
          title: "Control Valves",
          desc:
            "Precision control valves engineered for accurate flow, pressure, and temperature regulation.",
          img: "nippon/np-swg-1.png",
          children: [
            {
              title: "Ball Valves",
              desc:
                "Control ball valves with characterized flow curves for precise control applications.",
              products: [
                {
                  name: "Series CB1 Control Ball Valve",
                  description:
                    "V-port control ball valve with linear flow characteristics.",
                  img: "nippon/ms-1.jpg"
                },
                {
                  name: "Series CB2 Control Ball Valve",
                  description:
                    "Segmented ball control valve for high capacity applications.",
                  img: "nippon/ms-2.jpg"
                }
              ]
            },
            {
              title: "Butterfly Valves",
              desc:
                "Control butterfly valves offering excellent throttling capabilities and flow control.",
              products: [
                {
                  name: "Series CF1 Control Butterfly Valve",
                  description:
                    "High performance control butterfly valve with characterized disc.",
                  img: "nippon/ms-3.jpg"
                },
                {
                  name: "Series CF2 Control Butterfly Valve",
                  description:
                    "Eccentric disc control butterfly valve for tight shut-off.",
                  img: "nippon/ms-4.jpg"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  watch: {
    "$route.query.tab": {
      immediate: true,
      handler(newTab) {
        if (newTab && !isNaN(newTab)) {
          this.index = parseInt(newTab);
        } else {
          this.index = 0;
        }
      }
    }
  },
  methods: {
    mainTabChanged(tab) {
      this.$router.push({ query: { tab: tab } });
    },
    subTabChanged(data) {
      console.log("Sub tab changed:", data);
      // Handle sub tab change if needed
    }
  }
};
</script>

<style lang="scss" scoped>
.layout.bray {
  section.banner {
    padding-top: 8rem;
    padding-bottom: 8rem;
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
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(1px);
      pointer-events: none;
    }

    .banner-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo-container {
        width: 140px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .brand-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
      }

      .title-section {
        text-align: center;

        .title {
          font-size: 4rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          color: #6c757d;
          font-weight: 500;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .separator {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          margin: 0 auto;
          border-radius: 2px;
        }
      }
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .layout.bray {
    section.banner {
      padding-top: 6rem;
      padding-bottom: 6rem;

      .banner-content {
        gap: 1.5rem;

        .logo-container {
          width: 160px;
          height: 60px;

          .brand-logo {
            width: 100%;
            height: 100%;
          }
        }

        .title-section {
          .title {
            font-size: 2.8rem;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .layout.bray {
    section.banner {
      .banner-content {
        .title-section {
          .title {
            font-size: 2.2rem;
          }
        }
      }
    }
  }
}
</style>
