---
layout: post
title:  "Volumetric Lighting - Update8"
date:   2017-07-18 08:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: false
thumbnail: 'images/sponza.jpg'
author: "Sanjay Nambiar"
comments: true
---

## Updates to light volume generation

Previous update's light volume generation had some issues. The back face of the volume was getting disconnected from the cube during displacement. Tessellation and displacement was
being controlled by additional vertex data being sent to the tessellation shaders. Turns out, all the tessellated vertices get the same copy of vertex data as the passed in
vertices. This is a problem for displacement mapping since the 4 corners of the back face shouldn't be displaced at all. This problem was fixed by checking if the texture coordinate
mapped to the vertex corresponded to (0,0), (1,0), (0,1) or (1,1). If the texture coordinate matched any of the above, no displacement is applied. This fixed the back face getting
detached from the volume.

## Integration issues
Moving on to light volume integration, going through the GDC talk and presentation by Nvidia has very high level information about integration. Going through the source code
gave some insights into the way integration is done in the pixel shader. Since it took a lot of time, I moved on to setting up a scene for the final presentation.

## Setting up scene and additional interactive controls
Sponza model was loaded successfully before, but with lot of texture problems. Setting texture filtering and wrapping modes, help fix this issue. A skybox was also added to the 
scene. Additional controls to change the intensity of lights were added. The scene is ready for setting up a volumetric light.

Here is the current scene with light volume.
<br/>
<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/sponza-fullres.png">
</div>
<br/>

[Source Code](https://github.com/sanjay-nambiar/RenderingDemos/tree/master/source/Demos/OpenGL/VolumetricLighting)
