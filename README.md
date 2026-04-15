# Profile Card

A clean, accessible, and responsive Profile Card built with HTML, CSS, and vanilla JavaScript.

## Features

- Avatar with online/busy/away/offline status dot
- Cover photo with gradient
- Follow button with toggle (following/unfollow) and live follower count update
- Message button
- Collapsible bio with expand/collapse toggle
- Stats row: Posts, Followers, Following
- Location, website, and join date details
- Skills tags
- Social links: Twitter, GitHub, LinkedIn
- Edit profile form — update name, role, bio, location, and availability status inline

## Project Structure

```
profile-card/
├── index.html
├── style.css
├── app.js
└── README.md
```

## How to Run

Open `index.html` directly in a browser — no installs needed.

## Accessibility Notes

- All interactive elements have accessible names via `aria-label` or visible text
- Status dot uses `aria-label` and `title`
- Follow button uses `aria-pressed` for toggle state
- Bio toggle uses `aria-expanded` and `aria-controls`
- Edit form fields all have `<label for="">`
- Focus returns to Edit button when form is closed or cancelled
- All links open in new tab with `rel="noopener noreferrer"`
- Social icons are `aria-hidden`; links have `aria-label`
- Full keyboard navigation supported
- WCAG AA colour contrast maintained

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
