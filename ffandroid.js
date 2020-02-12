// ==UserScript==
// @name         Risibank discord FA v2
// @namespace    http://tampermonkey.net/
// @version      3
// @description  risibank2
// @author       TopicModos
// @match        *://discordapp.com/channels/*
// @downloadURL  https://raw.githubusercontent.com/baba0rum/risibank_discord/master/ffandroid.js
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
    var toggle = 0;
    var firstopen = 0;
    const update_messages = () => {


        let messages = document.querySelectorAll('.cozyMessage-3V1Y8y .markup-2BOw-j');

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

                var hasText = content.indexOf(" | ")!==-1;
                if(!hasText){

                    if (toggle == 0)
                    {
                        document.head.insertAdjacentHTML('beforeend','<style>.sidebar-2K8pFh {width: 0px}</style>');
                        toggle=1;
                    }

                    let messagest = document.querySelectorAll('.title-29uC1r');

                    Array.from(messagest).forEach(message => {

                        message.innerHTML = message.innerHTML + " | " + '<img class="servname" id="servname" src="http://i.imgur.com/V9OsBLW.png">';

                        $('.title-29uC1r').click(function () {
                            if (toggle == 0)
                            {
                                document.head.insertAdjacentHTML('beforeend','<style>.sidebar-2K8pFh {width: 0px}.membersWrap-2h-GB4 {min-width: 0px}.members-1998pB {width: 0px}</style>');
                                toggle = 1;
                            }
                            else if (toggle == 1)
                            {
                                document.head.insertAdjacentHTML('beforeend','<style>.sidebar-2K8pFh {width: 180px}.membersWrap-2h-GB4 {min-width: 180px}.members-1998pB {width: 180px}</style>');

                                toggle = 0;
                            }
                            return;

                        });
                        // On ajoute le button avec son ID pour identifier et sa classe OFF (important)
                        $(".buttons-3JBrkn").append('<button id="ButtonRisitas" class="off" style=" background-color: transparent;"> <img src=" https://image.noelshack.com/fichiers/2018/25/2/1529422413-risitaszoom.png" style="width: 36px;"> </button>');
                        // On ajoute un évenement de click, quand on clique le button, il réalisera des actions suivants
                        $("#ButtonRisitas").click(function () {
                            if ($("#ButtonRisitas").hasClass('off')) {
                                //Si oui ALors :

                                // On remplace Off par On
                                $('#ButtonRisitas').removeClass('off');
                                $('#ButtonRisitas').addClass('on');

                                //let messages = document.querySelectorAll('.chatContent-a9vAAp .layerContainer-yqaFcK');

                                // On crée une balise Div avec la classe ListRisitas pour identifier qui sera utile juste après et qui contient des stickers de risitas
                                $(".chatContent-a9vAAp .layerContainer-yqaFcK").append('<div class="ListRisitas layer-v9HyYc"> </div> ');


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

                                    //On surprime la balise Div
                                    $(".ListRisitas").remove();
                                }
                            }

                        })

                    })
                }
//                 let messagest = document.querySelectorAll('.title-29uC1r');

//                 Array.from(messagest).forEach(message => {


//                 })

            }
        }

        catch (error)
        {
        }

        firstopen = 1;
    };

    function getText(){
        var content = document.body.textContent || document.body.innerText;
        var hasText = content.indexOf(" | ")!==-1;
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

            setTimeout(getText, 3000);
        }
        else{
            setTimeout(getText, 3000);

        }

    }

function mobilestuff(){

document.head.insertAdjacentHTML('beforeend','<style>div, button {border-radius: 0px!important;padding: 0px!important;}.avatarHint-1qgaV3 foreignObject, .userPopout-3XzG_A foreignObject {mask: none;}foreignObject[mask] {mask: none;}.wrapper-1Rf91z {width: 0px;}.scrollerWrap-1IAIlv {width: 35px;}.listItem-2P_4kh {width: 25px;}.pill-31IEus {z-index: 1000;}.base-3dtUhz {left: 0px;}.sidebar-2K8pFh {width: 180px}.icon-1_QxNX {display: none;}.members-1998pB {width: 0px;}.member-3W1lQa {margin: 0;}.membersWrap-2h-GB4 {min-width: 0px;}.headerTop-3C2Zn0 {padding:0;}.footer-1fjuF6 {display: none;}.form-2fGMdU {margin:0;}.channelTextArea-rNsIhG {margin-bottom: 0;}.iconWrapper-2OrFZ1 {margin: 0;}.lowerBadge-29hYVK,.upperBadge-2XnnGB {right: unset;left: 5px;}.sidebarRegion-VFTUkN,.sidebarRegion-VFTUkN {flex: 0;}.contentColumn-2hrIYH,.customColumn-Rb6toI,.sidebarScrollable-1qPI87+.content-1rPSz4 {min-width: unset;max-width: unset;}.sidebarScrollable-1qPI87 {width: 150px;}.sidebarScrollable-1qPI87+.content-1rPSz4 {margin-left: 150px;}.buttonWrapper-1ZmCpA.button-38aScr{display:none;}.avatar-17mtNa {margin-left: 0;margin-right: 0;}.contentCozy-3XX413 {margin-left: 40px;}.avatar-3uk_u9 {margin-right: 0px;}.sidebar-CFHs9e {width: 75px;}.avatarWrapper-2yR4wp {margin-right: 0px;}.button-14-BFJ {width: 22px;}.nameTag-3uD-yy {display: none;}</style>');

    }

    window.onload = function () {

        setTimeout(mobilestuff, 5000);
        setTimeout(getText, 5000);

        setTimeout(update_messages, 5000);
    };



})();
