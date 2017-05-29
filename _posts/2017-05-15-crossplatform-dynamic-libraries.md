---
layout: post
title:  "Cross platform dynamic libraries"
date:   2017-05-15 22:00:00 -0500
category: Post
tags: ['C++', 'GameEngine', 'Solo', 'Opengl', 'Dll', 'Plugin']
showcase: false
thumbnail: 'images/viper-engine.png'
author: "Sanjay Nambiar"
comments: true
---

## Dynamically linked libraries and cross platform support

One of the key problems that troubled in my previous design of DLL based plugin system was that my code has become windows exclusive.
Though my aim at this point is to get a working framework and produce a simple game using it, the thought of not being cross platform
was unsettling. Fortunately a bit of research led me to the engine Ogre3D's source code and particularly how they implemented this.

OGRE has a plugin based architecture for its components and hence they had solved the same problem. OGRE's solution is really simple but
effective. OGRE has a header for defining some platform specific macros and a header for dynamic library loading which defines macros for
dynamic library loading based on the current platform. The platforms themselves was detected based on some macros which specific compilers
define. At this point I have only used MSVC and GCC based macros. It was a very simple approach and I was able to incorporate it easily in
a prototypical way and test it. The relvant code snippents are given below.

#### Platform.h

{% highlight c++ %}
#define VIPER_PLATFORM_WIN      1
#define VIPER_PLATFORM_LINUX    2
#define VIPER_PLATFORM_MAC      3


#if defined(_WIN32)
	#define VIPER_PLATFORM	VIPER_PLATFORM_WIN
#elif defined(__linux__)
	#define VIPER_PLATFORM	VIPER_PLATFORM_LINUX
#elif defined(__APPLE__ && __MACH__)
	#define VIPER_PLATFORM	VIPER_PLATFORM_MAC
#endif
{% endhighlight %}


#### DynamicLibrary.h
{% highlight c++ %}
// Windows
#if VIPER_PLATFORM == VIPER_PLATFORM_WIN
	#include "Windows.h"

	#define	DYNAMIC_LIB_HANDLE HINSTANCE
	#define	DYNAMIC_LIB_LOAD(libraryName) LoadLibraryEx(std::wstring(libraryName.begin(), libraryName.end()).c_str(), nullptr, 0)
	#define	DYNAMIC_LIB_GETSYM(libraryInstance, symbolName) GetProcAddress(libraryInstance, symbolName)
	#define	DYNAMIC_LIB_UNLOAD(libraryInstance) FreeLibrary(libraryInstance)
	
	#define MODULE_EXPORT __declspec(dllexport)
	#define MODULE_IMPORT __declspec(dllimport)

// Linux
#elif VIPER_PLATFORM == VIPER_PLATFORM_LINUX
	#include <dlfcn.h>

	#define	DYNAMIC_LIB_HANDLE void*
	#define	DYNAMIC_LIB_LOAD(libraryName) dlopen(libraryName, RTLD_LAZY | RTLD_GLOBAL)
	#define	DYNAMIC_LIB_GETSYM(libraryInstance, symbolName) dlsym(libraryInstance, symbolName)
	#define	DYNAMIC_LIB_UNLOAD(libraryInstance) dlclose(libraryInstance)

	#define MODULE_EXPORT __attribute__((visibility("default")))
	#define MODULE_IMPORT
#endif
{% endhighlight %}

As usual, here is the project source code (work in progress) - [ViperEngine](https://github.com/sanjay-nambiar/ViperEngine)
