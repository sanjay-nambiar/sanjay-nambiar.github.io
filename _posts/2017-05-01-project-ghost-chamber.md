---
layout: post
title:  "Project Ghost Chamber"
date:   2017-05-01 09:30:00 -0500
category: Project
tags: ['C++', 'C#', 'Kinect', 'Hologram', 'UnrealEngine']
showcase: true
thumbnail: 'images/ghost-chamber.jpg'
author: "Sanjay Nambiar"
comments: true
---

## Project Ghost Chamber

<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/ghost-chamber.jpg">
</div>

This project is one of the most unique projects I worked on while I was at FIEA. This project was done as
part of a course at FIEA which focuses on Games / interactive simulations outside of entertainment realm.
The course had a lot of interesting educational games from different teams. Project Ghost Chamber was done
by a team of 5, 3 programmers, 1 producer and an artist. We started the project as an interactive hologram
plugin for the AutoCAD software. We used Kinect libraries in C# .NET to write plugins for AutoCAD which lets
users move, rotate and zoom the autocad workspace using hand gestures.

As a next step, the autocad models were streamed via a desktop capture software written in C++. The streamer
software modified the image and duplicated it into 4 sections, so that we can use a pyramid glass chamber which
produced holograms of the model in AutoCAD. As a final step we built another chamber which was more compact
and integrated Raspberry Pi and a couple of projectors to create a more portable and self contained hologram
display unit. The software running in Raspberry Pi is a simple OpenGL renderer and UDP server. A mobile application
built using Unreal Engine, loaded the same models as the Raspberry Pi and communicated transform data of the active
model to the Raspberry Pi server. This lets users control the models displayed in the chamber via the phone app.

I was involved in creating design of the C# plugin project and implementation of some kinect commands and gestures. I
also developed the mobile application in Unreal Engine and learned quite a bit about Unreal's socket classes and how
it can be used to create client application talking to regular C sockets based servers. The client - server system also
had an autodiscovery feature within a LAN.

The final presentation of the project can be viewed here:
<div class='embed-container'>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/MxiuaFEt_Mc?start=5048" frameborder="0" allowfullscreen></iframe>
</div>

