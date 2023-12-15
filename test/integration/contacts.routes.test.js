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

	test('Test: should check if created client', async () => {
		
		const res = await request(app).post('/contacts/').send({
			perfil: 'perfil_test',
			nome: 'nome_test',
			numero: 'numero_test'
		});

		expect(res.statusCode).toEqual(201);
	});

	test('Test: should check if return all clients', async () => {
		const res = await request(app).get('/contacts/');

		console.log(`Dates for Database: ${res.body}`);
		expect(res.statusCode).toEqual(200);
	});

	test('Test: should check if return client by ID', async () => {
		const res = await request(app).get('/contacts/1');
		
		expect(res.body).toHaveProperty('id', 'perfil', 'nome', 'numero');
		expect(res.statusCode).toEqual(200); 
	});

	test('Test: should check if updated client dates by ID', async () => {
		const res = await request(app).put('/contacts/').send({
			perfil: 'perfil_update',
			nome: 'nome_update',
			numero: 'numero_update'
		});

		expect(res.statusCode).toEqual(200);
	});

	test('Test: should check if remove client by ID', async () => {
		const res = await request(app).delete('/contacts/1');

		expect(res.statusCode).toEqual(200);
	});

	afterAll(async () => {
		await ContactsTestModel.drop();
	});
	
});