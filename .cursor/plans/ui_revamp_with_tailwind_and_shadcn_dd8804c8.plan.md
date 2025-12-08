---
name: UI Revamp with Tailwind and shadcn
overview: Revamp the entire website UI using Tailwind CSS and shadcn/ui components while preserving all content, functionality, and routes. Transform custom CSS components into modern shadcn/ui equivalents with a professional, corporate design aesthetic.
todos:
  - id: setup-tailwind
    content: Install and configure Tailwind CSS with custom color scheme
    status: completed
  - id: setup-shadcn
    content: Initialize shadcn/ui and install required components (Button, Card, Dialog, Accordion, Tabs, Input, Textarea, Select, Label, Alert, Sheet, NavigationMenu, DropdownMenu)
    status: completed
  - id: migrate-navbar
    content: Migrate Navbar.jsx to use NavigationMenu, Sheet, and DropdownMenu components
    status: completed
  - id: migrate-hero
    content: Migrate Hero.jsx to use Button and Card components with Tailwind styling
    status: completed
  - id: migrate-footer
    content: Migrate Footer.jsx to use Card components and Tailwind utilities
    status: completed
  - id: migrate-forms
    content: Migrate Contact.jsx and ServiceBookingForm.jsx to use Input, Textarea, Select, Label, Button, Dialog, and Alert components
    status: completed
  - id: migrate-faq
    content: Migrate Faq.jsx to use Accordion component
    status: completed
  - id: migrate-services
    content: Migrate Services.jsx to use Tabs, Card, Button, and Accordion components
    status: completed
  - id: migrate-process
    content: Migrate Process.jsx to use Card and Button components
    status: completed
  - id: migrate-testimonials
    content: Migrate Testimonials.jsx to use Card components
    status: completed
  - id: migrate-other-pages
    content: Migrate About.jsx, Blogs.jsx, Career.jsx, and service pages (Research, Data, Editorial, Publication, Academic) to use Card and Button components
    status: completed
  - id: replace-css
    content: Replace custom CSS with Tailwind utility classes and remove style.css dependencies
    status: completed
  - id: verify-functionality
    content: Test all functionality, forms, modals, navigation, and responsive design
    status: completed
---

# UI Revamp Plan: Tailwind CSS + shadcn/ui Migration

## Phase 1: Setup & Configuration

### 1.1 Install Dependencies

