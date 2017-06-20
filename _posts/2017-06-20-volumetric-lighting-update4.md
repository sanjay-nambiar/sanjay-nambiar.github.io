---
layout: post
title:  "Volumetric Lighting - Update4"
date:   2017-06-20 08:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: true
thumbnail: 'images/light-volumes.png'
author: "Sanjay Nambiar"
comments: true
---

## Generation of light volumes

First the first step of volumetric light generation as detailed in Nvidia's algorithm, is generation of light volumes. Light volumes help us to perform the numerical integration
of light scattering only on the areas where light rays reach the scene and is visible to the viewer.

<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/light-volumes.png">
</div>

The light volume is generated using tesselation shader and shadow maps. The scene depth is used to render a shadow map to an off screen frame buffer. The map contains
the depth at which light hits the scene and reflects off.

Using the above shadow map, we draw a cube which cover the entire screen (width and height are same as the viewport dimensions). The cube's front face is at the near plane
and its back face is at the far plane. The back face is then tessellated using the shadow map as a displacement map. This generates the lighting volume shown above.

Once the lighting volumes are generated, a pixel shader is used to render only the light rays in those volumes. The phase function of the medium, density of the medium,
absorption factor are all used while rendering the lights. This image is renderered to an offscreen buffer.

<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/light-rays.png">
</div>

Finally this offscreen buffer is additively blended onto regularly rendererd frame and displayed to the screen.

[Source Code](https://github.com/sanjay-nambiar/VolumetricLighting)
