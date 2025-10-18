'use client';
import { useEffect } from 'react';

export function BackgroundElements() {
  useEffect(() => {
    // Create floating geometric shapes
    const shapes = [
      { size: 60, top: '10%', left: '10%', shape: 'circle' },
      { size: 40, top: '60%', right: '15%', shape: 'square' },
      { size: 80, bottom: '20%', left: '20%', shape: 'triangle' },
      { size: 50, top: '30%', right: '30%', shape: 'circle' },
    ];

    shapes.forEach((shapeConfig, index) => {
      const shape = document.createElement('div');
      shape.className = 'geometric-shape';
      shape.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: -1;
        width: ${shapeConfig.size}px;
        height: ${shapeConfig.size}px;
        ${shapeConfig.top ? `top: ${shapeConfig.top};` : ''}
        ${shapeConfig.bottom ? `bottom: ${shapeConfig.bottom};` : ''}
        ${shapeConfig.left ? `left: ${shapeConfig.left};` : ''}
        ${shapeConfig.right ? `right: ${shapeConfig.right};` : ''}
      `;
      
      document.body.appendChild(shape);
    });

    // Cleanup function
    return () => {
      document.querySelectorAll('.geometric-shape').forEach(shape => {
        shape.remove();
      });
    };
  }, []);

  return null;
}