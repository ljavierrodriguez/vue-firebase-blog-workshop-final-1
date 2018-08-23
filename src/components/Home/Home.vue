<template>
<div class="home">
  <nav-comp></nav-comp>

  <!-- Page Header -->
  <header class="masthead" style="background-image: url('static/img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Luis Rodriguez</h1>
            <span class="subheading">Bienvenidos a mi Blog</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview">
          <router-link to="/blog/1/detail" class="nav-link">
            <h2 class="post-title">
              Man must explore, and this is exploration at its greatest
            </h2>
            <h3 class="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3>
          </router-link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on September 24, 2018</p>
        </div>
        <hr>
        <div class="post-preview">
          <router-link to="/blog/2/detail" class="nav-link">
            <h2 class="post-title">
              I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
            </h2>
          </router-link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on September 18, 2018</p>
        </div>
        <hr>
        <div class="post-preview">
          <router-link to="/blog/3/detail" class="nav-link">
            <h2 class="post-title">
              Science has not yet mastered prophecy
            </h2>
            <h3 class="post-subtitle">
              We predict too much for the next year and yet far too little for the next ten.
            </h3>
          </router-link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on August 24, 2018</p>
        </div>
        <hr>
        <div class="post-preview">
          <router-link to="/blog/4/detail" class="nav-link">
            <h2 class="post-title">
              Failure is not an option
            </h2>
            <h3 class="post-subtitle">
              Many say exploration is part of our destiny, but it’s actually our duty to future generations.
            </h3>
          </router-link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on July 8, 2018</p>
        </div>
        <hr>
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <footer-comp></footer-comp>
</div>
</template>

<script>
    import Nav from '@/components/Layouts/Navbar';
    import Footer from '@/components/Layouts/Footer';
    export default {
        name: "Home",
        components: {
          'nav-comp' : Nav,
          'footer-comp': Footer
        }
    }
</script>

<style scoped>

</style>
