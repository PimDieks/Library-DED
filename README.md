# Rekenmachine met laoding scherm en datum weergaven
Met deze library voeg je een laoding scherm en datum weergave en een simple reken machine toe
aan je website

## Wat het doet
Hieronder een opsomming van de functionaliteiten van deze library
* Maak een loading screen aan
* Geeft constant de juiste datum weer.
* Rekenmachine voor optellen, aftrekken, delen en vermenigvuldigen

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
		<body>
		<div id="date"></div>
		<div id="rekenmachine">
			<h2>Rekenmachine</h2><br>
			<br>
			<textarea id="nummer1"></textarea>
			<textarea id="nummer2"></textarea>

			<br>
			<br>

			<button id="tel" type="button" onclick="optellen()">Optellen</button>
			<button id="min" type="button" onclick="aftrekken()">Aftrekken</button>
			<button id="deel" type="button" onclick="delen()">delen</button>
			<button id="keer" type="button" onclick="vermenigvuldigen()">vermenigvuldigen</button>
		
			<h3 id="uitkomst"></h3>
		</div>
		<div id="loader-wrapper">

			<div id="loader"></div>

			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>

		</div>

		<script>Library.loader();</script>
		<script>Library.datum();</script>
		<script>Library.rekenen();</script>

	</body>	
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
            }, 1000);//hier pas je het aantal seconde aan.
         
        });

        }
   	</script>
```

###Afbeelding loading screen vervangen?

Je kan het logo aanpassen door loading.png te overschrijven.

##Updates
Hier een opsomming van zaken die ik later zou kunnen toepassen:
volledige rekenmachine porgrammeren met mooie grafische weergave
