# Update projects and your resume

This portfolio is maintained through files in this repository. Visitors see
updates after you build and deploy a new version. There is no public editing
screen, account setup, or browser-only storage to manage.

## Add a project

1. Open `src/projectsData.js`.
2. Copy the object below into the `projects` array, before the project you want
   it to appear above. Replace the example text with your actual project details.
3. Give it a unique, stable `id`. This becomes its URL: `/project/your-project-id`.
4. Run `npm run lint` and `npm run build`, then preview with `npm run dev`.
5. Review the Featured and All projects views, category filters, and detail page.
   Deploy through your existing Vercel project when ready.

```js
{
  id: "your-project-id",
  name: "Your project name",
  subtitle: "Optional short explanation",
  category: "AI / ML",
  categories: ["AI / ML"],
  featured: true,
  published: true,
  status: "Local prototype",
  icon: "ai",
  artCaption: "Optional illustration caption",
  description: "Explain the problem, what you built, and its current scope.",
  techStack: ["Python", "FastAPI"],
  highlights: ["An implemented capability", "Another implemented capability"],
  // Add source_code_link or live_demo_link only when you have a real public URL.
  // Use an imported local asset as image if you have an approved screenshot.
}
```

Keep `id`, `name`, `category`, `categories`, `description`, `techStack`, and
`highlights` populated. `categories` controls filters; `category` is the displayed
label. Existing filter names include `AI / ML`, `Full Stack`, `Healthcare`, and
`Web Applications`. New category names appear automatically for the chosen
collection. Available icons are listed in `src/components/Icons.jsx`; examples
include `ai`, `workflow`, `database`, `voice`, `backend`, and `code`.

Do not create separate entries for planned capabilities. Use `status` to make a
prototype, experiment, or work in progress clear, and list only tools actually
used. Omit unknown demo/repository links rather than adding placeholder URLs.

### Add a case study

Optionally include `workflow` and `details` inside any project object. The detail
page renders them automatically; no component changes are needed.

```js
workflow: [
  { title: "First stage", description: "What happens at this stage." },
  { title: "Next stage", description: "How the next stage uses that result." },
],
details: [
  {
    title: "Engineering decisions",
    description: "Optional short introduction.",
    items: ["A design choice and its reason", "A constraint or tradeoff"],
  },
  {
    title: "Current scope",
    items: ["What is implemented", "What remains experimental or unimplemented"],
  },
],
```

The Multi-Agent RAG Document Assistant is a complete example in the data file.
Its entry is based on your supplied project guide. No deployment, public source
repository, benchmark results, or autonomous agent capabilities are assumed.

## Reorder, archive, replace, or hide a project

| Desired change                                           | What to edit                                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Feature your latest work first                           | Move its object to the beginning of `projects`.                                                  |
| Keep older work available without featuring it           | Set `featured: false`. It remains in All projects and keeps its detail URL.                      |
| Restore an archived project to Featured                  | Set `featured: true`, or omit `featured`.                                                        |
| Work on an unpublished draft                             | Set `published: false`. It is absent from both collections and its detail route shows not found. |
| Update an existing project                               | Edit its content while keeping its `id` unchanged.                                               |
| Replace an old featured project with a different project | Archive the old object and add a new object with a new `id`.                                     |
| Remove work completely                                   | Delete its object. Its old detail URL will show not found.                                       |

New projects are published and featured by default if those fields are omitted.
Archive older projects rather than reusing their IDs for unrelated work, so
existing links continue to identify the correct project. The e-commerce app and
interest calculator are initially archived, not deleted.

## Update your resume

Replace `public/resume.pdf` with your latest approved PDF, keeping the filename.
The hero Download Resume button will use the replacement after deployment;
you do not need to edit a component. The download filename is
`Manoj-Kumar-Resume.pdf`.

The current PDF is the existing resume from the earlier portfolio. Adding a RAG
project to the website does **not** rewrite that PDF. Update the document itself
when you want the new project included in your resume.

If you prefer a different file name, put that PDF in `public/` and update
`profile.resume` in `src/portfolioData.js`, for example `"/manoj-resume.pdf"`.
The URL omits the `public` prefix. Set `resume: null` to disable the download
until a replacement is ready.

After replacing the file, start the app, click Download Resume, and open the
downloaded document to confirm it is the intended version. Changes in this
checkout do not change the live website until you deploy them.

## Keep your skills consistent

Update `skillGroups`, `focusAreas`, and `experience` in `src/portfolioData.js`
when a new project demonstrates additional skills. Keep hands-on project
experience separate from continued learning, and avoid implying that a local
prototype is a deployed production system.
