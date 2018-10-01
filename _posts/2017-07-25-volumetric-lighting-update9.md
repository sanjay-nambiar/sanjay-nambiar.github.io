---
layout: post
title:  "Volumetric Lighting - Final Update"
date:   2017-07-25 23:30:00 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: true
thumbnail: 'images/sponza.jpg'
author: "Sanjay Nambiar"
comments: true
---

## Light Volume Generation
Light volume generation from the last week was further tweaked. Last week, we tried using both perspective and orthographic shadow maps to generate light volumes. Neither of them gave accurate results. Light volume didn't exactly match the scene geometry deformations. The problem with previous volume was simply that, the linearized shadow map value range from 0.0 to 1.0, but to match the scene geometry, we need to scale this to the range (FarPlane, NearPlane) to match the scene geometry. This along with some adjustment to displacement offset scale, gave a perfectly fitting light volume.
<br/>
<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/light-volume-1.png">
</div>
<br/>
<br/>
<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/light-volume-2.png">
</div>
<br/>

## Light Volume Rendering - Integration
A full implementation of volumetric lighting functions for all types of lights is way more complicated for the scale of this project. So for this project we consider only simple directional light. Henyey-Greenstein phase function was used to do the light volume rendering integration. The parameters of the function are all set to constants adjusted to give  reasonable looking scattering effects. These could be modified further or be dynamic based on the scene in an actual game implementation. The rendered light volume was blurred multiple times to get rid of the hard edges and get that soft looking visuals.

## Blending
The integration result was blended with the rest of the scene using a lower opacity. We simply sample from the deferred rendered scene and the light volume texture and use OpenGL mix function to blend them together.

Here is the current scene with light volume blended in.
<br/>
<div class='embed-container'>
	<img src="{{ site.baseurl }}/images/god-rays.gif">
</div>
<br/>

## Conclusion
This project was a great way for me to really dig into graphics programming and get a taste of what is involved in a simple renderer and the techniques used to render various effects. This is only a bare bones demo exploring the technique of rendering volumetric lights. For an accurate and realistic looking effect, the renderer has to be more advanced such as a Physically Based Renderer. There are also many other technqiques like using a pre-computed or dynamically generated 3D density lookup textures to give varying participating media characteristics. Support for other light types like point lights and spot lights could also be added. Lastly, this is only one of the techniques available and there are plenty of others out there, some of which are more popular such as the ones mentioned in [Bart Wronsky](https://bartwronski.com/)'s [paper](http://advances.realtimerendering.com/s2014/index.html#_VOLUMETRIC_FOG:_UNIFIED).

[Source Code](https://github.com/sanjay-nambiar/RenderingDemos)
