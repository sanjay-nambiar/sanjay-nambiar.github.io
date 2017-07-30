---
layout: post
title:  "Volumetric Lighting - Update6"
date:   2017-07-07 08:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: false
thumbnail: 'images/light-volumes.png'
author: "Sanjay Nambiar"
comments: true
---

## Shadow mapping and light volume generation

This week's task was primarily to generate perspective shadow maps and generate light volume from the shadow map. With the off screen render targets
working from previous week, I was able to attach an additional depth buffer texture to the frame buffer. A perspective projection matrix is created
from the point of view of each light. This light view projection matrix is used to transform the world objects and a depth map is generated from this which
acts as the shadow map. The interactive program allows the user to switch to shadow map view and cycle through different lights to see shadow maps for each
of them. The lights are non stationary and hence shadow map is updated every frame.

Once the perspective shadow map was completed, focus was given on generating the light volumes. A simple frustum mesh definition was created based on the near
plane and far plane of the light. The work is still in progress to render this volume and tessellate it based on the shadow map.

Other than the above mentioned tasks, I also spent considerable time in trying to setup a scene were all these can be visualized better. I integrated an offline
model processor which was available in a direct X rendering project into this and tested it with differnt models.

[Source Code](https://github.com/sanjay-nambiar/RenderingDemos/tree/master/source/Demos/OpenGL/VolumetricLighting)
