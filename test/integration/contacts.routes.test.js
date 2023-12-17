'use strict'

const request = require('supertest');
const app = require('../../router/routes');
const ContactsTestService = require('../../services/ContactsTestService');
const ContactsTestModel = require('../../Models/ContactsTestModel');

describe('Test routes', () => {

	beforeAll(async () => {
		console.log(`🚀 Server is running in mode: ${process.env.NODE_ENV}`);
		await ContactsTestService.connectSQL();
		console.log('Creating Test Table'); 
		await ContactsTestModel.sync({ force: true });
	});

	test('Test: should check if created contact', async () => {
		const testObjDates = { perfil: 'perfil_test', nome: 'nome_test', numero: '123456' };
		const res = await request(app.app).post('/contacts/').send(testObjDates);

		expect(res.statusCode).toEqual(201);
	});

	test('Test: should check if return all contacts', async () => {
		const res = await request(app.app).get('/contacts/');

		console.log(`Dates for Database: ${res.body}`);
		expect(res.statusCode).toEqual(200);
	});

	test('Test: should check if return contact by ID', async () => {
		const res = await request(app.app).get('/contacts/1');
		
		expect(res.body).toHaveProperty('id', 'perfil', 'nome', 'numero');
		expect(res.statusCode).toEqual(200); 
	});

	test('Test: should check if updated contact dates by ID', async () => {
		const testObjDatesUpdate = { 
			id: 1,
			perfil: 'perfil_new',
			nome: 'nome_new',
			numero: '654321'
		};
		const res = await request(app.app).put('/contacts/').send(testObjDatesUpdate);

		if (res.statusCode === 500) { console.log(res.body.message) };

		expect(res.statusCode).toEqual(200);
	});
	
	test('Test: should check if remove contact by ID', async () => {
		const res = await request(app.app).delete('/contacts/1');

		expect(res.statusCode).toEqual(200);
	});

	afterAll(async () => {
		await ContactsTestModel.drop();
		await ContactsTestService.desconnectSQL();
	});
	
});