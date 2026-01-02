interface SeedProduct {
  sku: string;
  name: string;
  price: number;
  stock: number;
  tags: string[];
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      sku: 'A1234',
      name: 'Mechanical RGB Keyboard',
      price: 89.99,
      stock: 25,
      tags: ['peripherals', 'gaming', 'keyboard'],
    },
    {
      sku: 'B-USB-001',
      name: 'Wireless Mouse',
      price: 29.5,
      stock: 40,
      tags: ['peripherals', 'mouse'],
    },
    {
      sku: 'CSSD-512G',
      name: '512GB SSD Drive',
      price: 74.99,
      stock: 18,
      tags: ['storage', 'ssd'],
    },
    {
      sku: 'D-RAM-16GB',
      name: '16GB DDR4 RAM Memory',
      price: 65,
      stock: 30,
      tags: ['hardware', 'ram'],
    },
    {
      sku: 'EMON-27FHD',
      name: '27" Full HD Monitor',
      price: 199.99,
      stock: 12,
      tags: ['monitor', 'display'],
    },
    {
      sku: 'FCPU-I5-12',
      name: 'Intel Core i5 Processor',
      price: 249,
      stock: 10,
      tags: ['cpu', 'hardware'],
    },
    {
      sku: 'G-GPU-RTX3',
      name: 'RTX 3060 Graphics Card',
      price: 399.99,
      stock: 5,
      tags: ['gpu', 'gaming', 'hardware'],
    },
    {
      sku: 'H-PSU-650W',
      name: '650W Power Supply',
      price: 79.99,
      stock: 20,
      tags: ['psu', 'hardware'],
    },
    {
      sku: 'I-CASE-ATX',
      name: 'ATX Computer Case',
      price: 59.99,
      stock: 15,
      tags: ['case', 'hardware'],
    },
    {
      sku: 'J-FAN-RGB1',
      name: 'RGB Cooling Fan',
      price: 14.99,
      stock: 50,
      tags: ['cooling', 'rgb'],
    },
    {
      sku: 'K-NVME-1TB',
      name: '1TB NVMe SSD',
      price: 129.99,
      stock: 22,
      tags: ['storage', 'nvme'],
    },
    {
      sku: 'L-WEB-1080',
      name: '1080p Webcam',
      price: 45,
      stock: 35,
      tags: ['camera', 'streaming'],
    },
    {
      sku: 'M-HEAD-GAM',
      name: 'Gaming Headset',
      price: 54.99,
      stock: 28,
      tags: ['audio', 'gaming'],
    },
    {
      sku: 'N-MIC-USB2',
      name: 'USB Microphone',
      price: 39.99,
      stock: 32,
      tags: ['audio', 'microphone'],
    },
    {
      sku: 'O-LAP-STAND',
      name: 'Laptop Stand',
      price: 24.99,
      stock: 45,
      tags: ['accessories', 'laptop'],
    },
    {
      sku: 'P-HUB-USB7',
      name: '7-Port USB Hub',
      price: 19.99,
      stock: 60,
      tags: ['usb', 'accessories'],
    },
    {
      sku: 'Q-CABLE-HD',
      name: 'HDMI 2.0 Cable',
      price: 9.99,
      stock: 100,
      tags: ['cables', 'video'],
    },
    {
      sku: 'R-KPAD-GEL',
      name: 'Gel Wrist Rest Pad',
      price: 12.5,
      stock: 55,
      tags: ['accessories', 'ergonomic'],
    },
    {
      sku: 'S-SPEAK-BT',
      name: 'Bluetooth Speakers',
      price: 34.99,
      stock: 26,
      tags: ['audio', 'bluetooth'],
    },
    {
      sku: 'T-ROUT-AX300',
      name: 'Wi-Fi 6 Router',
      price: 89,
      stock: 14,
      tags: ['networking', 'wifi'],
    },
  ],
};
