# Mr. Cheesecake — Site

Static site, no build step. Just push these files to the repo and GitHub Pages
serves them as-is. Live at: https://ad0rkableg33k.github.io/Mr.Cheesecake/

## Still to fill in

- [x] **Order form**: connected to Formspree — submissions go to the email
      the Formspree account is registered under.
- [x] **About page**: `about.html` now has Todd's real bio and signature.
- [x] **Testimonials**: `index.html` has real customer quotes and names.
- [x] **Phone number**: (804) 592-1248 is live on the order page and in
      every page footer.
- [ ] **Cheesecake pricing**: the baked-goods items (brownies, bundt cake,
      pound cake, cherry nut bread, banana bread, cookies, pineapple cake)
      have real prices in `menu.html`. The cheesecakes still say
      "Call for Price" — add real numbers here if/when Todd locks in
      pricing for those, or leave as-is if he wants to keep cheesecakes
      by-request/quote only.
- [ ] **Stock placeholder photos**: blueberry cheesecake, key lime pie,
      pumpkin cheesecake, the seasonal white chocolate raspberry/cranberry
      cheesecake, and cookies now show stock photos (each still carries a
      small "Placeholder photo until an actual photo is obtained" watermark
      baked into the image) — swap these for Todd's own photos in
      `Images/Products/` once he has them, and update the corresponding
      `<img>` tag in `menu.html`.
- [ ] **PayPal Business**: Todd has decided on PayPal Business as the
      payment method, but it isn't wired into the site yet. Options once
      he confirms the account/email: a simple Payment Link sent per order
      (no site changes needed), or an embedded Buy Now button per menu
      item once pricing is fully locked in.
- [ ] **Domain name**: not chosen yet — the site works fine on the
      `github.io` URL above in the meantime.

## Structure

```
index.html          Home
menu.html            Full menu
about.html           About / bio
order.html           Ordering steps + request form
css/style.css        All styling (one file, no framework)
js/main.js           Mobile nav toggle
js/splash.js         Homepage splash screen logic
Images/logo.png      Site logo (used in header/hero)
Images/favicon.png   Browser tab icon
Images/signature.png Todd's signature (About page)
Images/Products/     Product photos (compressed JPGs)
```
