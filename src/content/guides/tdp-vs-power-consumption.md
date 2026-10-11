---
title: 'CPU TDP vs. Actual Power Consumption'
description: 'Understand what CPU TDP and manufacturer power ratings describe, why measured power changes by workload, and how to plan cooling and a power supply.'
summary: 'TDP is a thermal design rating, not a promise that the CPU always draws that number of watts. Actual power depends on the processor, workload, firmware, limits and measurement point.'
path: '/cpus/tdp-vs-power-consumption/'
section: 'cpus'
status: 'review'
sources:
  - label: 'Intel Product Specifications: Processor Base Power and Maximum Turbo Power'
    url: 'https://www.intel.com/content/www/us/en/products/compare.html'
  - label: 'AMD Ryzen Master user guide: CPU power and PPT telemetry'
    url: 'https://docs.amd.com/r/en-US/68886-ryzen-master-user-guide/Gauges'
  - label: 'AMD Ryzen desktop processor specifications'
    url: 'https://www.amd.com/en/products/specifications/processors.html'
---

CPU listings often show a thermal design power (**TDP**) or another manufacturer power rating. It is useful for understanding a processor's design and planning a system, but it is not the same as a constant reading from a wall meter.

## What does TDP describe?

TDP is a manufacturer-defined design rating related to the processor's thermal requirements under specified conditions. The exact definition and naming vary by product family. Intel, for example, publishes Processor Base Power and Maximum Turbo Power for many processors. AMD lists Default TDP for Ryzen models and reports other power limits in tools such as Ryzen Master.

Because the labels and methods differ, avoid comparing two brands' TDP figures as if they were measured under one universal test. Use the processor's own documentation to understand the rating and cooling guidance.

## Why can actual power be different?

A processor changes frequency and power use based on the work it is doing, temperature, motherboard settings, firmware limits and cooling. A light desktop task can use much less power than a sustained render. A motherboard may also apply settings that affect boost behaviour, so two systems with the same CPU can report different results.

The measurement point matters too. CPU package or socket telemetry describes part of the system. A wall-power meter includes the motherboard, graphics card, memory, storage, fans and power-supply conversion losses. Those readings answer different questions.

## How should you use the rating?

- **For cooling:** follow the CPU maker's and cooler maker's guidance for the exact model and intended settings.
- **For PSU planning:** include the CPU, graphics card and other components; do not choose a PSU using CPU TDP alone.
- **For efficiency comparisons:** measure the same workload under the same system settings and state where power was measured.
- **For product comparisons:** use each manufacturer's definitions and independent reviews rather than treating unlike labels as equivalent.

## What should you remember?

TDP is not a live power reading, a universal maximum, or a complete PSU recommendation. It is one part of the specification. For a build, check the processor's power documentation, cooling recommendation and motherboard settings, then size the rest of the system for the exact components and workload.

*Editorial draft for owner review. Verify the definitions on the exact CPU's official product page; manufacturer terms and power limits can change by family and generation.*
