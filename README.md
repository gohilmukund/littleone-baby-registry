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

The page reads `config/gifts.md` when it loads. This preview currently saves reservations in the browser's local storage, so reservations are **not shared between guests or devices**. Shared reservations need a backend (e.g. Supabase) before production use.


## Project
Static HTML/CSS/JavaScript deployed via GitHub Pages and GitHub Actions. Main page: `index.html`.
