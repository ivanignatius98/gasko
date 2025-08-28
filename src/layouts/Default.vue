<template>
  <div class="layout">
    <header id="headerNav">
      <b-navbar
        id="nav"
        class="nav transparent"
        toggleable="lg"
        type="light"
        variant="white"
        fixed="top"
      >
        <b-container>
          <b-navbar-brand href="/" class="d-flex align-items-center">
            <div class="d-flex align-items-center">
              <g-image
                class="nav__logo-img"
                src="~/assets/img/logo1.jpg"
                alt="Logo"
                immediate
              />
              <span class="nav__logo-text">PT Gasko Jaya</span>
            </div>
            <div class="separator mx-3"></div>
            <div class="iso-logos-container d-flex align-items-center">
              <g-image
                class="nav__secondary-logo"
                src="~/assets/img/iso/iso-1.webp"
                alt="Iso Logo"
                immediate
              />
              <g-image
                class="nav__secondary-logo"
                src="~/assets/img/iso/iso-2.webp"
                alt="Iso Logo"
                immediate
              />
              <g-image
                class="nav__secondary-logo"
                src="~/assets/img/iso/iso-3.webp"
                alt="Iso Logo"
                immediate
              />
            </div>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                class="nav__item"
                href="/"
                :active="$route.path == '/'"
                >Home</b-nav-item
              >

              <b-nav-item
                class="nav__item"
                href="/about/info"
                :active="$route.path == '/about/info'"
                >About Us</b-nav-item
              >

              <b-nav-item-dropdown
                class="nav__item nav__item--products"
                right
                text="Products"
              >
                <div class="products-dropdown-container">
                  <!-- Left Column -->
                  <div class="products-column">
                    <div class="product-section">
                      <b-dropdown-item
                        class="text-left product-category"
                        :active="$route.path.includes('/products/pillar-seal')"
                        >Pillar Seal Solutions</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/pillar-seal/mechanical-seal"
                        :active="
                          $route.path.includes(
                            '/products/pillar-seal/mechanical-seal'
                          )
                        "
                        >Mechanical Seal</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/pillar-seal/gaskets"
                        :active="
                          $route.path.includes('/products/pillar-seal/gaskets')
                        "
                        >Gaskets</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/pillar-seal/gland-packings"
                        :active="
                          $route.path.includes(
                            '/products/pillar-seal/gland-packings'
                          )
                        "
                        >Gland Packings</b-dropdown-item
                      >
                    </div>

                    <div class="product-section">
                      <b-dropdown-item
                        class="text-left product-category"
                        :active="$route.path.includes('/products/tanken-seal')"
                        >Tanken Seal</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/mechanical-seal"
                        :active="
                          $route.path.includes(
                            '/products/tanken-seal/mechanical-seal'
                          )
                        "
                        >Mechanical Seal</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/abc-seal"
                        :active="
                          $route.path.includes('/products/tanken-seal/abc-seal')
                        "
                        >ABC Seal</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/carbon-products"
                        :active="
                          $route.path.includes(
                            '/products/tanken-seal/carbon-products'
                          )
                        "
                        >Carbon Products</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/porous-carbon-pad"
                        :active="
                          $route.path.includes(
                            '/products/tanken-seal/porous-carbon-pad'
                          )
                        "
                        >Porous Carbon Pad</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/sv-dispatch"
                        :active="
                          $route.path.includes(
                            '/products/tanken-seal/sv-dispatch'
                          )
                        "
                        >SV Dispatch</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/tanken-seal/vacuum-chamber"
                        :active="
                          $route.path.includes(
                            '/products/tanken-seal/vacuum-chamber'
                          )
                        "
                        >Vacuum Chamber</b-dropdown-item
                      >
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="products-column">
                    <div class="product-section">
                      <b-dropdown-item
                        class="text-left product-category"
                        :active="$route.path.includes('/products/createc')"
                        >Createc</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/createc/sealing-technology"
                        :active="
                          $route.path.includes(
                            '/products/createc/sealing-technology'
                          )
                        "
                        >Sealing Technology</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/createc/pump-bearing"
                        :active="
                          $route.path.includes('/products/createc/pump-bearing')
                        "
                        >Pump Bearing</b-dropdown-item
                      >
                    </div>

                    <div class="product-section">
                      <b-dropdown-item
                        class="text-left product-category"
                        :active="$route.path.includes('/products/bray')"
                        >Bray</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/bray/valves"
                        :active="$route.path.includes('/products/bray/valves')"
                        >Valves</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/bray/activators"
                        :active="$route.path.includes('/products/bray/activators')"
                        >Activators</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="text-left product-subcategory"
                        href="/products/bray/accessories"
                        :active="$route.path.includes('/products/bray/accessories')"
                        >Accessories</b-dropdown-item
                      >
                    </div>
                  </div>
                </div>
              </b-nav-item-dropdown>

              <b-nav-item
                class="nav__item"
                href="/contacts"
                :active="$route.path == '/contacts'"
                >Contact Us</b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <div class="body">
      <slot />
      <a
        href="https://wa.me/+6281372622285"
        class="whatsapp-fab"
        target="_blank"
      >
        <g-image src="~/assets/img/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
    <footer class="footer" id="footerContact">
      <div class="footer__bottom">
        &copy; {{ thisYear }} GASKO All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    thisYear() {
      const dt = new Date();
      return dt.getUTCFullYear();
    }
  },
  mounted() {
    const nav = document.getElementById("nav");

    function navToSolid() {
      if (window.pageYOffset > 50) {
        nav.classList.remove("transparent");
      } else {
        nav.classList.add("transparent");
      }
    }

    window.onscroll = function() {
      navToSolid();
    };
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.body {
  flex-grow: 1;
}

.nav {
  transition: all 0.5s;

  &.transparent {
    @media only screen and (min-width: 992px) {
      background-color: rgba(#fff, 0) !important;
    }
  }

  & &__logo-img {
    height: 4rem;
    width: auto;
  }
  & &__logo-text {
    font-weight: 600;
    font-size: 1.8rem;
    margin-left: 1.5rem;

    @media (max-width: 991.98px) {
      display: none;
    }
  }
  & &__secondary-logo {
    max-height: 4rem;
    width: auto;
  }
  .separator {
    width: 1px;
    height: 3rem;
    background-color: #e9ecef;
  }
  .iso-logos-container {
    gap: 0.5rem;
  }
  & &__item {
    position: relative;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1.5rem;

    @media only screen and (max-width: 1200px) {
      padding: 1rem;
    }

    ul {
      background-color: var(--primary);

      a {
        color: #fff;

        &:hover,
        &:focus,
        &:active {
          color: var(--primary);
          background-color: var(--light);
        }

        &.active {
          color: var(--primary);
          background-color: var(--light);
        }

        position: relative;

        .sub-menu {
          visibility: hidden;
          position: absolute;
          left: 100%;
          top: 0;
          background-color: var(--primary-dark);

          @media only screen and (max-width: 992px) {
            visibility: visible;
            position: relative;
            left: 0;
          }

          a {
            color: #fff;

            &:hover,
            &:focus,
            &:active {
              color: var(--primary-dark);
              background-color: var(--light);
            }

            &.active {
              color: var(--primary-dark);
              background-color: var(--light);
            }
          }
        }
        &:hover .sub-menu {
          visibility: visible;
        }
      }
    }

    // Enhanced Products Dropdown Styles
    &--products {
      .dropdown-menu {
        min-width: 500px;
        padding: 0;

        @media only screen and (max-width: 992px) {
          min-width: auto;
        }
      }
    }
  }
}

// Products Dropdown Layout
.products-dropdown-container {
  display: flex;
  min-width: 500px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    min-width: auto;
  }
}

.products-column {
  flex: 1;
  padding: 0.5rem 0;

  &:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding-right: 1rem;

    @media only screen and (max-width: 992px) {
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-right: 0;
      padding-bottom: 1rem;
    }
  }

  &:last-child {
    padding-left: 1rem;

    @media only screen and (max-width: 992px) {
      padding-left: 0;
      padding-top: 1rem;
    }
  }
}

.product-section {
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.product-category {
  font-weight: 700;
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--light) !important;
    color: var(--primary) !important;
  }

  &.active {
    background-color: var(--light) !important;
    color: var(--primary) !important;
  }
}

.product-subcategory {
  font-weight: 400;
  padding-left: 1.5rem !important;
  color: rgba(255, 255, 255, 0.9) !important;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--light) !important;
    color: var(--primary) !important;
  }

  &.active {
    background-color: var(--light) !important;
    color: var(--primary) !important;
  }
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;

  & &__bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background-color: var(--secondary);
    color: #fff;
  }
}

.whatsapp-fab {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whatsapp-fab img {
  width: 35px;
  height: 35px;
}

.whatsapp-fab:hover {
  background-color: #20b659;
  cursor: pointer;
}

.whatsapp-fab:active {
  background-color: #1a9453;
}
</style>
