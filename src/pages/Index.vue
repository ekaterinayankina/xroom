<template>
  <Layout>
    <div class="home black">
      <div class="title">
        <h1>We take digital experiences to the next level</h1>
        <hr align="center" width="500" size="2" color="#ffffff" />
        <p>
          X-ROM Consulting Group
        </p>
      </div>
      <div class="whale">
        <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" />
      </div>

      <div class="footer">
        <div class="footer__left">
          <p class="home-links">
            <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
            <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
          </p>
        </div>
        <div class="footer__right">
          <p class="home-links">
            <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
            <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.black {
  background-color: #171717;
  color:white;
}
.home-links a {
  margin-right: 1rem;
}
</style>
