# Mr. Cheesecake — Site

Static site, no build step. Just push these files to the repo and GitHub Pages
serves them as-is. Live at: https://ad0rkableg33k.github.io/Mr.Cheesecake/

## Still to fill in

- [x] **Order form**: connected to Formspree — submissions go to the email
      the Formspree account is registered under.
- [ ] **About page**: `about.html` has placeholder bio copy in *italics* —
      swap it for Todd's real story.
- [ ] **Testimonials**: `index.html` and `about.html` have placeholder
      testimonial quotes — replace with real customer quotes as they come in.
- [ ] **Pricing**: menu items currently say "Ask for pricing" — add real
      prices once decided, or leave as-is if pricing stays by-request.
- [ ] **Missing photos**: blueberry cheesecake, key lime pie, pumpkin
      cheesecake, and cookies show a "Photo coming soon" placeholder card in
      `menu.html` — swap in real photos to `Images/Products/` and update the
      `<img>` tag once available.
- [ ] **Phone number**: `order.html` has a placeholder note where a phone
      number can go once you're ready to publish one.
- [ ] **Domain name**: not chosen yet — the site works fine on the
      `github.io` URL above in the meantime.

## Structure

```
index.html          Home
menu.html            Full menu
about.html           About / bio
order.html           Ordering steps + request form
css/style.css        All styling (one file, no framework)
js/main.js           Mobile nav toggle only
Images/Products/     Product photos (compressed JPGs)
```
