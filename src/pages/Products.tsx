import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
    Cpu, MapPin, Droplets, Shield, Ticket,
    LockKeyhole, Wifi, Globe, Puzzle, Search
} from 'lucide-react';

// --- Placeholder Images (Used for products without specific image URLs in your data) ---
const placeholderImages = [
    'https://placehold.co/400x300/6A0DAD/FFFFFF?text=Product+Image+1',
    'https://placehold.co/400x300/8A2BE2/FFFFFF?text=Product+Image+2',
    'https://placehold.co/400x300/4B0082/FFFFFF?text=Product+Image+3',
    'https://placehold.co/400x300/9932CC/FFFFFF?text=Product+Image+4',
    'https://placehold.co/400x300/BA55D3/FFFFFF?text=Product+Image+5',
    'https://placehold.co/400x300/DA70D6/FFFFFF?text=Product+Image+6',
    'https://placehold.co/400x300/DDA0DD/FFFFFF?text=Product+Image+7',
    'https://placehold.co/400x300/EE82EE/FFFFFF?text=Product+Image+8',
    'https://placehold.co/400x300/FF00FF/FFFFFF?text=Product+Image+9',
    'https://placehold.co/400x300/BF00FF/FFFFFF?text=Product+Image+10',
];
let imageIndex = 0; // To cycle through placeholder images for demonstration

// Sidebar Category List - Using Lucide React icons
const productCategories = [
    { id: 'all', label: 'All Products', icon: Globe },
    { id: 'car-gps-tracker', label: 'Car GPS Tracker', icon: MapPin },
    { id: 'bike-gps-tracker', label: 'Bike GPS Tracker', icon: MapPin },
    { id: 'bus-tracking-system', label: 'Bus Tracking System', icon: MapPin },
    { id: 'truck-tracking-system', label: 'Truck Tracking System', icon: MapPin },
    { id: 'video-telematics', label: 'Video Telematics', icon: Shield },
    { id: 'asset-tracking', label: 'Asset Tracking', icon: Ticket },
    { id: 'fuel-monitoring', label: 'Fuel Monitoring', icon: Droplets },
    { id: 'e-lock-with-gps-tracker', label: 'E-Lock with GPS Tracker', icon: LockKeyhole },
    { id: 'wifi-based-tracking', label: 'Wifi Based Tracking', icon: Wifi },
    { id: 'electric-vehicle', label: 'Electric Vehicle', icon: Cpu },
    { id: 'accessories', label: 'Accessories', icon: Puzzle },
];

// Helper to normalize category strings for filtering
const normalizeCategory = (categoryString: string) => {
    return categoryString.replace('Category:', '').trim().toLowerCase().replace(/\s+/g, '-');
};

