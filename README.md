# Blooket Hacks and more!
These are hacks for blooket. There are hacks such as give tokens for buying blooks (sadly only 500 per day), and cheats in-game like infinite gold in tower of doom or gold rush! I took cheats from another github repo, revised the code a bit. (There are other hacks if you scroll down)

**Scroll down for video tutorial on how to make bookmarklets**

## Mod Menu:
Mod Menu for blooket (Drag the link below to your bookmarks bar):
```
javascript:fetch('https://ieatppplyum.github.io/blooket-hack/index.js').then(r=>r.text()).then(t=>(new Function(t))())
```

To make the mod menu appear click on "Add Injectable", And paste the URLS in that are listed below.

Injectable URL 1: `https://helloieat.github.io/injectables/myrayuo.js` 

Injectable URL 2: `https://helloieat.github.io/injectables/is%20lit.js` 

## Bookmarklets:
```
Blooket hacks can be found here https://github.com/helloieat/blooket-hack-1
```

Bookmarklet tutorial:
https://streamable.com/t4u7i7

1. Make a bookmark (the star on the right side of the url bar if you are using chrome)
2. Click on more at the bottom left corner
3. Delete everything in the url box
4. Type `javascript:`
5. Paste in the code

## Blooket BruteForcer:
BLOOKET FIXED THE JOIN API SO IT ONLY GUESSES GAME PINS. (its super accurate though, only when a lot of games are being hosted).
```
It can be found here https://replit.com/@mikeylmao/Blooket-pass-finder
```

## 24hr Token Adder:
This will automatically gives your account 500 tokens and 300 exp daily
```
It can be found here https://replit.com/@mikeylmao/24hr-token-adder
```

# Other Hacks (Extra)
Mostly websites..

## Kahoot Hacks:
```
[Kaheet] https://pxtrez.com/
[Flooder] https://kaspammer.glitch.me/
[Flooder V2] https://replit.com/@mikeylmao/Kahoot-flood-2
[Kahoot Client] https://a8998w89329w09e09we.herokuapp.com/
[Kahoot Client V2] https://kahot.glitch.me/
```

### Bookmarklets (Click on these before you enter a games ID)

Kahoot Smasher/Flooder (Drag the link below to your bookmarks bar):
```
javascript:fetch('https://thatfrueddued.github.io/kahoot-smasher/Kahoot.js').then(function(response){response.text().then(function(text){eval(text);});});
```

Bad Name Filter Bypass (Drag the link below to your bookmarks bar):
```
javascript:fetch('https://thatfrueddued.github.io/kahoot-smasher/BadNameFilterBypass.js').then(function(response){response.text().then(function(text){eval(text);});});
```

Kahoot Correct Answers (Drag the link below to your bookmarks bar):
```
javascript:fetch("https://raw.githubusercontent.com/pxtrez/kaheet/main/dist/bundle.js" ).then((r) => r.text().then((t) => eval(t)));
```

## Quizlet Hacks:
Works for micromatch and other gamemodes (Drag the link below to your bookmarks bar):
```
javascript:(function()%7B(function() %7Blet x %3D document.createElement("script")%3Bx.src %3D "https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fquizlet%40master%2Findex.js"%3Bx.onload %3D function () %7B x.remove()%3B %7D%3Bdocument.body.appendChild(x)%3B%7D)()%7D)()
```

## Cookie Clicker Hacks:
Shows a mod menu on your screen

Mod Menu V1 (Drag the link below to your bookmarks bar):
```
javascript:(function(){Game.LoadMod('https://rawgit.com/Giovani-Freitag/cookie-clicker-farm/master/cookieClickerFarm.js');})();
```

Mod Menu V2 (Drag the link below to your bookmarks bar):
```
javascript:Game.OpenSesame()
```
Website to play Cookie Clicker if it's blocked: https://ozh.github.io/cookieclicker/

## Nearpod Hacks:
Just finds codes

Nearpod code finder
```
https://replit.com/@milestashaun/nearpod-code-finder
```

## Walmart Version Of Google Classroom:
Sign up and add people to it

Code: rmxIWa
```
https://our-gclassroom.netlify.app/
```

## Google Snake Hacks:

