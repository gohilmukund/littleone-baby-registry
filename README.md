# LittleOne Baby Registry

A mobile-first wishlist for our little one's arrival. Guests can reserve gifts to help avoid duplicate gifts.

**Live preview:** https://gohilmukund.github.io/littleone-baby-registry/

## Update the gift list (no code edits)

Wishlist items are managed in [config/gifts.md](config/gifts.md). Edit that file to add, remove, or update gifts.

Each item follows this format:

```md
## Gift name
category: Nursery
description: A short, friendly description.
quantity: 1
photo: 4
```

- `quantity` is the number wanted.
- `photo` is a zero-based image tile index (0–11) in `assets/gift-collection.svg`. Reuse a tile if you don't have a new photo.
- Keep the heading unique.

The page reads `config/gifts.md` when it loads. Browser-local reservation storage has been removed. Shared reservations are temporarily disabled until the persistent backend is connected; do not use the current preview as a live registry yet. Firebase Cloud Firestore is the planned backend (Spark/free tier), with shared data independent of GitHub Pages redeployments.


## Project
Static HTML/CSS/JavaScript deployed via GitHub Pages and GitHub Actions. Main page: `index.html`.

## Persistent reservations (planned)

We are preparing Firebase Cloud Firestore on the no-cost Spark plan. Current published Firestore Spark quotas include 1 GiB storage, 50,000 document reads/day, 20,000 writes/day, and 20,000 deletes/day. If a Spark product quota is exceeded, Firebase may shut off that product for the remainder of the month, so monitor usage. See [Firestore pricing](https://firebase.google.com/docs/firestore/pricing) and [Firebase plan limits](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans).

**Setup is not complete:** a Firebase project, Firestore database, anonymous authentication, and web app config still need to be created and connected before shared reservations work. The uploaded maternity hero photo also still needs to be added to `assets/` (the homepage references `assets/maternity-hero.jpg`).