// --- Products Data (Your provided data) ---
const products = [
    { title: 'ID Card with GPS Tracker', category: 'Category:Asset Tracking', description: 'A compact and reliable ID card with built-in GPS for tracking assets and personnel.', imageUrl: 'https://pictortelematics.com/images/1733915152_PT-ID02%20%281%29.png' },
    { title: 'GPS E lock for Truck containers with solar charging -PL1800', category: 'Category:Truck Tracking System', description: 'Advanced GPS-enabled E-lock for secure truck container tracking, powered by solar energy.', imageUrl: 'https://pictortelematics.com/images/1732353659_Pl%20800.png' },
    { title: '4G GPS Tracking Device G18', category: 'Category:Truck Tracking System', description: 'High-precision 4G GPS tracking device for real-time monitoring of trucks and fleets.', imageUrl: 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp' },
    { title: '4G GPS Tracking Device G18 (Bus)', category: 'Category:Bus Tracking System', description: 'Reliable 4G GPS tracker for efficient bus fleet management and passenger safety.', imageUrl: 'https://pictortelematics.com/images/1732280830_1727252776_G18%20pic.webp' },
    { title: '4G GPS Tracking Device G18 (Bike)', category: 'Category:Bike GPS Tracker', description: 'Compact 4G GPS device for motorcycles and bikes, offering enhanced security and tracking.', imageUrl: 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp' },
    { title: '4G GPS Tracking Device G18 (Car)', category: 'Category:Car GPS Tracker', description: 'Versatile 4G GPS tracker for cars, providing accurate location and driving data.', imageUrl: 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp' },
    { title: '4G dual lens AI Dashcam', category: 'Category:Video Telematics', description: 'Dual-lens AI dashcam with 4G connectivity for comprehensive video telematics and event recording.', imageUrl: 'https://pictortelematics.com/images/1731073551_T98%20AI%20Dual%20CAm%20%281%29.png' },
    { title: 'Car dashcam with 2 external camera', category: 'Category:Video Telematics', description: 'Advanced car dashcam system with two external cameras for complete vehicle surveillance.', imageUrl: 'https://pictortelematics.com/images/1731063092_DAshcam%20%281%2B2%29%20T98%20%282%29.png' },
    { title: 'HD AI Dashcam with ADAS features: T98 (1+3)', category: 'Category:Video Telematics', description: 'High-definition AI dashcam with advanced ADAS features for improved road safety.', imageUrl: 'https://pictortelematics.com/images/1730986566_T98%20%281%2B3%29%20AI%20%282%29.png' },
    { title: '4G Dual Dashcam- T98', category: 'Category:Video Telematics', description: 'A robust 4G dual dashcam (T98) for continuous vehicle monitoring and incident capture.', imageUrl: 'https://pictortelematics.com/images/1730974258_image%201.png' },
    { title: 'Dashcam 2 Cam with ADAS and DMS T98', category: 'Category:Video Telematics', description: 'Dashcam T98 with two cameras, integrating ADAS and DMS for driver assistance and monitoring.', imageUrl: 'https://pictortelematics.com/images/1730800822_1730797950_T98%20AI%20%28ADAS%20%2B%20DMS%29.png' },
    { title: 'Dashcam T98 with GPS Tracker', category: 'Category:Video Telematics', description: 'Dashcam T98 featuring an integrated GPS tracker for location-aware video recording.', imageUrl: 'https://pictortelematics.com/images/1730799209_T98%20Without%20ADAS%20%281%29.jpg' },
    { title: 'E-Lock with Bluetooth PL400', category: 'Category:E-Lock with GPS Tracker', description: 'Bluetooth-enabled E-lock (PL400) for secure and convenient tracking of truck cargo.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Smart E Lock for Container Tracking T98E', category: 'Category:E-Lock with GPS Tracker', description: 'Intelligent E-lock (T98E) designed for real-time tracking and security of shipping containers.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: '4G GPS Tracker with Bluetooth PS 10C (Truck)', category: 'Category:Truck Tracking System', description: 'Versatile 4G GPS tracker with Bluetooth (PS 10C) for comprehensive truck fleet management.', imageUrl: 'https://pictortelematics.com/images/1727156282_ps10c2-pictortelematics.png' },
    { title: '4G GPS Tracker with Bluetooth PS 10C (Bus)', category: 'Category:Bus Tracking System', description: 'The PS 10C 4G GPS tracker with Bluetooth, ideal for bus tracking and operational efficiency.', imageUrl: 'https://pictortelematics.com/images/1727156282_ps10c2-pictortelematics.png' },
    { title: '4G GPS Tracker with Bluetooth PS 10C (Car)', category: 'Category:Car GPS Tracker', description: 'Bluetooth-enabled 4G GPS tracker (PS 10C) for advanced car tracking and security features.', imageUrl: 'https://pictortelematics.com/images/1727156282_ps10c2-pictortelematics.png' },
    { title: '4G GPS Tracker With Analog Input PS10 B (Truck)', category: 'Category:Truck Tracking System', description: '4G GPS tracker (PS10 B) with analog input for precise data collection in truck applications.', imageUrl: 'https://pictortelematics.com/images/1727252008_ps10b1.jpg' },
    { title: '4G GPS Tracker With Analog Input PS10 B (Bus)', category: 'Category:Bus Tracking System', description: 'PS10 B 4G GPS tracker with analog input, enhancing data monitoring for bus fleets.', imageUrl: 'https://pictortelematics.com/images/1727252008_ps10b1.jpg' },
    { title: '4G GPS Tracker With Analog Input PS10 B (Car)', category: 'Category:Car GPS Tracker', description: 'A 4G GPS tracker (PS10 B) with analog input, perfect for integrating various sensors in cars.', imageUrl: 'https://pictortelematics.com/images/1727252008_ps10b1.jpg' },
    { title: 'Truck GPS Tracker G17S', category: 'Category:Truck Tracking System', description: 'Robust G17S GPS tracker specifically designed for demanding truck tracking environments.', imageUrl: 'https://pictortelematics.com/images/1727250480_dc03cea0-57b6-4235-bf83-0a02fae19da8.jpeg' },
    { title: 'Vehicle GPS Tracker G17S (Bus)', category: 'Category:Bus Tracking System', description: 'The G17S vehicle GPS tracker, optimized for reliable tracking and management of bus fleets.', imageUrl: 'https://pictortelematics.com/images/1727250480_dc03cea0-57b6-4235-bf83-0a02fae19da8.jpeg' },
    { title: 'Vehicle GPS Tracker G17S (Car)', category: 'Category:Car GPS Tracker', description: 'A versatile G17S GPS tracker for cars, providing accurate location and driving data.', imageUrl: 'https://pictortelematics.com/images/1727250480_dc03cea0-57b6-4235-bf83-0a02fae19da8.jpeg' },
    { title: '2G Truck GPS Tracker PT 101B', category: 'Category:Truck Tracking System', description: 'Economical 2G GPS tracker (PT 101B) for basic and effective truck tracking solutions.', imageUrl: 'https://pictortelematics.com/images/1727285693_1d78b1ff-3ff2-4aaa-ab61-8a8ef3fcca8b.jpeg' },
    { title: '2G Car GPS Tracker PT 101B (Bus)', category: 'Category:Bus Tracking System', description: 'The PT 101B 2G GPS tracker, a cost-effective choice for bus tracking and fleet oversight.', imageUrl:'https://pictortelematics.com/images/1727285693_1d78b1ff-3ff2-4aaa-ab61-8a8ef3fcca8b.jpeg' },
    { title: '2G Car GPS Tracker PT 101B (Bike)', category: 'Category:Bike GPS Tracker', description: 'Compact and efficient 2G GPS tracker (PT 101B) suitable for bikes and motorcycles.', imageUrl: 'https://pictortelematics.com/images/1727285693_1d78b1ff-3ff2-4aaa-ab61-8a8ef3fcca8b.jpeg' },
    { title: '2G Car GPS Tracker PT 101B (Car)', category: 'Category:Car GPS Tracker', description: 'An affordable 2G GPS tracker (PT 101B) for essential car tracking and security.', imageUrl: 'https://pictortelematics.com/images/1727285693_1d78b1ff-3ff2-4aaa-ab61-8a8ef3fcca8b.jpeg' },
    { title: 'GPS Tracker For Vehicles GS 900 (Truck)', category: 'Category:Truck Tracking System', description: 'The GS 900 GPS tracker, a robust solution for diverse vehicle tracking needs, including trucks.', imageUrl: 'https://pictortelematics.com/images/1727074797_GS%20900%20%282G%2B4G%29.jpeg' },
    { title: 'GPS Tracker For Vehicles GS 900 (Bus)', category: 'Category:Bus Tracking System', description: 'GS 900 GPS tracker, providing reliable tracking and management for bus fleets.', imageUrl: 'https://pictortelematics.com/images/1727074797_GS%20900%20%282G%2B4G%29.jpeg' },
    { title: 'GPS Tracker For Vehicles GS 900 (Bike)', category: 'Category:Bike GPS Tracker', description: 'A versatile GS 900 GPS tracker, suitable for bikes, offering security and location services.', imageUrl: 'https://pictortelematics.com/images/1727074797_GS%20900%20%282G%2B4G%29.jpeg' },
    { title: 'GPS Tracker For Vehicles GS 900 (Car)', category: 'Category:Car GPS Tracker', description: 'The GS 900 GPS tracker, an all-around solution for car tracking and vehicle monitoring.', imageUrl: 'https://pictortelematics.com/images/1727074797_GS%20900%20%282G%2B4G%29.jpeg' },
    { title: '4G Fleet Tracking Device PS10A (Truck)', category: 'Category:Truck Tracking System', description: 'Advanced 4G fleet tracking device (PS10A) for comprehensive truck fleet management.', imageUrl: 'https://pictortelematics.com/images/1717152801_PS10A%201%20Website.png' },
    { title: '4G Fleet Tracking Device PS10A (Bus)', category: 'Category:Bus Tracking System', description: 'The PS10A 4G fleet tracking device, ensuring efficient and real-time monitoring of buses.', imageUrl: 'https://pictortelematics.com/images/1717152801_PS10A%201%20Website.png' },
    { title: '4G Fleet Tracking Device PS10A (Car)', category: 'Category:Car GPS Tracker', description: 'A high-performance 4G fleet tracking device (PS10A) for enhanced car tracking and security.', imageUrl: 'https://pictortelematics.com/images/1717152801_PS10A%201%20Website.png' },
    { title: '4G Fleet Tracking Device PS10G', category: 'Category:Truck Tracking System', description: 'The PS10G 4G fleet tracking device, designed for robust and reliable truck tracking.', imageUrl: 'https://pictortelematics.com/images/1717067992_PS10G%201%20Website.jpg' },
    { title: 'BMS IoT device for EV CONNECT01', category: 'Category:Electric Vehicle', description: 'An IoT-enabled BMS device (CONNECT01) for advanced battery management in electric vehicles.', imageUrl: 'https://pictortelematics.com/images/1716982636_BMS%20Connect01%20website.png' },
    { title: 'Iot Vehicle Tracking System for EV CONNECT 01', category: 'Category:Electric Vehicle', description: 'IoT vehicle tracking system (CONNECT 01) specifically for electric vehicles, offering smart monitoring.', imageUrl: 'https://pictortelematics.com/images/1716980459_2G%20Connect%2001%2B%20Website.png' },
    { title: 'BMS iot for Electric vehicle CONNECT 02 Plus', category: 'Category:Electric Vehicle', description: 'The CONNECT 02 Plus BMS IoT device, providing comprehensive battery management for EVs.', imageUrl: 'https://pictortelematics.com/images/1716977814_4G%20CONNECT02%2B%20Website.png' },
    { title: 'Container E Lock Tracking System GL600', category: 'Category:E-Lock with GPS Tracker', description: 'The GL600 E-lock tracking system, securing and monitoring shipping containers on trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Magnetic Asset Tracker PT30', category: 'Category:Asset Tracking', description: 'A versatile magnetic asset tracker (PT30) for easy deployment and robust tracking of valuable assets.', imageUrl: 'https://pictortelematics.com/images/1716461146_1.png' },
    { title: 'Magnetic GPS Tracker PT08', category: 'Category:Asset Tracking', description: 'The PT08 magnetic GPS tracker, ideal for covert and flexible asset tracking applications.', imageUrl: 'https://pictortelematics.com/images/1716460108_PT08%201.png' },
    { title: 'Wireless Asset Tracking System PT08A', category: 'Category:Asset Tracking', description: 'A wireless asset tracking system (PT08A) offering easy installation and reliable monitoring.', imageUrl: 'https://pictortelematics.com/images/1716459974_PT08%201.png' },
    { title: 'OBD Car GPS Tracker PS25 (Truck)', category: 'Category:Truck Tracking System', description: 'The PS25 OBD car GPS tracker, providing simple plug-and-play tracking for trucks.', imageUrl: 'https://pictortelematics.com/images/1716388219_PS125%201.png' },
    { title: 'OBD Car GPS Tracker PS25 (Bus)', category: 'Category:Bus Tracking System', description: 'OBD car GPS tracker (PS25) for easy installation and monitoring in bus fleets.', imageUrl: 'https://pictortelematics.com/images/1716388219_PS125%201.png' },
    { title: 'OBD Car GPS Tracker PS25 (Car)', category: 'Category:Car GPS Tracker', description: 'The PS25 OBD car GPS tracker, offering straightforward setup and effective car tracking.', imageUrl: 'https://pictortelematics.com/images/1716388219_PS125%201.png' },
    { title: 'Fuel Level Sensor : Strela Ws', category: 'Category:Fuel Monitoring', description: 'The Strela Ws fuel level sensor, providing accurate and real-time fuel monitoring.', imageUrl: 'https://pictortelematics.com/images/1716373914_WS%20Website.png' },
    { title: 'Wireless Fuel Level Sensor STRELA WD', category: 'Category:Fuel Monitoring', description: 'A wireless fuel level sensor (STRELA WD) for convenient and precise fuel management.', imageUrl: 'https://pictortelematics.com/images/1716372745_WD%20Website.png' },
    { title: 'Fuel Level Indicator Strela D485', category: 'Category:Fuel Monitoring', description: 'The Strela D485 fuel level indicator, offering reliable fuel level readings via RS485.', imageUrl: 'https://pictortelematics.com/images/1716371714_D485%20Website.png' },
    { title: 'BLE Enabled 4G OBD2 Tracker TLD2 D (Truck)', category: 'Category:Truck Tracking System', description: 'A BLE-enabled 4G OBD2 tracker (TLD2 D) for comprehensive diagnostics and tracking in trucks.', imageUrl: 'https://pictortelematics.com/images/1716293469_1.png' },
    { title: 'BLE Enabled 4G OBD2 Tracker TLD2 D (Bus)', category: 'Category:Bus Tracking System', description: 'The TLD2 D BLE-enabled 4G OBD2 tracker, enhancing diagnostics and tracking for buses.', imageUrl: 'https://pictortelematics.com/images/1716293469_1.png' },
    { title: 'BLE Enabled 4G OBD2 Tracker TLD2 D (Car)', category: 'Category:Car GPS Tracker', description: 'A versatile BLE-enabled 4G OBD2 tracker (TLD2 D) for cars, providing advanced data.', imageUrl: 'https://pictortelematics.com/images/1716293469_1.png' },
    { title: 'GPS Tracker with AC and Door Detection P09N (Truck)', category: 'Category:Truck Tracking System', description: 'The P09N GPS tracker with AC and door detection, offering enhanced security for trucks.', imageUrl: 'https://pictortelematics.com/images/1716282253_1.png' },
    { title: 'GPS Tracker with AC and Door Detection P09N (Bus)', category: 'Category:Bus Tracking System', description: 'The P09N GPS tracker with AC and door detection, ensuring safety and monitoring for buses.', imageUrl: 'https://pictortelematics.com/images/1716282253_1.png' },
    { title: 'GPS Tracker with AC and Door Detection P09N (Car)', category: 'Category:Car GPS Tracker', description: 'A P09N GPS tracker with AC and door detection, ideal for comprehensive car security.', imageUrl: 'https://pictortelematics.com/images/1716282253_1.png' },
    { title: 'Pet GPS Tracker PG08', category: 'Category:Asset Tracking', description: 'The PG08 pet GPS tracker, keeping your beloved pets safe with real-time location monitoring.', imageUrl: 'https://pictortelematics.com/images/1716279206_1.png' },
    { title: 'Wireless GPS Asset Tracker PG06', category: 'Category:Asset Tracking', description: 'A wireless GPS asset tracker (PG06) for flexible and discreet tracking of valuable items.', imageUrl: 'https://pictortelematics.com/images/1716278258_2.png' },
    { title: 'OBD2 GPS Vehicle Tracker T8608 (Truck)', category: 'Category:Truck Tracking System', description: 'The T8608 OBD2 GPS vehicle tracker, providing easy installation and comprehensive tracking for trucks.', imageUrl: 'https://pictortelematics.com/images/1716203450_1.png' },
    { title: 'OBD2 GPS Vehicle Tracker T8608 (Bus)', category: 'Category:Bus Tracking System', description: 'The T8608 OBD2 GPS vehicle tracker, designed for straightforward installation and effective bus fleet management.', imageUrl: 'https://pictortelematics.com/images/1716203450_1.png' },
    { title: 'OBD2 GPS Vehicle Tracker T8608 (Car)', category: 'Category:Car GPS Tracker', description: 'A user-friendly T8608 OBD2 GPS vehicle tracker for cars, offering detailed insights into driving behavior.', imageUrl: 'https://pictortelematics.com/images/1716203450_1.png' },
    { title: 'Magnetic Asset Tracker with Temperature Detection PT20T', category: 'Category:Asset Tracking', description: 'The PT20T magnetic asset tracker, featuring integrated temperature detection for sensitive assets.', imageUrl:'https://pictortelematics.com/images/1716037242_Front%20Side_4.jpg' },
    { title: 'GPS Tracker with SOS PS06 (Truck)', category: 'Category:Truck Tracking System', description: 'The PS06 GPS tracker with SOS functionality, providing immediate alert capabilities for trucks.', imageUrl: 'https://pictortelematics.com/images/1715857844_1.png' },
    { title: 'PS06 GPS Tracker with SOS (Bus)', category: 'Category:Bus Tracking System', description: 'The PS06 GPS tracker with SOS, an essential safety feature for bus drivers and passengers.', imageUrl: 'https://pictortelematics.com/images/1715857844_1.png' },
    { title: 'PS06 GPS Tracker with SOS (Car)', category: 'Category:Car GPS Tracker', description: 'A compact PS06 GPS tracker with SOS button, offering peace of mind for car owners.', imageUrl: 'https://pictortelematics.com/images/1715857844_1.png' },
    { title: 'PS03 GPS Tracker with AC and Door Detection (Truck)', category: 'Category:Truck Tracking System', description: 'The PS03 GPS tracker, offering advanced AC and door detection for enhanced truck security.', imageUrl: 'https://pictortelematics.com/images/1715857000_1.png' },
    { title: 'PS03 GPS Tracker with AC and Door Detection (Bus)', category: 'Category:Bus Tracking System', description: 'The PS03 GPS tracker with AC and door detection, vital for monitoring conditions in buses.', imageUrl: 'https://pictortelematics.com/images/1715857000_1.png' },
    { title: 'PS03 GPS Tracker with AC and Door Detection (Car)', category: 'Category:Car GPS Tracker', description: 'A PS03 GPS tracker with AC and door detection, perfect for comprehensive car monitoring.', imageUrl: 'https://pictortelematics.com/images/1715857000_1.png' },
    { title: 'P19S GPS Tracker with SOS and Voice Monitoring (Truck)', category: 'Category:Truck Tracking System', description: 'The P19S GPS tracker, combining SOS and voice monitoring for advanced security in trucks.', imageUrl: 'https://pictortelematics.com/images/1715850861_1.png' },
    { title: 'P19S GPS Tracker with SOS and Voice Monitoring (Bus)', category: 'Category:Bus Tracking System', description: 'The P19S GPS tracker with SOS and voice monitoring, enhancing communication and safety for buses.', imageUrl: 'https://pictortelematics.com/images/1715850861_1.png' },
    { title: 'P19S GPS Tracker with SOS and Voice Monitoring (Car)', category: 'Category:Car GPS Tracker', description: 'A P19S GPS tracker with SOS and voice monitoring, offering robust safety features for cars.', imageUrl: 'https://pictortelematics.com/images/1715850861_1.png' },
    { title: 'PT17H GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PT17H GPS tracker, a reliable solution for real-time tracking and management of trucks.', imageUrl: 'https://pictortelematics.com/images/1715845470_1.png' },
    { title: 'PT17H GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PT17H GPS tracker, optimized for efficient bus fleet monitoring and route optimization.', imageUrl: 'https://pictortelematics.com/images/1715845470_1.png' },
    { title: 'PT17H GPS Tracker (Bike)', category: 'Category:Bike GPS Tracker', description: 'A compact PT17H GPS tracker, ideal for bikes, offering security and accurate location data.', imageUrl: 'https://pictortelematics.com/images/1715845470_1.png' },
    { title: 'PT17H GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The PT17H GPS tracker, a high-performance device for comprehensive car tracking needs.', imageUrl: 'https://pictortelematics.com/images/1715845470_1.png' },
    { title: 'PX100 LTECat1 2G GPS tracker', category: 'Category:Truck Tracking System', description: 'The PX100 LTECat1 2G GPS tracker, offering reliable tracking with broad network compatibility for trucks.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'Advanced GPS Tracker with Door Detection : PX100 (Car)', category: 'Category:Car GPS Tracker', description: 'The PX100 advanced GPS tracker with door detection, adding an extra layer of security for cars.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'GPS Tracker with Humidity and Temperature sensor : PX100 (Bus)', category: 'Category:Bus Tracking System', description: 'The PX100 GPS tracker, featuring humidity and temperature sensors, perfect for sensitive cargo in buses.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'PT200 Waterproof GPS Tracker with Dual Server Support (Truck)', category: 'Category:Truck Tracking System', description: 'The PT200 waterproof GPS tracker with dual server support, ensuring robust and continuous tracking for trucks.', imageUrl:'https://pictortelematics.com/images/1715763015_4.png' },
    { title: 'PT200 Waterproof GPS Tracker with Dual Server Support (Bus)', category: 'Category:Bus Tracking System', description: 'The PT200 waterproof GPS tracker with dual server support, ideal for reliable bus fleet management in any condition.', imageUrl: 'https://pictortelematics.com/images/1715763015_4.png' },
    { title: 'PT200 Waterproof GPS Tracker with Dual Server Support (Car)', category: 'Category:Car GPS Tracker', description: 'A durable PT200 waterproof GPS tracker with dual server support, providing ultimate reliability for cars.', imageUrl: 'https://pictortelematics.com/images/1715763015_4.png' },
    { title: 'PT100 Dual Server Enabled GPS Vehicle Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The PT100 dual server enabled GPS vehicle tracker, offering enhanced data redundancy and reliability for cars.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'PT100 Dual Server Enabled GPS Vehicle Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PT100 dual server enabled GPS vehicle tracker, ensuring continuous and secure tracking for buses.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'PT100 Dual Server Enabled GPS Vehicle Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'A robust PT100 dual server enabled GPS vehicle tracker for uninterrupted truck fleet monitoring.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'PT20 4G Magnetic Asset Tracker', category: 'Category:Asset Tracking', description: 'The PT20 4G magnetic asset tracker, offering strong magnetic attachment and reliable 4G connectivity for assets.', imageUrl: 'https://pictortelematics.com/images/1715157975_2.jpg' },
    { title: 'PX100 2G Wired GPS Tracker', category: 'Category:Truck Tracking System', description: 'The PX100 2G wired GPS tracker, a reliable and cost-effective solution for basic truck tracking needs.', imageUrl: 'https://pictortelematics.com/images/1715162441_1.png' },
    { title: 'IC 200 LoRaWAN Smart Badges for Construction site', category: 'Category:Wifi Based Tracking', description: 'IC 200 LoRaWAN smart badges, designed for efficient personnel tracking and safety on construction sites.', imageUrl: 'https://pictortelematics.com/images/1696926332_1.jpg' },
    { title: 'BC 100 LoRaWAN Smart Rumen Bolus (Bio Capsule) and Applicator', category: 'Category:Wifi Based Tracking', description: 'The BC 100 LoRaWAN smart rumen bolus, a bio-capsule with applicator for livestock tracking and health monitoring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'OD 100 LoRaWAN Outdoor Gateway', category: 'Category:Wifi Based Tracking', description: 'The OD 100 LoRaWAN outdoor gateway, extending network coverage for wide-area IoT applications.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'GCT 100 LoRaWAN GPS Smart Cattle Tracking Device', category: 'Category:Wifi Based Tracking', description: 'The GCT 100 LoRaWAN GPS smart cattle tracking device, providing accurate location and health data for livestock.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'TH 100 LoRaWAN Temperature and Humidity Sensor', category: 'Category:Wifi Based Tracking', description: 'The TH 100 LoRaWAN temperature and humidity sensor, ideal for environmental monitoring in various settings.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'LGT 100 LoRaWAN GPS Tracker', category: 'Category:Wifi Based Tracking', description: 'The LGT 100 LoRaWAN GPS tracker, offering long-range, low-power tracking for diverse applications.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PC 100 LoRaWAN People Counter', category: 'Category:Wifi Based Tracking', description: 'The PC 100 LoRaWAN people counter, providing accurate occupancy data for smart building management.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Capacitive Fuel sensor', category: 'Category:Accessories', description: 'A high-precision capacitive fuel sensor for accurate fuel level measurements and consumption monitoring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'OBD Connector', category: 'Category:Accessories', description: 'Standard OBD connector for easy interfacing with vehicle diagnostic systems.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'OBD Extension cable', category: 'Category:Accessories', description: 'An OBD extension cable for convenient access to the OBD port in various vehicle installations.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'D9005 5V converter', category: 'Category:Accessories', description: 'The D9005 5V converter, essential for powering various electronic devices from vehicle power.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Temperature Senosor Professional', category: 'Category:Accessories', description: 'A professional-grade temperature sensor for precise environmental monitoring and data logging.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Temperature senosr with Door', category: 'Category:Accessories', description: 'A temperature sensor integrated with a door sensor for monitoring both temperature and door status.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Relay For Engine Cut', category: 'Category:Accessories', description: 'A robust relay for remote engine cut-off functionality, enhancing vehicle security.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Microphone', category: 'Category:Accessories', description: 'Compact microphone for voice monitoring and two-way communication in vehicle tracking systems.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Speaker', category: 'Category:Accessories', description: 'A clear audio speaker for two-way communication and voice prompts in vehicle systems.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Wireless Relay', category: 'Category:Accessories', description: 'A wireless relay for remote control of vehicle functions without complex wiring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Door Sensor', category: 'Category:Accessories', description: 'A reliable door sensor for real-time alerts on door open/close status in vehicles or containers.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'WIFI Modem GPS Tracker', category: 'Category:Accessories', description: 'A GPS tracker with integrated WiFi modem for versatile connectivity options.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Wire Temperature Sensor', category: 'Category:Accessories', description: 'A wired temperature sensor for accurate and continuous temperature monitoring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'GPS Tracker OBD Canbus Reader', category: 'Category:Accessories', description: 'An OBD CANbus reader for GPS trackers, enabling access to detailed vehicle data.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Relay GPS', category: 'Category:Accessories', description: 'A GPS-integrated relay for remote control and security features in vehicles.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Gps Tracker 360 Degree Camera', category: 'Category:Accessories', description: 'A 360-degree camera accessory for GPS trackers, providing comprehensive vehicle surveillance.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Key FOB and SOS', category: 'Category:Accessories', description: 'A convenient key FOB with integrated SOS button for immediate alerts and emergency calls.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Temperature and Humidity Sensor', category: 'Category:Accessories', description: 'A combined temperature and humidity sensor for comprehensive environmental monitoring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Temperature Sensor', category: 'Category:Accessories', description: 'A standard temperature sensor for general temperature monitoring applications.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'SOS/ Panic Switch- Orange Imported', category: 'Category:Accessories', description: 'An orange imported SOS/panic switch for easily triggering emergency alerts.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'GPS Tracker Buzzer', category: 'Category:Accessories', description: 'A GPS tracker buzzer for audible alerts and notifications from the tracking system.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'RFID Reader RS232 with Card', category: 'Category:Accessories', description: 'An RFID reader with RS232 interface, bundled with an RFID card for access control and identification.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Speed Limiter', category: 'Category:Accessories', description: 'A speed limiter device for enforcing speed restrictions in vehicles, enhancing safety.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Ultrasonic Fuel Sensor', category: 'Category:Accessories', description: 'An ultrasonic fuel sensor for non-invasive and accurate fuel level measurement.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Magnetic iButton Reader RS232', category: 'Category:Accessories', description: 'A magnetic iButton reader with RS232 interface for driver identification and data logging.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Digital input Switch', category: 'Category:Accessories', description: 'A digital input switch for integrating external controls or sensors with tracking devices.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Magnetic Card Reader RS232', category: 'Category:Accessories', description: 'A magnetic card reader with RS232 interface for various identification and access control uses.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'G80 Magnetics GPS Tracker', category: 'Category:Asset Tracking', description: 'The G80 Magnetics GPS Tracker, a powerful magnetic tracker for versatile asset tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS140 GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PS140 GPS tracker, offering robust and reliable tracking capabilities for trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS140 GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The PS140 GPS tracker, a high-performance device for accurate and secure car tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21 OBD2 GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PS21 OBD2 GPS tracker, a plug-and-play solution for efficient truck diagnostics and tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21 OBD2 GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PS21 OBD2 GPS tracker, simplifying installation and providing reliable tracking for buses.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21 OBD2 GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'A user-friendly PS21 OBD2 GPS tracker for cars, offering quick setup and detailed vehicle data.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT104 4G GPS Tracker for Enhanced Vehicle Security and Fleet Management (Truck)', category: 'Category:Truck Tracking System', description: 'The PT104 4G GPS tracker, an advanced solution for superior vehicle security and fleet management in trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT104 4G GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PT104 4G GPS tracker, providing enhanced security and efficient fleet management for buses.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT104 4G GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'A high-end PT104 4G GPS tracker for cars, ensuring top-tier security and precise tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS10 4G Gps Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PS10 4G GPS tracker, a robust device for reliable and real-time tracking of trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS10 4G Gps Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PS10 4G GPS tracker, ideal for comprehensive bus fleet monitoring and management.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS10 4G Gps Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'A versatile PS10 4G GPS tracker for cars, offering advanced tracking capabilities.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS07 GPS Tracker with Temperature Sensor (Truck)', category: 'Category:Truck Tracking System', description: 'The PS07 GPS tracker with integrated temperature sensor, perfect for monitoring cargo conditions in trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS07 GPS Tracker with Temperature Sensor (Bus)', category: 'Category:Bus Tracking System', description: 'The PS07 GPS tracker with temperature sensor, ensuring optimal conditions for passengers or sensitive goods in buses.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS07 GPS Tracker with Temperature Sensor (Car)', category: 'Category:Car GPS Tracker', description: 'A PS07 GPS tracker with temperature sensor, ideal for monitoring vehicle cabin temperature or specific items in cars.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Plug and Play 4G OBD GPS Tracker for Trucks- PS22', category: 'Category:Truck Tracking System', description: 'The PS22 plug-and-play 4G OBD GPS tracker, offering effortless installation and powerful tracking for trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: '4G OBD GPS Tracker-PS22 (Bus)', category: 'Category:Bus Tracking System', description: 'The PS22 4G OBD GPS tracker, providing easy setup and reliable tracking for buses.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'Car OBD GPS Tracker- PS22', category: 'Category:Car GPS Tracker', description: 'A compact and efficient PS22 OBD GPS tracker for cars, ensuring quick installation and accurate data.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT06 GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PT06 GPS tracker, a versatile and robust device for comprehensive truck fleet management.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT06 GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PT06 GPS tracker, optimized for efficient bus fleet monitoring and route optimization.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT06 GPS Tracker (Bike)', category: 'Category:Bike GPS Tracker', description: 'A compact PT06 GPS tracker, ideal for bikes, offering enhanced security and precise location tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT06 GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The PT06 GPS tracker, a reliable solution for comprehensive car tracking and security.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'EV02 GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The EV02 GPS tracker, designed for robust performance and accurate tracking in trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'EV02 GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The EV02 GPS tracker, ensuring reliable monitoring and efficient management of bus fleets.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'EV02 GPS Tracker (Bike)', category: 'Category:Bike GPS Tracker', description: 'A compact EV02 GPS tracker, perfect for bikes, offering enhanced safety and tracking features.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'EV02 GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The EV02 GPS tracker, a versatile device for comprehensive car tracking and security.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT18 GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The PT18 GPS tracker, a high-performance device for detailed truck fleet management and security.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT18 GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PT18 GPS tracker, optimized for efficient bus fleet operations and real-time monitoring.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT18 GPS Tracker (Bike)', category: 'Category:Bike GPS Tracker', description: 'A reliable PT18 GPS tracker for bikes, providing accurate location and enhanced security.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT18 GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The PT18 GPS tracker, a robust solution for comprehensive car tracking and security applications.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'P19H Waterproof GPS Tracker (Truck)', category: 'Category:Truck Tracking System', description: 'The P19H waterproof GPS tracker, ensuring reliable performance in harsh conditions for trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'P19H Waterproof GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The P19H waterproof GPS tracker, designed for durable and reliable tracking of buses in all weather.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'P19H Waterproof GPS Tracker (Bike)', category: 'Category:Bike GPS Tracker', description: 'A durable P19H waterproof GPS tracker for bikes, offering peace of mind in any environment.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'P19H Waterproof GPS Tracker (Car)', category: 'Category:Car GPS Tracker', description: 'The P19H waterproof GPS tracker, providing robust and reliable tracking for cars, rain or shine.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21A OBD GPS TRACKER (Bus)', category: 'Category:Bus Tracking System', description: 'The PS21A OBD GPS tracker, a straightforward solution for bus diagnostics and tracking.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21A OBD GPS TRACKER (Truck)', category: 'Category:Truck Tracking System', description: 'The PS21A OBD GPS tracker, offering easy installation and effective tracking for trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS21A OBD GPS TRACKER (Car)', category: 'Category:Car GPS Tracker', description: 'A user-friendly PS21A OBD GPS tracker for cars, providing essential tracking and diagnostics.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PTID01 ID-Card GPS Tracker', category: 'Category:Asset Tracking', description: 'The PTID01 ID-Card GPS Tracker, a discreet and portable solution for tracking personnel and small assets.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PS140 GPS Tracker (Bus)', category: 'Category:Bus Tracking System', description: 'The PS140 GPS tracker, providing reliable and accurate tracking for bus fleets.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'GPS Tracker - PT915', category: 'Category:Asset Tracking', description: 'The PT915 GPS tracker, a versatile device for robust asset tracking and management.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'CLS2 Fuel Level Sensor', category: 'Category:Fuel Monitoring', description: 'The CLS2 Fuel Level Sensor, a highly accurate sensor for precise fuel level monitoring and management.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT701D E Lock Container Tracking System', category: 'Category:E-Lock with GPS Tracker', description: 'The PT701D E-Lock Container Tracking System, providing secure and real-time monitoring for shipping containers on trucks.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] },
    { title: 'PT20 Magnetic GPS Tracker', category: 'Category:Asset Tracking', description: 'The PT20 Magnetic GPS Tracker, a portable and easily deployable solution for tracking assets with a strong magnetic base.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length] }
];

// --- AnimatedSection Component (for general section animations) ---
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-in' | 'slide-up' | 'scale-up';
    delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, animation = 'fade-in', delay = 0 }) => {
    const variants = {
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay } }
        },
        'slide-up': {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, type: 'spring', stiffness: 100, damping: 12 } }
        },
        'scale-up': {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay, type: 'spring', stiffness: 100, damping: 12 } }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
};
// --- End AnimatedSection Component ---

