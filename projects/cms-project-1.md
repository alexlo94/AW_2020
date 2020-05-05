---
layout: layouts/project.njk
tags:
  - projects
title: "Multimedia Production "
subtitle: "NYU "
thumbnail:
  src: /static/media/uploads/button_02.png
  alt: flower thumbnail
gallery:
  - src: /static/media/uploads/abby-citation-stle-end.jpg
    alt: instructor explaining
  - src: /static/media/uploads/cite-with-anton-backaground.jpg
    alt: quote from MLA style Center
  - src: /static/media/uploads/powerpoint-08.png
    alt: visualization of collaboration concept
media:
  - alt: Video and iframe alt text goes unused.
    src: /static/media/uploads/production-id_3752545.mp4
    type: video
---
## Description

This post was written entirely using the CMS. Just like in all the other posts, I can do all the usual stuff within the markdown editor.
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
