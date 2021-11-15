<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="text-center">Про нас</h1>
      <button
        class="btn btn-primary btn-xl js-scroll-trigger font-weight-normal"
        @click="$router.push('/')"
      >
        На головну
      </button>

      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center">
          <div class="details-info bg-primary text-faded mr-5">
            <div class="details-item">
              <h1>Наші резвітизи</h1>
              <ul>
                <li>UA41673958000026**********91</li>
                <li>UA41673958000025**********91</li>
                <li>UA41673958000024**********91</li>
              </ul>
            </div>
            <div class="details-item">
              <h1>Наші контакти</h1>
              <ul>
                <li>Mail: <b>helpisnear@gmail.com</b></li>
                <li>Номер телефону: 380676864356</li>
                <li>Номер телефону: 380676864364</li>
                <li>Номер телефону: 380676864323</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3628047359557!2d24.012248115709255!3d49.83564017939527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7a31f0dccd%3A0x9869cc7025bc8e3f!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgItCb0YzQstGW0LLRgdGM0LrQsCDQn9C-0LvRltGC0LXRhdC90ZbQutCwIg!5e0!3m2!1suk!2sua!4v1636804068570!5m2!1suk!2sua"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
};
</script>

<style scoped>
.details-info {
  width: 400px;
  height: 400px;
  border-radius: 20px;
  padding: 15px;
}
.map {
  width: 400px;
  height: 400px;
  border-radius: 20px;
}
button {
  position: absolute;
  top: 15px;
  right: 25px;
}

.wrapper {
  width: 100vw;
  height: 100vh;

  background: url("../assets/img/header.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
