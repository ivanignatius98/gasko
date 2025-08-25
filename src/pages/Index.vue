<template>
  <Layout class="home">
    <section class="banner">
      <b-container>
        <div class="title">Welcome to Gasko Jaya</div>
        <div class="separator"></div>
        <article class="subtitle">
          Gasko Jaya was founded in September 2008 and operates under the laws and regulations of the Republic of Indonesia. We supply a range of products including mechanical seals, pipes, fittings, flanges, tools, hardware, electrical components, and spare parts.<br /><br />
          Gasko Jaya also offers services for custom vessel reservoir manufacturing and the repair of mechanical tools and machines. Our trusted and highly skilled engineers are dedicated to delivering the best results for our customers.<br /><br />
          We have developed vessel systems for Pertamina's Balongan branches in West Java, Kalimantan, Central Java, and Sumatra. Additionally, we supply products to national companies such as Pupuk Kaltim, Pertamina, and various private companies. We are an authorized agent of PT. Pillar Seal Solutions Indonesia, specializing in high-performance sealing products for plants across various industries.
        </article>
        <g-link class="btn btn-primary" to="/about/info">Learn More</g-link>
      </b-container>
    </section>
    <section class="intro">
      <b-container>
        <b-row>
          <b-col sm="12" lg="6">
            <ClientOnly v-if="isClient">
              <carousel
                autoplay
                :autoplayTimeout="7000"
                loop
                :perPage="1"
                paginationColor="#303fa1"
                paginationActiveColor="#a1303f"
              >
                <slide class="item">
                  <div class="title">
                    <b-icon-eye class="mr-4"></b-icon-eye>Vision
                  </div>
                  <div class="separator"></div>
                  <article class="content mb-5 pr-3">
                    To be the most reliable company as a Partner and Vendor by
                    providing engineering products and services to support Oil
                    &amp; Gas, Automotive, and Chemical industries in Indonesia.
                  </article>
                </slide>
                <slide class="item">
                  <div class="title">
                    <b-icon-bullseye class="mr-4"></b-icon-bullseye>Mission
                  </div>
                  <div class="separator"></div>
                  <div class="content mb-5">
                    <div class="list">
                      <div class="list-item">
                        <div class="index mr-3">1</div>
                        <article class="text">
                          To provide a satisfying customer experience by
                          providing quality products
                        </article>
                      </div>
                      <div class="list-item">
                        <div class="index mr-3">2</div>
                        <article class="text">
                          To continuously improve our product &amp; service
                          quality and reliability
                        </article>
                      </div>
                      <div class="list-item">
                        <div class="index mr-3">3</div>
                        <article class="text">
                          To serve in the spirit of excellence and integrity
                        </article>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </ClientOnly>
          </b-col>
          <b-col sm="12" lg="6">
            <div class="title">
              <b-icon-gear class="mr-4"></b-icon-gear>Core Values
            </div>
            <div class="separator"></div>
            <div class="content">
              <div class="list">
                <div class="list-item text-subtitle font-weight-bold">
                  <div class="index mr-3">1</div>
                  <div class="text">Quality</div>
                </div>
                <div class="list-item">
                  <div class="index mr-3 invisible">1</div>
                  <article class="text">
                    We give our best effort at all times to give the finest
                    quality products and services.
                  </article>
                </div>
                <div class="list-item mb-5">
                  <div class="index mr-3 invisible">1</div>
                  <article class="text">
                    We guarantee our customers that all products and services we
                    supply are accordant to the specifications that we promised.
                  </article>
                </div>
                <div class="list-item text-subtitle font-weight-bold">
                  <div class="index mr-3">2</div>
                  <div class="text">Integrity and Trust</div>
                </div>
                <div class="list-item">
                  <div class="index mr-3 invisible">2</div>
                  <article class="text">
                    We uphold honesty and responsibility as our work ethic
                    standards of business conduct to serve our customers.
                  </article>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="products">
      <b-container>
        <div class="title text-title">Our Products</div>
        <b-row class="align-items-center product">
          <b-col sm="12" md="6" order="2" order-md="0" class="my-5">
            <div class="title">Pillar Seal Solutions</div>
            <div class="separator mx-auto"></div>
            <p class="content mb-5">
              Pillar Seal Solution was established in 1924 in Japan, having more than
              700 global employees, 24 office and 8 factories in 8 countries.
              Pillar Seal Solution superior products are used in a broad range of
              industrial fields, including electric power, water supply &
              sewerage systems, petroleum refining, petrochemical, marine
              vessels, automobiles and electronics, playing an important role in
              each respective field...
            </p>
            <g-link
              to="/products/pillar-seal/mechanical-seal"
              class="btn btn-outline-secondary"
              active-class="link-active"
              >Learn More</g-link
            >
          </b-col>
          <b-col sm="12" md="6" class="my-5">
            <g-image
              src="~/assets/img/products/nippon/ms-1.jpg"
              alt="Pillar Seal Product"
            />
          </b-col>
        </b-row>
        <b-row class="align-items-center product">
          <b-col sm="12" md="6" class="my-5">
            <g-image src="~/assets/img/logo_tanken.png" alt="Tanken Seal Logo" />
          </b-col>
          <b-col sm="12" md="6" class="my-5">
            <div class="title">Tanken Seal</div>
            <div class="separator mx-auto">
            </div>
            <p class="content mb-5">
              Tanken Seal Seiko was founded in 1955 when we succeeded in domestically producing carbon rings, which are the main components of mechanical seals. Also developing products such as porous carbon and support services.<br />
              Tanken Seal products are used across the world in various industries such as oil refining, food production, water and sewer services, electricity, nuclear energy, biotechnology, and fine chemicals.<br />
            </p>
            <g-link class="btn btn-outline-secondary" active-class="link-active" to="/products/tanken-seal/mechanical-seal"
              >Learn More</g-link
            >
          </b-col>
        </b-row>
        <b-row class="align-items-center product">
          <b-col sm="12" md="6" order="2" order-md="0" class="my-5">
            <div class="title">CREATEC</div>
            <div class="separator mx-auto"></div>
            <p class="content mb-5">
              Leading markets of composites for sealing technology, pump bearing technology and medical instruments.<br />
              Createc develop and produce products that are adapted to even the harshest conditions: Very high or extremely low temperatures, a wide range of pressures, for liquid, gaseous or aggressive media. We also develop innovative product solutions for demanding applications in the medical technology sector. <br />
              German Engineering. Available worldwide. Precisely your composites.
            </p>
            <g-link class="btn btn-outline-secondary" active-class="link-active" to="/products/createc/sealing-technology"
              >Learn More</g-link
            >
          </b-col>
          <b-col sm="12" md="6" class="my-5">
            <g-image src="~/assets/img/products/createc/c-ors-1.png" alt="Createc Product" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="clients">
      <b-container fluid>
        <div class="title text-title">Our Clients</div>
        <div class="carousel">
          <ClientOnly v-if="isClient">
            <carousel
              autoplay
              loop
              :perPageCustom="[
                [0, 1],
                [768, 2],
                [992, 3],
                [1200, 5],
              ]"
              paginationColor="#a1303f"
              paginationActiveColor="#303fa1"
            >
              <slide class="text-center item">
                <g-image src="~/assets/img/c-1.png" alt="client 1" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-2.png" alt="client 2" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-3.png" alt="client 3" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-4.png" alt="client 4" />
              </slide>
              <!-- <slide class="text-center item">
                <g-image src="~/assets/img/c-5.png" alt="client 5" />
              </slide> -->
              <slide class="text-center item">
                <g-image src="~/assets/img/c-6.png" alt="client 6" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-7.png" alt="client 7" />
              </slide>
              <!-- <slide class="text-center item">
                <g-image src="~/assets/img/c-8.png" alt="client 8" />
              </slide> -->
              <slide class="text-center item">
                <g-image src="~/assets/img/c-9.png" alt="client 9" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-10.png" alt="client 10" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-11.png" alt="client 11" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-12.png" alt="client 12" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-13.png" alt="client 13" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-14.png" alt="client 14" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-29.png" alt="client 29" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-16.png" alt="client 16" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-17.png" alt="client 17" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-18.png" alt="client 18" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-19.png" alt="client 19" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-20.png" alt="client 20" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-25.png" alt="client 25" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-21.png" alt="client 21" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-22.png" alt="client 22" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-23.png" alt="client 23" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-24.png" alt="client 24" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-26.png" alt="client 26" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-27.png" alt="client 27" />
              </slide>
              <slide class="text-center item">
                <g-image src="~/assets/img/c-28.png" alt="client 28" />
              </slide>
            </carousel>
          </ClientOnly>
        </div>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "PT Gasko Jaya",
    meta: [
      {
        name: 'description',
        content: "We are authorized distributor for Nippon Pillar Indonesia (Pillar Solution Indonesia), Tanken Seal Indonesia and Createc Indonesia"
      }
    ]
  },
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  data() {
    return {
      isClient: process.isClient,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout.home {
  & section.banner {
    padding-top: 10rem;
    padding-bottom: 15rem;
    background: linear-gradient(
        to bottom,
        rgba(#fff, 0.9),
        rgba(#fff, 0.8),
        rgba(#fff, 0.7)
      ),
      url("~@/assets/img/industry-1.jpg");
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);

    @media only screen and (max-width: 992px) {
      background: linear-gradient(to right, rgba(#fff, 0.8), rgba(#fff, 0.8)),
        url("~@/assets/img/industry-1.jpg");
      background-size: cover;
      background-attachment: fixed;
    }

    .title {
      font-size: 5rem;
      font-weight: 700;
      width: 60%;
      color: var(--primary);

      @media only screen and (max-width: 992px) {
        width: 100%;
      }
    }
    .subtitle {
      font-size: 2rem;
      font-weight: 500;
      width: 60%;
      margin-bottom: 3rem;

      @media only screen and (max-width: 992px) {
        width: 100%;
      }
    }
  }

  & section.intro {
    margin-top: -5rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: radial-gradient(
          rgba(var(--tertiary-rgb), 0.6) 15%,
          transparent 20%
        )
        0 1px,
      radial-gradient(rgba(var(--tertiary-rgb), 0.4) 15%, transparent 20%) 8px
        9px;
    background-size: 16px 16px;

    .title {
      font-size: 3rem;
      font-weight: 600;
      color: var(--secondary);
      text-align: left;
    }

    .separator {
      background-color: var(--primary);
    }

    .content {
      font-size: 1.8rem;
    }
  }

  & section.products {
    padding-top: 5rem;
    padding-bottom: 5rem;

    img {
      padding-left: 5rem;
      padding-right: 5rem;
      width: 100%;
    }

    .title {
      margin-bottom: 5rem;
    }

    .product {
      .title {
        font-size: 3rem;
        font-weight: 600;
        color: var(--secondary);
        text-align: center;
        margin-bottom: 0;
      }

      .separator {
        background-color: var(--primary);
      }
    }
  }

  & section.clients {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: var(--tertiary);

    .title {
      margin-bottom: 5rem;
    }

    .item {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 20rem;
        max-height: 20rem;
        width: auto;
      }
    }
  }
}
</style>
