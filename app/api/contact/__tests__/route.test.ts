import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// Mock Resend before importing route
const mockSend = vi.fn();
const mockCreateTemplate = vi.fn((data) => `<html>${JSON.stringify(data)}</html>`);

vi.mock('@/app/lib/resend', () => ({
  resend: {
    emails: {
      send: mockSend,
    },
  },
  createContactEmailTemplate: mockCreateTemplate,
}));

describe('POST /api/contact', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    vi.clearAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  const createRequest = (body: any) => {
    return new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  describe('Validation', () => {
    it('should reject request with missing name', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        email: 'test@example.com',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('wypełnione');
    });

    it('should reject request with missing email', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('wypełnione');
    });

    it('should reject request with missing message', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('wypełnione');
    });

    it('should reject invalid email format', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'invalid-email',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('Nieprawidłowy adres email');
    });

    it('should reject name longer than 100 characters', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'A'.repeat(101),
        email: 'test@example.com',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('100 znaków');
    });

    it('should reject email longer than 254 characters', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'a'.repeat(250) + '@example.com',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('254 znaków');
    });

    it('should reject message longer than 5000 characters', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        message: 'A'.repeat(5001),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('5000 znaków');
    });

    it('should reject phone longer than 20 characters', async () => {
      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1'.repeat(21),
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toContain('20 znaków');
    });
  });

  describe('Rate Limiting', () => {
    it('should allow first 5 requests from same IP', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      process.env.CONTACT_EMAIL = 'test@example.com';
      mockSend.mockResolvedValue({ id: 'test-id' });

      const { POST } = await import('../route');

      // First 5 requests should succeed - create new request for each
      for (let i = 0; i < 5; i++) {
        const request = createRequest({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
        });
        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });

    it('should reject 6th request from same IP within 1 minute', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      process.env.CONTACT_EMAIL = 'test@example.com';
      mockSend.mockResolvedValue({ id: 'test-id' });

      const { POST } = await import('../route');

      // Make 5 requests first - create new request for each
      for (let i = 0; i < 5; i++) {
        const request = createRequest({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
        });
        await POST(request);
      }

      // 6th request should be rate limited
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      });
      const response = await POST(request);
      expect(response.status).toBe(429);
      const data = await response.json();
      expect(data.error).toContain('Zbyt wiele żądań');
    });
  });

  describe('Email Sending', () => {
    it('should send email successfully when Resend is configured', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      process.env.CONTACT_EMAIL = 'test@example.com';
      process.env.RESEND_FROM_EMAIL = 'from@example.com';

      mockSend.mockResolvedValue({ id: 'test-id' });

      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+48 123 456 789',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(mockSend).toHaveBeenCalled();
    });

    it('should use default email kontakt@chod.pl when CONTACT_EMAIL not set', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      delete process.env.CONTACT_EMAIL;

      mockSend.mockResolvedValue({ id: 'test-id' });

      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      });

      await POST(request);

      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({
          to: 'kontakt@chod.pl',
        })
      );
    });

    it('should handle Resend API errors gracefully', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      process.env.CONTACT_EMAIL = 'test@example.com';
      process.env.NODE_ENV = 'production';

      mockSend.mockRejectedValue(new Error('Resend API error'));

      const { POST } = await import('../route');
      const request = createRequest({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBeDefined();
    });
  });

  describe('Input Sanitization', () => {
    it('should sanitize HTML tags from input', async () => {
      process.env.RESEND_API_KEY = 'test-key';
      process.env.CONTACT_EMAIL = 'test@example.com';

      mockSend.mockResolvedValue({ id: 'test-id' });

      const { POST } = await import('../route');
      const request = createRequest({
        name: '<script>alert("xss")</script>',
        email: 'test@example.com',
        message: 'Test message',
      });

      await POST(request);

      const callArgs = mockSend.mock.calls[0][0];
      expect(callArgs.html).not.toContain('<script>');
    });
  });
});
