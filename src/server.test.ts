import { describe, it, expect } from 'vitest'
import { app, port } from './server';

import express from 'express'



describe('Server Tests', () => {
	it('should create an Express app instance', () => {
		expect(app).toBeDefined();
		console.log(`App's constructor: ${app.constructor}`)
		console.log(`Express()'s constructor: ${express.constructor}`)
		expect(app.constructor).toBe((express()).constructor);
	});
	it("should have the server listening on port 5000", () => {
		expect(port).toBe(5000);
	})
})

