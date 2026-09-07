# 3D Carousel

An interactive 3D carousel UI component built using pure CSS 3D Transforms. It features dynamic background weather effects (rain, snow) synchronized with the selected photo's theme for an immersive visual experience.

![Demo Image](./src/assets/animation.webp)

## 📖 Overview

A lightweight, interactive 3D carousel constructed purely with CSS 3D Transforms—eliminating the need for heavy external 3D rendering libraries. It automatically detects active photo themes and renders real-time background weather animations (such as rain and snow) to elevate the user interface experience.

- **Live Demo:** [https://3d-carousel.ukyo.me/](https://3d-carousel.ukyo.me/)

## ✨ Features

* **Smooth 3D Rotation:** Smooth carousel transition animations utilizing CSS `perspective` and `transform` properties.
* **Dynamic Entrance Animation:** An engaging initial animation where carousel items unpack dynamically across 3D space.
* **Interactive Rain Effect:** Background rain particles synchronized with rain-themed photos.
* **Interactive Snow Effect:** Background snow particles synchronized with snow-themed photos.

## 🛠 Tech Stack

* **Frontend:** React, TypeScript
* **Styling & Effects:** CSS3 (3D Transforms), Tailwind CSS

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm / yarn / pnpm

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/JunyaUkyou/3d-carousel.git

# Navigate into the project directory
cd 3d-carousel

# Install dependencies
npm install

# Start the development server
npm run dev