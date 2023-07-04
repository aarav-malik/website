<script>
    import '/src/styles.css';
</script>
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
  /*   .secvideo:hover{
      filter: brightness(30%);
    } */
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
  
  <div id="footer"class="container">
    <div class="section secvideo">
      <video playsinline autoplay muted loop >
        <source src="videos/ggb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <!-- <h1 style="z-index: 10;" class="navigationtext">Projects</h1> -->
    </div>
  </div>