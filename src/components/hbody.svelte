<script>
  import '/src/styles.css';
/* import { onMount } from 'svelte';

function scrollToHbody() {
  const hbody = document.getElementById('hbody');
    if (hbody) {
      hbody.scrollIntoView({ behavior: 'smooth' });
  }
}

onMount(() => {
  scrollToHbody(); // Add this line to scroll to hbody on page load

  window.addEventListener('scroll', () => {
    if (window.pageYOffset === 0) {
      scrollToHbody();
    }
  });
});
   */

</script>

<div id="hbody" class="hbody welcometext">
    Hello 👋 
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }

  .section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secvideo{
    position: absolute;
    width: 33%;
    height: 100%;
    overflow: hidden;
  }
  .secvideo:nth-child(1){
    left: 0%;
  }
  .secvideo:nth-child(2){
    left: 66%;
  }
  .secvideo:nth-child(3){
    left: 33%;
  }
  .secvideo:hover{
    filter: brightness(30%);
  }
  .secvideo video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    filter: brightness(100%);
  }
</style>

<div class="container">
  <a  href='https://github.com/aarav-malik'>
  <div class="section secvideo">
    <video playsinline autoplay muted loop >
      <source src="videos/waterfall.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <h1 style="z-index: 10;" class="navigationtext">Projects</h1>
  </div>
</a>
  <div class="section secvideo">
    <video playsinline autoplay muted loop >
      <source src="videos/ggb.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <h1 style="z-index:10;font-size: 10vh;" class="navigationtext">Achievements</h1>
  </div>
  <div class="section secvideo">
    <video playsinline autoplay muted loop >
      <source src="videos/st.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <h1 style="z-index: 10;" class="navigationtext">Skills</h1>
  </div>
</div>
