import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://resrearchedit4u-backend.onrender.com';
      const response = await axios.post(`${apiUrl}/api/contact`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", file: null });

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-5 max-w-[1200px] mx-auto text-center">
      <div className="mb-6">
        <h1 className="text-3xl mb-6 text-[#1e3a8a] font-serif">Get In Touch</h1>
        <p className="text-lg text-gray-600 mb-5">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <Card className="flex-1 min-w-[300px] max-w-[500px] text-left">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl mb-2.5 font-semibold">📧 Email</h3>
              <p className="text-base text-gray-600">info@researchedit.in</p>
            </div>
            <div>
              <h3 className="text-xl mb-2.5 font-semibold">📞 Phone</h3>
              <p className="text-base text-gray-600">+91 8093778526</p>
            </div>
            <div>
              <h3 className="text-xl mb-2.5 font-semibold">📍 Address</h3>
              <p className="text-base text-gray-600">Bhubaneswar, Odisha, India</p>
            </div>

            <div className="mt-5">
              <h3 className="text-xl mb-4 font-semibold">Find Us on Map</h3>
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.123456789!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d2d2d2d2%3A0x2d2d2d2d2d2d2d2d!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ResearchEdit4U Location"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[350px] max-w-[600px] text-left">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={sendEmail} className="space-y-4">
              {submitMessage && (
                <Alert variant={submitMessage.includes('successfully') ? 'default' : 'destructive'}>
                  <AlertDescription>{submitMessage}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your research needs, questions, or how we can help you..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Attach Files (Optional)</Label>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
                <p className="text-sm text-muted-foreground">You can attach research documents, drafts, or reference materials</p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending Email...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
