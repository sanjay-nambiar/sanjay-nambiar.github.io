---
layout: post
title:  "Volumetric Lighting - Update3"
date:   2017-06-13 12:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: true
thumbnail: 'images/directional-light.png'
author: "Sanjay Nambiar"
comments: true
---

## Volumetric Light Scattering using Post Process Shaders

After looking at algorithms from the [Ubisoft paper](http://advances.realtimerendering.com/s2014/wronski/bwronski_volumetric_fog_siggraph2014.pdf) and NVIDIA's [GDC talk](http://www.gdcvault.com/play/1023519/Fast-Flexible-Physically-Based-Volumetric),
I was able to understand more about the complexity involved in generating volumetric lighting. The above two papers goes a high level on how they implemented
the algorithm with the math behind the calculations. These proved rather challenging to me and any examples that came with them are in DirectX 11 and fairly complicated.

Since I am new to rendering and I wanted to prototype something quick, I started looking at more examples and preferrably into OpenGL implementations. After
looking at lot of examples and articles, I found this blog which mentions a technique using 3 step rendering to create volumetric lights in OpenGL.
This method achieves volumetric lighting using the following steps:
1. Generate a texture and frame buffer for a shadow map(which is nothing but a depth map)
2. Generate a texture and frame buffer for an occlusion map
3. Generate a texure and frame buffer for a scene render target.
4. Per frame do the folloing steps:
    1. Draw the shadow map
    2. Draw the occlusion map
    3. Draw the scene render target
    4. Blend the occlusion map and scene render and display it on the screen

[Source Code](https://github.com/sanjay-nambiar/VolumetricLighting)
