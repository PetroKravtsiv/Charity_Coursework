<template>
  <div
    class="container d-flex justify-content-center align-content-center vh-100"
  >
    <div
      class="
        d-flex
        justify-content-center
        align-content-center
        flex-column
        text-center
      "
    >
      <div>
        <h1>Дякуємо, що звернулися до нас за допомогою!</h1>
        <p>Чекайте подальших інструкцій!</p>
      </div>
      <div>
        <button
          class="
            btn btn-primary btn-xl
            js-scroll-trigger
            font-weight-normal
            mr-2
          "
          @click="$router.push('/')"
        >
          На головну
        </button>
        <button
          class="btn btn-primary btn-xl js-scroll-trigger font-weight-normal"
          @click="logoutHandler"
        >
          Вийти з аккаунту
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    async logoutHandler() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
