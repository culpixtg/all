# Chrome Dio Cheat penis
js commands to make your dino much faster

# How to start?
1. Open `chrome://dino`
2. Press `F12` to open console
3. Insert theese commands

```javascript
var original = Runner.prototype.gameOver
```
```javascript
Runner.prototype.gameOver = function(){}
```
```javascript
Runner.instance_.setSpeed(10000)
```
# How to stop it?
Just insert this command

```javascript
Runner.prototype.gameOver = original
```
