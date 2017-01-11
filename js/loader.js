(function(window){

    'use strict';

    function defineLibrary(){
        var Library = {}; //Naam van library om aan te roepen

        Library.loader = function(){

            $(document).ready(function() {
 
            setTimeout(function(){
                $('body').addClass('loaded');
            }, 1000);
         
        });

        }

        Library.datum = function(){

        var today ={};

        var now = new Date();
        var days = new Array('Zondag','Maandag','Dinsdag','Woensdag','Donderdag','vrijdag','Zaterdag');
        var months = new Array('Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December');
        var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

        function fourdigits(number) {
            return (number < 1000) ? number + 1900 : number;
                                        }
        today =  days[now.getDay()] + ", " +
                 months[now.getMonth()] + " " +
                 date + ", " +
                 (fourdigits(now.getYear())) ;

        document.getElementById('date').innerHTML = today;

        }

        Library.rekenen = function(){

                document.getElementById("tel").addEventListener("click", optellen);
                document.getElementById("min").addEventListener("click", aftrekken);
                document.getElementById("deel").addEventListener("click", delen);
                document.getElementById("keer").addEventListener("click", vermenigvuldigen);

                function optellen() {

                var a = parseInt(document.getElementById("nummer1").value);
                var b = parseInt(document.getElementById("nummer2").value);
                var c = a + b;

                document.getElementById("uitkomst").innerHTML = c;
                
            }

                function aftrekken() {

                var a = parseInt(document.getElementById("nummer1").value);
                var b = parseInt(document.getElementById("nummer2").value);
                var c = a - b;

                document.getElementById("uitkomst").innerHTML = c;

            }

                function delen() {

                var a = parseInt(document.getElementById("nummer1").value);
                var b = parseInt(document.getElementById("nummer2").value);
                var c = a / b;

                document.getElementById("uitkomst").innerHTML = c;

            }

                function vermenigvuldigen() {

                var a = parseInt(document.getElementById("nummer1").value);
                var b = parseInt(document.getElementById("nummer2").value);
                var c = a * b;

                document.getElementById("uitkomst").innerHTML = c;

            }

        }

        return Library;
    }
    //define globally if it doesn't already exist
    if(typeof(Library) === 'undefined'){
        window.Library = defineLibrary();
    }
    else{
        console.log("Library already defined.");
    }
})(window);

