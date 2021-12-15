//https://www.npmjs.com/package/mal-scraper package required to post the correct info.

const malScraper = require('mal-scraper');
const { MessageEmbed } = require('discord.js');

module.exports = {
    help: `Displays the Anime info`,
    pm: true,
    commandFunction: function (args, message, Bot) {
        if (!args.length) return message.channel.send('You didn\'t specify an anime name');
        const channel = message.channel;
        const name = args.join();
        malScraper.getInfoFromName(name)
            .then((result) =>  {
                if(result.genres.includes("Ecchi")) return message.channel.send('Access denied')
                if(result.genres.includes("Hentai")) return message.channel.send('Access denied')
                console.log(result);
                const embed = new MessageEmbed()
                .setTitle(`${result.title}`)
                .setThumbnail(`${result.picture}`)
                .addFields([
                    {name: '\u200b', value: `**Genres**: ${result.genres}`},
                    {name: '\u200b', value: `**Premiered**: ${result.premiered}`},
                    {name: '\u200b', value: `**Status**: ${result.status}`},
                    {name: '\u200b', value: `**Episode Count**: ${result.episodes}`},
                    {name: '\u200b', value: `**Description**:\n\n${result.synopsis.substring(0, 1000)}`}
                ]);
                channel.send(embed);
            })
            .catch(error => console.log(error));
    }
}
