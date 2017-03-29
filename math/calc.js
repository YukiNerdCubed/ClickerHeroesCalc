

const commando = require('discord.js-commando');

class Calcuate extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'calc',
            group: 'math',
            memberName: 'calc',
            description: 'Calcuates a expression.'
            // examples [ 'roll' ]
        });
    }

    async run(message, expr) {
        var output = eval(expr);
            message.reply(output);

    }
}

module.exports = Calcuate;

