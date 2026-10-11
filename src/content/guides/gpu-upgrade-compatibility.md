---
title: 'GPU Upgrade Compatibility Checklist'
description: 'Check graphics-card size, motherboard slot, power supply, connectors, monitor outputs and cooling before upgrading a desktop GPU.'
summary: 'Before buying a graphics card, verify the exact card fits the case, works with the motherboard slot, has the required PSU capacity and cables, and provides the display outputs you need.'
path: '/gpus/gpu-upgrade-compatibility/'
section: 'gpus'
status: 'review'
sources:
  - label: 'NVIDIA GeForce graphics-card specifications and comparison'
    url: 'https://www.nvidia.com/en-us/geforce/graphics-cards/compare/'
  - label: 'AMD Partner Graphics Card Specifications'
    url: 'https://www.amd.com/en/partner/about-partners/graphics-card-specifications.html'
  - label: 'PCI-SIG: PCIe 4.0 device compatibility'
    url: 'https://pcisig.com/faq?field_category_value%5B%5D=pci_express_4.0&keys=compatible'
---

A graphics card can fit the motherboard slot and still be too large for the case or incompatible with the power supply. Use this checklist before ordering an upgrade, and verify each item against the exact card, case, motherboard and PSU model.

## 1. Measure case clearance

Check the card's length, height and thickness in the manufacturer's specifications. Compare those measurements with the case's GPU clearance, accounting for front fans, radiators, drive cages and power cables. A large card may cover neighbouring expansion slots or leave too little room for airflow.

If a support bracket is recommended, confirm that the case can hold it. Keep the card's fans and heatsink unobstructed after installation.

## 2. Check the motherboard slot

Most desktop graphics cards connect to a PCIe x16-length slot. Read the motherboard manual to confirm which slot is connected to the CPU, its electrical lane count and whether another installed device affects it. PCIe has backward compatibility between generations, but the exact platform and device specifications still matter.

Also check the card's physical thickness so it does not block connectors or cards you still need.

## 3. Confirm the PSU and power cables

Look up the exact card's power draw, recommended system power and connector requirements. Check the PSU label and manual to confirm it can supply the build's requirements and has the right cables. A similarly named graphics card from another board partner may use different power connectors or a different recommended supply.

Use the cables specified by the PSU and graphics-card makers. Do not reuse modular cables from another PSU unless the PSU manufacturer confirms they are compatible. Make sure all connectors are fully seated and route cables without putting pressure on the plug.

Some newer cards use a compact high-power connector; others use one or more conventional PCIe 8-pin plugs. Follow the exact card and PSU manuals for the required cable and any supplied adapter. If an adapter is included, use only the specified number of separate PSU cables and follow the manufacturer’s seating and bend-clearance instructions. Never force a plug or leave it partly inserted.

## 4. Check the display and other parts

Confirm that the card has an output compatible with your monitor and supports the resolution and refresh rate you intend to use. Check the monitor cable type and the port's specification; a plug fitting does not guarantee every display mode is supported.

Make sure your case has adequate airflow and that the card's cooling design suits the system. Check whether your CPU and memory can support the games and applications you plan to run, but use workload-specific tests rather than a generic bottleneck calculator.

## 5. Check firmware and installation space

For a very old PC, check the computer or motherboard maker’s support notes for firmware updates and graphics-card compatibility. A modern card usually uses a standard PCIe slot, but a prebuilt system may have unusual firmware, a proprietary PSU or limited case clearance.

Measure the card with its power cable attached, not only the bare circuit board. Leave room for the side panel to close without pressing on the connector. Confirm that the card’s fans have clear intake space and that it will not block a needed M.2 heatsink, SATA port or expansion slot.

If you are changing GPU vendors, plan to install the correct driver for the new card and check the operating-system and application requirements. A monitor connected to the motherboard may continue to use the integrated GPU rather than the new card; connect it to the graphics card when you want the discrete GPU to drive the display.

## Before you buy

1. Record the exact GPU model, dimensions and connector type.
2. Measure the case with fans, radiator, side panel and power cable in their final positions.
3. Check the motherboard manual for slot location, width and lane configuration.
4. Verify PSU capacity, age, cables and every required connector.
5. Confirm monitor outputs, case airflow, firmware support and the rest of the build.
6. Compare the total upgrade cost, including a PSU or case change if needed.

Compatibility depends on the exact card variant and PC. Use manufacturer specifications for the final check rather than assuming that all cards with the same GPU name are the same size or power requirement.

*Editorial draft for owner review. Confirm exact dimensions, PSU recommendations and connectors for the retail card before adding model-specific advice.*
