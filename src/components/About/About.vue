<template>
  <div class="blog">
    <nav-comp></nav-comp>

    <!-- Page Header -->
    <header class="masthead" style="background-image: url('static/img/about-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Acerca de Mi</h1>
              <span class="subheading">Esto es lo que hago</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
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
    name: "Blog",
    components: {
      'nav-comp' : Nav,
      'footer-comp': Footer
    }
  }
</script>

<style scoped>

</style>
