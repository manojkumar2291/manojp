# Manoj Kumar — Developer Portfolio

A React + Vite portfolio positioning Podapati Manoj Kumar for AI / GenAI and full-stack development roles. Includes filterable projects, project detail routes, categorized skills, project-based experience, AI learning interests, and an accessible contact form.

## Local development

Use Node.js 20.19+ (or a compatible current LTS) and npm.

```sh
npm ci
npm run dev
```

Vite prints the local development URL, normally http://localhost:5173.

```sh
npm run lint
npm run build
npm run preview
```

Production output goes to `dist/`. Preview normally runs on http://localhost:4173. Runtime prop validation is explicitly declared with `prop-types`; the remaining React, Tailwind, Framer Motion, React Typed, and Three.js packages are retained from the existing app.

## Content maintenance

- `src/portfolioData.js`: identity, social links, skill groups, engineering responsibilities, and AI focus areas.
- `src/projectsData.js`: project content, display order, featured/published flags, technologies, highlights, optional case studies, screenshots, and public URLs.
- `src/components/`: existing section architecture, shared headings, project cards, navbar, and footer.
- `src/pages/ProjectDetails.jsx`: project details and unavailable-route handling.
- `src/index.css`: responsive dark theme and reduced-motion styles.
- `index.html` and `public/`: title, metadata, favicon, and social sharing image.

See [the content update guide](docs/CONTENT_UPDATES.md) for a copyable project template and steps to add, reorder, archive, hide, or replace projects and update your resume. New categories and optional case-study sections render automatically.

Featured projects prioritize the Multi-Agent RAG Document Assistant and recent AI/full-stack work. The older e-commerce app and interest calculator remain available in All projects with their existing URLs. The RAG case study documents its service-controlled agent workflow, tests, and local-prototype scope using the supplied project guide; it has no invented public repository or demo link.

No employer names or employment dates were present in the original repository. Experience is described through project contributions without invented companies, titles, dates, or tenure. Technologies in each project come from the supplied briefs or existing repository; hands-on AI project experience is distinguished from continued learning and production expertise. Client-owned work has no invented source or demo links. The original e-commerce, calculator, and lab project IDs are retained.

### Resume

The existing Google Drive resume link was verified to return a PDF and saved as `public/resume.pdf` for a reliable local download. This is the existing React developer resume, preserved without changing its claims. Replace that file with your updated AI / GenAI resume when ready. The download path is set in `profile.resume` in `src/portfolioData.js`; setting it to `null` shows an honest unavailable placeholder.

### Contact

The existing EmailJS integration is retained behind explicit environment configuration and is loaded only when used. The previous browser identifiers are preserved in this checkout's ignored `.env.local`. For a fresh checkout, copy `.env.example` to `.env.local` and supply your EmailJS **browser** identifiers:

```dotenv
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Use the existing service and template from your EmailJS dashboard. The template receives `name`, `email`, `reply_to`, and `message`. EmailJS public browser identifiers are intentionally visible in the client bundle; never put account secrets, private API keys, or SMTP credentials in any `VITE_` variable. Restrict approved origins in EmailJS.

Without all three identifiers, the Send Message button is disabled and the form displays an availability notice. A direct email address link is always available. If EmailJS fails, the form preserves the entered message and displays an error. There is no email draft button or automatic mail-app redirect. Verify a real delivery from your approved domain before launch; automated checks must mock EmailJS rather than contacting a real recipient.

Environment files are ignored. The legacy repository already tracks a `.env`; review it before any future commit because ignore rules do not untrack existing files. Vite no longer injects the entire process environment into client code.

## Accessibility and performance

- Keyboard-accessible navigation, mobile menu with Escape dismissal, active section indicators, a skip link, visible focus, and labeled form fields.
- Native form validation, whitespace checks, submission status announcements, and an email fallback.
- System fonts, local assets, lazy-loaded screenshots, and one centralized project array.
- Reduced motion disables typing and reveal movement. The decorative 3D sphere is opt-in on desktop, disabled for reduced motion and data-saving connections, and lazy-loaded. Its canvas pauses outside the viewport and when the tab is hidden.
- The optional Three.js chunk is large; it is excluded from the initial page load. No new 3D library is introduced.

## Vercel deployment

Use the existing repository/project connection. Select **Vite**, with install command `npm ci`, build command `npm run build`, and output directory `dist`. `vercel.json` rewrites application routes to `index.html` so direct project detail visits work. If direct EmailJS delivery is desired, configure the three browser identifiers in Vercel and rebuild.

The canonical URL and social metadata use the existing production domain, https://portfolio-self-five-94.vercel.app/. Update those if the domain changes. Social images become reachable after the updated assets are deployed.

No commit, push, or deployment is performed automatically.

## Verification

The update was checked with ESLint, a production Vite build, and local Chrome checks of filters, all eight project routes, unknown routes, mobile navigation, keyboard dismissal, form validation, and reduced motion. Layouts were checked at 320, 390, 768, 1024, and 1440 pixels. The mailto flow was exercised without sending a message; EmailJS success, failure, field reset, reply-to, and fallback were checked with a mocked API. The optional 3D canvas was verified to load only on request and stop when disabled. Public GitHub and demo links returned HTTP 200; LinkedIn restricts automated requests. The original resume was verified as a PDF. No real email was sent by automated checks; production delivery still needs a manual check on the approved domain.

The subsequent RAG update passed lint and build checks, plus Chrome checks of the new case study, seven featured/nine total projects, category filters and collection resets, archived detail routes, and the existing resume download. The new page and collection controls were checked at 320, 390, 768, and 1440 pixels with no runtime errors. Content checks also exercised future project additions, automatic category discovery, stable IDs, and unpublished draft exclusion. The RAG application's own tests were described from the supplied guide; they were not executed in this portfolio repository.

Unused server dependencies were removed and compatible security fixes applied. The dependency audit reported zero known vulnerabilities at the time of this update; run `npm audit` again as dependencies age.
