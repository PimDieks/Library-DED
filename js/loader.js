(function(window){
    //I recommend this
    'use strict';

    function defineLibrary(){
        var Library = {}; //Naam van library om aan te roepen

        Library.loader = function(){

            $(document).ready(function() {
 
            setTimeout(function(){
                $('body').addClass('loaded');
            }, 3000);
         
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

        Library.memory = function(){

            var Memory = {

            init: function(cards){
                this.$game = $(".game");
                this.$modal = $(".modal");
                this.$overlay = $(".modal-overlay");
                this.$restartButton = $("button.restart");
                this.cardsArray = $.merge(cards, cards);
                this.shuffleCards(this.cardsArray);
                this.setup();
            },

            shuffleCards: function(cardsArray){
                this.$cards = $(this.shuffle(this.cardsArray));
            },

            setup: function(){
                this.html = this.buildHTML();
                this.$game.html(this.html);
                this.$memoryCards = $(".card");
                this.binding();
                this.paused = false;
            this.guess = null;
            },

            binding: function(){
                this.$memoryCards.on("click", this.cardClicked);
                this.$restartButton.on("click", $.proxy(this.reset, this));
            },

            cardClicked: function(){
                var _ = Memory;
                var $card = $(this);
                if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
                    $card.find(".inside").addClass("picked");
                    if(!_.guess){
                        _.guess = $(this).attr("data-id");
                    } else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
                        $(".picked").addClass("matched");
                        _.guess = null;
                    } else {
                        _.guess = null;
                        _.paused = true;
                        setTimeout(function(){
                            $(".picked").removeClass("picked");
                            Memory.paused = false;
                        }, 600);
                    }
                    if($(".matched").length == $(".card").length){
                        _.win();
                    }
                }
            },

            win: function(){
                this.paused = true;
                setTimeout(function(){
                    Memory.showModal();
                    Memory.$game.fadeOut();
                }, 1000);
            },

            showModal: function(){
                this.$overlay.show();
                this.$modal.fadeIn("slow");
            },

            hideModal: function(){
                this.$overlay.hide();
                this.$modal.hide();
            },

            reset: function(){
                this.hideModal();
                this.shuffleCards(this.cardsArray);
                this.setup();
                this.$game.show("slow");
            },

            shuffle: function(array){
                var counter = array.length, temp, index;

            while (counter > 0) {

                index = Math.floor(Math.random() * counter);

                counter--;

                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
                }
                return array;
            },

            buildHTML: function(){
                var frag = '';
                this.$cards.each(function(k, v){
                    frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
                    <div class="front"><img src="'+ v.img +'"\
                    alt="'+ v.name +'" /></div>\
                    <div class="back"><img src="images/logo.png"\
                    alt="specsavers" /></div></div>\
                    </div>';
                });
                return frag;
            }
        };

        var cards = [
            {
                name: "php",
                img: "images/1.jpg",
                id: 1,
            },
            {
                name: "css3",
                img: "images/2.jpg",
                id: 2
            },
            {
                name: "html5",
                img: "images/3.jpg",
                id: 3
            },
            {
                name: "jquery",
                img: "images/4.jpg",
                id: 4
            }, 
            {
                name: "javascript",
                img: "images/5.jpg",
                id: 5
            },
            {
                name: "node",
                img: "images/6.jpg",
                id: 6
            },
            {
                name: "photoshop",
                img: "images/7.jpg",
                id: 7
            },
            {
                name: "python",
                img: "images/8.jpg",
                id: 8
            },
            {
                name: "rails",
                img: "images/9.jpg",
                id: 9
            },
        ];
        
        Memory.init(cards);

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

