---
title: 'Integrated Graphics vs. a Dedicated GPU'
description: 'Understand the difference between graphics built into a processor and a separate graphics card, including memory, cost and upgrade options.'
summary: 'Integrated graphics are part of a processor and generally use system memory; a dedicated graphics card is a separate component with its own GPU and graphics memory. Which one you need depends on your apps, games and budget.'
path: '/gpus/integrated-vs-dedicated/'
section: 'gpus'
status: 'review'
sources:
  - label: 'Intel: Graphics memory on Windows'
    url: 'https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html'
  - label: 'Intel: Adding a dedicated graphics card to a system with integrated graphics'
    url: 'https://www.intel.com/content/www/us/en/support/articles/000097454/graphics.html'
  - label: 'AMD Ryzen desktop processors and graphics specifications'
    url: 'https://www.amd.com/en/products/processors/desktops/ryzen.html'
---

A PC needs graphics hardware to send an image to a display. That hardware may be built into the processor or provided by a separate graphics card. The right option depends on what you do with the computer; one type is not automatically necessary for every PC.

## What are integrated graphics?

Integrated graphics (often shortened to **iGPU**) are included in a processor or system-on-chip. They do not use a separate graphics card. On many PCs, integrated graphics use system memory rather than a separate pool of graphics memory. The amount available and the way it is reported can depend on the system and its settings.

An iGPU can be a sensible choice for web browsing, office work, video playback and other everyday tasks. Some integrated solutions can also run games, but performance varies widely by processor, memory configuration, game and settings. Check tests for the exact CPU and games you plan to use.

Do not assume every processor has graphics built in. Some desktop CPU models require a graphics card to produce a display image. Check the exact model's specifications before you buy, especially if you are building a PC without a separate GPU.

## What is a dedicated GPU?

A dedicated GPU is a separate graphics processor, most often sold on a graphics card for desktop PCs. It has its own graphics memory, commonly called **VRAM**, and its own cooling and power requirements. A separate card can provide much more graphics performance and memory bandwidth than an integrated solution, but the difference depends on the models being compared.

A graphics card adds to the build cost and needs to fit the case, connect to the motherboard and receive enough power. It also produces heat and may add fan noise. Before choosing one, check its dimensions, power connectors, recommended power supply and the performance it delivers in your target games or applications.

## Can a PC have both?

Many desktop computers with an iGPU can also use a dedicated graphics card. The graphics card normally handles display output when installed. Some systems can keep the integrated graphics enabled at the same time, but the available options depend on the motherboard, processor, drivers and BIOS settings. Check the specific system instructions if you need both for a particular workflow.

On most laptops, the GPU is built into the system and cannot be replaced like a desktop graphics card. Some laptops include both integrated and dedicated graphics from the factory, with the system switching between them based on power and workload.

## Where should you connect the monitor?

On a desktop with a separate graphics card, connect the display cable to the graphics card’s ports. The motherboard’s HDMI or DisplayPort output may connect to the processor’s integrated graphics and can show no signal if the CPU does not include an iGPU or the board firmware has disabled it.

If you remove a graphics card for troubleshooting, check the CPU specifications first. Many processors have basic integrated graphics that can provide display output; some models explicitly require a discrete graphics card. Integrated graphics can be a useful fallback for diagnosis, but they may not support the same game settings, display configuration or creative workloads as the separate card.

## What does shared system memory mean?

An iGPU usually shares the PC’s DDR memory with the CPU. The system may reserve some memory for graphics and let the GPU request more as needed. This is different from dedicated VRAM physically installed on a graphics card. Memory speed and channel configuration can strongly affect integrated graphics, so a single memory stick may perform differently from a matched dual-channel kit.

## Check media and display features too

For everyday use, compare supported video codecs, maximum display count and output resolution, not only 3D gaming results. A basic iGPU can be enough for desktop work and video playback even when it is not suitable for demanding games. Confirm support on the exact CPU and motherboard, since ports and features can vary by system.

## Which option should you choose?

- **Everyday desktop use:** integrated graphics may be enough if your processor includes them and your apps are not graphics-intensive.
- **Modern gaming or GPU-heavy creative work:** compare dedicated cards using the games or applications, resolution and settings you intend to use.
- **A gradual desktop build:** an iGPU can provide display output while you save for a separate card, if the chosen CPU includes graphics.
- **A laptop purchase:** check the exact model's GPU configuration; upgrades are limited compared with desktop PCs.

The simplest rule is to choose from the workload. Confirm that the processor actually has integrated graphics, then compare the performance and complete system cost of the available options.

*Editorial draft for owner review. Graphics performance and display features are model-specific; verify current tests and processor and motherboard specifications before adding product recommendations.*
