---
layout: post
title:  "Viper Engine: Plugin based subsystems"
date:   2017-05-10 20:00:00 -0500
category: Project
tags: ['C++', 'GameEngine', 'Solo', 'Opengl', 'Dll', 'Plugin']
author: "Sanjay Nambiar"
comments: true
---

## Plugin based subsystems

Over the past 4 months, I have extensively used Unreal Engine in projects. What better for a programmer to have access to the
source code of a game engine that is used widely in the industry. I had to look into the engine source code
a couple of times to figure out how unreal implemented certain features. This also lead me to look into their Unity build system.

Unreal Build Tool does a lot of preprocessing and custom module management before the actual C++ compilation starts. This lets
the users include only required modules into the games. The build tool also supports plugins which can be added to the game
project using Unreal. Another interesting engine I've come across is Ogre3D. This engine is referred extensively in the book
Game Engine Architecture, by Jason Gregory. Ogre leans more towards complete plugin based engine architecture. All the engine
subsystems as plugins in Ogre. I really wanted to experiment with that idea, but also didn't have the time to build any sort of
rudimentary build system to support such an architecture. Since my primary target platform is still windows (and potentially Xbox)
I decided to try a dll based plugin system for Viper Engine subsystems. As of now, I have some very simple and rudimentary
Audio, Rendering, Window and Input subsystems compiled as dlls, and loaded at runtime through configurations from an ini file
working and tested. I will be adding a video blog about this soon. Until then, the latest source code can be found in my github
[repository](https://github.com/sanjay-nambiar/ViperEngine).