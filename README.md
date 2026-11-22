# LinkLocker — KnowledgeKeep Hack

A responsive, frontend-only bookmark and knowledge management app for student teams, engineering groups, and research cohorts.

## Features

- Visual bookmark cards with website favicons and fallback initials
- Add, edit, and delete bookmarks
- Four starter collections, plus custom collections
- Multiple tags per bookmark with one-click filtering
- Instant search across titles, URLs, descriptions, collections, and tags
- Domain filtering
- Favorites and pinned links
- JSON backup export and validated JSON import
- Duplicate URL detection during import
- Browser LocalStorage persistence
- Responsive desktop, tablet, and mobile layouts

## Tech stack

- HTML5
- CSS3 (Flexbox and responsive media queries)
- Vanilla JavaScript
- Browser LocalStorage and JSON

No build tools, backend, package installation, or API key are required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For the best local development experience, use the VS Code Live Server extension and select **Open with Live Server**.

## Deploy with GitHub Pages

1. Create a public GitHub repository named `LinkLocker`.
2. Upload `index.html`, `style.css`, `script.js`, and the `data` and `assets` folders.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The URL will appear in the Pages settings.

## Data and privacy

Bookmarks are stored in the browser's LocalStorage on the device where the app is used. They are not automatically synced between team members or browsers. Use **Backup & restore** to export a JSON file and transfer it manually.

The starter library is also available at `data/sample-bookmarks.json`.

## Import format

A backup file uses this structure:

```json
{
  "app": "LinkLocker",
  "version": 1,
  "exportedAt": "2026-11-22T00:00:00.000Z",
  "collections": ["Frontend Resources"],
  "bookmarks": [
    {
      "id": "example-1",
      "title": "MDN Web Docs",
      "url": "https://developer.mozilla.org/",
      "description": "Web platform documentation",
      "collection": "Frontend Resources",
      "tags": ["html", "css"],
      "favorite": false,
      "pinned": false,
      "createdAt": "2026-11-22T00:00:00.000Z"
    }
  ]
}
```

## Limitations

- This is a frontend-only demo. Collections and bookmarks are local to the browser and are not shared live across different users.
- Favicon loading uses Google's public favicon endpoint and therefore requires an internet connection.
- Automatic OpenGraph scraping and server-side link health checks are not included because browsers restrict cross-origin requests and this project has no backend.

## License

MIT — see [LICENSE](LICENSE).
