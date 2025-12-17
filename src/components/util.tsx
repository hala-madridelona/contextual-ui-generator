import { Span } from 'next/dist/trace';
import { Button, Layout } from './ui';
import { ReactNode } from 'react';
import { ButtonBridge } from './bridge/button-bridge';
import { SectionBridge } from './bridge/section-bridge';
import { GridBridge } from './bridge/grid-bridge';

export const COMPONENT_MAP = {
    'Page': Layout,
    'Button': ButtonBridge,
    "Section": SectionBridge,
    "Grid": GridBridge,
    "Card": () => <span>Card</span>,
    "Text": () => <span>Text</span>,
    "Input": () => <span>Input</span>,
    "Image": () => <span>Image</span>,
    "Table": () => <span>Table</span>,
}