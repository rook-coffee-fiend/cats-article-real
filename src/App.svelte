<script lang="ts">
  import Chapter1 from './lib/Components/Chapter1.svelte';
  import DraggableLabel from './DELETEDraggableLabel.svelte';

  //import Scroller from '@sveltejs/svelte-scroller';
  //let index, offset, progress;

  //let count;  // total sections in scroller
	//let index;  // which section number is currently active (starts at 1)
	//let offset;  // how far through the current section you have scrolled (0 to 1)
	//let progress; // how far through the whole scroller you have gone (0 to 1) 
	//let top = 0; // how far from top of screen is fixed background
	//let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	//let bottom = 0.9; // how far from bottom of screen fixed area ends

</script>

<main>
  <!--
  <Scroller
	  {top}
	  {threshold}
	  {bottom}
	  bind:count
	  bind:index
	  bind:offset
	  bind:progress
  >
  -->

	<!-- the FIXED layer of the scroller -->
	<!-- the margin here is a key way to determine overlay vs. side-by-side -->
	<!--<div slot="background" style="margin: 0 0 0 0;">
		<h2>Background Layer</h2>
		
		<p>
			Here you could use an <code>if</code> conditional to decide what
			image to show in the background based on the value of <code>index</code>.
		</p>
		
		<p>current section: <strong>{index + 1}/{count}</strong></p>
		<progress value="{count ? (index + 1) / count : 0}"></progress>

		<p>offset in current section: </p>
		<progress value={offset || 0}></progress>

		<p>total progress </p>
		<progress value={progress || 0}></progress>
		
	</div>-->

	<!-- the SCROLLING layer of the scroller -->
	<!-- the padding here is a key way to determine overlay vs. side-by-side -->
	<!--<div slot="foreground" style="padding: 0 0 0 0;">
		<section>
			<p>Scrolling Layer: section 1</p>
		</section>
		<section>
			<p>Scrolling Layer: section 2</p>
		</section>
		<section>
			<p>Scrolling Layer: section 3</p>
		</section>
		<section>
			<p>Scrolling Layer: section 4</p>
		</section>
		<section>
			<p>Scrolling Layer: section 5</p>
		</section>
	</div>-->

<!--</Scroller>-->

<style>
	h2 {
		margin: 0.5rem 0;	
	}
	
	[slot="background"] {
		background-color: rgba(255,62,0,0.05);
		border-top: 2px solid #ff3e00;
		border-bottom: 2px solid #ff3e00;
		overflow: hidden;
		padding: 1em;
		p {
			margin: 0;
			font-size: 1rem;
		}
	}

	/* allow ONLY the <section> tags to receive clicks, hovers, and other points events */
	[slot="foreground"] {
		pointer-events: none;
		section {
			pointer-events: all;
		}
	}
	
	section {
		height: 80vh; /* make each scrolling "slide" 80% of the vertical screen height */
		background-color: rgba(0,0,0,0.2);
		color: white;
		padding: 1em;
		margin: 0 0 1em 0;
		p {
			max-width: 200px;
			background-color: rgba(0,0,0,0.8);
			padding: 1rem;
			margin-top: 100%; /* center it vertically */
			margin-left: auto; /* center it horizontally */
			margin-right: auto;
		}
	}
</style>

</main>

<!--
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
-->