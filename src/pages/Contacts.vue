<template>
  <Layout class="info">
    <section class="banner">
      <b-container>
        <div class="title">Contact Us</div>
        <div class="separator"></div>
      </b-container>
    </section>

    <section class="contact">
      <b-container>
        <b-row class="align-items-start">
          <b-col sm="12" lg="6" class="text-center mb-5 mb-lg-0">
            <b-card class="mb-4">
              <template #header>
                <h4 class="mb-0"><b>Head Office</b></h4>
              </template>
              <b-card-text>
                <p class="text-left">
                  Aniva Grande, Blok GA, Ruko Gading Serpong No.25, <br />
                  Medang, Kec. Pagedangan, Kabupaten Tangerang, <br />
                  Banten 15334, INDONESIA <br />
                </p>
                <table class="text-left">
                  <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>+62813 7282 2285</td>
                  </tr>
                  <tr>
                    <td>Fax</td>
                    <td>:</td>
                    <td>+62 21 626 9024</td>
                  </tr>
                </table>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col sm="12" lg="6">
            <div class="title text-title text-left">Enquiry</div>
            <div class="separator"></div>
            <div class="mb-3">
              For general enquiry please contact
              <a href="mailto:sales@gasko.co.id">sales@gasko.co.id</a>
            </div>

            <ContactCard />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import ContactCard from "../components/contacts/ContactCard.vue";

export default {
  components: { ContactCard },

  metaInfo: {
    title: "Contact Us",
  },
};
</script>

<style lang="scss" scoped>
.layout.info {
  & section.banner {
    padding-top: 10rem;
    padding-bottom: 10rem;
    border-bottom: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(
      to left,
      var(--primary),
      var(--secondary)
    );

    .title {
      font-size: 5rem;
      font-weight: 700;
      color: var(--primary);
    }
  }

  & section.contact {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
}
</style>
