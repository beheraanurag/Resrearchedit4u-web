# Component Mapping Table: Old → shadcn/ui Version

This document provides a comprehensive mapping of all components that have been migrated from custom CSS to shadcn/ui components.

## Navigation Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| Custom navbar with dropdown (`.header`, `.navbar`, `.dropdown`) | `Sheet` (mobile) + `DropdownMenu` (desktop) | Navbar.jsx |
| Custom hamburger menu | `Sheet` with `SheetTrigger`, `SheetContent` | Navbar.jsx |
| Custom nav links | Standard `Link` components with Tailwind classes | Navbar.jsx |

## Button Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.explore-btn` | `<Button variant="secondary" size="lg">` | Hero.jsx |
| `.primary-btn` | `<Button variant="outline">` | Process.jsx |
| `.cta-btn` | `<Button>` with custom classes | Services.jsx, Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx |
| `.book`, `.sample` | `<Button>` and `<Button variant="outline">` | Services.jsx |
| `.download-btn` | `<Button>` | Process.jsx |
| `.expert-btn` | `<Button variant="outline">` | Process.jsx |
| `.career-button` | `<Button>` | Career.jsx |
| `.submit-btn` | `<Button>` | Contact.jsx, ServiceBookingForm.jsx |
| `.cancel-btn` | `<Button variant="outline">` | ServiceBookingForm.jsx |
| `.plan-btn` | `<Button asChild>` | Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx |
| `.whatsapp-btn` | Standard `<a>` with Tailwind classes | Services.jsx, Research.jsx, etc. |
| `.btn`, `.btn-primary` | `<Button>` variants | Blogs.jsx |

## Card Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.card` (service cards) | `<Card>` with `CardHeader`, `CardTitle`, `CardContent` | Services.jsx, Process.jsx |
| `.service-card` | `<Card>` with `CardContent` | Services.jsx, Process.jsx, About.jsx |
| `.subject-card` | `<Card>` | Process.jsx |
| `.step-card` | `<Card>` with `CardContent` | Process.jsx, Services.jsx |
| `.trust-card` | `<Card>` with `CardContent` | Process.jsx |
| `.trust-card-circle` | `<Card>` with rounded-full styling | Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx |
| `.offer-card` | `<Card>` with `CardContent` | Process.jsx |
| `.testimonial-card` | `<Card>` with `CardContent` | Testimonials.jsx, Services.jsx |
| `.blog-card` | `<Card>` with `CardContent` | Blogs.jsx |
| `.pricing-card` | `<Card>` with `CardContent` | Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx |
| `.who-card` | `<Card>` with `CardContent` | About.jsx |
| `.stat-box` | `<Card>` with `CardContent` | About.jsx |
| `.about-card` | `<Card>` with `CardHeader`, `CardTitle`, `CardContent` | About.jsx |
| Footer sections | `<Card>` with `CardContent` | Footer.jsx |

## Form Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.contact-form input` | `<Input>` | Contact.jsx |
| `.contact-form textarea` | `<Textarea>` | Contact.jsx |
| `.contact-form label` | `<Label>` | Contact.jsx |
| `.form-group input` | `<Input>` | ServiceBookingForm.jsx |
| `.form-group select` | `<Select>` with `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem` | ServiceBookingForm.jsx |
| `.form-group textarea` | `<Textarea>` | ServiceBookingForm.jsx |
| `.form-group label` | `<Label>` | ServiceBookingForm.jsx |
| `.career-input` | `<Input>` | Career.jsx |

## Modal/Dialog Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.modal-overlay`, `.modal-content` | `<Dialog>` with `DialogContent`, `DialogHeader`, `DialogTitle` | Blogs.jsx |
| `.service-booking-modal` | `<Dialog>` with `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogFooter` | ServiceBookingForm.jsx |
| `.modal-close` | Built-in close button in `DialogContent` | Blogs.jsx, ServiceBookingForm.jsx |

## Accordion Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.faq-item`, `.faq-header`, `.faq-question` | `<Accordion>` with `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Faq.jsx, Services.jsx, Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx |
| `.faq-toggle-button` | Built into `AccordionTrigger` | All FAQ sections |

## Tabs Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.tabs button` | `<Tabs>` with `TabsList`, `TabsTrigger`, `TabsContent` | Services.jsx |

## Alert Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| `.submit-message` | `<Alert>` with `AlertDescription` | Contact.jsx, ServiceBookingForm.jsx |

## Other Components

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| Section dividers | `<Separator>` | About.jsx |
| Footer sections | `<Card>` components | Footer.jsx |
| Hero content containers | Tailwind utility classes | Hero.jsx |
| Service category sections | `<Card>` components | Services.jsx |
| Case study cards | `<Card>` components | Services.jsx |

## Styling Migration

| Old CSS Class | Tailwind Replacement | Notes |
|--------------|---------------------|-------|
| All custom CSS classes | Tailwind utility classes | All components now use Tailwind classes |
| `style.css` imports | Removed | All components migrated to Tailwind |
| Custom responsive breakpoints | Tailwind responsive utilities (`md:`, `lg:`, etc.) | All components are responsive |

## Notes

- All content, text, images, and links remain **unchanged**
- All functionality (forms, modals, navigation) remains **identical**
- All routes remain **unchanged**
- Design follows a **professional, corporate aesthetic**
- Color scheme maintains existing **#0B2662** and **#0F828C** colors
- All components are **fully responsive** using Tailwind breakpoints
- **Accessibility** maintained with semantic HTML and proper ARIA labels
