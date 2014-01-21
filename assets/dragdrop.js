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
	Array.prototype.random = function (length) {
            return this[Math.floor((Math.random() * length))];
        }

        /** Coder: Duc Son
        /**
        * @function: Delete object from array
        * @param obj {Object} object deleted
        * $return m?ng dã xóa d?i tu?ng
        */
        Array.prototype.destroy = function (obj) {

            // Tr? v? null n?u không tìm th?y d?i tu?ng
            var destroyed = null;
            for (var i = 0; i < this.length; i++) {
                //tìm d?i tu?ng trùng v?i d?i tu?ng c?n tìm trong m?ng
                if (Object.equals(this[i], obj)) {
                    destroyed = this.splice(i, 1)[0];
                    break;
                }

            }

            return destroyed;
        }

        Array.prototype.copy = function () {
            return this.slice(0);
        }


        /**
         * @function: So sanh:
         * @param x {Object} Doi tuong x
         * @param y {Object} Doi tuong y
         * $return true neu = , va nguoc lai false
         * ex: Object.equals(objx, objy)
         */
        Object.equals = function (x, y) {
            if (x === y) return true;
            // if both x and y are null or undefined and exactly the same

            if (!(x instanceof Object) || !(y instanceof Object)) return false;
            // if they are not strictly equal, they both need to be Objects

            if (x.constructor !== y.constructor) return false;
            // they must have the exact same prototype chain, the closest we can do is
            // test there constructor.

            for (var p in x) {
                if (!x.hasOwnProperty(p)) continue;
                // other properties were tested using x.constructor === y.constructor

                if (!y.hasOwnProperty(p)) return false;
                // allows to compare x[ p ] and y[ p ] when set to undefined

                if (x[p] === y[p]) continue;
                // if they have the same strict value or identity then they are equal

                if (typeof (x[p]) !== "object") return false;
                // Numbers, Strings, Functions, Booleans must be strictly equal

                if (!Object.equals(x[p], y[p])) return false;
                // Objects and Arrays must be tested recursively
            }

            for (p in y) {
                if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
                // allows x[ p ] to be set to undefined
            }
            return true;
        }

        ds = {}

        ds.randomNumber = function (from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }
        ds.listQuestion = ["#idWord1", "#idWord2", "#idWord3", "#idWord4"];
        ds.listQuestionTemp = ["#idWord1", "#idWord2", "#idWord3", "#idWord4"];
        ds.listWords = new Array();

        ds.listWordsTemp = new Array();
        ds.listWordsCorrect = Array();

        ds.clock = function () {

            var startTime;
            var time;
            var doc = document;
            var divClock = doc.createElement("div");
            // divClock.setAttribute('style', 'float:right;');
            var shh = doc.createElement("span");
            var lbShh = doc.createElement("span");
            lbShh.innerText = "Time";
            lbShh.id = "idlbTime"
            lbShh.setAttribute('style', 'margin-left: 1px;')
            lbShh.className = "clock";
            shh.id = "inHour";
            shh.className = "clock";
            shh.innerHTML = "00";
            var smm = doc.createElement("span");
            smm.id = "inMinute";
            smm.className = "clock";
            smm.innerHTML = "00";
            var sss = doc.createElement("span");
            sss.id = "inSecond";
            sss.className = "clock";
            sss.innerHTML = "00";
            divClock.appendChild(lbShh);
            // divClock.appendChild(shh);

            divClock.appendChild(smm);
            divClock.appendChild(sss);

            var formatText = function (value) {
                if (value < 10) {
                    return '0' + value;
                }
                else { return value; }
            }

            var incClock = function () {

                time = setInterval(function () {

                    startTime = startTime - 1000;
                    var x = new Date(startTime);
                    var hours = x.getHours();
                    var minutes = x.getMinutes()
                    var secs = x.getSeconds();
                    $(shh).text(formatText(hours));
                    $(smm).text(formatText(minutes));
                    $(sss).text(formatText(secs));
                    if (minutes == 0 && secs == 0) {
                        ds.listWordsCorrect = [];
                        stopClock();
                        ds.endScreen("Time's up!", "  You only managed to attempt "+ ds.numberAnswered+"/"+26 +" and your score is " + ds.numberCorrect + "/" + ds.numberQuestion);
                    }
                }, 1000);

            }

            this.getDocObject = function () {
                return divClock;
            }

            this.runClock = function () {
                $(shh).text('00');
                $(smm).text('05');
                $(sss).text('00');
                var hh = $(shh).text(); //ohh.val();
                if (isNaN(hh) || hh < 0 || hh > 23) {
                    return false;
                }
                var mm = $(smm).text();
                if (isNaN(mm) || mm < 0 || mm > 59) {
                    return false;
                }
                var ss = $(sss).text();
                if (isNaN(ss) || ss < 0 || ss > 59) {
                    return false;
                }

                var start = new Date(2013, 1, 1, hh, mm, ss);

                startTime = start.getTime();
                incClock();
            }

            this.stopClock = function () {
                window.clearInterval(time);
            }
            var stopClock = function () {
                window.clearInterval(time);
            }
            this.resetClock = function () {
                startTime = 0;
                window.clearInterval(time);
                //window.clearTimeout(tim);
                $(shh).text('00');
                $(smm).text('00');
                $(sss).text('00');
            }

            this.setTime = function (obj) {
                $(shh).text(obj.hours);
                $(smm).text(obj.minutes);
                $(sss).text(obj.seconds);
            }

            this.resumClock = function () {
                var obj = {};
                obj.hours = $(shh).text();
                obj.minutes = $(smm).text();
                obj.seconds = $(sss).text();

                $(shh).text(obj.hours);
                $(smm).text(obj.minutes);
                $(sss).text(obj.seconds);

                var hh = $(shh).text(); //ohh.val();
                if (isNaN(hh) || hh < 0 || hh > 23) {
                    return false;
                }
                var mm = $(smm).text();
                if (isNaN(mm) || mm < 0 || mm > 59) {
                    return false;
                }
                var ss = $(sss).text();
                if (isNaN(ss) || ss < 0 || ss > 59) {
                    return false;
                }

                var start = new Date(2013, 1, 1, hh, mm, ss);

                startTime = start.getTime();
                incClock();

            }

            this.getTime = function () {
                var obj = {};
                obj.hours = $(shh).text();
                obj.minutes = $(smm).text();
                obj.seconds = $(sss).text();
                return obj;
            }

        }

        ds.loadLibraly = function (callback) {

            $.ajax({
                type: "GET",
                url: "assets/main.xml",
                dataType: "xml",
                success: function (xml) {

                    $(xml).find('alphabets').each(function () {
                        instance = $(this).find('instance').text();
                        title = $(this).find('title').text();
                        upper = $(this).find('upper').text();
                        lower = $(this).find('lower').text();

                        ds.listWords.push({ ins: instance, upper: upper, lower: lower, title: title });
                        ds.listWordsCorrect.push({ ins: instance, upper: upper, lower: lower, title: title });
                    });
                    ds.numberQuestion = ds.listWords.length;

                    if (callback) {
                        callback();
                    }

                }
            });
        }

     
        ds.randomWord = function () {
            var lengthWord = ds.listWordsTemp.length;
            var word = ds.listWordsTemp.random(ds.listWordsTemp.length);
            ds.listWordsTemp.destroy(word);

            return word;
        }

        //Number correct question
        ds.numberCorrect = 0;
        ds.numberQuestion = 0;
        ds.numberAnswered = 0;
        ds.createGame = function () {

            console.log('Vao day:' + ds.listWordsCorrect.length);

            if (ds.listWordsCorrect.length > 0) {
                var doc = document;
                var idWordCorrect = "";
                var wordCorrect = null;
                var numberWrong = 0;
                var lockDropCheck = false;
                var buildUi = function (callback) {
                    ds.listQuestionTemp = ds.listQuestion.copy();
                    ds.listWordsTemp = ds.listWords.copy();

                     $('#idAreaQuestionWord').html("");

                    for (var i = 0, len = ds.listQuestion.length; i < len ; i++) {
                        var divWordBorder = doc.createElement("div");
                        divWordBorder.setAttribute("class", "border-word-box");

                        var divWordText = doc.createElement("div");
                        divWordText.id = ds.listQuestion[i].replace("#", "");
                        divWordText.className = "word-box center-content";
                        divWordText.innerText = "";

                        divWordBorder.appendChild(divWordText);

                        $('#idAreaQuestionWord').append(divWordText);
                         $('#idAreaQuestionWord').append("<br/>");
                    }

                    

                    //get word correct random from listWordsCorrect and delete question was reader
                     wordCorrect = ds.listWordsCorrect.random(ds.listWordsCorrect.length);// ds.randomWord();

                    //delete listWordsCorrect
                    ds.listWordsCorrect.destroy(wordCorrect);

                    //delete listWordsTemp
                    ds.listWordsTemp.destroy(wordCorrect);

                    $("#idimageword").attr("src", 'images\\' + wordCorrect.ins + ".png");

                    var positionCorrect = ds.randomNumber(1, ds.listQuestionTemp.length);
                    idWordCorrect = "#idWord" + positionCorrect.toString();

                    //delete listQuestionTemp
                    ds.listQuestionTemp.destroy(idWordCorrect);
                 
                    $(idWordCorrect).html(wordCorrect.upper.trim());
                    $(idWordCorrect).draggable({ revert: "invalid", helper: 'clone' });

                    for (var i = 0, len = ds.listQuestion.length; i < len ; i++) {

                        var wordWrong = ds.randomWord();
                        var idWordWrong = ds.listQuestionTemp[i];
                        $(idWordWrong).html(wordWrong.upper);
                        $(idWordWrong).draggable({ revert: "valid", helper: 'clone' });
                        //,helper: 'clone'
                    }

                    if (callback) {
                        callback();
                    }

                }

                var droppableCheckAndBuildUi = function () {

                    buildUi(function () {

                        $("#idAreaDrop").droppable({
                            activeClass: "area-image-word-active",
                            hoverClass: "area-image-word-hover",
                            drop: function (event, ui) {
                                if (lockDropCheck == false) {
                                    var idWordDrop = event.srcElement.outerText;
                                    //console.log(event.srcElement.outerText);

                                    if (idWordDrop == wordCorrect.upper.trim()) {
										//CORRECT SOUND
										playAudio(getPath() + "sounds/correct.mp3");
                                        lockDropCheck = true;
                                        
                                        $(this).removeClass("area-image-word-warning ");

                                        ds.numberCorrect++;
                                        ds.numberAnswered++;
                                        $("#idNumberAnswed").html(ds.numberAnswered);
                                                                                
                                        $('#idQuestionCorrect').html(ds.numberCorrect);

                                        var elementAreaDrop = $("#idAreaDrop");
                                        var positionAreaDrop = elementAreaDrop.position();

                                        var element = event.srcElement;
                                        var text = event.srcElement.outerText;

                                        var elementWordCorrect = $("#idWordCorrect").css({ "background-color": "cadetblue" });
                                        elementWordCorrect.html(text);
                                        $(elementWordCorrect).show();

                                        //$(elementWordCorrect).css({ top: positionAreaDrop.top + "px", left: (positionAreaDrop.left - 16 + (elementAreaDrop.width() - elementWordCorrect.width())) + "px" });
                                        $(elementWordCorrect).css({ top: positionAreaDrop.top + "px", left: positionAreaDrop.left + "px",width: (elementAreaDrop.width()-16)+"px" });

                                        $(element).hide();

                                        clock.stopClock();

                                        

                                        setTimeout(function () {
                                            lockDropCheck = false;
                                            $(elementWordCorrect).hide();
                                            clock.resumClock();
                                            ds.createGame();
                                        }, 1500);

                                    }
                                    else {
                                        //HERE PLAY SOUND WRONG
										playAudio(getPath() + "sounds/wrong.mp3");

                                        //END PLAY SOUND WRONG
                                        numberWrong++;
                                        $(this).addClass("area-image-word-warning ");
                                        if (numberWrong == 2) {
                                            ds.numberAnswered++;
                                            $("#idNumberAnswed").html(ds.numberAnswered);

                                            $(this).removeClass("area-image-word-warning ");
                                            clock.stopClock();

                                            var elementAreaDrop = $("#idAreaDrop");
                                            var positionAreaDrop = elementAreaDrop.position();

                                            var element = event.srcElement;

                                            var elementWordCorrect = $("#idWordCorrect").css({ "background-color": "red" });
                                            elementWordCorrect.html("Wrong!");
                                            $(elementWordCorrect).show();

                                            $(elementWordCorrect).css({ top: positionAreaDrop.top + "px", left: (positionAreaDrop.left - 16 + (elementAreaDrop.width() - elementWordCorrect.width())) + "px" });

                                            elementWordCorrect.hide();
                                            clock.resumClock();
                                            ds.createGame();

                                        }
                                    }
                                }
                                else {
                                    console.log("locked");
                                }
                            }
                       
                        });
                    });

                }
                __construct = function () {

                    droppableCheckAndBuildUi();
                    
                }()
            }
            else {

                ds.endScreen("Well Done!", "You managed to complete the game in time and your score is " + ds.numberCorrect + "/" + ds.numberQuestion);

            }
        }

        var clock = null;

        ds.mutiScreen = function () {

              if($(window).width()	<=	480){	
                   document.body.className = 'mobile';

              }
               else if($(window).width()>480 &&	$(window).width()	<	940)	{	
                   document.body.className	='tablet';	
               } else {
                   document.body.className = 'tablet';
               }

            $(window).resize(function () {

               if ($(window).width() <= 480) {
                   document.body.className = 'mobile';

               }
               else if ($(window).width() > 480 && $(window).width() < 940) {
                   document.body.className = 'tablet';
               } else {
                   document.body.className = 'tablet';
               }
          
            });	

       }

        ds.screenGame = function () {

            clock = new ds.clock();
            $('#idTime').html('');
            $('#idTime').append(clock.getDocObject());
            clock.runClock();
            var game = new ds.createGame();
        }

        ds.endScreen = function (lbMessageEnd, lbYoursMark) {
            $('#lbMessageEnd').html(lbMessageEnd);
            $('#lbYoursMark').html(lbYoursMark);

            $.mobile.changePage("#endPage");
        }
        ds.resetGame = function () {

            $('#idTime').html('');
            $('#idQuestionCorrect').html("0");
            $('#idTime').append(clock.getDocObject());
            ds.listWordsCorrect = ds.listWords.copy();
            ds.numberCorrect = 0;
            ds.numberAnswered = 0;
            $("#idNumberAnswed").html("0");
            ds.screenGame();
        }

       

        $(document).ready(function () {
 
            ds.mutiScreen();
     
            $(document).on("mobileinit", function () {
                $.mobile.ajaxEnabled = false;
            });


            ds.loadLibraly(function () {
                //HERE PLAY SOUND GAMEPLAY
				playAudio(getPath() + "sounds/gameplay.mp3");
                //END PLAY SOUND GAMEPLAY
			$(".idNumberQuestion").html("/" + ds.numberQuestion);
                $("#idNumberAnswed").html("0");
                ds.screenGame();
            });

            $('#idNextToGamePlayPage').click(function () {

                $.mobile.changePage("#gamePlayPage", { transition: "none" });

                //HERE STOP SOUND GAMEPLAY
               

                //END STOP SOUND GAMEPLAY
            });

            $('#nextGame').click(function () {
                ds.screenGame();
            });
            $('#idPlayAgain').click(function () {

                clock = new ds.clock();
                clock.runClock();
                ds.resetGame();
            });

        });
