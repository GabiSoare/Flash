var question = "Which of the following pictures below starts with the letter ";
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabet_rand = [];



var q = document.getElementById("question");
var firstImg = document.getElementById("firstImg");
var secondImg = document.getElementById("secondImg");
var thirdImg = document.getElementById("thirdImg");
var finished = document.getElementById("finished");
var game = document.getElementById("game");

var r1= document.getElementById("r1");
var r2= document.getElementById("r2");
var r3= document.getElementById("r3");



shuffle(alphabet);
alphabet_rand= alphabet.slice(0);
var index = 1;
var alphabet1 = [];
var answers = [];

		
	var my_media = null;

	function playAudio(src) 
	{
        // Create Media object from src

        if (my_media) 
		{
            my_media.stop();
        }
        
        my_media = new Media(src, onSuccess, onError);

        // Play audio
        my_media.play();
    }
    function getPath() 
	{
        var str = location.pathname;
        var i = str.lastIndexOf('/');
        return str.substring(0,i+1);
    }

    // onSuccess Callback
    //
    function onSuccess() 
	{
        console.log("playAudio():Audio Success");
    }

    // onError Callback
    //
    function onError(error) 
	{
        // alert('code: '    + error.code    + '\n' +
        //       'message: ' + error.message + '\n');
    }
	
setData(10);

function setData(choice){
	if(10 == choice){
		incIndex();
		return false;
	}
	if(alphabet_rand[index-1] == answers[choice]){
		playAudio(getPath() + "sounds/correct.mp3");
		switch(choice){
			case 0:
				r1.style.display = "inline";
				r1.src = "images/correct1.png";
				break;
			case 1:
				r2.style.display = "inline";
				r2.src = "images/correct1.png";
				break;
			case 2:
				r3.style.display = "inline";
				r3.src = "images/correct1.png";
				break;								
		}
		setTimeout(incIndex,1500);
	}else{
		playAudio(getPath() + "sounds/wrong.mp3");
		switch(choice){
			case 0:
				r1.style.display = "inline";
				r1.src = "images/wrong1.png";
				break;
			case 1:
				r2.style.display = "inline";
				r2.src = "images/wrong1.png";
				break;
			case 2:
				r3.style.display = "inline";
				r3.src = "images/wrong1.png";
				break;								
		}
		
		setTimeout(function resetwrong(){	r1.style.display = "none";	r2.style.display = "none";	r3.style.display = "none";},1500);
	}
}

function incIndex(){
	result.style.display = "none";
	r1.style.display = "none";
	r2.style.display = "none";
	r3.style.display = "none";
	window.scrollTo(0,0); // auto scroll to top
	
	if(index!=3) //number of questions + 1
	{

		q.innerHTML = question +"<strong>"+ alphabet[index-1]+"</strong> " + "?"; 
		
		
		for(var i = 1; i < alphabet_rand.length; i++){
			alphabet1[i-1] = alphabet_rand[i];	
		}
		shuffle(alphabet1);
		
		var tmp = alphabet_rand[index];
		alphabet_rand[index] = alphabet_rand[0];
		alphabet_rand[0] = tmp;			
		
		answers = [alphabet[index-1],alphabet1[0],alphabet1[1]];
		shuffle(answers);
		
		firstImg.src =  "images/"+answers[0].toUpperCase()+answers[0].toLowerCase()+".png";
		secondImg.src = "images/"+answers[1].toUpperCase()+answers[1].toLowerCase()+".png";
		thirdImg.src =  "images/"+answers[2].toUpperCase()+answers[2].toLowerCase()+".png";	
		
		index++;
	

	}else{
		game.style.display = "none";
		$.mobile.changePage("#endPage",{ transition : "none"});
		
		window.location.reload();
		
	}	
}

function shuffle(arrayChar) {
  var currentIndex = arrayChar.length
    , temporaryValue
    , randomIndex;
  // While there remain elements to shuffle...
  while (0 != currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arrayChar[currentIndex];
    arrayChar[currentIndex] = arrayChar[randomIndex];
    arrayChar[randomIndex] = temporaryValue;
    
  }

}