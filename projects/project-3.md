---
layout: layouts/project.njk
title: "Third Time's the Charm!"
subtitle: "Dun Dun DUUUUUUUUUN."
thumbnail: {src: "https://picsum.photos/700/900", alt: "Test thumbnail alt text" }
gallery:
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
    - {src: "https://picsum.photos/400", alt: "Test thumbnail alt text" }
media:
    - {src: "https://picsum.photos/400", type: "image", alt: "This is a lorem picsum image"}
    - {src: "/_includes/assets/media/example_video_03.mp4", type: "video", alt: "Video alt goes unused"}
    - {src: "https://www.youtube.com/embed/f0l7vmoI3KM", type: "iframe", alt: "Iframe alt goes unused"}

tags:
    - projects
---

# Description

This is a few words about the project. You can write whatever you want and use markdown or HTML/CSS here to style it.

## This is an h2
### This is an h3
#### This is an h4

Find out more about markdown syntax [here](https://www.markdownguide.org/cheat-sheet/). _Note that extended syntax is available with eleventy._

## We can use CSS and HTML too!

Check the source code to see how the images below have been arranged. You should see that we are using classes that are used elsewhere in the site's css to style our custom content.

<div class="switcher">
    <div class="wrapper">
        <div class="frame"><img src="https://picsum.photos/1200/800"></div>
        <div class="frame"><img src="https://picsum.photos/700/500"></div>
    </div>
</div>

CSS doesn't just style HTML though. Since markdown is converted into HTML, you can use CSS to style it. Below is an example of a list generated with markup but styled with inline css. Check out the source code to see the details.

<style>
    ul {
        list-style: none;

    }

    ul > li {
        font-size: calc(1em * 1.1);
    }
</style>

- Apple
- Banana
- Orange
- Kiwi

In general the classes you should be aware of (and will receive more documentation about) are the following:
- Stack
- Frame
- Cluster
- Switcher
- Grid
- Dense-Grid

They are all adapted from [Every Layout](https://every-layout.dev/), a resource that I'll give you access to so you can do your reading on how to use these classes in your own markdown/html.