- Install Tailwind CSS and required plugins
- Install shadcn/ui CLI and initialize
- Install required Radix UI primitives
- Configure `tailwind.config.js` with custom colors matching existing scheme (#0B2662, #0F828C)
- Set up `components.json` for shadcn/ui
- Update `vite.config.js` if needed for path aliases

### 1.2 File Structure

- Create `src/components/ui/` directory for shadcn components
- Set up `src/lib/utils.ts` for cn() utility
- Configure CSS imports (replace style.css with Tailwind directives)

## Phase 2: Component Migration

### 2.1 Core Layout Components

**Navbar.jsx** → Modernize with shadcn/ui

- Replace custom dropdown → `DropdownMenu`
- Replace hamburger menu → `Sheet` (mobile menu)
- Use `NavigationMenu` for main nav
- Keep all links and functionality identical
- **Mapping**: Custom navbar → `NavigationMenu` + `Sheet` + `DropdownMenu`

**Footer.jsx** → Enhance with shadcn/ui

- Use `Card` components for footer sections
- Modernize social icons with proper spacing
- Keep all content and links identical
- **Mapping**: Custom footer → `Card` components

### 2.2 Hero Section

**Hero.jsx** → Modernize layout

- Replace custom buttons → `Button` component
- Use `Card` for hero content containers
- Enhance Swiper integration with Tailwind classes
- Keep all slides, images, and text identical
- **Mapping**: Custom buttons → `<Button variant="default">`, Custom cards → `Card`

### 2.3 Form Components

**Contact.jsx** → Full form modernization

- Replace custom form inputs → `Input`, `Textarea`, `Label` from shadcn/ui
- Replace custom button → `Button`
- Use `Card` for form container
- Add `Alert` for success/error messages
- Keep all form logic and API calls identical
- **Mapping**: Custom inputs → `Input`, Custom textarea → `Textarea`, Custom button → `Button`, Custom alerts → `Alert`

**ServiceBookingForm.jsx** → Modal modernization

- Replace custom modal → `Dialog`
- Replace form inputs → `Input`, `Select`, `Textarea`
- Replace buttons → `Button`
- Keep all booking logic identical
- **Mapping**: Custom modal → `Dialog`, Custom inputs → `Input` + `Select`

### 2.4 Interactive Components

**Faq.jsx** → Accordion component

- Replace custom FAQ accordion → `Accordion` from shadcn/ui
- Keep all questions and answers identical
- **Mapping**: Custom FAQ → `Accordion` with `AccordionItem`, `AccordionTrigger`, `AccordionContent`

**Services.jsx** → Multiple component updates

- Replace custom tabs → `Tabs` component
- Replace custom cards → `Card` components
- Replace custom buttons → `Button`
- Replace custom slider → Keep react-slick but style with Tailwind
- Replace custom FAQ section → `Accordion`
- Keep all service data and functionality identical
- **Mapping**: Custom tabs → `Tabs`, Custom cards → `Card`, Custom buttons → `Button`, Custom FAQ → `Accordion`

**Process.jsx** → Card and button updates

- Replace custom cards → `Card` components
- Replace custom buttons → `Button`
- Keep all process steps and content identical
- **Mapping**: Custom cards → `Card`, Custom buttons → `Button`

**Testimonials.jsx** → Card modernization

- Replace custom testimonial cards → `Card` components
- Keep react-slick but style with Tailwind
- Keep all testimonial data identical
- **Mapping**: Custom cards → `Card`

### 2.5 Page Components

**About.jsx** → Card and layout updates

- Replace custom cards → `Card` components
- Replace custom buttons → `Button`
- Use `Separator` for section dividers
- Keep all content identical
- **Mapping**: Custom cards → `Card`, Custom buttons → `Button`

**Blogs.jsx** → Card modernization

- Replace custom blog cards → `Card` components
- Replace custom modal → `Dialog`
- Replace custom buttons → `Button`
- Keep all blog functionality identical
- **Mapping**: Custom cards → `Card`, Custom modal → `Dialog`, Custom buttons → `Button`

**Career.jsx** → Form modernization

- Replace custom form → `Input`, `Button` from shadcn/ui
- Use `Card` for container
- Keep all form logic identical
- **Mapping**: Custom inputs → `Input`, Custom button → `Button`

**Research.jsx, Data.jsx, Editorial.jsx, Publication.jsx, Academic.jsx** → Consistent updates

- Replace custom cards → `Card` components
- Replace custom buttons → `Button`
- Replace custom sections → `Card` with proper spacing
- Keep all content identical
- **Mapping**: Custom cards → `Card`, Custom buttons → `Button`

## Phase 3: Styling Migration

### 3.1 CSS Replacement

- Replace `src/index.css` with Tailwind directives
- Migrate `src/assets/style/style.css` → Convert to Tailwind utility classes
- Remove custom CSS classes, replace with Tailwind equivalents
- Maintain responsive breakpoints using Tailwind's responsive utilities

### 3.2 Design System

- Use existing color palette (#0B2662, #0F828C) in Tailwind config
- Apply professional, corporate design aesthetic
- Ensure consistent spacing using Tailwind spacing scale
- Use Tailwind typography for consistent text styling
- Maintain accessibility (proper contrast, semantic HTML)

## Phase 4: Component Mapping Table

### Complete Component Mapping

| Old Component | shadcn/ui Replacement | File(s) |
|--------------|----------------------|---------|
| Custom navbar with dropdown | `NavigationMenu` + `Sheet` + `DropdownMenu` | Navbar.jsx |
| Custom buttons (`.explore-btn`, `.primary-btn`, etc.) | `<Button variant="default\|outline\|ghost">` | All files |
| Custom cards (`.card`, `.service-card`, etc.) | `<Card>` with `CardHeader`, `CardContent` | Services.jsx, Process.jsx, etc. |
| Custom modal (`.modal-overlay`, `.service-booking-modal`) | `<Dialog>` with `DialogTrigger`, `DialogContent` | ServiceBookingForm.jsx, Blogs.jsx |
| Custom FAQ accordion (`.faq-item`) | `<Accordion>` with `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Faq.jsx, Services.jsx |
| Custom form inputs (`.contact-form input`) | `<Input>`, `<Textarea>`, `<Label>`, `<Select>` | Contact.jsx, ServiceBookingForm.jsx |
| Custom tabs (`.tabs button`) | `<Tabs>` with `TabsList`, `TabsTrigger`, `TabsContent` | Services.jsx |
| Custom alerts/messages (`.submit-message`) | `<Alert>` with `AlertDescription` | Contact.jsx |
| Custom footer sections | `<Card>` components | Footer.jsx |
| Custom hero buttons | `<Button>` variants | Hero.jsx |
| Custom process cards | `<Card>` components | Process.jsx |
| Custom testimonial cards | `<Card>` components | Testimonials.jsx |
| Custom trust cards | `<Card>` components | Process.jsx |
| Custom offer cards | `<Card>` components | Process.jsx |
| Custom service cards | `<Card>` components | Services.jsx |
| Custom about cards | `<Card>` components | About.jsx |
| Custom blog cards | `<Card>` components | Blogs.jsx |
| Custom pricing cards | `<Card>` components | Services.jsx (if any) |
| Custom stats boxes | `<Card>` components | About.jsx |
| Custom subject cards | `<Card>` components | Process.jsx |

## Phase 5: Quality Assurance

### 5.1 Functionality Verification

- Test all navigation links
- Verify all forms submit correctly
- Test modal open/close functionality
- Verify accordion expand/collapse
- Test responsive design on mobile/tablet/desktop
- Verify all API calls still work

### 5.2 Design Consistency

- Ensure consistent spacing throughout
- Verify color scheme application
- Check typography hierarchy
- Ensure proper hover states
- Verify accessibility (keyboard navigation, screen readers)

### 5.3 Performance

- Remove unused CSS
- Optimize component imports
- Ensure no layout shifts
- Verify fast page loads

## Implementation Notes

- **Content Preservation**: All text, images, links, and data remain unchanged
- **Functionality Preservation**: All JavaScript logic, state management, and API calls remain identical
- **Route Preservation**: All React Router routes remain unchanged
- **Professional Design**: Clean, corporate aesthetic with proper spacing and typography
- **Color Scheme**: Maintain existing #0B2662 and #0F828C colors, enhance with modern usage
- **Responsive**: Ensure mobile-first responsive design using Tailwind breakpoints
- **Accessibility**: Maintain semantic HTML, proper ARIA labels, keyboard navigation

## Files to Modify

1. `package.json` - Add dependencies
2. `tailwind.config.js` - Create configuration
3. `components.json` - Create shadcn/ui config
4. `src/index.css` - Replace with Tailwind directives
5. `src/lib/utils.ts` - Create utility file
6. All component files in `src/assets/Pages/` - Migrate to shadcn/ui
7. `vite.config.js` - Update if needed for path resolution

## Dependencies to Install

- `tailwindcss`, `postcss`, `autoprefixer`
- `@radix-ui/react-*` (various primitives)
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react` (for icons, replacing react-icons where appropriate)