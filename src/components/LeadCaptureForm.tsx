'use client';

import { useState } from 'react';
import Button from './ui/Button';

interface FormState {
  email: string;
  name: string;
  company: string;
}

interface FormStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormState>({
    email: '',
    name: '',
    company: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'idle',
  });

  const validateForm = (): boolean => {
    if (!formData.email || !formData.name) {
      setFormStatus({
        status: 'error',
        message: 'Email and name are required',
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        status: 'error',
        message: 'Please enter a valid email address',
      });
      return false;
    }

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formStatus.status === 'error') {
      setFormStatus({ status: 'idle' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ status: 'loading' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setFormStatus({
        status: 'success',
        message: 'Thanks! We\'ll be in touch soon.',
      });

      // Reset form
      setFormData({ email: '', name: '', company: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ status: 'idle' });
      }, 5000);
    } catch (error) {
      setFormStatus({
        status: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    }
  };

  const isLoading = formStatus.status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Name Input */}
      <div className="relative group">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-blue-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        {formStatus.status === 'error' && !formData.name && (
          <p className="mt-1 text-sm text-red-500">Name is required</p>
        )}
      </div>

      {/* Email Input */}
      <div className="relative group">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-blue-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        {formStatus.status === 'error' && !formData.email && (
          <p className="mt-1 text-sm text-red-500">Email is required</p>
        )}
      </div>

      {/* Company Input */}
      <div className="relative group">
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-blue-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Error Message */}
      {formStatus.status === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 animate-slideDown">
          <p className="text-sm text-red-700 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {formStatus.message}
          </p>
        </div>
      )}

      {/* Success Message */}
      {formStatus.status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 animate-slideDown">
          <p className="text-sm text-green-700 font-medium flex items-center gap-2">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {formStatus.message}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Get Started Now'
        )}
      </Button>

      {/* Privacy notice */}
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
