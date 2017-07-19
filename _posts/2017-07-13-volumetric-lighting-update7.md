---
layout: post
title:  "Volumetric Lighting - Update7"
date:   2017-07-13 08:00:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: false
thumbnail: 'images/light-volume-tessellated.png'
author: "Sanjay Nambiar"
comments: true
---

## Generation of light volume with shadow map and tessellation

Main goals of this week was to get the loght volume generation using the shadow map. After the shadow map is generated, the following process outlines the volume generation:

### **Create vertex data for a cube / frustum**
There were some misunderstanding here when I tried to generate a frustum for the light volume. When I went throught the algorithm again, there are three light types
that are supported, directional light, point light and spot light, in the order of increasing complexity. Light volumes describe the volume of space where the light rays
travel (excluding reflection off of other surfaces). When I initially thought about the light volume being a frustum, I was thinking in terms of a light cone. But since we already have
shadow map generated for the entire scene, which tells us the portion of the scene which is lit, we can simplify the volume to be a cube for all types of lights. I did implement
a frustum in my first attempt, by generating a cube and multiplying it with the inverse of model view projection matrix of the light cone, followed by dividing the vertex coordinates'
x, y and z by its w and setting w to 1. This seems unnecessary now since a cube should suffice.

### **Tessellation of light volume**
The main component of light volume generation is tessellation and displacement mapping. Going throught [this](http://ogldev.atspace.co.uk/www/tutorial30/tutorial30.html) very good
article about tessellation in OpenGL, I was able to get tessellation working on the cube. I made the tessellation levels changeable during runtime through keyboard input. Once this was
completed, for our algorithm, we need to tessellate only the back face of the cube. My first thought process was to render a cube without the back face and a separate quad as the back face.
I ended up using a simpler approach, by passing an additional float with each vertex which indicates whether this vertex is part of a face that needs to be tessellated or not. In the tessellation
control shader, I set tessellation levels greater than 1 only if all 3 vertices of the triangle patch was marked to be tessellated.

### **Displacement mapping**
Once the back face of the cube is tessellated, we apply the shadowmap as a displacement map on the back face. Again, I use the same per vertex float that I sent to decide whether this vertex should
be displaced or not. There's also a displacement factor that can be changed during runtime to see the effect of displacement mapping.

Here is the result of the above steps performed on single light
<br/>
<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/light-volume-tessellated.png">
</div>
<br/>
From here for next week, I have to do the integration of light intensity at each point in the inside of that volume and generate light rays into a separate texture.

[Source Code](https://github.com/sanjay-nambiar/VolumetricLighting)
