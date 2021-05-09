// ==UserScript==
// @name         Risibank pokpok
// @namespace    http://tampermonkey.net/
// @version      5
// @description  risibank2
// @author       TopicModos
// @match        pokpok.fr/*
// @downloadURL  https://raw.githubusercontent.com/baba0rum/risibank_discord/master/discordrisibank.js
// @grant        none
// @grant        GM_setClipboard
// @grant        GM_getClipboard
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
// code chopé un peu partout sur google :risinez:


(function() {
    'use strict';

    var stickername = [];
    var stickerurl = [];

    const update_messages = () => {


        let messages = document.querySelectorAll('.chatMessage');

        Array.from(messages).forEach(message => {


            try {

                for(var i = 0;i < stickername.length;i++){

                    var content = message.textContent;
                    var hasText = content.indexOf(":" + stickername[i] + ":")!==-1;
                    if(hasText){
                        message.innerHTML = message.innerHTML.replace(":" + stickername[i] + ":", '<img title="' + stickername[i] + '" src="https://' + stickerurl[i] + '" width="48" height="36">');

                    }
                }

            }


            catch (error)
            {
            }
        });

        setTimeout(update_messages, 2000);
    }

    const checkChannel = (changes) => {
        for(let change of changes){
            if(change.addedNodes.length){
                setTimeout(update_messages, 100);
            }
        }
    }

    const channel = new MutationObserver(checkChannel);
    //update_messages();

    const showingstuff2 = (nom, url) => {
        try{

            if (nom!== ""){


                var content = document.body.textContent;

                var hasText = content.indexOf(" | RISIBANK DISCORD ")!==-1;
                if(!hasText){
                    let messagest = document.querySelectorAll('.textInput');

                    Array.from(messagest).forEach(message => {

                        message.innerHTML = message.innerHTML + " | RISIBANK DISCORD      " + '<img src="http://i.imgur.com/V9OsBLW.png">';


var button = document.createElement("div");
button.innerHTML = 'Title';
button.id = "issounight";
button.style = "top:20;right:20;position:absolute;z-index: 9999"
document.body.appendChild(button);

                        var button2 = document.createElement("div");
                        button2.innerHTML = '<button id="ButtonRisitas" class="off" style=" background-color: transparent;"> <img src=" https://image.noelshack.com/fichiers/2018/25/2/1529422413-risitaszoom.png" style="width: 36px;"> </button>';                        button2.id = "nightclub";
                        button2.style = "top:0;right:0;position:absolute;z-index: 9999"
                        document.body.appendChild(button2);
                        $(".nightclub").append("kek");

                        // On ajoute le button avec son ID pour identifier et sa classe OFF (important)
                        $(".nightclub").append('<button id="ButtonRisitas" class="off" style=" background-color: transparent;"> <img src=" https://image.noelshack.com/fichiers/2018/25/2/1529422413-risitaszoom.png" style="width: 36px;"> </button>');
                        // On ajoute un évenement de click, quand on clique le button, il réalisera des actions suivants
                        $("#ButtonRisitas").click(function () {
                            if ($("#ButtonRisitas").hasClass('off')) {
                                //Si oui ALors :
console.log("oui");
                                // On remplace Off par On
                                $('#ButtonRisitas').removeClass('off');
                                $('#ButtonRisitas').addClass('on');

                                //let messages = document.querySelectorAll('.chatContent-a9vAAp .layerContainer-yqaFcK');

                                // On crée une balise Div avec la classe ListRisitas pour identifier qui sera utile juste après et qui contient des stickers de risitas
                                $(".textHandleBox").append('<div class="ListRisitas layer-v9HyYc"> </div> ');

                                // On stylésie grâce le code CSS
                                $(".ListRisitas").css({ "background-color": "grey", "width": "500px", "height": "300px", "right": "60px", "bottom": "82px", "overflow": "auto" });

                                // On ajoute les sticker dans la balise Div grâce l'identification de la classe ListRisitas

                                for(var i = 0;i < stickername.length;i++){

                                    if (stickername[i].length >=1){


                                        $(".ListRisitas").append('<img class="stickerRisitas" id=":' + stickername[i] + ':" title=":' + stickername[i] + ':" src="http://' + stickerurl[i] + '" width="48" height="36">');
                                    }
                                    //message.innerHTML = message.innerHTML.replace(":" + stickername[i] + ":", '<img title="' + stickername[i] + '" src="https://' + stickerurl[i] + '" width="48" height="36">');


                                }


                                // On crée un événement de clique sur un sticker pour mettre le code dans le textbox (là où tu écris des messages)
                                $('.stickerRisitas').bind('click', function () {

                                    // On déclare la variable idimage qui contient l'id de l'image (représente par ID)
                                    var idImage = $(this).attr('id');
                                    // On cible le textox grâce le rôle textbox pour ajouter le code grâce la variable idImage qui stocke le nom de code
                                    document.execCommand('insertText', false, idImage + " ")
//                                     $('[role="textbox"] div span span span').text(idImage);

                                    if ($("#ButtonRisitas").hasClass('on')) {
                                        $("#ButtonRisitas").addClass('off');
                                        $("#ButtonRisitas").removeClass('on');

                                        //On surprime la balise Div
                                        $(".ListRisitas").remove();
                                    }


                                });
                            }
                            else{
                                //Pour fermer la liste des risitas
                                if ($("#ButtonRisitas").hasClass('on')) {
                                    $("#ButtonRisitas").addClass('off');
                                    $("#ButtonRisitas").removeClass('on');
console.log("non");

                                    //On surprime la balise Div
                                    $(".ListRisitas").remove();
                                }
                            }

                        })

                    })
                }
                let messagest = document.querySelectorAll('.textInput');

                Array.from(messagest).forEach(message => {


                })

            }
        }

        catch (error)
        {
        }
    };

    function getText(){
        var content = document.body.textContent || document.body.innerText;
        var hasText = content.indexOf(" | RISIBANK DISCORD ")!==-1;
        if(!hasText){

            var request = new XMLHttpRequest();
            request.open('GET', 'https://raw.githubusercontent.com/baba0rum/risibank_discord/master/stickers.list', true);
            request.send(null);
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    var type = request.getResponseHeader('Content-Type');
                    if (type.indexOf(":") !== 1) {

                        var lines = request.responseText.split('\n');
                        for(var i = 0;i < lines.length;i++){

                            showingstuff2(lines[i].split(':')[0], lines[i].split(':')[1]);

                            stickername[i] = lines[i].split(':')[0];
                            stickerurl[i] = lines[i].split(':')[1];


                        }
                    }
                }
            }

            setTimeout(getText, 1000);
        }
        else{
            setTimeout(getText, 1000);

        }

    }



    window.onload = function () {


        setTimeout(getText, 2000);

        setTimeout(update_messages, 2000);
    };



})();
