# Cultural Heritage Interactive Website

A front-end prototype for exploring Chinese cultural heritage through a virtual museum, an interactive map, cultural storytelling, and community discussion.

Built with **HTML, CSS, and vanilla JavaScript**, the project presents collections associated with **Sanxingdui**, the **Terracotta Army**, and the **Mogao Grottoes**. External course-provided APIs support forum posts and community submissions.

## Features

| Feature | What the prototype does |
| --- | --- |
| Cultural homepage | Introduces three heritage collections and provides entry points into the museum and cultural showcase. |
| Virtual museum | Displays 24 exhibit cards across three collections, with category switching and enlarged image views. |
| Exploration map | Uses a China map image with three clickable site markers and descriptive popups. |
| Mogao Grottoes showcase | Presents a detailed cultural page with the Nine-Colored Deer story and Cave 17. |
| Cultural forum | Loads existing posts, submits new posts, and supports manual refresh through an external API. |
| Community join form | Submits contact details, a message, and an optional photo, with success and error feedback. |
| Design documentation | Includes an implementation rationale, accessibility findings, and an AI/translation acknowledgement. |

## Run Locally

No package installation or build step is required. Serve the repository over HTTP so JavaScript modules can load correctly.

### Option 1: VS Code Live Server

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Start Live Server on `home.html` for the visitor experience, or `index.html` for the coursework landing page.

### Option 2: Python

From the repository root, run:

```bash
python -m http.server 8000
```

Open:

- Visitor homepage: <http://localhost:8000/home.html>
- Coursework landing page: <http://localhost:8000/index.html>

Internet access is needed for external fonts and API-backed interactions. Most cultural content and images are included locally.

## Pages and Source Organisation

| Path | Purpose |
| --- | --- |
| `index.html` | Coursework landing page linking to the visitor website and supporting documents. |
| `home.html` | Visitor homepage. |
| `digital_museum.html` | Artifact collections, category tabs, and image enlargement. |
| `interactive_map.html` | Image-based map and heritage-site popups. |
| `showcase.html` | Detailed Mogao Grottoes content. |
| `forum.html` | Cultural discussions and illustrative event/product cards. |
| `login.html` | Community join form; the filename does not indicate implemented authentication. |
| `implementation_rational.html` | Design rationale, implementation reflection, and accessibility findings. |
| `genai_mt_acknowledgement.html` | Generative AI and machine-translation acknowledgement. |
| `css/` | Shared foundations, component styles, and page-specific styles. |
| `js/` | Page interactions, reusable modules, and API request helpers. |
| `images/` | Cultural imagery, icons, backgrounds, and documentation assets. |

## API Integration

The front end uses Fetch and FormData with course-provided DECO API endpoints hosted separately from this repository:

- `/decoapi/genericchat/`: forum post submission and retrieval.
- `/decoapi/community/`: community form submission.

The endpoint base URL is configured in `js/forum.js` and `js/login.js`. Submission requests include the course headers `student_number` and `uqcloud_zone_id`.

The original configuration is course-specific. To reuse the project, review those settings and replace them with an endpoint and request configuration you are authorised to use. The backend is not included, and ongoing availability of the external service is not guaranteed.

The forum loads posts on page load and through a refresh button. It does not use WebSockets or provide real-time chat.

## Design and Accessibility

The project uses persona-based needs to structure cultural browsing, place-based discovery, and community participation. Responsive CSS, descriptive image text, labelled inputs, and navigation aids are included in the implementation.

The [implementation rationale](implementation_rational.html) documents an accessibility audit and subsequent design revisions. A final post-revision audit is not included; this prototype should not be described as fully WCAG compliant.

## Current Scope and Limitations

- Only Mogao Grottoes has a dedicated detailed showcase. The Sanxingdui and Terracotta links currently lead to the same showcase page.
- The map is an image with positioned markers, rather than a mapping-service integration.
- `login.html` is a community submission form. Accounts, passwords, and session-based authentication are not implemented.
- Upcoming-event and artisan-product cards are static examples; booking, commerce, and event management are not implemented.
- A complete bilingual interface or working language-switching system is not implemented.
- Map markers and image enlargement need further keyboard and focus-management work. Skip-link destinations also need checking across all pages.
- Forum records are inserted into the page using HTML templates. User-provided content needs safe rendering or sanitisation before public production use.
- External API configuration and behaviour need testing in the intended deployment environment.

## Authorship and AI Assistance

This project includes interaction design, information organisation, front-end implementation, API integration, and documented interface revisions. Generative AI and machine translation assisted portions of the content, translation, styling, and code development.

See the [AI and machine-translation acknowledgement](genai_mt_acknowledgement.html) for the project's account of how this assistance was used and reviewed.

## Project Status

A portfolio and coursework prototype. Run locally to explore the visitor experience and review the implementation documents. No verified live deployment URL is provided here.
