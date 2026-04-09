# Implementation Plan: "Technical Versatility" Portfolio Landing Page

## Objective

Build a modern, single-page Angular portfolio focused on the theme "Versatilidade de técnica - Crie projetos com diferentes tipos de tecnologia". The landing page will feature scroll-triggered animations to reveal projects (IoT, Astro, AWS), an interactive modal for project specifications, and a final professional presentation section.

## Design Choices (per user feedback)

- **Animations:** Native CSS + Intersection Observer.
- **Interactions:** Modal (Pop-up) for project details.
- **Styling:** Pure SASS.

## Key Files & Context

- **Core Components**: `src/app/app.ts`, `src/app/app.html`, `src/app/app.sass` (Entry point and main layout).
- **New Directive**: `src/app/scroll-reveal.directive.ts` (To handle Intersection Observer for animations).
- **New Component**: `src/app/project-modal/project-modal.component.ts` (For displaying detailed project specifications).
- **Global Styles**: `src/styles.sass` (For global variables, resets, and animation classes).

## Implementation Steps

### 1. Project Data Modeling & State (src/app/app.ts)

- Define a `Project` interface with properties: `id`, `title`, `shortDescription`, `technologies` (array), `imageUrl` (or `gifUrl`), and `detailedSpecs`.
- Create a signal `projects = signal<Project[]>([...])` to hold mock data (e.g., an IoT Arduino project, an Astro Islands project, an AWS architecture project).
- Create a signal `selectedProject = signal<Project | null>(null)` to manage the modal state.
- Add methods `openModal(project: Project)` and `closeModal()`.

### 2. Scroll-Reveal Animation (Native) (src/app/scroll-reveal.directive.ts & src/styles.sass)

- Create a standalone directive `ScrollRevealDirective` (`[appScrollReveal]`).
- Use the native `IntersectionObserver` API within the directive to detect when the element enters the viewport and add an `.is-visible` CSS class to the host element.
- Define the base animation styles in `src/styles.sass`:
  - Default state: `opacity: 0`, `transform: translateY(30px)`, `transition: opacity 0.6s ease-out, transform 0.6s ease-out`.
  - `.is-visible` state: `opacity: 1`, `transform: translateY(0)`.

### 3. Layout Construction (src/app/app.html & src/app/app.sass)

- **Hero Section**: A bold header introducing the theme "Versatilidade de técnica - Crie projetos com diferentes tipos de tecnologia".
- **Projects Timeline/Grid**: Use Angular's `@for` block to iterate over the `projects` signal.
  - Render a visual card for each project containing a placeholder for a GIF/image, title, and a brief description.
  - Apply the `appScrollReveal` directive to each card.
  - Add a click event `(click)="openModal(project)"` to trigger the detailed view.
- **Footer Presentation**: Add a dedicated section at the bottom containing the provided text ("Desenvolvedor .NET Full Stack que transforma sistemas legados..."). Style it cleanly with emphasis on key skills (.NET Core, Angular, AWS).

### 4. Interactive Modal Implementation (src/app/project-modal/project-modal.ts & .html & .sass)

- Create a standalone `ProjectModalComponent`.
- It accepts an `@Input({ required: true }) project!: Project` and emits an `@Output() close = new EventEmitter<void>()`.
- Template: A fixed, full-screen overlay (backdrop) with a centered content box.
- The content box displays the full `detailedSpecs`, `technologies` tags, and a close button.
- In `app.html`, conditionally render the modal:
  ```html
  @if (selectedProject()) {
  <app-project-modal [project]="selectedProject()!" (close)="closeModal()" />
  }
  ```

## Verification & Testing

- Serve the Angular application.
- **Scroll Test**: Scroll down the page and confirm that each project card fades/slides in smoothly as it enters the viewport.
- **Interaction Test**: Click on project cards to ensure the modal opens with the correct specific data for that project. Click the close button to dismiss the modal.
- **Content Test**: Verify the footer text matches the requested copy exactly.
- **Responsiveness**: Ensure the SASS styles adapt to both mobile and desktop screen sizes.