// Animation Variants for smoother effects for product cards specifically
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
};

const App: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category') || 'all';
    // State for the search query
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (categoryId: string) => {
        setSearchParams({ category: categoryId });
        setSearchQuery(''); // Clear search query when category changes
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        // Optionally, clear category selection when searching
        if (searchParams.has('category')) {
            setSearchParams({});
        }
    };

    const filteredAndSearchedProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'all' || normalizeCategory(product.category) === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Tailwind CSS CDN for styling */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Font Inter import */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Custom scrollbar for sidebar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(168, 85, 247, 0.5); /* purple-500 with transparency */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(168, 85, 247, 0.7);
                }
                `}
            </style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <AnimatedSection animation="slide-up" className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
                    </h1>
                    <p className="text-gray-300 text-lg">Browse by category or explore all products.</p>
                </AnimatedSection>

                {/* Search Bar */}
                <AnimatedSection animation="slide-up" delay={0.1} className="mb-10 w-full max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400
                                       border border-purple-500/50 focus:border-purple-600 focus:ring-purple-600 focus:outline-none
                                       transition-all duration-300 shadow-lg"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>
                </AnimatedSection>
                {/* End Search Bar */}

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
                    {/* Sidebar - Made Sticky */}
                    <AnimatedSection
                        animation="slide-up"
                        delay={0.2}
                        className="bg-white/10 p-6 rounded-xl border border-white/10 space-y-4 backdrop-blur
                                   max-h-[80vh] overflow-y-auto custom-scrollbar
                                   sticky top-5 lg:top-20" // Added sticky and top-5 (or top-20 for more offset)
                    >
                        <h2 className="text-xl font-semibold text-white">Categories</h2>
                        <ul className="space-y-3">
                            {productCategories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => handleCategoryClick(cat.id)}
                                        className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition w-full text-left ${
                                            selectedCategory === cat.id
                                                ? 'bg-purple-500/30 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                                        }`}
                                    >
                                        <cat.icon className="w-5 h-5 text-cyan-400" />
                                        <span>{cat.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    {/* Product Cards Grid */}
                    <section>
                        {filteredAndSearchedProducts.length === 0 ? (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-gray-300 text-lg text-center mt-8 col-span-full"
                            >
                                No products found matching your criteria. 😔
                            </motion.p>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCategory + searchQuery} // Key for AnimatePresence to re-trigger animations
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
                                >
                                    {filteredAndSearchedProducts.map((product) => (
                                        <motion.div
                                            key={product.title} // Ensure unique key for each product
                                            variants={itemVariants}
                                            className="relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-purple-500/20 overflow-hidden
                                                       shadow-xl backdrop-blur-sm
                                                       transform transition-all duration-300 ease-in-out
                                                       hover:scale-[1.03] hover:shadow-purple-500/30 hover:border-purple-500/50
                                                       flex flex-col group"
                                        >
                                            {/* Link to ProductDetail page */}
                                            <Link to={`/products/${encodeURIComponent(product.title)}`} className="block h-full flex flex-col">
                                                <div className="w-full h-60 overflow-hidden relative">
                                                    <img
                                                        src={product.imageUrl}
                                                        alt={product.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        onError={(e) => {
                                                            // Fallback for broken images, cycles through placeholders
                                                            e.currentTarget.src = placeholderImages[imageIndex++ % placeholderImages.length];
                                                        }}
                                                    />
                                                </div>

                                                <div className="p-6 flex flex-col justify-between flex-grow">
                                                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                                    <p className="text-gray-300 text-base mb-4 line-clamp-4">{product.description}</p>
                                                    <div className="flex items-center text-gray-400 text-sm font-medium mb-4">
                                                        <span className="bg-purple-600/30 px-3 py-1.5 rounded-full text-white">
                                                            {product.category.replace('Category:', '')}
                                                        </span>
                                                    </div>

                                                    <div className="mt-auto">
                                                        <button
                                                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg
                                                                         hover:bg-purple-700 transition-colors duration-300
                                                                         flex items-center justify-center space-x-2 text-lg"
                                                        >
                                                            <span>View Details</span>
                                                            {/* Lucide ArrowRight icon */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;