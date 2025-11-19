# American Red Cross Website Prototype

## Project Overview

This project is a prototype for a website redesign for the American Red Cross. It is designed as a static, responsive website to demonstrate the core structure and design for key pages. This project is created for educational purposes, following the proposal and design requirements.

### Part 2: Design and Responsiveness

This phase of the project focused on the visual appeal and user experience of the website. Key improvements and implementations include:

* **External Stylesheet:** A new, external `style.css` file was created and linked to all HTML pages to ensure a consistent look and feel across the site.
* **CSS Styling:**
    * **Typography:** Custom typography styles were applied to headlines, body text, and links for enhanced readability.
    * **Layout:** CSS Flexbox and Grid were used to create a modern, flexible layout that organizes content effectively on various screen sizes.
* **Responsive Design:**
    * **Breakpoints:** Media queries were implemented to create key breakpoints for desktop, tablet, and mobile devices, ensuring the layout adapts seamlessly.
    * **Relative Units:** Relative units like `rem` and percentages were used for font sizes and widths to maintain proportionality on different screens.
    * **Responsive Images:** Images are now properly sized and use `object-fit: cover` for consistent proportions.

### Part 3: Enhanced Functionality and SEO

This phase focuses on implementing JavaScript functionality, SEO best practices, and form validation as required by the assignment.

#### Key Implementations:

* **JavaScript Form Validation:** Comprehensive client-side validation for all forms with real-time feedback
* **Interactive Elements:** Enhanced mobile navigation, interactive map, and dynamic form handling
* **SEO Optimization:** Meta tags, robots.txt, sitemap.xml, and semantic HTML structure
* **New Pages:** Added `enquiry.html` as required for service inquiries and volunteering

#### Technical Features:

* **Form Validation:** Contact, enquiry, and donation forms with error handling and success messages
* **Mobile Navigation:** Enhanced sliding menu with overlay and accessibility features
* **Responsive Design:** Improved image handling and typography scaling
* **SEO Implementation:** Complete search engine optimization setup

## Changelog

### Part 2 Corrections (Based on Feedback):

* **Navigation Menu (Previously 2/5):** 
  - Implemented sliding mobile navigation with overlay
  - Added smooth animations and transitions
  - Enhanced accessibility with ARIA attributes
  - Improved focus states and keyboard navigation

* **Image Responsiveness (Previously 2/5):**
  - Added `object-fit: cover` for consistent image proportions
  - Implemented fixed heights for card images
  - Enhanced mobile and tablet image sizing
  - Added lazy loading and error handling

* **Typography Adjustments (Previously 3/5):**
  - Implemented mobile-first responsive typography scale
  - Improved line heights and spacing
  - Enhanced heading hierarchy across breakpoints
  - Optimized font sizes for all devices

* **Pseudo-class Enhancements (Previously 7/10):**
  - Enhanced :hover, :focus, and :active states
  - Added smooth transitions for interactive elements
  - Improved button interactions with transform effects
  - Enhanced form field focus states

### Part 3 Additions:

* **New Files:**
  - `enquiry.html` - Service inquiry and volunteering form page
  - `js/form-validation.js` - Comprehensive form validation
  - `robots.txt` - Search engine crawling instructions
  - `sitemap.xml` - Website structure for search engines

* **Enhanced Functionality:**
  - JavaScript form validation with real-time feedback
  - AJAX simulation for form submissions
  - Interactive map on Get Help page
  - Enhanced mobile navigation

* **SEO Implementation:**
  - Meta tags and descriptions on all pages
  - Semantic HTML structure
  - Search engine optimization files
  - Accessibility improvements

## File Structure
American-red-cross-website/
├── index.html
├── about.html
├── donate.html
├── get-help.html
├── gallery.html ← NEW GALLERY PAGE
├── contact.html
├── enquiry.html
├── robots.txt
├── sitemap.xml
├── LICENSE.txt
├── README.md
├── REFERENCES.md
├── css/
│ └── style.css ← UPDATED WITH GALLERY STYLES
└── js/
├── script.js
└── form-validation.js

## Technologies Used

* **HTML5:** For the website's structure and content with semantic elements
* **CSS3:** For styling, layout, and mobile responsiveness
* **JavaScript:** For interactive functionality and form validation
* **SEO Best Practices:** Meta tags, sitemap, robots.txt
* **Font Awesome:** For icons and UI elements
* **Responsive Design:** Mobile-first approach with media queries

## References

### Content Sources:
- American Red Cross Official Website. (2023). *About Us*. Retrieved from https://www.redcross.org/about-us.html
- American Red Cross. (2023). *Our Work*. Retrieved from https://www.redcross.org/about-us/our-work.html
- American Red Cross. (2023). *Disaster Relief*. Retrieved from https://www.redcross.org/about-us/our-work/disaster-relief.html
- International Federation of Red Cross and Red Crescent Societies. (2023). *What we do*. Retrieved from https://www.ifrc.org/what-we-do

### Technical References:
- MDN Web Docs. (2023). *HTML elements reference*. Mozilla Foundation. Retrieved from https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- MDN Web Docs. (2023). *CSS: Cascading Style Sheets*. Mozilla Foundation. Retrieved from https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs. (2023). *JavaScript Guide*. Mozilla Foundation. Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- W3Schools. (2023). *JavaScript Tutorial*. Retrieved from https://www.w3schools.com/js/
- Google Developers. (2023). *Search Engine Optimization (SEO) Starter Guide*. Retrieved from https://developers.google.com/search/docs/fundamentals/seo-starter-guide

### Image Sources (Educational Fair Use):
- American Red Cross. (2023). *Disaster Relief Operations* [Photographs]. Used for educational purposes.
- American Red Cross. (2023). *Blood Donation Services* [Photographs]. Used for educational purposes.
- American Red Cross. (2023). *Training and Education* [Photographs]. Used for educational purposes.

### Tools and Frameworks:
- Font Awesome. (2023). *Icons*. Retrieved from https://fontawesome.com/
- Google Fonts. (2023). *Typography*. Retrieved from https://fonts.google.com/

## How to View the Website

To view this prototype, simply open any of the HTML files (e.g., `index.html`) in your web browser. All functionality including form validation and interactive elements will work locally.

## Testing

The website has been tested for:
- Responsive design across mobile, tablet, and desktop
- Form validation and user feedback
- Cross-browser compatibility (Chrome, Firefox, Safari)
- Accessibility features
- JavaScript functionality

## Author

* **Name:** St10451624
* **Course:** Web Development
* **Institution:** Rosebank collage
