# Desert Rover Hurghada — Frontend Preview

A polished, responsive, static presentation website **inspired by the attached reference** (`design-reference.png`). Built using HTML, CSS, JavaScript, GSAP, ScrollTrigger, and a small local compatibility/polyfills file. The site includes real user-supplied tourism photography optimized as WebP images.

## Included pages

- `index.html` — full homepage with loader, cinematic hero, experiences, story, private/family sections, photo gallery, sample reviews, process, FAQ and footer.
- `experiences.html` — searchable and filterable experiences listing, sorting, favorites.
- `experience.html?tour=sea-horse` — individual tour detail, gallery/lightbox, guest count, date selection, dynamic price preview.
- `private.html` — tailor-made private-tour inquiry form (local demo only).
- `families.html` — family-friendly experiences.
- `about.html` — brand story and photo wall.
- `reviews.html` — guest photo gallery and placeholder testimonial designs.
- `faq.html` — accordion FAQs.
- `contact.html` — inquiry form (local demo only).
- `booking.html` — booking checkout *demonstration*, no actual payment.
- `confirmation.html` — demo confirmation.
- `my-bookings.html` — locally saved demo bookings.

## Languages

English (default), German, and Arabic. Language choice is stored in localStorage and Arabic automatically enables RTL. Switch languages using the header control.

## How to preview locally

You can open `index.html` in a modern browser. For more reliable local routing and asset loading, start a local server from this project directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Upload to GitHub & publish on GitHub Pages

Create an empty public/private GitHub repository (e.g., `desert-rover-demo`), then open a terminal **inside this unzipped folder**:

```bash
git init
git add .
git commit -m "Initial Desert Rover frontend demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/desert-rover-demo.git
git push -u origin main
```

In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.

The preview will be at `https://YOUR_USERNAME.github.io/desert-rover-demo/` after GitHub Pages deploys it. All asset URLs are relative, so it works from a project subpath.

For future updates:

```bash
git add .
git commit -m "Update preview"
git push
```

## Important: this is a visual demo, not a production booking system

- **No real payments, booking confirmations, availability management, emails, SMS, or operator notifications** are performed.
- All prices, durations, sample reviews and booking examples are *illustrative placeholders*; replace them with confirmed operator information before launch.
- Guest image permissions (especially photos involving children) should be confirmed with the owner before public publishing.
- All forms are **demonstrations** that save information to this browser's `localStorage` only. Do not enter sensitive or real customer data in demo forms.
- The languages are implemented for the demo's major UI/copy; any new content needs professionally verified translations.
- Public GitHub repositories expose included images and code to anyone. Obtain consent before publishing any guest photos and use a private/staging option where appropriate.
- Review the site's actual service categories, contact details, booking terms, and company name with the client.

## WordPress conversion roadmap

1. Convert the shared header/footer and page layouts into a bespoke WordPress theme with `header.php`, `footer.php`, `front-page.php`, `archive-tour.php`, `single-tour.php`, `functions.php` and reusable template parts.
2. Replace the frontend tour fixture array with WordPress custom post type `tour`, tour taxonomies, real ACF/Gutenberg fields (images, languages, duration, capacity, adult/child pricing, inclusions, pickup, cancellation, etc.).
3. Connect a real booking engine such as WooCommerce Bookings (or a suitable alternative) to a real availability/calendar model. Private tours and group capacity need separate rules.
4. Integrate WooCommerce payment with an approved live gateway, after confirming currency, policies, and payment status behavior. Only paid and confirmed bookings should allocate real resources.
5. Configure multilingual content with WPML / Polylang or another tested approach; validate checkout translation, RTL and multi-currency compatibility.
6. Add secure email/SMS/WhatsApp confirmations, back-office management, data privacy notices and production anti-spam/security measures.
7. Replace demo testimonials and prices with verified content, test full booking/cancellation/refund flow and launch on suitable managed WordPress hosting.

## Design and technologies

- No build step is needed; plain HTML/CSS/JS.
- GSAP 3.12.5 and ScrollTrigger loaded via CDN with motion fallback, so the site remains usable if a CDN cannot load.
- Local `polyfills.js` includes small compatibility shims. No use of the compromised `polyfill.io` service.
- Semantic markup, accessible focus states, responsive mobile menu, reduced-motion support, image lightbox, WebP images.
- Font loading via Google Fonts (falls back to installed system fonts if unavailable).

**Design and media note:** The website has been reconstructed from the provided concept, not produced by cropping an entire design image into a non-functional page. `design-reference.png` is provided for comparison only and is not displayed as a site section.

### Spacing refinement (November 2026)
Vertical whitespace between page sections has been reduced moderately across desktop and mobile. The theme design, typography, images, animation, and booking preview remain unchanged. The modifications are in `assets/css/style.css`.
