<script>
  import '/src/styles.css';
import { onMount } from 'svelte';

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

</script>





<div id="hbody" class="hbody welcometext">
    Hello
    👋 
</div>
<div id="hbody2" class="hbody welcometext">
    I'm Aarav Malik and this is my portfolio.
</div>