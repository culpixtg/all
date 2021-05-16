var original = Runner.prototype.gameOver
Runner.prototype.gameOver = function(){}
Runner.instance_.setSpeed(1000)
Runner.prototype.gameOver = original
