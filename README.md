# Specsavers daily memory
Met deze library voeg je een memory game toe aan je website, deze memory game word
 vooraf ingeladen doormiddel van een loading screen, verder word ook de datum toegevoegd.

## Wat het doet
Hieronder een opsomming van de functionaliteiten van deze library
* Maak een loading screen aan
* Geeft constant de juiste datum weer.
* Memory game met aanpasbare afbeeldingen, door de afbeedingen te vervangen in de image map.

## Demo
URL naar [demo](http://athena.fhict.nl/users/i318346/LibraryDED/index.html).

## Installatie
De library kan als volgt geinstalleerd worden in je website. 

###Mogelijkheid 1: GitHub clone

```
 $ git clone https://github.com/PimDieks/Library-DED
 ```


###Mogelijkheid 2: Handmatig
Download de library (zip) en pak het zip bestand uit. Plaats de css, images en js map in je root. 
Voeg de onderstaande HTML code toe aan je body tag in je HTML file:

```html
		<div id="date"></div>
		<div class="wrap">
		<h2>Specsavers memory</h2>
		<div class="game"></div>
			<div class="modal-overlay">
				<div class="modal">
					<button class="restart">Opnieuw spelen?</button>
				</div>
			</div>
		  </div>
		<div id="loader-wrapper">
			<div id="loader"></div>
			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
		</div>
		<script>Library.loader();</script>
		<script>Library.datum();</script>
		<script>Library.memory();</script>

```

Voeg de volgende drie regels toe aan je header tag:

```html
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="js/loader.js"></script>
```
###Laadtijd aanpassen?
ga naar de loader.js in de js map, pas dan bij de library loader het aantal seconde aan, let op 1000 is 1 sec

```html
	<script>
	        Library.loader = function(){

            $(document).ready(function() {
 
            setTimeout(function(){
                $('body').addClass('loaded');
            }, 3000);//hier pas je het aantal seconde aan.
         
        });

        }
   	</script>
```

###Wil je afbeeldingen vervangen?
Wil je liever andere afbeedingen? Ga dan naar de image map en overschijf daar de afbeedlingen 
in de map images,de afbeeldingen van de memory game zijn aan de afbeedling 1.jpg tot 9,jpg, 
ook kan je het logo aanpassen door logo.png te overschrijven.

## Updates
Hier een opsomming van zaken die ik later zou kunnen toepassen:
* Laadscherm dat eerst de afbeedlingen checked en dan pas doorlaad.
* Dynamische aantal kaarten voor de memory game.
