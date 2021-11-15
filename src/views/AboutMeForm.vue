<template>
  <form @submit.prevent="formHandler">
    <div class="container">
      <h1>Заповніть наступні поля, для відправлення заявки на допомогу</h1>
      <p>Дякуємо, що ви вирішили стати учасником нашої благодійної програми</p>
      <hr style="background-color: #f05f40; height: 3px" />

      <label for="name"><b>Ваше ім'я та прізвище</b></label>
      <input
        id="name"
        type="text"
        placeholder="Введіть ваше ім'я та прізвище"
        name="email"
        v-model="name"
        required
      />

      <label for="location"><b>Місце проживання</b></label>
      <input
        id="location"
        type="text"
        placeholder="Введіть ваше місце проживання"
        name="psw"
        v-model="location"
        required
      />

      <label for="birthday"><b>Введіть дату нароження</b></label>
      <input id="birthday" type="date" v-model="birthday" required />

      <label><b>Опишіть вашу проблему</b></label>
      <textarea type="" v-model="info" />

      <button type="submit" class="registerbtn">Відправити</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AboutMeForm",

  data() {
    return {
      name: "Олег Іванов",
      birthday: "2002-03-05",
      info: "Жопа по бабкам",
      location: "Львsds",
    };
  },

  methods: {
    async formHandler() {
      const formData = {
        name: this.name,
        birthday: this.birthday,
        info: this.info,
        location: this.location,
      };
      await this.$store.dispatch("addTicket", formData);
      this.$router.push("/success");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="date"],
textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

textarea {
  height: 115px;
  resize: none;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #f05f40;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
