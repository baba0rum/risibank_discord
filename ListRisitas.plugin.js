//META{"name":"ExamplePlugin"}*//

	var stickersname= [ ];
	var stickersurl= [ ];
	var stickernull= [ ];
	
	
class ExamplePlugin {
    getName() { return "risitest"; } // Name of your plugin to show on the plugins page 
    getDescription() { return "Describe the basic functions. Maybe a support server link."; } // Description to show on the plugins page 
    getVersion() { return "0.0.1"; } // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
    getAuthor() { return "YourName"; } // Your name

	
    lancement1() {

	// var stickersname= [ ];
	// var stickersurl= [ ];
	var content = document.body.textContent;

	var hasText = content.indexOf(" | RISIBANK DISCORD ")!==-1;
	if(!hasText){
		let messagest = document.querySelectorAll('.title-29uC1r');

		Array.from(messagest).forEach(message => {
			
			message.innerHTML = message.innerHTML + ' | RISIBANK DISCORD      " + <img src="http://i.imgur.com/V9OsBLW.png">';
			
			// On ajoute le button avec son ID pour identifier et sa classe OFF (important)
			$(".buttons-3JBrkn").append('<button id="ButtonRisitas" class="off" style=" background-color: transparent;"> <img src=" https://image.noelshack.com/fichiers/2018/25/2/1529422413-risitaszoom.png" style="width: 36px;"> </button>');
			// On ajoute un évenement de click, quand on clique le button, il réalisera des actions suivants
			$("#ButtonRisitas").click(function () {
			
				// On vérifie si la classe OFF existe
				if ($("#ButtonRisitas").hasClass('off')) {
					
									//Si oui ALors :
					// On remplace Off par On
					$('#ButtonRisitas').addClass('on');
					$('#ButtonRisitas').removeClass('off');
					

					// On crée une balise Div avec la classe ListRisitas pour identifier qui sera utile juste après et qui contient des stickers de risitas
					$(".chatContent-a9vAAp .layerContainer-yqaFcK").append('<div class="ListRisitas layer-v9HyYc"> </div> ');

					// On stylésie grâce le code CSS
					$(".ListRisitas").css({ "background-color": "grey", "width": "500px", "height": "300px", "right": "60px", "bottom": "82px" });
					
					
					for(var i = 0;i < stickersname.length;i++){
					
						if (stickersname.length >=2)
						{
							$(".ListRisitas").append('<img class="stickerRisitas" id=":' + stickersname[i] + ':" title=":' + stickersname[i] + ':" src="http://' + stickersurl[i] + '" width="48" height="36">');
						}
					}
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
			});
		});
		
	}
	

     } // Called when the plugin is loaded in to memory
	 
    load() {
		
		
	} // Called when the plugin is activated (including after reloads)


	start() {

					var request = new XMLHttpRequest();
					request.open('GET', 'https://raw.githubusercontent.com/baba0rum/risibank_discord/master/stickers.list', true);
					request.send(null);
					request.onreadystatechange = function () {
						if (request.readyState === 4 && request.status === 200)
						{
							var type = request.getResponseHeader('Content-Type');
							if (type.indexOf(":") !== 1)
							{

								var lines = request.responseText.split('\n');
								for(var i = 0;i < lines.length;i++){
								
									if (lines[i].split(':')[0].length >=2)
									{
										stickersname[i] = lines[i].split(':')[0]
										stickersurl[i] = lines[i].split(':')[1]
									}
								}
							}
						}
					}
	
	setTimeout(this.lancement1, 2500);
		
	} // Called when the plugin is activated (including after reloads)
    stop() {
		
		
	} // Called when the plugin is deactivated
	
	trouvesticker(){
		
		if (stickernull != stickersname)
		{
			
			try
			{
				// alert("ok");
				let messages = document.querySelectorAll('.cozyMessage-3V1Y8y .markup-2BOw-j');

				Array.from(messages).forEach(message => {

						// alert("messages");
					var content = message.innerHTML;
					for(var i = 0;i < stickersname.length;i++)
					{
						// alert("array");
						
						var hasText = content.indexOf(":" + stickersname[i] + ":")!==-1;
						if(hasText){
							message.innerHTML = message.innerHTML.replace(":" + stickersname[i] + ":", '<img title="' + stickersname[i] + '" src="https://' + stickersurl[i] + '" width="48" height="36">');

						}
					}
				});
			}
			catch (error)
			{
				
			}
		}
	}
	
    observer(changes) {
		
	if ($("#ButtonRisitas").hasClass('off') || $("#ButtonRisitas").hasClass('on'))
	{
		
			setTimeout(this.lancement1, 1000);
			setTimeout(this.trouvesticker, 1000);		

	}
	else
	{
		
		setTimeout(this.lancement1, 1000);	

		
		setTimeout(this.trouvesticker, 1000);		
		
	}
	

		
		$('.stickerRisitas').bind('click', function () {
		
			var idImage = $(this).attr('id');
			
			if ($("#ButtonRisitas").hasClass('on')) {
				$("#ButtonRisitas").addClass('off');
				$("#ButtonRisitas").removeClass('on');

				//On surprime la balise Div
				$(".ListRisitas").remove();
				
			
	  
				$('[role="textbox"] div span span span').append(idImage);

			}
			return;
		});
		

		
	}
}
