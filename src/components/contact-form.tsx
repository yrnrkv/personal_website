"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    // More robust email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Show alert with submitted data (demo only - not actually sent)
      alert(
        `Form Submitted (Demo Only)!\n\nThis is a demonstration form. In production, this would send your message.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Get in Touch.</h2>
        <p className="text-muted-foreground md:text-lg/relaxed max-w-md mx-auto">
          Have a question or want to work together? Send me a message!
        </p>
      </div>

      {isSubmitted && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-center">
          <p className="font-medium">✓ Thank you for your message!</p>
          <p className="text-sm mt-1">I&apos;ll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-muted-foreground"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.name
                ? "border-red-500/50 focus:border-red-500"
                : "border-white/20 focus:border-primary/50"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-muted-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.email
                ? "border-red-500/50 focus:border-red-500"
                : "border-white/20 focus:border-primary/50"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            rows={5}
            className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
              errors.message
                ? "border-red-500/50 focus:border-red-500"
                : "border-white/20 focus:border-primary/50"
            }`}
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
