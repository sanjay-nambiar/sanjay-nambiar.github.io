---
layout: post
title:  "Volumetric Lighting - Update1"
date:   2017-05-23 16:17:32 -0500
category: Post
tags: ['C++', 'OpenGL', 'Rendering', 'Volumetric', 'Lighting']
showcase: true
thumbnail: 'images/viper-engine.png'
author: "Sanjay Nambiar"
comments: true
---

## Setting up OpenGL render context and rendering cubes

First week of the volumetric lighting project is scheduled for setting up rendering contexts
and trying to render something on the screen. I am adding the lighting functionality in the Viper Engine project
which I am building on the side. So all the source code links I am going to present in this article and the following
will redirect to specific parts of the Viper Engine.

The website [Learn OpenGL](https://learnopengl.com/) was what I referred for most of my work for this week. Their
[Getting Started](https://learnopengl.com/#!Getting-started/OpenGL) section describes right from the basics of setting
up a window using glfw all the way through coordinate systems and camera at the end.

I was able to setup a simple rendering window using Glfw. The challenging part was understanding the OpenGL graphics pipeline
and getting used to setting up contexts to render. One of the main difference here from regular programming is the fact that
OpenGL is a state machine. In order to render anything, we have to set the states with proper values and thats what controls
what is rendered and how they are rendered. This takes some time to get used to.

Here are the OpenGL related things I learned and completed during this week:

1. The first thing to understand is that OpenGL allocates memory on the GPU and opeartes exclusively on them. This
means everything including vertices, textures, other data objects which describe how to render things are to be stored
through OpenGL inside GPU. There are methods to allocate different types of such buffers in OpenGL and all of them
return an unsigned int as an Id to the allocated object.

2. OpenGL has has state and most of rendering is setting up this state. state consists of differnt options such as whethern
to render transparencies or not, what type of texture filtering to use etc as well as a set of objects which are active at
the current time. For example, if we have to render some vertices, we need to allocate memory through OpenGL for a vertex
data object, copy the vertex data into that memory and then set the Id of that object as active vertex buffer object.

3. Vertex buffer objects (VBO) contain the actual vertex data. This can include vertex coordinates, a color for each vertex,
UV coordinates for texturing and really any additional data you want to store with each vertex
{% highlight c++ %}
float[] vertices = { /* vertex data (X, Y, Z) */ };
GLuint VBO;
glGenBuffers(1, &VBO);
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
{% endhighlight %}

4. Element buffer object (EBO) lets us reuse vertex data. For example, a cube has 8 vertices. But if the rendering usually renders triangles,
and a cube has 6 faces, each face split into two triangles and each triangle has 3 vertices. To sum up, 6 faces times 2 triangles
per face times 3 vertices per triangle adds up to 36 vertices. Element buffers lets us define the 8 vertices and use indices to the
vertex array for the 36 vertices required to render the cube.
{% highlight c++ %}
GLuint[] elements = { /* indices into vertices array */ };
GLuint EBO;
glGenBuffers(1, &EBO);
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, mesh.TriDataSize(), mesh.TriData(), GL_STATIC_DRAW);
{% endhighlight %}

5. Vertex attribute object (VAO) is how OpenGL makes sense out of the vertex data we send. It describes the data type of the vertex coordinates,
the number of coordinate elements for each vertex, stride between vertex data.
{% highlight c++ %}
GLuint VAO;
glGenVertexArrays(1, &VAO);
glBindVertexArray(VAO);
{% endhighlight %}

6. I was able to do simple texture mapping on a cube and enable 3D Projection so that the cube looks 3D. At this point the program had a single texture mapped spinning cube.

7. From the single cube, by using multiple transformation matrices, I was able to setup n number of cubes all at random locations spinning at the same time.

[Source Code](https://github.com/sanjay-nambiar/VolumetricLighting)
