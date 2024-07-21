import { describe, it, expect, vi } from 'vitest'
import request from "supertest"

import express from 'express'

import { app, port, startServer } from './server';

describe('Server Tests', () => {


	it('should create an Express app instance', () => {

		expect(app).toBeDefined();
		expect(app.constructor).toBe((express()).constructor);
	});
	it("should have the server listening on port 5000", () => {

		expect(port).toBe(5000);
	})


	it("should return a message when requesting root url", () => {

		return request(app).get('/').expect('Content-Type', /text/).expect(200).then(response => {
			expect(response.text).toEqual("Successfully received message!");
		})
	})

	it("should print a console.log message when the server starts up", async () => {
		const originalConsoleLog = console.log;

		console.log = vi.fn();

		await startServer()
		expect(console.log).toHaveBeenCalledWith(`Server is running on port ${port}`)

		console.log = originalConsoleLog;

	})

});


