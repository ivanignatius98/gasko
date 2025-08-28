<template>
  <section class="hierarchical-product-section">
    <b-container>
      <!-- Main Category Tabs -->
      <div class="main-tabs">
        <div class="tab-nav">
          <button
            v-for="(item, index) in items"
            :key="index"
            :class="['tab-btn', { active: activeMainTab === index }]"
            @click="selectMainTab(index)"
          >
            {{ item.title }}
          </button>
        </div>
      </div>

      <!-- Active Main Category Content -->
      <div v-if="items[activeMainTab]" class="main-content">
        <div class="category-header">
          <g-image
            v-if="items[activeMainTab].img"
            :src="imgUrl(items[activeMainTab].img)"
            class="category-image"
          />
          <h2>{{ items[activeMainTab].title }}</h2>
          <p>{{ items[activeMainTab].desc }}</p>
        </div>

        <!-- Sub Category Grid -->
        <div
          v-if="
            items[activeMainTab].children &&
              items[activeMainTab].children.length > 0
          "
          class="sub-categories"
        >
          <div class="row">
            <div
              v-for="(child, childIndex) in items[activeMainTab].children"
              :key="childIndex"
              class="col-lg-4 col-md-6 mb-4"
            >
              <div
                :class="[
                  'sub-category-card',
                  { active: activeSubTab === childIndex }
                ]"
                @click="selectSubTab(childIndex)"
              >
                <div class="card-header">
                  <h4>{{ child.title }}</h4>
                  <p>{{ child.desc }}</p>
                </div>
                <div class="card-arrow">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Selected Sub Category Products -->
        <div
          v-if="selectedSubCategory && selectedSubCategory.products"
          class="products-section"
        >
          <div class="products-header">
            <h3>{{ selectedSubCategory.title }} Products</h3>
            <div class="breadcrumb">
              <span>{{ items[activeMainTab].title }}</span>
              <i class="fas fa-chevron-right"></i>
              <span>{{ selectedSubCategory.title }}</span>
            </div>
          </div>

          <div class="products-grid">
            <div class="row">
              <div
                v-for="(product, productIndex) in selectedSubCategory.products"
                :key="productIndex"
                class="col-lg-6 col-md-12 mb-4"
              >
                <div class="product-card">
                  <g-image
                    v-if="product.img"
                    :src="imgUrl(product.img)"
                    class="product-image"
                  />
                  <div class="product-content">
                    <h5>{{ product.name }}</h5>
                    <p>{{ product.description }}</p>
                    <div class="product-actions">
                      <button class="btn btn-outline-primary btn-sm">
                        View Details
                      </button>
                      <button class="btn btn-primary btn-sm">
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
const images = require.context(
  "@/assets/img/products/",
  true,
  /\.(png|jpe?g|svg|gif)$/
);

export default {
  name: "HierarchicalProductSection",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    initialTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeMainTab: this.initialTab,
      activeSubTab: null
    };
  },
  watch: {
    initialTab(newVal) {
      this.activeMainTab = newVal;
      this.activeSubTab = null;
      if (this.items[this.activeMainTab]?.children?.length > 0) {
        this.activeSubTab = 0;
      }
    }
  },
  computed: {
    selectedSubCategory() {
      if (
        this.activeSubTab !== null &&
        this.items[this.activeMainTab]?.children
      ) {
        return this.items[this.activeMainTab].children[this.activeSubTab];
      }
      return null;
    }
  },
  methods: {
    imgUrl(path) {
      try {
        return images("./" + path);
      } catch (e) {
        return "";
      }
    },
    selectMainTab(index) {
      this.activeMainTab = index;
      this.activeSubTab = null; // Reset sub tab when main tab changes
      this.$emit("main-tab-changed", index);
    },
    selectSubTab(index) {
      this.activeSubTab = index;
      this.$emit("sub-tab-changed", {
        mainTab: this.activeMainTab,
        subTab: index
      });
    }
  },
  mounted() {
    this.activeMainTab = this.initialTab;
    // Auto-select first sub category if available
    if (this.items[this.activeMainTab]?.children?.length > 0) {
      this.activeSubTab = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.hierarchical-product-section {
  padding: 4rem 0;

  .main-tabs {
    margin-bottom: 3rem;

    .tab-nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      border-bottom: 2px solid #e9ecef;
      padding-bottom: 1rem;

      .tab-btn {
        padding: 1rem 2rem;
        background: transparent;
        border: 2px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        color: #6c757d;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.4rem;

        &:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.05);
        }

        &.active {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }
      }
    }
  }

  .main-content {
    .category-header {
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        color: var(--primary);
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        color: #6c757d;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .category-image {
      max-width: 200px;
      margin-bottom: 1rem;
      border-radius: 12px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      overflow: hidden;
    }

    .sub-categories {
      margin-bottom: 3rem;

      .sub-category-card {
        background: #fff;
        border: 2px solid #e9ecef;
        border-radius: 12px;
        padding: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

        &:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        &.active {
          border-color: var(--primary);
          background: linear-gradient(
            135deg,
            rgba(var(--primary-rgb), 0.05),
            rgba(var(--primary-rgb), 0.02)
          );
        }

        .card-header {
          flex: 1;

          h4 {
            color: var(--primary);
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          p {
            color: #6c757d;
            margin: 0;
            line-height: 1.5;
          }
        }

        .card-arrow {
          color: var(--primary);
          margin-left: 1rem;
        }
      }
    }

    .products-section {
      .products-header {
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        h3 {
          color: var(--primary);
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6c757d;

          i {
            font-size: 0.8rem;
          }

          span:last-child {
            color: var(--primary);
            font-weight: 600;
          }
        }
      }

      .products-grid {
        .product-card {
          background: #fff;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 1.5rem;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

          &:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            margin-bottom: 1rem;
            border-radius: 8px;
            aspect-ratio: 21 / 9;
            overflow: hidden;
          }

          .product-content {
            h5 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
              line-height: 1.3;
            }

            p {
              color: #6c757d;
              margin-bottom: 1.5rem;
              line-height: 1.5;
            }

            .product-actions {
              display: flex;
              gap: 0.5rem;
              flex-wrap: wrap;

              .btn {
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-weight: 500;
                flex: 1;
                min-width: 120px;
              }
            }
          }
        }
      }
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hierarchical-product-section {
    .main-tabs .tab-nav {
      flex-direction: column;
      align-items: center;

      .tab-btn {
        width: 100%;
        max-width: 300px;
      }
    }

    .main-content {
      .category-header h2 {
        font-size: 2rem;
      }

      .products-section .products-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .sub-categories .sub-category-card {
        padding: 1.5rem;
      }
    }
  }
}
</style>
