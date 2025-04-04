<script>
    import Scroller from './scrolly.svelte';
    import MapInfo from './MapInfo.svelte';
    import CalculatorFunction from './CalculatorFunction.svelte';

</script>

<article>

	<h1>Cats and Community in Jamaica Plain</h1>

	<p>
		Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo corporis 
		esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

		<br/>Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis officiis 
		sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

		<br/>Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
		recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
	</p>

	<Scroller/>
	<section id="scrolly">
		<div class="step" data-step="1">
      		<!--FIRST PICTURE HERE: GIDDY WITH BUNNY-->
    	</div>	
		
		<div class="step" data-step="2">
			<p> 
				Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
				corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

				<br/>Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
				officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

				<br/>Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
				recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
			</p>
		</div>

		<div class="step" data-step="3">
			<!--NEXT PICTURES HERE: GIDDY, THEN NIA, THEN POUNCE-->
		</div>

		<div class="step" data-step="4">
			<!--NEXT PICTURES HERE: GIDDY, THEN NIA, THEN POUNCE-->
		</div>

		<div class="step" data-step="5">
			<!--NEXT PICTURES HERE: GIDDY, THEN NIA, THEN POUNCE. Include Mystery Orange Tom?-->
		</div>

		<div class="step" data-step="6">
			<p> 
				Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
				corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

				<br/>Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
				officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

				<br/>Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
				recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
			</p>
		</div>

		<div class="step" data-step="7">
			<!--Picture of Mystery Orange Tom?-->
		</div>

		<div class="step" data-step="8" id="map">
			<!--THIS IS THE MAP STEP-->
			<MapInfo/>
		</div>
	
	</section>

	<div>
		<p> 
			<!--INTRODUCE MYSELF//AUTHOR & COMMUNITY STATEMENT-->
			Lorem ipsum dolor sit amet. Et cumque molestias qui amet alias ex porro minima qui delectus dolores in repudiandae tempora quo
			corporis esse ut natus praesentium! Id cupiditate rerum aut corporis aperiam ut excepturi amet?

			<br/>Nam corporis minus et exercitationem repellendus non placeat ullam. Et suscipit itaque qui aliquid unde eum perferendis 
			officiis sed provident dicta eos necessitatibus saepe est quia dolor et architecto cupiditate.

			<br/>Qui voluptatum totam non corrupti facere est ipsum excepturi et voluptatum voluptatem et nihil natus eos placeat tenetur 33 
			recusandae reiciendis? Ea voluptates ducimus eum repellat officiis id placeat eligendi.
		</p>
	</div>

	<div>
		<CalculatorFunction/>
		<p> 			
			Want to work with Bethany? Details about sitting/rates/etc 
			<br/>In bullet points below
			<br/>And so on and so forth
		</p>
	</div>

</article>