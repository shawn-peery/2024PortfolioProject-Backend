import { describe, it, expect } from 'vitest'
import request from "supertest"
import { app, port } from './server';

import express from 'express'

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
})

