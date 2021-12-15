//OriginDB package is required for this to work. https://www.npmjs.com/package/origindb/v/2.6.1
//Add this to global.js to define Db in this code file. global.Db = require("origindb")("database");
//JSON file for colors. https://pastebin.com/LwKuf1U8

'use strict';

module.exports = {
    help: `Color list for server roles.`,
    commandFunction: function (args, message, Bot) {
    
        if (args[0] === 'display') {

        let colorsDB = Db('hex-colors').object();
        let colors = Object.keys(colorsDB);

        return message.channel.send("```" + colors + "```");

            }

        if (args[0] === 'search') {

        if (!Db('hex-colors').has(args[1])) return message.channel.send("Color doesn't exist.");
            
        let hex = Db('hex-colors').get(args[1]);

            return message.channel.send(" ``" + hex  +"`` ");
            
     }
       
       }
};
