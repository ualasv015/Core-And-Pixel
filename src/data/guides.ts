export type GuideSection = 'cpus' | 'gpus' | 'pc-building' | 'benchmarks';

export interface PlannedGuide {
  id: string;
  title: string;
  path: string;
  section: GuideSection;
  intent: string;
}

export const guidePlan: PlannedGuide[] = [
  { id: 'G01', title: 'Intel vs. AMD CPUs: Which Platform Fits Your Workload?', path: '/cpus/intel-vs-amd/', section: 'cpus', intent: 'Compare platforms by workload and total cost.' },
  { id: 'G02', title: 'CPU Cores vs. Threads: What Each One Does', path: '/cpus/cores-vs-threads/', section: 'cpus', intent: 'Understand the difference between physical cores and software threads.' },
  { id: 'G03', title: 'Desktop CPU Rankings: Gaming and Productivity', path: '/cpus/performance-rankings/', section: 'cpus', intent: 'Compare results by workload and test conditions.' },
  { id: 'G04', title: 'GPU Rankings by Resolution, Raster and Ray Tracing', path: '/gpus/performance-rankings/', section: 'gpus', intent: 'Compare graphics performance without mixing unlike tests.' },
  { id: 'G05', title: 'How to Choose a Gaming CPU for Your Budget', path: '/cpus/gaming-cpu-by-budget/', section: 'cpus', intent: 'Choose around budget, graphics card, platform and local prices.' },
  { id: 'G06', title: 'How to Choose a GPU for 1080p, 1440p or 4K', path: '/gpus/choose-by-resolution/', section: 'gpus', intent: 'Match a graphics card to monitor, games and budget.' },
  { id: 'G07', title: 'How Much VRAM Do You Need for Gaming?', path: '/gpus/how-much-vram/', section: 'gpus', intent: 'Understand graphics memory needs by game and settings.' },
  { id: 'G08', title: 'CPU Clock Speed, Cores and Cache Explained', path: '/cpus/clock-speed-cores-cache/', section: 'cpus', intent: 'Learn what common processor specifications mean.' },
  { id: 'G09', title: 'Integrated Graphics vs. a Dedicated GPU', path: '/gpus/integrated-vs-dedicated/', section: 'gpus', intent: 'Decide whether a separate graphics card is needed.' },
  { id: 'G10', title: 'CPU vs. GPU Bottlenecks Explained', path: '/cpus/cpu-gpu-bottleneck/', section: 'cpus', intent: 'Interpret a performance limit in a specific PC and workload.' },
  { id: 'G11', title: 'CPU and Motherboard Compatibility: Socket, Chipset and BIOS', path: '/pc-building/cpu-motherboard-compatibility/', section: 'pc-building', intent: 'Check exact CPU support, board revision and BIOS requirements.' },
  { id: 'G12', title: 'PCIe Generations and Lanes Explained', path: '/pc-building/pcie-generations-lanes/', section: 'pc-building', intent: 'Understand PCIe versions, lanes and practical compatibility.' },
  { id: 'G13', title: 'How to Choose a Power Supply for a Gaming PC', path: '/pc-building/choose-a-power-supply/', section: 'pc-building', intent: 'Choose a PSU from component needs and connector requirements.' },
  { id: 'G14', title: 'CPU TDP vs. Actual Power Consumption', path: '/cpus/tdp-vs-power-consumption/', section: 'cpus', intent: 'Separate manufacturer power ratings from measured consumption.' },
  { id: 'G15', title: 'How to Read CPU and GPU Gaming Benchmarks', path: '/benchmarks/read-gaming-benchmarks/', section: 'benchmarks', intent: 'Interpret averages, lows, frame times and test conditions.' },
  { id: 'G16', title: 'GPU Upgrade Compatibility Checklist', path: '/gpus/gpu-upgrade-compatibility/', section: 'gpus', intent: 'Check case fit, power, connectors and system support.' },
  { id: 'G17', title: 'Rasterization vs. Ray Tracing and Upscaling', path: '/gpus/ray-tracing-vs-rasterization/', section: 'gpus', intent: 'Compare rendering methods, image quality and performance trade-offs.' },
  { id: 'G18', title: 'Can You Upgrade a CPU Without Changing the Motherboard?', path: '/cpus/cpu-upgrade-without-changing-motherboard/', section: 'cpus', intent: 'Verify support and weigh an upgrade against a platform change.' },
];

export const sectionLabels: Record<GuideSection, string> = {
  cpus: 'CPUs',
  gpus: 'GPUs',
  'pc-building': 'PC Building',
  benchmarks: 'Benchmarks',
};

export function guidesForSection(section: GuideSection) {
  return guidePlan.filter((guide) => guide.section === section);
}
