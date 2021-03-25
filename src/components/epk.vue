<template>
  <div>
    <div class="heading">
      <div class="title">
        <h1>PUG</h1>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="text-container my-5">
      <div class="text-block">
        <div>
          Pugs are atypical dogs. They are not “useful” dogs, in a husky or German shepherds kind of way, not
          particularly smart like a border collie, and definitely not the most proportioned or beautiful breed of
          dogs out there. Yet they have been around for centuries, successfully dwelling in palaces and taking naps
          in the castles of both the Chinese and European royalties. Their infinite charisma, as well as a witty
          personality with a lot of humor, has earned them a place in the household of some of the most cold-hearted
          people history has ever known, thus earning the nickname "the clown of dogs".
          <br><br>
          <div class="d-flex align-items-center">
            <iframe src="https://open.spotify.com/embed/album/1xKeg2riD39VcTIfFZ5F5X" width="300" height="260" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div class="ml-5">
              Like their canine counterparts, Pug is an atypical band.
              <br><br>
              They have been playing together in the state of Nayarit for the last two years, building an organic fan-base,
              much more concerned with their electrifying live performances than their instagram posts, (an active web
              presence is not so needed in towns where word-of-mouth and old-school marketing techniques still hold their place).
            </div>
          </div>
          <br><br>
          Their chosen path to success is anomalous as well: four experienced musicians from different cities in Argentina, by luck, or chance or synchronicity altogether converge for a period of time in a town of around 3000 inhabitants: San Francisco, Nayarit, on the Mexican pacific coastline. Instead of going to the Big city to follow the narrative of the average Rock n roll mythology, they decide to stay local, searching for a real human following in an evermore virtual world. The town is actively visited by travelers from all around the world, so it is here where they have the chance to connect with people from very different places while retaining the unique aspects of a small community scene. The music is also something different, driven by poetic lyrics written in Spanish, groovy tunes that strive to get outside the harmonic commonplace, the presence of analogue synthesizers and electronic textures leading them away from the typical surfer-town local band, all these qualities resting placidly on their 4-piece Vocal Harmonies, and the uniqueness of the change in the band’s sound when bass and guitar are alternatively swapped around by the two main singers. The members of pug are: Nicolás Velez, on drums and vocals. Santiago Gavioli on Keys, Synths and Vocals, Valentin Gonzales and Gabriel Domeneghini on Guitar/Bass and Vocals. All of PUG's members produce, record, and write their music, taking active parts of the creative process. At this moment PUG is finishing the recording process of their first full-length Album, alternating local gigs with regional tours to perform in neighboring states. For the future PUG has plans to take their music abroad, playing in venues and festivals, expanding their following to other countries and continents. Follow them on their social networks under @pugband or come and meet them personally on the streets of San Francisco, Nayarit. Ánimo.
          <br><br>
          PS: if you book them, they will come.
        </div>
      </div>
    </div>
    <div class="album">
      <div class="text-center text-container">
      </div>
    </div>
    <div class="videos">
      <div class="text-center text-container">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/qOpgV2a2y6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div class="stage-plot">
      <div class="text-center text-container">
        <h2 class="mb-5">STAGE PLOT</h2>
        <img class="mw-100 mb-5" src="/assets/images/stage-plot-test.png" alt="">
      </div>
    </div>

    <!--<div class="text-center text-container">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/nscHMTnqVo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Epk'
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  .heading {
    background: url('/assets/images/bg-main.jpeg');
    background-attachment: fixed;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    .title {
      position: absolute;
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      z-index: 2;
      h1 {
        font-size: 64px;
        margin-top: -50px;
      }
      .overlay {
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(0deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.50) 50%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }
  .stage-plot {
    padding: 50px 0;
    background: rgba(0,0,0,.5);
  }
</style>
