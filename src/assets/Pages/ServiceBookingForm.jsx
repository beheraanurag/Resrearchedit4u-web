import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ServiceBookingForm = ({ service, serviceCategory, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: service || "",
    serviceCategory: serviceCategory || "",
    budget: "",
    timeline: "",
    requirements: "",
    message: "",
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please describe your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://resrearchedit4u-backend.onrender.com';
      const response = await axios.post(`${apiUrl}/api/service-booking`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitMessage("Service booking request sent successfully!");
      setTimeout(() => {
        onClose();
      }, 6000);

    } catch (error) {
      console.error("Error sending booking request:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Service: {service}</DialogTitle>
        </DialogHeader>

        {submitMessage && (
          <Alert variant={submitMessage.includes('successfully') ? 'default' : 'destructive'}>
            <AlertDescription>{submitMessage}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-destructive' : ''}
                required
              />
              {errors.name && <span className="text-sm text-destructive">{errors.name}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-destructive' : ''}
                required
              />
              {errors.email && <span className="text-sm text-destructive">{errors.email}</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'border-destructive' : ''}
                required
              />
              {errors.phone && <span className="text-sm text-destructive">{errors.phone}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range *</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger className={`w-full ${errors.budget ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Select Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under ₹5,000">Under ₹5,000</SelectItem>
                  <SelectItem value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</SelectItem>
                  <SelectItem value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="Above ₹50,000">Above ₹50,000</SelectItem>
                  <SelectItem value="To be discussed">To be discussed</SelectItem>
                </SelectContent>
              </Select>
              {errors.budget && <span className="text-sm text-destructive">{errors.budget}</span>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline *</Label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => setFormData({ ...formData, timeline: value })}
            >
              <SelectTrigger className={`w-full ${errors.timeline ? 'border-destructive' : ''}`}>
                <SelectValue placeholder="Select Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ASAP (Within 1 week)">ASAP (Within 1 week)</SelectItem>
                <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                <SelectItem value="2-4 weeks">2-4 weeks</SelectItem>
                <SelectItem value="1-2 months">1-2 months</SelectItem>
                <SelectItem value="2+ months">2+ months</SelectItem>
                <SelectItem value="Flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && <span className="text-sm text-destructive">{errors.timeline}</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Service Requirements *</Label>
            <Textarea
              id="requirements"
              name="requirements"
              rows="4"
              value={formData.requirements}
              onChange={handleChange}
              className={errors.requirements ? 'border-destructive' : ''}
              placeholder="Please describe your specific requirements, research topic, current status, and any special instructions..."
              required
            />
            {errors.requirements && <span className="text-sm text-destructive">{errors.requirements}</span>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional information or questions..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Attach Files (Optional)</Label>
            <Input
              id="file"
              type="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              multiple
            />
            <p className="text-sm text-muted-foreground">You can attach research documents, drafts, or reference materials</p>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceBookingForm;
