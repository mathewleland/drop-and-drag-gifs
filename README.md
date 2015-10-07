Expedite Front-end Challenge
============================

## Intro

Welcome! This challenge is designed to give us a better idea of how you work
on a front-end project. We've found project-based challenges like this are
often a more effective means of evaluation than traditional coding interviews.

You should **expect to spend 2 hours on this challenge**.

## The Challenge

At Expedite we've set out to build a number of internal "portals" that make our
mortgage staff more effective. Recently, we've realized that the one true metric
for efficiency at Expedite is the number of GIFs shared internally per hour...
so we've decided to build an internal portal that allows Expedite
employees to share GIFs collections.
It's like... Pinterest for GIFs? Well.. you get the idea.

Your quest is to complete the **Basic Requirements** and
your choice of 2 **Minor features/fixes** from the list below.

We've provided a basic framework to get you started, but many things are
intentionally incomplete or broken. Feel free to change *anything* and
to add any libraries you need (just be sure to `--save` them to `package.json`).

When you're done, check out the [submission guidelines](#submitting).

Best of luck!

### Basic Requirements

- Hook search up to the [Giphy API](https://github.com/giphy/GiphyAPI)
  - Should use their public beta key
  - Should efficiently make search requests as the user types in the search input.
  - Should populate the sidebar with thumbnail results.

### Minor features/fixes (choose 2)

- Fix columns
  - Sidebar search results shouldn't hang over the right edge of the sidebar
  - There should be some padding between footer text and main content
  - Sidebar and main column should always be equal height
- Fix header
  - Logo should be vertically centered with main heading.
  - Remove weird gaps above and below header
  - Cleaner styling on header text.
- Fix GifDropzones:
  - image should stretch to fit the frame
  - should be arranged in a 2x2 grid, 200px row height.
- Hovering over a search result thumbnail should play a GIF preview.
- Dropping a search result onto a dropzone should fill the dropzone with
  the corresponding GIF.
  - Note: Basic drag'n'drop is already set up with
    [react-dnd](http://gaearon.github.io/react-dnd/docs-overview.html)
    you just need to hook it up to your own data model.
- Add your own personal touch. You can do anything you like! Just have some fun with it!

## Installing

1. Install a recent version of nodejs (presumably you've done this already).
2. `npm install`

## Running

1. `npm start`
2. Load up `localhost:3020` in a browser.
3. Edit and save files. The browser should update automatically.

## Submitting

When you are satisfied with your work, follow these instructions to submit:

1. `git format-patch master --stdout > your-name.patch`.
    Or, if you worked straight off of master, use the commit sha preceding
    your work.
2. Email the patch to [recruiting+challenge-front-end@expeditelabs.com](mailto:recruiting+challenge-front-end@expeditelabs.com).

## Feedback

We're always looking for ways to improve our processes at Expedite so
let us know if anything is especially frustrating (or fun)!

## Attributions

This repository is based on gaearon's [react-transform-boilerplate](//github.com/gaearon/react-transform-boilerplate) which is distributed under the [CC0 (public domain) license](//github.com/gaearon/react-transform-boilerplate/blob/d682dc59b3626fe515cd10bcc1f546a42d1098a9/LICENSE).
