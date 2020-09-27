# AMONG-US-DISCORD-BOT
Discord BOT that add the room code to the end of the username when typed in a channel.


HOW TO INSTALL IT ?

REQUIREMENTS :
* node.js --> https://nodejs.org/en/download/
* visual studio code --> https://code.visualstudio.com/download

INSTALLATION :    

(if you want to create your own bot go to 1.0, else if you want to use my bot go to 2.1)

0.0 Go to https://discord.com/developers and create your application and your bot. Find your application ID and your token. You must activate 2af.

1.0 Put all the files in the same folder and open it with visual studio code.

1.1 Open the file <token.js> and put your own token.

1.2 Open the file <config.json> and put your own application ID.

1.3 Go to https://discordapi.com/permissions.html and put your client ID, check all the boxes and then click on the link at the bottom od the page in order to add your bot to your server.

If you want to use the bot in only one channel you need to replace in <index.js> the line 20 by what is in the <>:
<    if (args[0].length == 6 &&  args[0].toUpperCase() === args[0] && `${message.channel}` == "<#759787196126330881>" && command ==="au") >

replace <#759787196126330881> by the channel you want to use the bot on.


1.4 Now you can launch the bot by opening <index.js> in visual studio code,then press <F5> and choose <Node.js>.


That's it ! your bot is working !

2.0 Just go to https://discordapi.com/permissions.html and put this client ID : 757329755279458394 then check all the boxes.

2.1 Click on the link at the bottom of the page and then add the bot to your server.


That's it ! The bot is working ! (Only if I have activated it so if it's not working go to 0.0 and create your own bot.)
