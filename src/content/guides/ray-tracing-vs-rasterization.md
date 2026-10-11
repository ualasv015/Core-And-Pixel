---
title: 'Rasterization vs. Ray Tracing and Upscaling'
description: 'Understand how rasterization, ray tracing, upscaling and frame generation differ, and what to check when comparing graphics cards.'
summary: 'Rasterization and ray tracing are different ways to render a scene. Ray tracing can add realistic lighting effects but costs GPU resources; upscaling and frame generation are separate techniques that change image rendering or displayed frame counts.'
path: '/gpus/ray-tracing-vs-rasterization/'
section: 'gpus'
status: 'review'
sources:
  - label: 'NVIDIA: DirectX Raytracing and real-time ray-traced effects'
    url: 'https://www.nvidia.com/en-us/geforce/technologies/dx12/'
  - label: 'AMD: FidelityFX Super Resolution and frame-generation technologies'
    url: 'https://www.amd.com/en/products/graphics/technologies/fidelityfx/super-resolution.html'
  - label: 'NVIDIA: DLSS Super Resolution and Frame Generation overview'
    url: 'https://www.nvidia.com/en-us/geforce/news/rtx-40-series-community-qa/'
---

Graphics cards can render a game using different techniques. **Rasterization** is the traditional real-time method used by most game graphics. **Ray tracing** can simulate selected light paths to create effects such as reflections, shadows and global illumination. Games may combine both methods in one scene.

## What is rasterization?

Rasterization converts the 3D objects in a scene into pixels on the screen. The game applies materials, lighting and other effects through its rendering pipeline. It is an efficient foundation for real-time graphics, and many games use it for most of the image even when some ray-traced effects are enabled.

## What does ray tracing add?

Ray tracing follows rays through a scene to calculate how light interacts with surfaces. Games can use it for specific effects, such as more accurate reflections, shadows or indirect lighting. The visual change depends on how the developer uses the technique; “ray tracing on” does not mean every part of the scene is ray traced.

These calculations can add GPU work and reduce frame rates. The cost varies by game, effect, resolution and graphics card. Compare results from the exact game and settings rather than assuming one GPU brand or model always wins.

## What is upscaling?

Upscaling renders a game at a lower internal resolution and reconstructs an image for a higher-resolution output. This can reduce some of the GPU work, but image quality depends on the method, game integration, input resolution and settings. Compare screenshots or motion in the games you play, not just an FPS number.

## What is frame generation?

Frame generation creates additional displayed frames between conventionally rendered frames. This can make motion look smoother, but generated frames are not the same as frames rendered directly from new game input. Latency and image quality depend on the implementation, game and system. Read reviews that distinguish rendered FPS from displayed FPS.

Upscaling and frame generation are separate features. A game may support one, both or neither, and support can differ by GPU and software version.

## How should you compare these features?

1. Compare native rendering with ray tracing disabled as a baseline.
2. Test the ray-traced setting you actually plan to use.
3. Compare upscaling modes at the same output resolution and similar image-quality targets.
4. Treat frame-generation results separately and check latency as well as displayed FPS.
5. Check game support, GPU requirements and image quality for each feature.

There is no single winner across rasterization, ray tracing and upscaling. Choose the games and visual features you care about, then compare current tests with matching settings.

## Why ray tracing performance varies by card

Graphics cards include hardware designed to accelerate ray-tracing calculations, but the number and generation of those units do not translate directly into game FPS. The game engine, denoising method, scene complexity, resolution and surrounding shader work all affect the result. NVIDIA calls its dedicated units RT cores; AMD calls them ray accelerators.

A modest ray-traced shadow effect can have a small cost, while global illumination or path tracing can be dramatically more demanding. Review charts should identify the exact effect and preset. Compare the same game and scene rather than treating all “RT” results as one category.

## How to compare upscalers fairly

Match the output resolution and a similar image-quality target, then inspect moving scenes for fine detail, ghosting, shimmering and reconstruction artefacts. A vendor’s “Quality” label is not a guarantee that two methods look identical. Support also varies by title, GPU generation and software version.

Frame generation is best judged after the game already has a responsive base frame rate. It can raise the displayed FPS counter, but it does not create the same input updates as rendering additional frames directly. Check input latency and frame pacing alongside the number shown by the overlay.

*Editorial draft for owner review. Feature names, compatibility and game support change; check current manufacturer and game documentation before publishing product advice.*
