<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Message:" label-for="message">
        <b-form-textarea
          id="message"
          v-model="form.message"
          placeholder="Message"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="primary" variant="primary" class="mr-2">Submit</b-button>
      <b-button type="reset" variant="danger" @reset="reset">Reset</b-button>

      <p
        class="err color-green"
        :class="[{ 'color-red': serverMessage.includes('Error') }]"
      >
        {{ serverMessage }}
      </p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
      },

      serverMessage: "",
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const data = {
        name: this.form.name,
        email: this.form.email,
        subject: "Gasko Website Notification",
        message: `<h4>New Enquiry From Website</h4></br>
              <p><b>Name:</b> ${this.form.name}</p>
              <p><b>Email:</b> ${this.form.email}</p>
              <p><b>Message:</b> ${this.form.message}</p>`,
      };

      fetch("/send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      })
        .then((res) => {
          this.serverMessage = "Request send";
        })
        .catch(() => {
          this.serverMessage =
            "Error, you can still contact us with the information on this page, thankyou!";
          this.reset();
        });
    },
    reset() {
      this.form = {
        email: "",
        name: "",
        message: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.err {
  font-size: 12px;
}

.color-red {
  color: red !important;
}

.color-green {
  color: green;
}
</style>
