Expedite Front-end Challenge
============================

## Intro

Welcome! This challenge is designed to give us a better idea of how you work
on a front-end project. We've found project-based challenges like this
to be a more effective means of evaluation than traditional coding interviews.

You should *expect to spend 2-3 hours on this challenge*.

## The Challenge

At Expedite we've set out to build a number of internal "portals" that make our
mortgage staff more effective. Recently, we've realized that the one true metric
for efficiency at Expedite is the number of GIFs shared internally per hour...
As such, we've decided to build an internal portal that allows Expedite
employees to collect and share multiple GIFs at once.
It's like... Pinterest for GIFs? Manga Studio for GIFs? Well.. you get the idea.

Your quest is to complete all of the **Basic Requirements** and
your choice of 2 quick **Bugfixes** from the sections below.

We've provided a basic framework to get you started, but many things are
intentionally incomplete or broken. We encourage you to change
absolutely anything, to add third-party libraries as necessary, and to
generally take ownership over the final product.

When you're done, check out the [submission guidelines](#submitting).

Best of luck!

### Bugfixes (choose 2)

We recommend doing these first to get a feel for the codebase.

- Search results shouldn't hang over the right edge of the sidebar
- There should be some padding between footer text and main content
- Header should look nicer.
  - Logo should be vertically centered with main heading.
  - Remove weird gaps above and below header
  - Cleaner styling on header text.
- Dropzones should look nicer:
  - image should stretch to fit the frame
  - should be arranged in a 2x2 grid, 200px row height.
- Sidebar and main column should always be equal height

### Basic Requirements

- Refator the `App` component into multiple components, as desired
- Hook search up to the [Giphy API](https://github.com/giphy/GiphyAPI)
  - Use their public beta key
  - Should efficiently make search requests as you type.
  - Should populate the sidebar with thumbnail results.
- Hovering over a thumbnail should play the gif.
- Dropping a search result onto a dropzone should fill the dropzone with
  the corresponding GIF.
  - Note: Basic drag'n'drop is already set up with [react-dnd](http://gaearon.github.io/react-dnd/docs-overview.html) you just need to hook it up to your own data model.

### Bonus Features (optional)

Got some extra time? Wanna really wow us? Here are some ideas...

- Synchronize the state of the dropzones in one tab with those in another tab
- Devise a second colorscheme (toggle-able with a class on `body`)
- Add some cool animations to drag/drop/search interactions
- Implement the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) with a fun surprise
- Make the design responsive down to 480px
  - Dropzones should collapse back into a single column at some point
  - Ensure footer/header contents look reasonable on small screens
  - Decide how to present search and GIF selection features at phone size.
- Update the URL with a shareable url that initializes the same dropzone states
- Allow user to add text overlays to GIF panels.
- Allow user to add rows and/or columns
- Anything else you'd like to do?

## Installing

1. Install a recent version of nodejs (presumably you've done this already).
2. `npm install`

## Running

1. `npm start`
2. Load up `localhost:3020` in a browser.
3. Edit and save files. The browser should update automatically.

## Submitting

When you are satisfied with your work, follow these instructions to submit:

1. `git format-patch master your-branch-name --stdout > your-name.patch`.
    Or, if you worked straight off of master, use the commit sha preceding
    your work and the commit sha for your final commit.
2. Email the patch to [recruiting+front-end-challenge@expeditelabs.com](mailto:recruiting+front-end-challenge@expeditelabs.com).

_We use email instead of a PR because we don't want your submission to be
publicly available to other candidates._

## Feedback

We're always looking for ways to improve our processes at Expedite so
let us know if anything is especially frustrating (or fun)!

## Attributions

This repository is based on gaearon's [react-transform-boilerplate](//github.com/gaearon/react-transform-boilerplate) which is distributed under the [CC0 (public domain) license](//github.com/gaearon/react-transform-boilerplate/blob/d682dc59b3626fe515cd10bcc1f546a42d1098a9/LICENSE).
