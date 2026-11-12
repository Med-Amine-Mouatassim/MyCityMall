# MyCityMall Project Audit

Audit scope: files present in the supplied project directory on 2026-11-12. This report describes the repository contents only; remote Firebase data, hosting configuration, and Git history were not available for inspection.

## Initial Structure

The project began as a flat collection of HTML, JavaScript, and CSS files at the root, plus `photos/` and `logos/` asset folders. There was no README, `.gitignore`, package manifest, JSON data file, Firebase rules file, or Git repository metadata in the directory.

The application uses browser JavaScript modules and Firebase SDK 10.7.1 imports from Google CDN. Authentication, Firestore, App Check, Cloudinary, Formspree, and other CDN assets are referenced by the source. No framework or build system was found.

## Current Structure and File Moves

- `auth.js`, `chatbot.js`, `indexjs.js`, and `test.js` moved to `scripts/`.
- `explorer.css` and `indexstyle.css` moved to `styles/`.
- `firebase-config.js` moved to `config/`.
- Imports, stylesheet references, script references, and CSS image URLs were adjusted for these moves.
- HTML pages remain at the root because existing navigation, migration source paths, and external data may depend on their current relative locations.
- `photos/` and `logos/` remain unchanged because some assets may be referenced by external Firestore data or dynamic product content.
- No files were deleted.

## Feature Findings

- Customer account registration/sign in is implemented with Firebase Authentication. Registration requires email verification.
- Explorer navigation is present, although its category destinations are not included in this directory.
- Favorites are read from a user's Firestore profile document.
- The assistant searches Firestore products, applies text/facet/price filters, logs clicks, and optionally uses browser speech synthesis.
- Seller tools check for a `vendeur` role and `shopId`, and manage shop configuration and product records in Firestore. Product images are uploaded through Cloudinary.
- A support form posts to Formspree.
- Some code reads and displays an existing order. No complete checkout/order creation/payment flow was found.
- No administrator dashboard was found.
- Five migration pages write shop records to Firestore from JSON files in sibling category paths that are absent from this directory.

## Review Notes

- `index.html` is absent although some links target it.
- The migration pages refer to missing JSON inputs and perform Firestore writes.
- `scripts/chatbot.js` overlaps with assistant code embedded in `chatbot.html` and is not referenced by a page.
- `scripts/test.js` is not referenced by a page; its purpose should be confirmed before deletion.
- Several media files were not found by static filename search, but dynamic/external references were not available to check. None were removed.
- Firebase client configuration and an App Check site key are present in client code. Client Firebase configuration is intended for browser use, but it must be paired with restrictive rules. No Firestore/Storage rules were found.
- The seller page contains a Cloudinary unsigned upload preset. This is visible client configuration and should be restricted to prevent abuse; no Cloudinary API secret was found in the inspected source.
- No Git history was available, so prior exposure of keys cannot be assessed.

## Publication Checklist

- [ ] Add author name and public profile/contact link to README.
- [ ] Review Firestore rules and add the intended rules to the repository.
- [ ] Review App Check domains/site key and Cloudinary upload preset.
- [ ] Confirm the missing category pages and migration inputs are intentionally external or add safe sample data.
- [ ] Confirm whether the two unreferenced scripts are needed.
- [ ] Capture screenshots from a demo environment with no real personal data.
- [ ] Review media ownership and repository size before creating a public remote repository.
- [ ] Review staged files and commit history before publishing.
