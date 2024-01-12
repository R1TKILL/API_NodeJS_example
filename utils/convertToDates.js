'use strict'

/*	Em desenvolvimento, pega o CSV e transforma em JS iterável para as seeds, ainda é necessário:

* 1 => Formatar o arquivo, no modo prettier funciona.
* 2 => Fazer um replace all nas aspas simples (') para vazio ou nada.
* 3 => Criar a constante no inicio que recebe o "JSON/JS" e exporta-la no final.
* 4 => Apagar um registro a mais vazio que ele faz.	*/

const csv = ('../database/backup/People.csv');

async function csvToJSON () {

	const fs = require('fs/promises');
	const readingFileCsv = (await fs.readFile(csv)).toString();
	const splitingFile = readingFileCsv.split('\r\n');
	const [headers, ...fields] = splitingFile;
	const arrDatesJson = [];

	for (const f of fields) {
		const constructFile = f.split(',');
		arrDatesJson.push({
			perfil: (`${constructFile[1]},${constructFile[2]}`),
			nome: constructFile[3],
			numero: constructFile[4]
		});
	};

	await fs.writeFile('../database/backup/peoples.js', JSON.stringify(arrDatesJson));
};

csvToJSON(); 