Wall Every Apple
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeWall-EndgameSooner/main/code.js'); req.onload = function() { eval(this.responseText + 'snake.wall_every_apple();'); }; req.send();
```

Animated Snake Colors
```
javascript: /*initiate some globals*/ let animateSnakeGlobals = { startPlayback: false, startingTime: 0, framesPerSecond: 60, frameDoneSoFar: 0, currentColourArray: ["#FFFFFF%22,%22#000000%22],%20cacheMode:%20false,%20cache:%20[],%20};%20window.snake.animate%20=%20function(pattern,%20backgroundPattern){%20/*pattern%20is%20a%20string%20which%20contains%20the%20name%20of%20a%20function%20that%20takes%20a%20frame%20number%20(60fps)%20and%20returns%20an%20array%20with%20all%20the%20hex%20colours%20along%20the%20snake's%20body*/%20if(pattern%20===%20undefined)%20{%20pattern%20=%20%22defaultPattern%22;%20}%20/*Can%20we%20cache%20the%20images%20for%20snake's%20head?*/%20animateSnakeGlobals.cacheMode%20=%20[%22temporalRainbow%22,%20%22rollingRainbow%22,%20%22rollingRainbowRev%22].includes(pattern);%20if(pattern.startsWith('singleColourFunctionCreator'))%20{%20animateSnakeGlobals.cacheMode%20=%20true;%20}%20const%20scripts%20=%20document.body.getElementsByTagName('script');%20for(let%20script%20of%20scripts)%20{%20const%20req%20=%20new%20XMLHttpRequest();%20req.open('GET',%20script.src);%20req.onload%20=%20function()%20{%20if(this.responseText.indexOf('%22#A2')%20!==%20-1)%20processCode(this.responseText,%20pattern,%20backgroundPattern);%20};%20req.send();%20}%20};%20function%20processCode(code,%20pattern,%20backgroundPattern)%20{%20/*find%20the%20name%20of%20the%20variable%20representing%20how%20many%20turns%20the%20snake%20has%20been%20alive%20for*/%20let%20lifetime%20=%20%22a.ticks%22;%20console.log(lifetime);%20/*find%20names%20of%20variables%20with%20snake%20eyes/tongue%20etc*/%20let%20[,%20headColour,%20blinkImg,%20eatImg,%20dieImg]%20=%20code.match(/([$a-zA-Z0-9_]{0,6})=b\[0\],\n?this\.[$a-zA-Z0-9_]{0,6}=b\[1\],\n?[$a-zA-Z0-9_]{0,6}\(this\.([$a-zA-Z0-9_]{0,6}),%22#5282F2%22,this\.[$a-zA-Z0-9_]{0,6}\),\n?[$a-zA-Z0-9_]{0,6}\(this\.([$a-zA-Z0-9_]{0,6}),%22#5282F2%22,this\.[$a-zA-Z0-9_]{0,6}\),\n?[$a-zA-Z0-9_]{0,6}\(this.([$a-zA-Z0-9_]{0,6}),%22#5282F2%22,this.[$a-zA-Z0-9_]{0,6}\)/);%20let%20[,%20colourChangeFunc,%20snakeTongue,%20func2,%20func3]%20=%20code.match(/([$a-zA-Z0-9_]{0,6})\(this\.([$a-zA-Z0-9_]{0,6}),%22#C73104%22,([$a-zA-Z0-9_]{0,6})\(([$a-zA-Z0-9_]{0,6})\(/);%20let%20hueFunc%20=%20code.match(/([$a-zA-Z0-9_]{0,6})\(%22#C73104%22\)\,[$a-zA-Z0-9_]{0,6}\[0\]=\([$a-zA-Z0-9_]{0,6}\[0\]\+180/)[1];%20console.log(%60${headColour},${blinkImg},${eatImg},${dieImg},${colourChangeFunc},${snakeTongue}%60);%20/*grab%20code%20for%20the%20function%20we%20need%20to%20hijack*/%20let%20snakeColourFunction%20=%20findFunctionInCode(code,%20/[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/,%20/a\.[$a-zA-Z0-9_]{0,6}&&10!==a\.[$a-zA-Z0-9_]{0,6}/,%20true);%20let%20updateHeadCode%20=%20%60function%20updateHeadColour(a,%20headColour)%20{%20a.${headColour}%20=%20headColour;%20${colourChangeFunc}(a.${blinkImg},%20%22#5282F2%22,%20headColour);/*Set%20blink%20image%20colours*/%20${colourChangeFunc}(a.${eatImg},%20%22#5282F2%22,%20headColour);/*Set%20Eat%20image%20colours*/%20${colourChangeFunc}(a.${dieImg},%20%22#5282F2%22,%20headColour);/*Set%20Die%20image%20colours*/%20var%20hue%20=%20${hueFunc}(headColour);%20var%20b%20=%20${hueFunc}(%22#C73104%22);%20b[0]%20=%20(hue[0]%20+%20180)%20%%20360;%20${colourChangeFunc}(a.${snakeTongue},%20%22#C73104%22,%20${func2}(${func3}(b[0],%20b[1],%20b[2])))/*Hue%20rotate%20to%20get%20tongue%20colour*/%20}%60;%20eval(updateHeadCode);%20/*need%20to%20change%20a%20bit%20of%20code%20so%20that%20the%20head%20can%20change%20colour%20even%20for%20the%20rainbow%20snake*/%20let%20regex1%20=%20/0===this\.[$a-zA-Z0-9_]{0,6}\|\|10===this\.[$a-zA-Z0-9_]{0,6}/;%20let%20func1%20=%20findFunctionInCode(code,/[$a-zA-Z0-9_]{0,6}\.prototype\.[$a-zA-Z0-9_]{0,6}=function\(\)$/,regex1,true);%20func1%20=%20func1.replace(/\|\|10===this\.[$a-zA-Z0-9_]{0,6}/,%22||%20false%22);%20eval(func1);%20/*%20Enable%20caching%20*/%20setupCaching(code);%20/*%20Background%20colour%20stuff%20*/%20let%20[,rectangle,miniCanvas,tileLength]%20=%20code.match(/([$a-zA-Z0-9_]{0,6})\.height;d\+\+\)0!==\n?\(c\+d\)%2&&\(a\.([$a-zA-Z0-9_]{0,6})\.fillStyle=%22#A2D149%22,a\.[$a-zA-Z0-9_]{0,6}\.fillRect\(c\*a\.([$a-zA-Z0-9_]{0,6})/);%20let%20updateBackgroundFunc%20=%20%60function%20updateBackground(a,%20frameNum)%20{%20for%20(c%20=%200;%20c%20%3C%20a.${rectangle}.width;%20c++)%20{%20for%20(d%20=%200;%20d%20%3C%20a.${rectangle}.height;%20d++)%20{%20a.${miniCanvas}.fillStyle%20=%20${backgroundPattern}(a,%20frameNum,%20c,%20d);%20a.${miniCanvas}.fillRect(c%20*%20a.${tileLength},%20d%20*%20a.${tileLength},%20a.${tileLength},%20a.${tileLength});%20}%20}%20}%60;%20console.log(updateBackgroundFunc);%20(backgroundPattern%20!==%20undefined)%20?%20eval(updateBackgroundFunc):eval(%22function%20updateBackground(){return;}%22);%20/*%20Use%20a%20safer%20shadow%20colour%20*/%20eval(%20code.match(%20/[a-zA-Z0-9_$]{1,6}=function\(a\){a\.[a-zA-Z0-9_$]{1,6}\.globalCompositeOperation[^}]*%22source-over%22}/%20)[0].replace(%20/#94BD46/g,%20%22#555555%22%20)%20);%20let%20resetAnimationCode%20=%20%60if(${lifetime}%20==%200)%20{%20animateSnakeGlobals.startPlayback%20=%20true;%20animateSnakeGlobals.startingTime%20=%20performance.now();%20}%60;%20snakeColourFunction%20=%20snakeColourFunction.replace(%22{%22,%20%22{%22%20+%20resetAnimationCode);%20/*$&%20has%20a%20special%20meaning%20in%20replace()*/%20let%20hijackArrayCode%20=%20%60if(animateSnakeGlobals.startPlayback)%20{%20var%20frameNum%20=%20Math.floor((performance.now()%20+%20${0.5*1000/animateSnakeGlobals.framesPerSecond}%20-%20animateSnakeGlobals.startingTime)/${1000/animateSnakeGlobals.framesPerSecond});%20if(frameNum%20!==%20animateSnakeGlobals.frameDoneSoFar)%20{%20animateSnakeGlobals.currentColourArray%20=%20${pattern}(frameNum);%20animateSnakeGlobals.frameDoneSoFar%20=%20frameNum;%20updateHeadColour(a,%20animateSnakeGlobals.currentColourArray[0]);%20updateBackground(a,%20frameNum);%20}%20var%20f%20=%20animateSnakeGlobals.currentColourArray;%20}%20else%20{%20$&%20}%60;%20snakeColourFunction%20=%20snakeColourFunction.replace(/var%20f=e\?[$a-zA-Z0-9_]{0,6}:[$a-zA-Z0-9_]{0,6};/,%20hijackArrayCode);%20console.log(snakeColourFunction);%20eval(snakeColourFunction);%20}%20function%20setupCaching(code)%20{%20let%20recolourImageFunction%20=%20findFunctionInCode(code,%20/[$a-zA-Z0-9_]{0,6}=function\(a,b,\n?c\)$/,%20/putImageData/,%20true);%20let%20canvasContext%20=%20recolourImageFunction.match(/a\.([$a-zA-Z0-9_]{0,6})\.putImageData/)[1];%20recolourImageFunction%20=%20recolourImageFunction.replace(/a\.([$a-zA-Z0-9_]{0,6})\.putImageData\(([$a-zA-Z0-9_]{0,6}),0,0\)/,%20%60if(animateSnakeGlobals.cacheMode)%20animateSnakeGlobals.cache[a.path%20+%20hex]%20=%20d;%20a.$1.putImageData($2,%200,%200);%20}%60);%20/*Order%20is%20important,%20as%20the%20previous%20bit%20needs%20to%20match%20on%20the%20correct%20putImageData*/%20recolourImageFunction%20=%20recolourImageFunction.replace(%22if(a.loaded){%22,%20%60var%20hex%20=%20c;%20if(a.loaded){%20if(animateSnakeGlobals.cacheMode%20&&%20(a.path%20+%20hex)%20in%20animateSnakeGlobals.cache)%20{%20a.${canvasContext}.putImageData(animateSnakeGlobals.cache[a.path%20+%20hex],%200,%200)%20}%20else%20{%60);%20console.log(recolourImageFunction);%20eval(recolourImageFunction);%20}%20/*%20This%20function%20will%20search%20for%20a%20function/method%20in%20some%20code%20and%20return%20this%20function%20as%20a%20string%20code%20will%20usually%20be%20the%20snake%20source%20code%20functionSignature%20will%20be%20regex%20matching%20the%20beginning%20of%20the%20function/method%20(must%20end%20in%20$),%20for%20example%20if%20we%20are%20trying%20to%20find%20a%20function%20like%20s_xD%20=%20function(a,%20b,%20c,%20d,%20e)%20{......}%20then%20put%20functionSignature%20=%20/[$a-zA-Z0-9_]{0,6}=function(a,b,c,d,e)$/%20somethingInsideFunction%20will%20be%20regex%20matching%20something%20in%20the%20function%20for%20example%20if%20we%20are%20trying%20to%20find%20a%20function%20like%20s_xD%20=%20function(a,%20b,%20c,%20d,%20e)%20{...a.Xa&&10!==a.Qb...}%20then%20put%20somethingInsideFunction%20=%20/a\.[$a-zA-Z0-9_]{0,6}&&10!==a\.[$a-zA-Z0-9_]{0,6}/%20levelsToGoUp%20tells%20us%20how%20many%20%22layers%22%20of%20curly%20brackets%20we%20need%20to%20go%20up%20before%20we%20get%20to%20our%20function%20*/%20function%20findFunctionInCode(code,%20functionSignature,%20somethingInsideFunction,%20logging%20=%20false)%20{%20/*Check%20functionSignature%20ends%20in%20$*/%20if(functionSignature.toString()[functionSignature.toString().length-2]%20!==%20%22$%22)%20{%20throw%20new%20Error(%22functionSignature%20regex%20should%20end%20in%20$%22);%20}%20/*get%20the%20position%20of%20somethingInsideFunction*/%20let%20indexWithinFunction%20=%20code.search(somethingInsideFunction);%20if(indexWithinFunction%20==%20-1)%20{%20throw%20new%20Error(%22couldn't%20find%20a%20match%20for%20somethingInsideFunction%22);%20}%20/*expand%20outwards%20from%20somethingInsideFunction%20until%20we%20get%20to%20the%20function%20signature,%20then%20count%20brackets%20to%20find%20the%20end%20of%20the%20function*/%20startIndex%20=%200;%20for(let%20i%20=%20indexWithinFunction;%20i%20%3E=%200;%20i--)%20{%20let%20startOfCode%20=%20code.substring(0,i);%20startIndex%20=%20startOfCode.search(functionSignature);%20if(startIndex%20!==%20-1)%20{%20break;%20}%20if(i%20==%200)%20{%20throw%20new%20Error(%22Couldn't%20find%20function%20signature%22);%20}%20}%20let%20bracketCount%20=%200;%20let%20foundFirstBracket%20=%20false;%20let%20endIndex%20=%200;%20/*Use%20bracket%20counting%20to%20find%20the%20whole%20function*/%20let%20codeLength%20=%20code.length;%20for(let%20i%20=%20startIndex;%20i%3C=codeLength;%20i++){%20if(!foundFirstBracket%20&&%20code[i]%20==%20%22{%22)%20{%20foundFirstBracket%20=%20true;%20}%20if(code[i]%20==%20%22{%22)%20{%20bracketCount++;%20}%20if(code[i]%20==%20%22}%22)%20{%20bracketCount--;%20}%20if(foundFirstBracket%20&&%20bracketCount%20==%200)%20{%20endIndex%20=%20i;%20break;%20}%20if(i%20==%20codeLength)%20{%20throw%20new%20Error(%22Couldn't%20pair%20up%20brackets%22);%20}%20}%20let%20fullFunction%20=%20code.substring(startIndex,endIndex%20+%201);%20if(logging)%20{%20console.log(fullFunction);%20}%20return%20fullFunction;%20}%20/*below%20are%20custom%20patterns*/%20function%20defaultPattern(frameNum)%20{%20let%20colourArray%20=%20[];%20let%20randColour%20=%20%22#%22;%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20for(let%20i%20=%200;%20i%3C504;%20i++)%20{%20colourArray[i]%20=%20randColour;%20}%20return%20colourArray;%20}%20function%20seizure(frameNum)%20{%20let%20colourArray%20=%20[];%20let%20randr%20=%20Math.floor(256*Math.random());%20let%20randg%20=%20Math.floor(256*Math.random());%20let%20randb%20=%20Math.floor(256*Math.random());%20let%20randColour%20=%20rgbToHex(randr,randg,randb);%20for(let%20i%20=%200;%20i%3C10;%20i++)%20{%20colourArray[i]%20=%20randColour;%20}%20return%20colourArray;%20}%20function%20temporalRainbow(frameNum)%20{%20let%20colourArray%20=%20[];%20let%20hue%20=%20(frameNum%20%%2060)/60;%20let%20randColour%20=%20hsvToRgb(hue,1,1);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20for(let%20i%20=%200;%20i%3C10;%20i++)%20{%20colourArray[i]%20=%20randColour;%20}%20return%20colourArray;%20}%20function%20rollingRainbow(frameNum)%20{%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3C30;%20i++)%20{%20let%20hue%20=%20((frameNum%20+%20i*2)%20%%2060)/60;%20let%20randColour%20=%20hsvToRgb(hue,1,1);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20colourArray[i]%20=%20randColour;%20}%20return%20colourArray;%20}%20function%20rollingRainbowRev(frameNum)%20{%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3C30;%20i++)%20{%20let%20hue%20=%20((frameNum%20-%20i*2%20+%2060)%20%%2060)/60;%20let%20randColour%20=%20hsvToRgb(hue,1,1);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20colourArray[i]%20=%20randColour;%20}%20return%20colourArray;%20}%20/*note%20works%20best%20on%20lower%20fps*/%20let%20strobeRainbow%20=%20(function()%20{%20let%20colorsSplashes%20=%20[];%20function%20strobeRainbow(frameNum)%20{%20/*add%20new%20splashes%20of%20colour%20at%20random*/%20if(Math.random()%20%3C%200.2)%20{%20let%20splashColour%20=%20hsvToRgb(Math.random(),1,1);%20splashColour%20=%20[Math.floor(splashColour[0]),Math.floor(splashColour[1]),Math.floor(splashColour[2])];%20colorsSplashes.push({rgb:%20splashColour,%20position:%2050,%20spread:%203});%20}%20/*calculate%20colours%20along%20snake*/%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3C50;%20i++)%20{%20let%20colourTotal%20=%20[0,0,0];%20/*base%20colour%20is%20black*/%20let%20weight%20=%200.1;%20for(let%20splash%20of%20colorsSplashes)%20{%20if(Math.abs(splash.position%20-%20i)%20%3C=%20splash.spread)%20{%20let%20splashWeight%20=%201/(Math.abs(splash.position%20-%20i)%20+%201);%20colourTotal%20=%20[colourTotal[0]%20+%20splashWeight*splash.rgb[0],colourTotal[1]%20+%20splashWeight*splash.rgb[1],colourTotal[2]%20+%20splashWeight*splash.rgb[2]];%20weight%20+=%20splashWeight;%20}%20}%20colourArray[i]%20=%20rgbToHex(Math.floor(colourTotal[0]/weight),Math.floor(colourTotal[1]/weight),Math.floor(colourTotal[2]/weight));%20}%20/*%20Move%20splashes%20along%20body.%20Increase%20spread%20if%20they%20hit%200%20*/%20for(let%20i%20=%200;%20i%20%3C%20colorsSplashes.length;%20i++)%20{%20if(colorsSplashes[i].position%20%3E%200)%20{%20colorsSplashes[i].position--;%20}%20else%20{%20colorsSplashes[i].spread++;%20if(colorsSplashes[i].spread%20%3E%205%20+%20Math.floor(4*Math.random()))%20{%20colorsSplashes.splice(i,1);%20}%20}%20}%20return%20colourArray;%20}%20return%20strobeRainbow;%20})();%20let%20variation%20=%20(function()%20{%20/*specify%20all%20colours%20in%20hsv*/%20let%20colorsSplashes%20=%20[];%20let%20baseColour%20=%20[0.3,1,1];%20let%20patternLength%20=%2050;%20function%20variation(frameNum)%20{%20/*add%20new%20splashes%20of%20colour%20at%20random*/%20/*if(Math.random()%20%3C%200.6)%20{*/%20let%20splashColour%20=%20[(baseColour[0]+Math.random()*0.4-0.4+1)%1,1,1];%20colorsSplashes.push({hsv:%20splashColour,%20position:%20Math.floor((patternLength-1)*Math.random()),%20spread:%204,%20aliveTime:%200,%20weightMultiplier:%200.2});%20splashColour%20=%20[(baseColour[0]+Math.random()*0.4-0.4+1)%1,1,1];%20colorsSplashes.push({hsv:%20splashColour,%20position:%20Math.floor((patternLength-1)*Math.random()),%20spread:%204,%20aliveTime:%200,%20weightMultiplier:%200.2});%20splashColour%20=%20[(baseColour[0]+Math.random()*0.4-0.4+1)%1,1,1];%20colorsSplashes.push({hsv:%20splashColour,%20position:%20Math.floor((patternLength-1)*Math.random()),%20spread:%204,%20aliveTime:%200,%20weightMultiplier:%200.2});%20splashColour%20=%20[(baseColour[0]+Math.random()*0.4-0.4+1)%1,1,1];%20colorsSplashes.push({hsv:%20splashColour,%20position:%20Math.floor((patternLength-1)*Math.random()),%20spread:%204,%20aliveTime:%200,%20weightMultiplier:%200.2});%20/*}*/%20/*calculate%20colours%20along%20snake*/%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3CpatternLength;%20i++)%20{%20let%20weight%20=%200.1;%20let%20hsvTotal%20=%20[baseColour[0]*weight,baseColour[1]*weight,baseColour[2]*weight];%20for(let%20splash%20of%20colorsSplashes)%20{%20if(Math.abs(splash.position%20-%20i)%20%3C=%20splash.spread)%20{%20let%20splashWeight%20=%20splash.weightMultiplier*(1/(Math.abs(splash.position%20-%20i)%20+%201));%20hsvTotal%20=%20[hsvTotal[0]%20+%20splashWeight*splash.hsv[0],hsvTotal[1]%20+%20splashWeight*splash.hsv[1],hsvTotal[2]%20+%20splashWeight*splash.hsv[2]];%20weight%20+=%20splashWeight;%20}%20}%20/*Adjust%20vibrance%20to%20fade%20in/out*/%20hsvColour%20=%20[hsvTotal[0]/weight,hsvTotal[1]/weight,hsvTotal[2]/weight];%20hsvColour[2]%20=%200.85+0.15*Math.sin(2*Math.PI*frameNum/120);%20let%20segmentColour%20=%20hsvToRgb(...hsvColour);%20colourArray[i]%20=%20rgbToHex(Math.floor(segmentColour[0]),Math.floor(segmentColour[1]),Math.floor(segmentColour[2]));%20}%20/*%20Move%20splashes%20around.%20Increase%20spread%20at%20random%20*/%20for(let%20i%20=%200;%20i%20%3C%20colorsSplashes.length;%20i++)%20{%20colorsSplashes[i].position%20+=%20Math.random()%20-%200.5;%20colorsSplashes[i].position%20=%20Math.min(colorsSplashes[i].position,%20patternLength%20-%201);%20colorsSplashes[i].position%20=%20Math.max(colorsSplashes[i].position,%200);%20if(colorsSplashes[i].aliveTime%20%3C%2015)%20{%20colorsSplashes[i].weightMultiplier%20+=%200.08;%20}%20else%20{%20colorsSplashes[i].weightMultiplier%20-=%200.08;%20}%20colorsSplashes[i].spread%20+=%20Math.random()%20-%200.5;%20colorsSplashes[i].spread%20=%20Math.max(colorsSplashes[i].spread,%201);%20colorsSplashes[i].aliveTime++;%20if(colorsSplashes[i].aliveTime%20%3E%2030)%20{%20colorsSplashes.splice(i,1);%20}%20}%20return%20colourArray;%20}%20return%20variation;%20})();%20let%20variationV2%20=%20(function()%20{%20/*specify%20all%20colours%20in%20hsv*/%20let%20baseColour%20=%20[0,1,1];%20const%20patternLength%20=%2050;%20const%20totalWaveCount%20=%2010;%20let%20waves%20=%20[];%20for(let%20i%20=%200;%20i%20%3C%20totalWaveCount;%20i++)%20{%20waves.push({weight:%200.15*Math.random(),%20bias:%20patternLength*Math.random(),%20wavelength:%20i%20+%201,%20period:%20240*Math.random()%20+%201,%20timeBias:%20240*Math.random()})%20}%20function%20variationV2(frameNum)%20{%20/*calculate%20colours%20along%20snake*/%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3CpatternLength;%20i++)%20{%20let%20hue%20=%20baseColour[0];%20for(let%20j%20=%200;%20j%3CtotalWaveCount;j++)%20{%20hue%20+=%20waves[j].weight*Math.sin(2*Math.PI*(1/waves[j].wavelength)*(i+waves[j].bias))%20*%20Math.sin(2*Math.PI*(1/waves[j].period)*(frameNum+waves[j].timeBias));%20}%20hue%20=%20hue%20%%201%20+%201;%20let%20saturation%20=%201;%20let%20vibrance%20=%200.85+0.15*Math.sin(2*Math.PI*frameNum/120);%20let%20colour%20=%20hsvToRgb(hue,saturation,vibrance);%20colour%20=%20[Math.floor(colour[0]),Math.floor(colour[1]),Math.floor(colour[2])];%20let%20hexColour%20=%20rgbToHex(...colour);%20colourArray[i]%20=%20hexColour;%20}%20return%20colourArray;%20}%20return%20variationV2;%20})();%20function%20singleColourFunctionCreator(hexcode)%20{%20if(!/^#[0-9a-f]{6}$/i.test(hexcode))%20{%20hexcode%20=%20'#ffffff';%20}%20function%20singleColour()%20{%20let%20colourArray%20=%20[];%20for(let%20i%20=%200;%20i%3C10;%20i++)%20{%20colourArray[i]%20=%20hexcode;%20}%20return%20colourArray;%20}%20return%20singleColour;%20}%20/*%20Below%20are%20custom%20backgrounds%20*/%20function%20randomHexBg(a,%20frameNum,%20x,%20y)%20{%20let%20randColour%20=%20%22#%22;%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20randColour%20+=%20Math.floor(Math.random()*10);%20return%20randColour;%20}%20let%20randomHexSameBg%20=%20(function()%20{%20let%20currentFrameNum%20=%200;%20let%20currentColour%20=%20%22#FFFFFF%22;%20return%20function%20(a,%20frameNum,%20x,%20y)%20{%20if(frameNum%20!==%20currentFrameNum)%20{%20currentFrameNum%20=%20frameNum;%20currentColour%20=%20%22#%22;%20currentColour%20+=%20Math.floor(Math.random()*10);%20currentColour%20+=%20Math.floor(Math.random()*10);%20currentColour%20+=%20Math.floor(Math.random()*10);%20currentColour%20+=%20Math.floor(Math.random()*10);%20currentColour%20+=%20Math.floor(Math.random()*10);%20currentColour%20+=%20Math.floor(Math.random()*10);%20}%20return%20currentColour;%20};%20})();%20function%20temporalBg(a,%20frameNum,%20x,%20y)%20{%20let%20hue%20=%20(frameNum%20%%2060)/60;%20let%20randColour%20=%20hsvToRgb(hue,1,1);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20return%20randColour;%20}%20function%20rollingRainbowBg(a,%20frameNum,%20x,%20y)%20{%20let%20hue%20=%20((frameNum%20+%20(x+y)*2)%20%%2060)/60;%20let%20saturation%20=%200.62;%20let%20vibrance%20=%200.84;%20if((x%20+%20y)%20%%202%20===%201)%20{%20saturation%20+=%200.13;%20vibrance%20-=%200.13;%20}%20let%20randColour%20=%20hsvToRgb(hue,saturation,vibrance);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20return%20randColour;%20}%20function%20rollingRainbowBgOld(a,%20frameNum,%20x,%20y)%20{%20let%20hue%20=%20((frameNum%20+%20(x+y)*2)%20%%2060)/60;%20let%20randColour%20=%20hsvToRgb(hue,1,1);%20randColour%20=%20[Math.floor(randColour[0]),Math.floor(randColour[1]),Math.floor(randColour[2])];%20randColour%20=%20rgbToHex(...randColour);%20return%20randColour;%20}%20function%20componentToHex(c)%20{%20var%20hex%20=%20c.toString(16);%20return%20hex.length%20==%201%20?%20%220%22%20+%20hex%20:%20hex;%20}%20function%20rgbToHex(r,%20g,%20b)%20{%20return%20%22#%22%20+%20componentToHex(r)%20+%20componentToHex(g)%20+%20componentToHex(b);%20}%20/**%20*%20Converts%20an%20RGB%20color%20value%20to%20HSV.%20Conversion%20formula%20*%20adapted%20from%20http://en.wikipedia.org/wiki/HSV_color_space.%20*%20Assumes%20r,%20g,%20and%20b%20are%20contained%20in%20the%20set%20[0,%20255]%20and%20*%20returns%20h,%20s,%20and%20v%20in%20the%20set%20[0,%201].%20*%20*%20@param%20Number%20r%20The%20red%20color%20value%20*%20@param%20Number%20g%20The%20green%20color%20value%20*%20@param%20Number%20b%20The%20blue%20color%20value%20*%20@return%20Array%20The%20HSV%20representation%20*/%20function%20rgbToHsv(r,%20g,%20b)%20{%20r%20/=%20255,%20g%20/=%20255,%20b%20/=%20255;%20var%20max%20=%20Math.max(r,%20g,%20b),%20min%20=%20Math.min(r,%20g,%20b);%20var%20h,%20s,%20v%20=%20max;%20var%20d%20=%20max%20-%20min;%20s%20=%20max%20==%200%20?%200%20:%20d%20/%20max;%20if%20(max%20==%20min)%20{%20h%20=%200;%20/*%20achromatic%20*/%20}%20else%20{%20switch%20(max)%20{%20case%20r:%20h%20=%20(g%20-%20b)%20/%20d%20+%20(g%20%3C%20b%20?%206%20:%200);%20break;%20case%20g:%20h%20=%20(b%20-%20r)%20/%20d%20+%202;%20break;%20case%20b:%20h%20=%20(r%20-%20g)%20/%20d%20+%204;%20break;%20}%20h%20/=%206;%20}%20return%20[%20h,%20s,%20v%20];%20}%20/**%20*%20Converts%20an%20HSV%20color%20value%20to%20RGB.%20Conversion%20formula%20*%20adapted%20from%20http://en.wikipedia.org/wiki/HSV_color_space.%20*%20Assumes%20h,%20s,%20and%20v%20are%20contained%20in%20the%20set%20[0,%201]%20and%20*%20returns%20r,%20g,%20and%20b%20in%20the%20set%20[0,%20255].%20*%20*%20@param%20Number%20h%20The%20hue%20*%20@param%20Number%20s%20The%20saturation%20*%20@param%20Number%20v%20The%20value%20*%20@return%20Array%20The%20RGB%20representation%20*/%20function%20hsvToRgb(h,%20s,%20v)%20{%20var%20r,%20g,%20b;%20var%20i%20=%20Math.floor(h%20*%206);%20var%20f%20=%20h%20*%206%20-%20i;%20var%20p%20=%20v%20*%20(1%20-%20s);%20var%20q%20=%20v%20*%20(1%20-%20f%20*%20s);%20var%20t%20=%20v%20*%20(1%20-%20(1%20-%20f)%20*%20s);%20switch%20(i%20%%206)%20{%20case%200:%20r%20=%20v,%20g%20=%20t,%20b%20=%20p;%20break;%20case%201:%20r%20=%20q,%20g%20=%20v,%20b%20=%20p;%20break;%20case%202:%20r%20=%20p,%20g%20=%20v,%20b%20=%20t;%20break;%20case%203:%20r%20=%20p,%20g%20=%20q,%20b%20=%20v;%20break;%20case%204:%20r%20=%20t,%20g%20=%20p,%20b%20=%20v;%20break;%20case%205:%20r%20=%20v,%20g%20=%20p,%20b%20=%20q;%20break;%20}%20return%20[%20r%20*%20255,%20g%20*%20255,%20b%20*%20255%20];%20};%20snake.animate(%22temporalRainbow%22);
```

### Background

Red Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + `snake.scheme({ scoreBar: '#e31616',%20borders:%20'#000000',%20walls:%20'#610000',%20background:%20'#d00b0b',%20shadows:%20'#181111',%20lightSquares:%20'#d50101',%20darkSquares:%20'#ff0000',%20sky:%20'#ff0000',%20separators:%20'#000000',%20buttons:%20'#ff0000',%20burger:%20true,%20hotdog:%20true,%20cactus:%20true,%20egg:%20true,%20lime:%20true,%20red_pepper:%20true,%20});%60);%20};%20req.send();
```

Dark Mode
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.dark();'); }; req.send();
```

Rainbow Scheme
```
javascript:r=new XMLHttpRequest();r.onload=function(){eval(this.responseText);};r.open('GET','https://raw.githubusercontent.com/skagenmacka/snake/main/ChangeColor.js');r.send();
```

End Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.end();'); }; req.send();
```

Colorful Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.colorful();'); }; req.send();
```

Dessert Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.desert();'); }; req.send();
```

Light Mode
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.light();'); }; req.send();
```

Pink Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.pink();'); }; req.send();
```

Pool Scheme
```
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req.onload = function() { eval(this.responseText + 'snake.pool();'); }; req.send();
```

### FBX Arcade

Google Snake
```
https://www.google.com/fbx?fbx=snake_arcade
```

Center
```
javascript: window.snake.center = function() {document.getElementsByTagName('div')[0].style = 'position:relative;top:50%;transform:translate(0%,-50%);margin:auto;'; }; window.snake.center();
```

#### Happy hacking :)
