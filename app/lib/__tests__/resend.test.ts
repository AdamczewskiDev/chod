import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createContactEmailTemplate } from '../resend';

describe('Resend Email Template', () => {
  describe('createContactEmailTemplate', () => {
    it('should create valid HTML email template with all fields', () => {
      const data = {
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        phone: '+48 123 456 789',
        message: 'Test message',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('Jan Kowalski');
      expect(html).toContain('jan@example.com');
      expect(html).toContain('+48 123 456 789');
      expect(html).toContain('Test message');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html>');
    });

    it('should escape HTML special characters in name', () => {
      const data = {
        name: '<script>alert("xss")</script>',
        email: 'test@example.com',
        phone: '',
        message: 'Test',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('&lt;script&gt;');
      expect(html).toContain('&lt;/script&gt;');
      expect(html).not.toContain('<script>');
    });

    it('should escape HTML special characters in email', () => {
      const data = {
        name: 'Test User',
        email: 'test<script>@example.com',
        phone: '',
        message: 'Test',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('&lt;script&gt;');
      expect(html).not.toContain('<script>');
    });

    it('should escape HTML special characters in message', () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '',
        message: '<div>HTML content</div> & "quotes"',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('&lt;div&gt;');
      expect(html).toContain('&lt;/div&gt;');
      expect(html).toContain('&amp;');
      expect(html).toContain('&quot;');
      expect(html).not.toContain('<div>');
    });

    it('should handle empty phone number gracefully', () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '',
        message: 'Test message',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('Nie podano');
    });

    it('should escape apostrophes in text', () => {
      const data = {
        name: "O'Reilly",
        email: "test@example.com",
        phone: '',
        message: "It's a test",
      };

      const html = createContactEmailTemplate(data);

      // Apostrophe should be escaped
      expect(html).toContain('&#039;');
    });

    it('should create mailto link for email', () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '',
        message: 'Test',
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain('mailto:test@example.com');
      expect(html).toMatch(/<a[^>]*href="mailto:test@example.com"/);
    });

    it('should handle very long messages', () => {
      const longMessage = 'A'.repeat(1000);
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '',
        message: longMessage,
      };

      const html = createContactEmailTemplate(data);

      expect(html).toContain(longMessage);
      expect(html.length).toBeGreaterThan(1000);
    });
  });
});
