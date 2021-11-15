<template>
  <div class="container">
    <button
      class="btn btn-primary btn-xl js-scroll-trigger font-weight-normal"
      @click="$router.push('/')"
    >
      На головну
    </button>
    <h1 class="text-center">Список листів</h1>

    <div class="tickets-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Прізвище, Ім'я</th>
            <th scope="col">День народження</th>
            <th scope="col">Місце проживання</th>
            <th scope="col">Проблема</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(
              { info: { uid, name, birthday, info, location } }, index
            ) in tickets"
            :key="uid"
          >
            <th scope="row">{{ index }}</th>
            <td>{{ name }}</td>
            <td>{{ birthday }}</td>
            <td>{{ location }}</td>
            <td>{{ info }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketsPage",

  data() {
    return {
      tickets: [],
    };
  },

  async mounted() {
    this.tickets = await this.$store.dispatch("getTickets");
  },
};
</script>

<style scoped>
button {
  position: absolute;
  top: 15px;
  right: 25px;
}
</style>
