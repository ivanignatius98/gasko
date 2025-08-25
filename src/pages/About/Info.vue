<template>
  <Layout class="info">
    <section class="banner">
      <b-container>
        <div class="title">Background</div>
        <div class="separator"></div>
        <div class="subtitle">
          Gasko Jaya was founded in September 2008 and is subject to the law and
          the legislation prevailing on the State of the Republic of Indonesia.
          We supply products such as mechanical seal, pipes, fittings, flanges;
          tools, Hardwares, electrical, and spare parts.
          <br />
          <br />Gasko also provides services for custom vessel reservoir
          manufacturing and mechanical tools and machines repair, by having our
          trusted and highly skilled engineers to give the best result for our
          customers.
          <br />
          <br />We have developed vessel systems for Pertamina Balongan branches
          of West of Java, Kalimantan borneo, Central of Java and Sumatra and
          have been supplying products for some national company such as Pupuk
          Kaltim, Pertamina and other private companies. We are also an
          authorized agent of PT. Pillar Seal Solutions Manufacturing Indonesia.
        </div>
      </b-container>
    </section>

    <section class="vm">
      <b-container>
        <b-row>
          <b-col sm="12" lg="5" class="p-5 mb-5 mb-lg-0">
            <div class="title text-title">Our Vision</div>
            <div class="separator-container">
              <div class="separator"></div>
              <b-icon-eye class="icon mx-4"></b-icon-eye>
              <div class="separator"></div>
            </div>
            <div class="text text-subtitle text-center">
              To be the most reliable company as a Partner and Vendor of
              engineering supplies and services in the industry
            </div>
          </b-col>
          <b-col sm="12" lg="5" offset-lg="2" class="p-5">
            <div class="title text-title">Our Mission</div>
            <div class="separator-container">
              <div class="separator"></div>
              <b-icon-bullseye class="icon mx-4"></b-icon-bullseye>
              <div class="separator"></div>
            </div>
            <div class="text text-subtitle text-center">
              To provide a satisfying customer experience through our products
              and services, and serving our customers in the spirit of
              excellence and integrity
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="core">
      <b-container>
        <b-row class="align-items-center">
          <b-col sm="12" lg="6" class="text-center mb-5 mb-lg-0">
            <g-image src="~/assets/img/logo.png" alt="Gasko" />
          </b-col>
          <b-col sm="12" lg="6">
            <div class="title text-title text-left">Core Values</div>
            <div class="separator"></div>
            <div class="list">
              <div class="list-item text-subtitle font-weight-bold">
                <div class="index mr-3">1</div>
                <div class="content">Quality</div>
              </div>
              <div class="list-item">
                <div class="index mr-3 invisible">1</div>
                <div class="content">
                  We give our best effort at all times to give the finest
                  quality products and services to our customers.
                </div>
              </div>
              <div class="list-item mb-5">
                <div class="index mr-3 invisible">1</div>
                <div class="content">
                  We guarantee our customers that all products and services that
                  we supply are according to the specifications that we
                  promised.
                </div>
              </div>
              <div class="list-item text-subtitle font-weight-bold">
                <div class="index mr-3">2</div>
                <div class="content">Integrity and Trust</div>
              </div>
              <div class="list-item">
                <div class="index mr-3 invisible">2</div>
                <div class="content">
                  We uphold honesty and responsibility as our work ethic
                  standards of business conduct.
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Us",
  },
};
</script>

<style lang="scss" scoped>
.layout.info {
  & section.banner {
    padding-top: 10rem;
    padding-bottom: 15rem;
    background: linear-gradient(
        to bottom,
        rgba(#fff, 1),
        rgba(#fff, 0.9),
        rgba(#fff, 0.85)
      ),
      url("~@/assets/img/worker-1.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);

    .title {
      font-size: 5rem;
      font-weight: 700;
      color: var(--primary);
    }

    .subtitle {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }
  }

  & section.vm {
    margin-top: -5rem;
    padding-top: 15rem;
    padding-bottom: 10rem;
    background: radial-gradient(
          rgba(var(--tertiary-rgb), 0.6) 15%,
          transparent 20%
        )
        0 1px,
      radial-gradient(rgba(var(--tertiary-rgb), 0.4) 15%, transparent 20%) 8px
        9px;
    background-size: 16px 16px;

    .row > * {
      background-color: rgba(#fff, 0.8);
      border-radius: 1rem;
      box-shadow: 0 1.5rem 2rem rgba(#000, 0.6);

      @media only screen and (max-width: 768px) {
        min-height: 30rem;
      }

      @media only screen and (max-width: 576px) {
        border-radius: 0;
      }
    }

    .separator-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 4rem;
        color: var(--secondary);
      }
    }
  }

  & section.core {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
}
</style>
