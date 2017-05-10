---
layout: post
title:  "Assembly Game: Apple Archer"
date:   2016-10-16 11:00:00 -0500
tags: ['fiea', 'assembly', '68000', 'solo']
author: "Sanjay Nambiar"
comments: true
---

## Apple Archer

<iframe width="560" height="315" src="https://www.youtube.com/embed/rxzyOU_MlyQ" frameborder="0" allowfullscreen></iframe>

Apple archer is an assembly game created for a course project work. The game is entirely programmed in Motorola 68000 assembly language to run in
Easy68K emulator. Apart from all the challenges that come with writing a game in assembly, the Easy68K emulator had really slow pixel plotting
pipeline making it difficult to have a lot of moving parts in the game. To overcome this to some extent, I created simple backgrounds and objects
in the world which were mostly colored with one or two colors. This choice let me optimize the sprite drawing by implementing a run length encoder
and drawing a run of pixels using line drawing API of Easy68K which took almost the same time to draw a line as drawing a single pixel. The game was made in a span of 2 weeks. This was a solo project so I had to get sprites from the internet as well as create some of my own.

The link to source code for this project can be found under Projects section.