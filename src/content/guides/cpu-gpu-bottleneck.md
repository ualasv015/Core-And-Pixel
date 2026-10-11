---
title: 'CPU vs. GPU Bottlenecks Explained'
description: 'Understand what it means when a processor or graphics card limits a PC, why the limit changes by workload, and how to investigate it.'
summary: 'Every PC workload has a limiting part at a given moment. A CPU or GPU bottleneck is not a permanent defect; it depends on the game, resolution, settings, frame-rate target and other system conditions.'
path: '/cpus/cpu-gpu-bottleneck/'
section: 'cpus'
status: 'review'
sources:
  - label: 'NVIDIA FrameView user guide: frame rates, percentiles and system metrics'
    url: 'https://images.nvidia.com/content/geforce/technologies/frameview/frameview-1-7-user-guide-web-version.pdf'
  - label: 'NVIDIA FrameView: performance and power benchmarking metrics'
    url: 'https://www.nvidia.com/en-us/geforce/news/nvidia-frameview-power-and-performance-benchmarking-app-download/'
  - label: 'Intel Product Specifications and comparison tool'
    url: 'https://www.intel.com/content/www/us/en/products/compare.html'
  - label: 'Microsoft Direct3D 12: GPU video-memory budgets'
    url: 'https://learn.microsoft.com/en-us/windows/win32/api/dxgi1_4/ns-dxgi1_4-dxgi_query_video_memory_info'
---

A **bottleneck** is the part of a system that limits performance for a particular task at a particular time. In a game, the CPU may limit frame delivery in one scene while the GPU limits rendering in another. The term does not mean that a component is faulty or that every PC should show the same CPU and GPU usage.

## What does a GPU limit look like?

When the graphics card is doing most of the work for each frame, increasing resolution or demanding visual settings may reduce the frame rate. A more powerful GPU can help if it is the part holding back your target performance. The result still depends on the game and its graphics features.

## What does a CPU limit look like?

Some games rely heavily on the CPU to prepare work, simulate the world or manage many active objects. In those situations, a faster CPU may improve frame rates or consistency, while lowering resolution may make little difference. Total CPU utilisation can be misleading: one heavily used thread can limit a game even when the overall CPU percentage looks moderate.

## The limit changes with your settings

Resolution, graphics quality, frame-rate caps, background apps, game scenes and drivers can shift which component is limiting performance. A high-end GPU paired with a mainstream CPU may make sense at one resolution and show different trade-offs at another. That is why generic online “bottleneck calculators” cannot reliably predict the performance of every PC.

## How to investigate a slowdown

1. Reproduce the same scene or benchmark several times, with background apps controlled.
2. Record average frame rate and low-percentile or frame-time results, not just one peak number.
3. Watch CPU and GPU behaviour during the test, including per-core CPU activity where available.
4. Change one setting at a time. If lowering resolution or graphics quality improves performance substantially, the GPU may have been the limit in that scenario.
5. Compare results with a trustworthy review using a similar CPU, GPU, game version and settings.

Monitoring tools report different metrics and may use different definitions for rendered frames, displayed frames, utilisation and power. Frame-rate consistency matters as well as the average: a high average can still feel uneven if frame times vary sharply.

## Should you upgrade the CPU or GPU?

Upgrade the component that limits the games and settings you care about, not the one with the larger utilisation number in a single moment. Check whether the proposed replacement fits the motherboard, case and power supply, and compare the price of the complete upgrade. If your target is already met and the game feels smooth, a low utilisation percentage is not itself a reason to replace hardware.

Think of a bottleneck as a workload-specific clue. Test the PC you have, change settings one at a time and use results from comparable conditions before spending money.

## A worked example: the same PC can have different limits

Imagine a PC with a capable graphics card and a mainstream processor. In a competitive game at 1080p with low settings, the GPU may finish rendering each frame quickly and wait for the CPU to prepare the next one. The CPU becomes more visible when the target is 200–300 FPS. Raise the resolution or enable a demanding visual effect, and the GPU may take longer per frame, shifting the limit away from the processor.

A different game on the same PC can behave differently. A large strategy simulation may spend more time updating units and game logic on the CPU. A cinematic game with high-resolution textures and effects may be limited by the GPU. There is no permanent CPU-to-GPU ratio that makes every game balanced.

## Why total utilisation can mislead

Overall CPU utilisation averages activity across cores. If one important game thread is saturated while other cores are idle, the total may look low even though the CPU is limiting frame delivery. GPU utilisation is also a clue rather than a diagnosis: a frame cap, menu screen or loading pause can lower it without a hardware problem.

Record a repeatable gameplay scene, disable overlays or background tasks that are not part of the test, and compare average FPS with 1% lows or frame-time graphs. Then change one setting at a time. If lowering resolution produces almost no extra frames, the limit may be elsewhere; if it produces a large gain, the GPU was more likely to be the constraint in that scene.

## Do bottleneck calculators help?

Generic calculators cannot reliably predict a PC’s performance from two component names. They usually omit the game, resolution, quality preset, frame cap, memory configuration and power settings. Use them only as rough prompts for questions to investigate. A real game test on your own PC or a well-described review is more useful.

*Editorial draft for owner review. Monitoring values depend on the game and measurement tool; verify the test method before publishing performance claims.*
