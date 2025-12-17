
import { Layout } from './ui';
import { ButtonBridge } from './bridge/button-bridge';
import { SectionBridge } from './bridge/section-bridge';
import { GridBridge } from './bridge/grid-bridge';
import { CardBridge } from './bridge/card-bridge';
import { TextBridge } from './bridge/text-bridge';

export const COMPONENT_MAP = {
    'Page': Layout,
    'Button': ButtonBridge,
    "Section": SectionBridge,
    "Grid": GridBridge,
    "Card": CardBridge,
    "Text": TextBridge,
    "Input": () => <span>Input</span>,
    "Image": () => <span>Image</span>,
    "Table": () => <span>Table</span>,
}