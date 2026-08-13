/**
 * Desk API Integration for Zygn - Interior Design & Design - Build
 * Handles lead submission with validation and duplicate detection
 */

const DESK_URL = "https://deskbackend.getnos.io/v1/lead";
const API_KEY = "lh_r0Y-6snypPWGYLoOeSfBrMIAr_xPiRN30sl3eIvyuDU";

let submitting = false;

/**
 * Validate form fields
 * @param {Object} fields - Form data object
 * @returns {Object} { isValid: boolean, errors: { fieldName: string } }
 */
export function validateFields(fields) {
  const errors = {};

  // Name validation
  if (!fields.full_name || fields.full_name.trim().length < 2) {
    errors.full_name = "Full name is required and must be at least 2 characters";
  }

  // Studio name validation
  if (!fields.studio_name || fields.studio_name.trim().length < 2) {
    errors.studio_name = "Studio name is required and must be at least 2 characters";
  }

  // Email validation - only work emails (no personal/free email domains)
  const email = (fields.email || "").trim().toLowerCase();
  const personalEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "aol.com",
    "icloud.com",
    "mail.com",
    "protonmail.com",
    "yandex.com",
    "zoho.com",
    "rediffmail.com",
    "test.com",
    "example.com",
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Valid email address is required";
  } else {
    const emailDomain = email.split("@")[1];
    if (personalEmailDomains.includes(emailDomain)) {
      errors.email = "Please use your work email (company domain), not personal email";
    }
  }

  // Phone validation
  const phoneNumber = fields.mobile || "";
  const countryCode = fields.country_code || "+91";

  if (countryCode === "+91") {
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      errors.mobile = "For +91, phone number must be exactly 10 digits";
    }
  } else {
    if (!/^[0-9]{7,15}$/.test(phoneNumber)) {
      errors.mobile = "Phone number must be 7-15 digits";
    }
  }

  // Monthly projects validation
  if (!fields.monthly_projects || fields.monthly_projects.trim().length === 0) {
    errors.monthly_projects = "Number of employees is required";
  }

  // Project details validation
  if (!fields.project_details || fields.project_details.trim().length < 10) {
    errors.project_details = "Project details must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submit lead data to Desk API
 * @param {Object} fields - Form data object (flat structure with custom keys allowed)
 * @returns {Promise<{ status?: string, leadId?: string, duplicate?: boolean, skipped?: boolean, message?: string, error?: boolean }>}
 */
export async function submitLead(fields) {
  if (submitting) {
    return {
      duplicate: true,
      skipped: true,
      message: "Submission already in progress. Please wait.",
      error: false,
    };
  }

  submitting = true;

  try {
    // Validate fields before submission
    const validation = validateFields(fields);
    if (!validation.isValid) {
      return {
        error: true,
        message: "Please fill in all required fields correctly",
        errors: validation.errors,
      };
    }

    const payload = {
      form: "Zygn - Interior Design & Design - Build",
      honeypot: fields.honeypot || "",
      subject: `Interior - Zygn Interior Design & Design`,
      // Spread all form answers — known + custom fields become columns
      full_name: fields.full_name,
      studio_name: fields.studio_name,
      email: fields.email,
      country_code: fields.country_code,
      mobile: fields.mobile,
      monthly_projects: fields.monthly_projects,
      project_details: fields.project_details,
      page: window.location.href,
    };

    const res = await fetch(DESK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    // Desk ignores identical payloads for ~15 min — treat as success
    if (data.duplicate) {
      return {
        status: "success",
        duplicate: true,
        message: "Lead already submitted recently",
        error: false,
      };
    }

    if (!res.ok) {
      throw new Error(
        data.message || `Lead submit failed (${res.status})`
      );
    }

    // Success response
    return {
      status: "success",
      leadId: data.leadId,
      message: data.message || "Form submitted successfully!",
      error: false,
    };
  } catch (error) {
    console.error("Desk API Error:", error);
    return {
      error: true,
      message: error.message || "Network error. Please try again.",
    };
  } finally {
    submitting = false;
  }
}
