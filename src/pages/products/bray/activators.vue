<template>
  <Layout class="bray">
    <section class="banner">
      <b-container>
        <div class="banner-content">
          <div class="logo-container">
            <g-image
              src="~/assets/img/bray-logo.svg"
              alt="Bray Logo"
              immediate
              class="brand-logo"
            />
          </div>
          <div class="title-section">
            <h1 class="title">Bray Activators</h1>
            <p class="subtitle">Explore Bray Activators</p>
            <div class="separator"></div>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Placeholder for content specific to Activators -->
    <b-container class="py-5">
      <b-row>
        <b-col>
          <h2>Activators Information</h2>
          <p>Details about Bray Activators will go here.</p>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Bray Activators",
  },
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
          font-size: 1.3rem;
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

          .subtitle {
            font-size: 1.1rem;
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

          .subtitle {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>