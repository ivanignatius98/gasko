<template>
  <Layout class="legal">
    <section class="banner">
      <b-container>
        <div class="title">Legal</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <section class="documents">
      <b-container>
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item" id="npwp">
            <a
              class="nav-link"
              :class="{ active : !this.hash || this.hash == '#npwp' }"
              href="#npwp"
            >NPWP</a>
          </li>
          <li class="nav-item" id="tdp">
            <a class="nav-link" :class="{ active : this.hash == '#tdp' }" href="#tdp">TDP</a>
          </li>
          <li class="nav-item" id="siup">
            <a class="nav-link" :class="{ active : this.hash == '#siup' }" href="#siup">SIUP</a>
          </li>
        </ul>

        <ClientOnly>
          <div class="document text-center" v-show="!this.hash || this.hash == '#npwp'">
            <div class="title text-left">NPWP</div>
            <div class="separator"></div>
            <img src="@/assets/img/npwp.png" alt="NPWP" immediate />
          </div>

          <div class="document text-center" v-show="this.hash == '#tdp'">
            <div class="title text-left">TDP</div>
            <div class="separator"></div>
            <img src="@/assets/img/tdp.png" alt="TDP" immediate />
          </div>

          <div class="document text-center" v-show="this.hash == '#siup'">
            <div class="title text-left">SIUP</div>
            <div class="separator"></div>
            <img src="@/assets/img/siup.png" alt="SIUP" immediate />
          </div>
        </ClientOnly>
      </b-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Legal",
  },
  computed: {
    hash() {
      return this.$route.hash;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout.legal {
  & section.banner {
    padding-top: 10rem;
    padding-bottom: 15rem;
    background: linear-gradient(
        to bottom,
        rgba(#fff, 0.8),
        rgba(#fff, 0.7),
        rgba(#fff, 0.6)
      ),
      url("~@/assets/img/documents-1.jpg");
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);

    .title {
      font-size: 5rem;
      font-weight: 700;
      color: var(--primary);
    }
  }

  & section.documents {
    margin-top: -5rem;
    padding-top: 7.6rem;
    min-height: 120rem;
    background: radial-gradient(
          rgba(var(--tertiary-rgb), 0.6) 15%,
          transparent 20%
        )
        0 1px,
      radial-gradient(rgba(var(--tertiary-rgb), 0.4) 15%, transparent 20%) 8px
        9px;
    background-size: 16px 16px;

    .nav.nav-tabs {
      border-color: var(--primary);
      font-weight: 600;

      .nav-item {
        padding-top: 7.4rem;
      }

      .active {
        border-color: var(--primary) var(--primary) #fff;
        color: var(--secondary);
      }
    }

    .document {
      .title {
        font-size: 5rem;
        font-weight: 700;
        color: var(--primary);
      }

      img {
        max-width: 100%;
      }
    }
  }
}
</style>