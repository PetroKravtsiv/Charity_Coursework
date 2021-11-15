<template>
  <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#app"
        >#Допомога<strong></strong>поруч</a
      ><button
        data-toggle="collapse"
        data-target="#navbarResponsive"
        class="navbar-toggler navbar-toggler-right"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-align-justify"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item" role="presentation">
            <router-link class="nav-link" to="/details">Про нас</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link js-scroll-trigger" href="#category">Категорії</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link js-scroll-trigger" href="#programs"
              >Наші програми</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link js-scroll-trigger" href="#patrons"
              >Наші партнери</a
            >
          </li>
          <li class="nav-item" role="presentation" v-if="isAdmin">
            <router-link to="/tickets" class="nav-link">Листи</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header
    class="masthead text-center text-white d-flex"
    :style="{
      backgroundImage: 'url(' + require(`../assets/img/header.jpg`) + ')',
    }"
  >
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-uppercase">
            <strong>Не будь байдужим, зроби диво для незнайомої людини</strong>
          </h1>
          <hr />
        </div>
      </div>
      <div class="col-lg-8 mx-auto">
        <p class="text-faded mb-5">Разом ми зробимо майбутнє кращим</p>
        <button
          class="btn btn-primary btn-xl js-scroll-trigger font-weight-normal"
          @click="btnHandler"
        >
          Долучитись
        </button>
      </div>
    </div>
  </header>
  <section id="about" class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-8 mx-auto text-center">
          <h2 class="text-white section-heading">Про нас</h2>
          <hr class="light my-4" />
          <p class="text-faded mb-4">
            Протягом багатьох років сотні тисяч потребуючих українців отримали
            матеріальну, соціальну, психологічну та юридичну допомогу завдяки
            нашій роботі. Робота #ДОПОМОГАПОРУЧ сфокусована на 6 основних
            напрямках:<br />
            • Допомога дітям, молоді та сім’ям, які перебувають у кризі<br />
            • Охорона здоров’я<br />
            • Допомога людям з особливими потребами<br />
            • Соціальні проблеми міграції<br />
            • Допомога в надзвичайних ситуаціях
          </p>
          <a
            class="btn btn-light btn-xl js-scroll-trigger"
            role="button"
            href="#category"
            >Дізнатись детальніше</a
          >
        </div>
      </div>
    </div>
  </section>
  <section id="category">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">#ДОПОМОГАПОРУЧ</h2>
          <hr class="my-4" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 text-center">
          <div class="mx-auto service-box mt-5">
            <i
              class="fa fa-child fa-4x text-primary mb-3 sr-icons"
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Діти</h3>
            <p class="text-muted mb-0">Дай їм краще майбутнє</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 text-center">
          <div class="mx-auto service-box mt-5">
            <i
              class="fa fa-users fa-4x text-primary mb-3 sr-icons"
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-delay="200"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Літні люди</h3>
            <p class="text-muted mb-0">Дай їм причину посміхатись</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 text-center">
          <div class="mx-auto service-box mt-5">
            <i
              class="fa fa-handshake-o fa-4x text-primary mb-3 sr-icons"
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-delay="400"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Непрацездатні</h3>
            <p class="text-muted mb-0">Допоможи ти і допоможуть тобі</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 text-center">
          <div class="mx-auto service-box mt-5">
            <i
              class="fa fa-heart fa-4x text-primary mb-3 sr-icons"
              data-aos="fade"
              data-aos-duration="200"
              data-aos-delay="600"
              data-aos-once="true"
            ></i>
            <h3 class="mb-3">Волонтер</h3>
            <p class="text-muted mb-0">Будь одним із нас</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="programs" class="p-0">
    <div class="container-fluid p-0">
      <div class="row no-gutters popup-gallery">
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/1.jpg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/1.jpg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Софійка, 6 рочків</span>
                  <h6>крововилив у мозку</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/2.jpg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/2.jpg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Максим, 2 рочки</span>
                  <h6>вади серця</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/3.jpeg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/3.jpeg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Володимир, 27 років</span>
                  <h6>поранений у ході АТО</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/4.jpg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/4.jpg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Анатолій, 78 років</span>
                  <h6>хвороба Паркінсона</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/5.jpg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/5.jpg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Сергій, 32 роки</span>
                  <h6>волонтер</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-sm-6 col-lg-4">
          <a class="programs-box" href="../assets/img/thumbnails/6.jpg"
            ><img
              class="img-fluid"
              src="../assets/img/thumbnails/6.jpg"
              style="height: 380px"
            />
            <div class="programs-box-caption">
              <div class="programs-box-caption-content">
                <div class="project- text-faded"><span></span></div>
                <div class="project-name">
                  <span>Сім'я Андрюховичів</span>
                  <h6>переселенці</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="patrons">
    <!-- patrons -->
    <div class="container">
      <h1 class="section-heading">Наші партнери</h1>
      <hr class="my-4" />
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-4 d-flex justify-content-center">
                  <img
                    src="../assets/img/lpnu.jpg"
                    alt="patron-3"
                    class="patron-images ml-3"
                  />
                </div>
                <div class="col-12 col-sm-8">
                  <h4>Національний університет "Львівська політехніка"</h4>
                  <h6>м.Львів</h6>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-4 d-flex justify-content-center">
                  <img
                    src="../assets/img/karitas.jpg"
                    alt="patron-1"
                    class="patron-images ml-3"
                  />
                </div>
                <div class="col-12 col-sm-8">
                  <h4 class="card-title">
                    Міжнародний благодійний фонд "Карітас України"
                  </h4>
                  <h6>м.Львів</h6>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-4 d-flex justify-content-center">
                  <img
                    src="../assets/img/red.jpg"
                    alt="patron-2"
                    class="patron-images ml-3"
                  />
                </div>
                <div class="col-12 col-sm-8">
                  <h4 class="card-title">
                    Товариство Червоного Хреста України
                  </h4>
                  <h6>м.Київ</h6>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">Допоможи нам зробити світ кращим!</h2>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </section>
  <footer>© by Petro Kravtsiv</footer>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      isAdmin: false,
    };
  },

  methods: {
    async btnHandler() {
      if (this.$store.getters.auth) {
        const a = await this.$store.dispatch(
          "getTicket",
          this.$store.getters.auth.uid
        );
        if (!a) {
          this.$router.push("/aboutme");
        } else {
          this.$router.push("/success");
        }
      } else {
        this.$router.push("/register");
      }
    },
  },

  async mounted() {
    if (this.$store.getters.auth) {
      this.isAdmin = !!(await this.$store.dispatch("admin"));
      console.log("tyt");
    }
  },
};
</script>

<style scoped>
footer {
  padding: 15px 0;
  text-align: center;
  background: #f05f40;
  height: 80px;
}
</style>
