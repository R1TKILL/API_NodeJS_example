'use strict'

/**
 * Here there will be routine logic to rotate the logs, rotating the files with a time of 6
 * months from the current date, as provided for in the General Law of the Internet Civil Framework,
 * as well as keep the records for 6 months until the new rotation or if the file is more than 100 megs,
 * by default it is already compressed in gzip. 
*/

const moment = require('moment');

const pino = require('pino')({
	level: ('info'), // levels: silent => trace => debug => info => warn => error => fatal.
	transport: {
		targets: [
			{ 
				target: 'pino-rotating-file-stream', options: {
					filename: 'API.log', // Required
					path: './logs', // Required
					size: '100M', // Limit size for rotate.
					interval: '200d', // Log files rotation time. // minimum 180d 
					maxFiles: 5, // Maximum number of files that must be kept.
					compress: true // .gzip
				}
			},
			{
				// Stylized register, not used.
				target: 'pino-pretty', options: { 
					colorize: true, // No caso de exibir no bash e não salvar files, mudar para true.
					levelFirst: true,
					translateTime: moment().format('DD-MM-YYYY <==> HH:mm:ss (Z)'), // Z = UTC -3
					mkdir: true,
					append: true, // Resgata e cola os logs anteriores no arquivo se for do mesmo dia.
					ignore: false
					// destination: './logs/API.log' // Salvando.
				} 
			}
		]
	}
});

module.exports = pino;