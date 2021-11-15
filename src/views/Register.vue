<template>
  <form @submit.prevent="formHandler">
    <div class="container">
      <h1>Заповніть наступні поля, для реєстрації</h1>
      <p>Дякуємо, що ви вирішили стати учасником нашої благодійної програми</p>
      <hr style="background-color: #f05f40; height: 3px" />

      <label for="email"><b>Email</b></label>
      <input
        id="email"
        type="text"
        placeholder="Введіть Email"
        name="email"
        v-model="email"
        required
      />

      <label for="psw"><b>Пароль</b></label>
      <input
        id="psw"
        type="password"
        placeholder="Введіть пароль"
        name="psw"
        v-model="password"
        required
      />

      <label for="psw-repeat"><b>Підтвердити пароль</b></label>
      <input
        id="psw-repeat"
        type="password"
        placeholder="Підтвердіть пароль"
        name="psw-repeat"
        v-model="confirmPassword"
        required
      />
      <button type="submit" class="registerbtn">Долучитись до програми</button>
      <p v-if="error" class="text-danger">
        * Такий email зайняти або не співпадають паролі!
      </p>
    </div>
    <div class="container signin">
      <p>Уже маєте акаунт? <router-link to="/auth">Увійти</router-link></p>
    </div>
    <br />
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      error: false,
    };
  },
  methods: {
    async formHandler() {
      if (this.password !== this.confirmPassword) {
        this.error = true;
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/aboutme");
      } catch (e) {
        this.error = true;
        console.log(e);
      }
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
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
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
