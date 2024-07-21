import { describe, it, expect } from 'vitest'
import { app, port } from './server';

import express from 'express'


describe('Server Tests', () => {
	it('should create an Express app instance', () => {
		expect(app).toBeDefined();
		expect(app).toBeInstanceOf(express());
	});
})

