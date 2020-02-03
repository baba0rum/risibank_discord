// ==UserScript==
// @name         Risibank discord FA v2
// @namespace    http://tampermonkey.net/
// @version      2
// @description  risibank2
// @author       TopicModos
// @match        *://discordapp.com/channels/*
// @downloadURL  https://raw.githubusercontent.com/baba0rum/risibank_discord/master/discordrisibank.js
// @grant        none
// ==/UserScript==
// code chopé un peu partout sur google :risinez:


(function() {
    'use strict';
    const apply_styles = (message) => {
        //         message.onmouseover = () => {
        //             message.style.cssText = 'background-color:rgba(0,0,0,.1);cursor:pointer';
        //         }
        //         message.onmouseout = () => {
        //             message.style.cssText = '';
        //         }
    }

    var stickername = [];
    var stickerurl = [];

    const update_messages = () => {


//         let messages = document.querySelectorAll('.containerCozyBounded-1rKFAn .markup-2BOw-j');
        let messages = document.querySelectorAll('.markup-2BOw-j');

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
//     update_messages();

        const showingstuff2 = (nom, url) => {
        try{

            if (nom!== ""){


//             var content = document.body.textContent || document.body.innerText;
                var content = document.body.textContent;

            var hasText = content.indexOf(" | RISIBANK DISCORD ")!==-1;
            if(!hasText){
                let messagest = document.querySelectorAll('.title-29uC1r');

                Array.from(messagest).forEach(message => {

                    message.innerHTML = message.innerHTML + " | RISIBANK DISCORD      " + '<img src="http://i.imgur.com/V9OsBLW.png">';



                })
            }
            let messagest = document.querySelectorAll('.title-29uC1r');

                Array.from(messagest).forEach(message => {

//                     message.innerHTML = message.innerHTML + '<img title="' + nom + '"src="http://' + url + '" width="48" height="36">';

                })

            }
        }

        catch (error)
        {
        }
    };

function getText(){
    // read text from URL location
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

//                 setTimeout(getText, 3000);
            }
    else{
//         setTimeout(getText, 3000);

    }

}


    window.onload = function () {

        setTimeout(getText, 5000);

        setTimeout(update_messages, 5000);
};



})();
