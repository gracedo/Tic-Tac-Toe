(function (root) {
	var TTT = root.TTT = ( root.TTT || {});

	var GameUI = TTT.GameUI = function(game, board) {
		this.game = game;
		this.board = board;
		this.board.find('.square').on("click", this.handleClick.bind(this));

		this.run();
	};

	GameUI.prototype.handleClick = function(event){
		var game = this.game;
		var coords = eval($(event.target).data("id"));
    // var color = game.player === "x" ? "red" : "blue";

		if (game.valid(coords)) {
			game.move(coords);
      // $(event.target).css('background-color', color);
      $(event.target).html(game.player);
		} else {
			alert("Invalid move!");
		}

		this.run();
	};

	GameUI.prototype.reset = function() {
    // $('.square').css('background-color', "");
		$('.square').html("");
	};

  GameUI.prototype.run = function () {
    var game = this.game;
		var gameui = this;

    if (game.winner()) {
      alert("Player " + game.winner() + " won!");
			this.game = new that.TTT.Game();
			this.reset();
    } else {
      game.printBoard();
    };
	};
})(this);

var that = this;

$(document).ready(function () {
	var game = new that.TTT.Game();
	var $board = $('.container');
	var gameUi = new that.TTT.GameUI(game, $board);
})
