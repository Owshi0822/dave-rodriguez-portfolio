
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// HTML sanitization function to prevent XSS attacks
const escapeHTML = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

// Input validation constants
const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 maximum email length
  subject: 200,
  message: 5000
};

const validateInput = (data: ContactEmailRequest): string | null => {
  if (!data.name || data.name.length > MAX_LENGTHS.name) {
    return `Name is required and must be less than ${MAX_LENGTHS.name} characters`;
  }
  if (!data.email || data.email.length > MAX_LENGTHS.email) {
    return `Email is required and must be less than ${MAX_LENGTHS.email} characters`;
  }
  if (!data.subject || data.subject.length > MAX_LENGTHS.subject) {
    return `Subject is required and must be less than ${MAX_LENGTHS.subject} characters`;
  }
  if (!data.message || data.message.length > MAX_LENGTHS.message) {
    return `Message is required and must be less than ${MAX_LENGTHS.message} characters`;
  }
  
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return "Please provide a valid email address";
  }
  
  return null;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();

    console.log("Sending email with data:", { 
      name: requestData.name, 
      email: requestData.email, 
      subject: requestData.subject,
      messageLength: requestData.message?.length || 0
    });

    // Validate input
    const validationError = validateInput(requestData);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs to prevent XSS
    const sanitizedData = {
      name: escapeHTML(requestData.name.trim()),
      email: escapeHTML(requestData.email.trim()),
      subject: escapeHTML(requestData.subject.trim()),
      message: escapeHTML(requestData.message.trim())
    };

    // Send email to Dave's Gmail
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["davecabrerarodriguez22@gmail.com"],
      reply_to: requestData.email, // Use original email for reply-to
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
            <p style="line-height: 1.6;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This message was sent through your portfolio website contact form.
            <br>
            You can reply directly to this email to respond to ${sanitizedData.name}.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
