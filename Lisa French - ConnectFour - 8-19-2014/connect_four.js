// Lisa French's Connect 4 example for Wikimedia
// 8/19/2014
// www.lisafrench.com
// // // // // // // // // // // // // // // // // // // 	
	$(document).ready(function () {
       var gameOver = false;
       var gameOver = false;
	   var youWin = $('#youWin');
	   var div = $(".column div");
		$(".black").hide();
         // This section makes sure you can only click on the lower most circle, and then gives the circles the correct color
            div.click(function () {
                var currentBox = $(this);
                if (!currentBox.hasClass("clicked")) {
                    if (currentBox.is(':last-child') || currentBox.next("div").hasClass("clicked")) {
                        if (gameOver == false) {
                            if ($('#playersTurn span.red').is(':visible')) {
                                currentBox.addClass("clicked");
                                currentBox.addClass("red");
                            } else {
                                currentBox.addClass("clicked");
                                currentBox.addClass("black");
                            }
                            $("#playersTurn span").toggle();
                            checkBoard(currentBox);
                        }
                    }
                }
            });
                    
                
            // This section just checks for any winning combination with each click
            function checkBoard(currentBox) {
                var currentBoxClass = currentBox.attr("class");
                var youWinColor = currentBoxClass.split(" ")[1];
           
                // This section checks for any winning combinations vertically
                if (currentBox.next().hasClass(currentBoxClass)) {
                    var secondBox = currentBox.next();
                    if (secondBox.next().hasClass(currentBoxClass)) {
                        var thirdBox = secondBox.next();
                        if (thirdBox.next().hasClass(currentBoxClass)) {
                            gameWon(youWinColor);
                        }
                    }
                }
            
                //This section checks for winning combinations horizontally
                var whichChild = currentBox.parent().children("div").index(currentBox);
          
                var checkRightOne = currentBox.parent().next().children("div:nth-child(" + (whichChild + 1) + ")");
                var checkRightTwo = currentBox.parent().next().next().children("div:nth-child(" + (whichChild + 1) + ")");
                var checkRightThree = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild + 1) + ")");
                    
                var checkLeftOne = currentBox.parent().prev().children("div:nth-child(" + (whichChild + 1) + ")");
                var checkLeftTwo = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild + 1) + ")");
                var checkLeftThree = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild + 1) + ")");
            
                if (checkRightOne.hasClass(currentBoxClass) && checkRightTwo.hasClass(currentBoxClass) && checkRightThree.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }           
                if (checkRightOne.hasClass(currentBoxClass) && checkRightTwo.hasClass(currentBoxClass) && checkLeftOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }
                if (checkRightOne.hasClass(currentBoxClass) && checkLeftTwo.hasClass(currentBoxClass) && checkLeftOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkLeftOne.hasClass(currentBoxClass) && checkLeftTwo.hasClass(currentBoxClass) && checkLeftThree.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }
            
            
                // This section checks for wins diagonally
                var checkRightOneDownOne = currentBox.parent().next().children("div:nth-child(" + (whichChild + 2) + ")");
                var checkRightTwoDownTwo = currentBox.parent().next().next().children("div:nth-child(" + (whichChild + 3) + ")");
                var checkRightThreeDownThree = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild + 4) + ")");
                    
                var checkLeftOneDownOne = currentBox.parent().prev().children("div:nth-child(" + (whichChild + 2) + ")");
                var checkLeftTwoDownTwo = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild + 3) + ")");
                var checkLeftThreeDownThree = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild + 4) + ")");
                    
                var checkRightOneUpOne = currentBox.parent().next().children("div:nth-child(" + whichChild + ")");
                var checkRightTwoUpTwo = currentBox.parent().next().next().children("div:nth-child(" + (whichChild - 1) + ")");
                var checkRightThreeUpThree = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild - 2) + ")");
                    
                var checkLeftOneUpOne = currentBox.parent().prev().children("div:nth-child(" + whichChild + ")");
                var checkLeftTwoUpTwo = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild - 1) + ")");
                var checkLeftThreeUpThree = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild - 2) + ")");
                    
                       
                // These check in all directions and tells the player (red or black) who won the match.
                if (checkRightOneDownOne.hasClass(currentBoxClass) && checkRightTwoDownTwo.hasClass(currentBoxClass) && checkRightThreeDownThree.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }
                if (checkLeftOneUpOne.hasClass(currentBoxClass) && checkRightOneDownOne.hasClass(currentBoxClass) && checkRightTwoDownTwo.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkLeftTwoUpTwo.hasClass(currentBoxClass) && checkLeftOneUpOne.hasClass(currentBoxClass) && checkRightOneDownOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkLeftThreeUpThree.hasClass(currentBoxClass) && checkLeftTwoUpTwo.hasClass(currentBoxClass) && checkLeftOneUpOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkLeftOneDownOne.hasClass(currentBoxClass) && checkLeftTwoDownTwo.hasClass(currentBoxClass) && checkLeftThreeDownThree.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkRightOneUpOne.hasClass(currentBoxClass) && checkLeftOneDownOne.hasClass(currentBoxClass) && checkLeftTwoDownTwo.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }   
                if (checkRightTwoUpTwo.hasClass(currentBoxClass) && checkRightOneUpOne.hasClass(currentBoxClass) && checkLeftOneDownOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }
                if (checkRightThreeUpThree.hasClass(currentBoxClass) && checkRightTwoUpTwo.hasClass(currentBoxClass) && checkRightOneUpOne.hasClass(currentBoxClass)) {
                    gameWon(youWinColor);
                }
            }
                
                
            // This section just resets the game.
            $(".resetGame").click(function () {
                div.each(function () {
                    $(this).attr("class", "");
                });
                gameOver = false;
                return false;
            });
                
                
            // This shows a popup telling you who won
            function gameWon (youWinColor) {
                gameOver = true;
                youWin.fadeIn().css('background-color', youWinColor);
                $('#youWinColor').text(youWinColor);
            }
                
                
            // This closes the box and/or resets the game
            $(".closeWinBox, .resetGame").click(function () {
                youWin.fadeOut();
            });
            
            
            //end document ready
        });