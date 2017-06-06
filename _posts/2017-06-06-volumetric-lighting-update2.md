---
layout: post
title:  "Volumetric Lighting - Update2"
date:   2017-06-06 12:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: true
thumbnail: 'images/directional-light.png'
author: "Sanjay Nambiar"
comments: true
---

## Modular architecture for future updates and Scene lighting

For the second week my main goal initially was to set up a scene with basic lighting, including ambient, diffuse and specular lights.
I started following the [OpenGL Essentials Live Lessons](https://www.safaribooksonline.com/library/view/opengl-essentials-livelessons/9780133824360/)

The live lessons gives supporting code for each lesson and has been really valuable in understanding the pipeline and the code prodived serves as 
a base for extending for future updates. The source code can be found [here](https://bitbucket.org/pvarcholik/opengl-essentials-livelessons/src/06be99d926991db2353160ed519c4b75e9737c35/?at=VS2015).

I spend first half of my week going through the live lessons and understanding the framework it provides. It gave me a better understanding of how cameras
work and how the world, view and projection spaces work along with refreshers on vector and matrix math. Once I had the first demo integrated into the
new code base, I moved to model loading and lighting. Model loading was already avaialble as part of the framework using Assimp library.

Here is the high level summary of what I achieved over the week:

1. Detailed Blog post for first week's learnings
2. Understanding OpenGL pipeline through the live lessons. I am at the lighting chapter of the lessons right now, specifically at diffuse lighting (Section 5.2)
3. Loading OBJ models with texture mapping. Supports only 1 mesh per model and 1 texture per mesh as of now.
4. Implemented simple ambient light model
5. Half way through implementing diffuse light model.
6. Volumetric Lighting Algorithm Study - [Alogrithm by Ubisoft SIGGRAPH 2014](http://advances.realtimerendering.com/s2014/wronski/bwronski_volumetric_fog_siggraph2014.pdf)

### Understanding Volumetric Fog Algorithm

The alogithm mentioned above explains the following about light scattering.
    Lincoming = Ltransmitted + Labsorbed + Lscattered
    where Lincoming is the total light emitted from the light source

Every particle large enough to affect photons/light rays takes part in the light transport equation. Dust or water particles make some light rays
bounce in random directions, making some light enter the light path (in-scattering) and also some light gets bounced away, exiting the light path
and becoming darker (out-scattering). In the real world light bounces off multiple times and each particle does both in-scattering and out-scattering.
To simplify this algorithm, we ignore multiple scattering.

#### Beer Lambert's Law

Beer Lambert's Law defines the amount of light scattered.
<br/><img src='/images/BeerLamberts.png'><br/>
𝛽𝑒 is extinction coefficient, defined as sum of scattering and absorption coefficients. This shows that light extinction is exponential function of
travelled distance by light in given medium.

[Source Code](https://github.com/sanjay-nambiar/VolumetricLighting)
