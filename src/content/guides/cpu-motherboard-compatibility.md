---
title: 'CPU and Motherboard Compatibility: Socket, Chipset and BIOS'
description: 'Check whether a processor will work with a motherboard by verifying the socket, chipset, board support list, BIOS version and memory type.'
summary: 'A matching socket is only the first check. Confirm that the exact motherboard model and revision lists the CPU, supports it with the installed BIOS, and accepts the memory type you plan to use.'
path: '/pc-building/cpu-motherboard-compatibility/'
section: 'pc-building'
status: 'review'
sources:
  - label: 'Intel: How to find compatible chipsets for a processor'
    url: 'https://www.intel.com/content/www/us/en/support/articles/000092715/processors.html'
  - label: 'Intel: Processor desktop compatibility and BIOS updates'
    url: 'https://www.intel.com/content/www/us/en/support/articles/000097804/processors.html'
  - label: 'AMD Socket AM4 chipset and processor compatibility'
    url: 'https://www.amd.com/en/products/processors/chipsets/am4.html'
  - label: 'AMD Socket AM5 chipset and processor compatibility'
    url: 'https://www.amd.com/en/products/processors/chipsets/am5.html'
---

Before buying a CPU or motherboard, check the exact parts together. A processor that looks similar to one already installed may still need a different socket, chipset or BIOS version. Compatibility is a checklist, not a guess based on the brand name.

## 1. Match the CPU socket

The socket is the physical and electrical connection between a desktop processor and its motherboard. A CPU must use a socket that the board is designed to support. Sockets from different platforms are not interchangeable, even when the processor names are similar.

Check the CPU specifications and the motherboard's product page. If you are upgrading an existing PC, identify the exact board model and revision printed on the board or shown by the system's manufacturer. Prebuilt desktops can use custom boards, so the PC maker's support page may be more useful than a generic chipset list.

## 2. Check the motherboard's CPU support list

The board maker's **CPU support list** is the key reference for a specific combination. Search for the exact processor model and confirm it is listed for your board revision. A chipset family can support several processors, but the exact board design and firmware still matter.

Do not treat the socket as a complete compatibility guarantee. Manufacturers publish compatibility tables because support can vary across board models and CPU generations. If the processor is not listed, contact the board or system manufacturer before buying.

## 3. Confirm the required BIOS version

The BIOS (also called UEFI firmware) starts the hardware and prepares it for the operating system. A motherboard may physically fit a CPU but have an older BIOS that does not recognise it. The support list usually identifies the minimum BIOS version required for each processor.

If an update is needed, read the board maker's instructions before swapping CPUs. Some boards can update without a supported CPU installed; others may require a processor that the current BIOS already recognises. Do not assume the update method is the same across board models.

## 4. Verify memory and other parts

Check the memory generation and supported configuration for both the CPU and motherboard. DDR4 and DDR5 are physically different and cannot be swapped between incompatible board slots. Also verify the cooler mounting kit, case clearance and power connections if you are changing platforms.

These checks apply to desktop upgrades. Laptop processors are often soldered to the motherboard, and many prebuilt systems use parts that are not intended for a CPU upgrade. Look up the service manual for the exact computer before planning one.

## 5. Check board power delivery and features

A board may list a processor as supported but still differ in how well it handles sustained high power. Read the motherboard manual and credible technical reviews for information about its voltage-regulator design, cooling and power limits, especially if you plan to use a high-end CPU for long renders. A larger chipset number by itself does not guarantee better power delivery.

Also compare the features you actually need: M.2 slots, USB ports, Wi-Fi, expansion slots, display outputs and fan headers. A cheaper compatible board can be the smarter choice if it has the right ports and can run the CPU at its intended settings.

## 6. Check memory configuration and the QVL

The CPU and board specifications state the supported memory generation and official speed limits. Faster memory profiles such as XMP or EXPO are memory overclocking profiles; actual stability depends on the CPU’s memory controller, board firmware and the exact kit.

The board’s qualified vendor list (QVL) is a list of memory kits the maker has tested. A kit missing from the list is not automatically incompatible, but the QVL is helpful when you are troubleshooting instability. For a new build, a matched two-module kit is usually simpler to configure than mixing separate memory kits.

## A quick compatibility checklist

1. Record the full CPU model and the exact motherboard model and revision.
2. Confirm the socket matches on both product pages.
3. Find the CPU on the board maker's support list.
4. Check the minimum BIOS version and update method.
5. Confirm memory type and consult the memory QVL if you need help choosing a kit.
6. Check board power delivery, cooler support, case clearance and PSU requirements.
7. Recheck the support list immediately before purchase; firmware support can change.

If any one of these checks is unclear, wait before ordering. The board manufacturer's support page or system vendor can confirm whether the parts work together.

*Editorial draft for owner review. Compatibility is specific to the exact board model, revision and BIOS; verify the manufacturer's current support page before publishing a parts recommendation.*
