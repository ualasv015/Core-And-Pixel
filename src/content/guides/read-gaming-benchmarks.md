---
title: 'How to Read CPU and GPU Gaming Benchmarks'
description: 'Learn how to compare gaming benchmark results by test conditions, average FPS, low-percentile performance, frame times and rendering features.'
summary: 'A benchmark result is meaningful only when you know the game, scene, settings, resolution, test system and measurement method. Compare average FPS and frame consistency, and separate different rendering features.'
path: '/benchmarks/read-gaming-benchmarks/'
section: 'benchmarks'
status: 'review'
sources:
  - label: 'NVIDIA FrameView user guide: metrics and benchmark reports'
    url: 'https://images.nvidia.com/content/geforce/technologies/frameview/frameview-1-7-user-guide-web-version.pdf'
  - label: 'NVIDIA FrameView: performance and power benchmarking metrics'
    url: 'https://www.nvidia.com/en-us/geforce/news/nvidia-frameview-power-and-performance-benchmarking-app-download/'
  - label: 'AMD FSR technologies: upscaling and frame generation features'
    url: 'https://www.amd.com/en/products/graphics/technologies/fidelityfx/super-resolution.html'
---

A gaming benchmark is a measurement of a particular system running a particular test. It does not predict every game or every PC. Before you compare two CPU or GPU results, check what was tested and how the frames were measured.

## Check the test conditions first

Look for these details beside the chart:

- Game, version, scene or built-in benchmark.
- Resolution and graphics preset.
- Ray tracing, upscaling, frame generation or other features enabled.
- CPU, GPU, memory, motherboard and driver version.
- Whether the test used a repeatable run, a built-in tool or recorded gameplay.
- Measurement tool, run length and method for calculating averages or lows.

If these conditions differ, the results may not be directly comparable. A GPU test at one resolution does not automatically establish its ranking at another. A CPU comparison with a different graphics card or memory setup may also change the result.

## What does average FPS tell you?

Average frames per second (**FPS**) gives a broad measure of how many frames were produced over the test. It is useful for a simple comparison, but it can hide short slowdowns. Two systems with similar averages may feel different if one delivers frames more consistently.

## What are 1% lows and frame times?

Low-percentile FPS metrics summarise slower frames within a run. The exact calculation can vary by tool, so check the review's definition. Frame time measures how long each frame takes to render; sudden spikes can correspond to visible stutter. These measures add context to the average rather than replacing it.

Do not compare a 1% low from one tool with a differently defined “minimum FPS” from another. Minimums can be heavily affected by a single event, loading pause or background task.

## Separate rendering features

Ray tracing changes the rendering workload. Upscaling reconstructs an output image from a lower-resolution render, while frame generation creates additional displayed frames between rendered ones. These features can change image quality, latency and the way frame rate is counted.

When comparing cards, read the settings carefully. Keep native rendering tests separate from upscaling or frame-generation results unless the purpose is specifically to compare those features. A chart should say whether the FPS number counts rendered frames, generated frames or both.

## A fair way to compare results

1. Choose the games and settings that match your use.
2. Compare results from the same review or a consistent test method.
3. Check the resolution, graphics preset and feature settings.
4. Read averages together with lows or frame-time data.
5. Look for repeated results across games rather than relying on one title.
6. Check publication date and hardware drivers; updates can change performance.

A ranking is only as useful as its test method. Read the conditions next to the score, and treat small differences cautiously when test variation or measurement methods could explain them.

## Read CPU and GPU tests differently

CPU reviews often use a very fast graphics card and lower resolution so the GPU does not cap the frame rate. This makes differences between processors easier to see, but it can overstate the gap you would notice with a midrange GPU at 1440p. Look for both a CPU-focused test and results closer to your own graphics card and resolution.

GPU reviews should keep the processor and test scene consistent while varying the graphics card. A review may test native resolution, ray tracing, upscaling and frame generation in separate sections. Do not combine those into one score unless the method explains how each feature is weighted.

## Work out whether a performance gap matters

To calculate a relative FPS difference, use:

**Difference (%) = (higher result − lower result) ÷ lower result × 100**

If one card averages 100 FPS and another 110 FPS in the same test, the second result is 10% higher. That does not mean every game will be 10% faster, and it may not be visible if both cards already exceed your monitor’s refresh target. Check low-percentile FPS and frame times as well, because consistency can matter more than a small average lead.

When a chart shows a tiny gap, read the review’s run-to-run variation and test count. A result within a few percent may be indistinguishable in one title, while a repeated gap across a large, well-described suite can be more meaningful.

## Treat vendor claims as scoped results

Manufacturer performance charts can be useful when they name the test system, apps, settings and date. Read the fine print: the selected games, memory speed, power profile and feature settings may favour a particular product. Use independent reviews with disclosed test conditions to see whether a claim holds across a broader workload.

*Editorial draft for owner review. Rankings will list sources, test conditions and dates beside results; do not combine unlike scores into one unexplained number.*
