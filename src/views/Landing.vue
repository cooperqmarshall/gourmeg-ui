<template>
  <div>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <div class="box hero-card">
                <div class="box-content">
                  <h1 class="title is-size-1 has-text-centered-mobile">
                    Gourmeg &#127837;
                  </h1>
                  <h2 class="subtitle has-text-centered-mobile">
                    Save your
                    <span class="has-text-weight-bold is-italic">favorite</span>
                    recipes in one place
                  </h2>
                </div>
              </div>
              <div class="block">
                <div class="level is-mobile">
                  <div class="level-item">
                    <button
                      @click="this.$router.push('register')"
                      class="button is-primary is-size-6 is-size-5-tablet"
                    >
                      Register
                    </button>
                  </div>
                  <div class="level-item">
                    <button
                      @click="this.$router.push('signin')"
                      class="button is-light is-primary is-size-6 is-size-5-tablet"
                    >
                      Sign In
                    </button>
                  </div>
                  <div class="level-item">
                    <button class="button is-dark is-size-6 is-size-5-tablet">
                      <a
                        href="https://github.com/cooperqmarshall/gourmeg-ui"
                        target="_blank"
                        >Github</a
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h3 class="title has-text-centered">How does it work?</h3>
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <div class="card" data-aos="fade-up">
            <div class="card-content">
              <div class="content">
                <h3 class="title">
                  <span class="has-text-info">1.</span> Search for Recipes
                </h3>
                <p class="subtitle">
                  Search the internet to find recipes that you like from your
                  favorite websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <div class="card" data-aos="fade-up">
            <div class="card-content">
              <div class="content">
                <h3 class="title">
                  <span class="has-text-info">2.</span> Add Recipes to Lists
                </h3>
                <p class="subtitle">
                  Save recipes into organized lists by copying the recipe
                  website's url into the Gourmeg "Recipe Website URL" box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <div class="card" data-aos="fade-up">
            <div class="card-content">
              <div class="content">
                <h3 class="title">
                  <span class="has-text-info">3.</span> View ingredients and
                  instructions
                </h3>
                <p class="subtitle">
                  Using webscraping, the recipe's ingredients and instructions
                  are saved for quick and easy access so you don't have to
                  scroll through ads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block has-text-centered">
        <button
          data-aos="zoom-in"
          @click="this.$router.push('register')"
          class="button is-size-5 is-primary"
        >
          Try it out!
        </button>
      </div>
    </div>
    <footer class="footer">
      <div>Created by Cooper Marshall</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>
<style scoped>
.hero {
  background: url("/banner.jpg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100% auto;
}
@media only screen and (max-width: 912px) {
  .hero {
    background-size: auto 100%;
  }
}
.hero-card {
  background-color: rgba(211, 211, 211, 0.7);
  border-radius: 15px;
}
a {
  color: white;
}
.section > .columns {
  margin-bottom: 50px;
}
</style>
