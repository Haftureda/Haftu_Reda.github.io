$(document).ready(function () {
    "use strict";
    var Xval = 300;
    var Yval = 300;
    $('#puzzlearea div').click(move);
    function move() {
        if (isMovable(this.x, this.y)) {
            var tempX = this.x;
            var tempY = this.y;
            //swap empty value with the selected value
            this.x = Xval;
            this.y = Yval;
            //to change the the id and assign background image
            $(this).attr('id', (this.x / 100) + "_" + (this.y / 100));

            Xval = tempX;
            Yval = tempY;

            $(this).css({
                'left': this.x + 'px',
                'top': this.y + 'px'
            });
        }
        
        //check whether you won the puzzel or not
        var col = 0;
        var row = 0;
        $(".puzzlepiece").each(function () {
            if ($(this).attr('id') === row + "_" + col) {
                row++;
                if (row === 4) {
                    row = 0;
                    col++;
                }
            }
        });
        if (row === 3 && col === 3) {
            var r = confirm("You Won!! \n if you want to restart press ok");
            if (r === true) {
                sheffel();
            } else {
                
            }
        }
        
    }
    $('#puzzlearea div').mouseover(function () {
        if (isMovable(this.x, this.y)) {
            $(this).addClass("movablepiece");
        }
    });
    $('#puzzlearea div').mouseleave(function () {
        if ($(this).hasClass("movablepiece")) {
            $(this).removeClass("movablepiece");
        }
    });
    $('#shufflebutton').click(sheffel);
    function sheffel() {
        for (var i = 0; i < 100; i++) {
            var row = Math.floor((Math.random() * 4) % 4);
            var col = Math.floor((Math.random() * 4) % 4);
            if ((row !== Xval / 100) || (col !== Yval / 100)) {
                var selected = $("#" + row + "_" + col);
                //alert(selected[0].x);
                if (isMovable(selected[0].x, selected[0].y)) {
                    selected.triggerHandler("click");
                }
            }
        }
    }
    function isMovable(x, y) {
        if (Xval === x && Yval === y - 100){//top
            return true;
        }
        else if (Xval === x && Yval === y + 100){//bottom
            return true;
        }
        else if (Xval === x - 100 && Yval === y){//left
            return true;
        }
        else if (Xval === x + 100 && Yval === y){//right
            return true;
        }
        else{
            return false;
        }
    }


    var init = function () {
        $("#puzzlearea div").each(function (index) {
            // calculate x and y for this piece
            var x = ((index % 4) * 100);
            var y = (Math.floor(index / 4) * 100);
            $(this).addClass("puzzlepiece");
            //creating id for all div
            $(this).attr('id', (x / 100) + "_" + (y / 100));
            // set basic style and background
            $(this).css({
                'left': x + 'px',
                'top': y + 'px',
                'background-image': 'url("background.jpg")',
                'background-position': -x + 'px ' + (-y) + 'px'

            });
            // store x and y for later
            this.x = x;
            this.y = y;

        });
    };
    init();

});


    