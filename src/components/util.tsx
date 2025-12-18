
import { Layout } from './ui';
import { ButtonBridge } from './bridge/button-bridge';
import { SectionBridge } from './bridge/section-bridge';
import { GridBridge } from './bridge/grid-bridge';
import { CardBridge } from './bridge/card-bridge';
import { TextBridge } from './bridge/text-bridge';
import { InputBridge } from './bridge/input-bridge';
import { ImageBridge } from './bridge/image-bridge';
import { TableBridge } from './bridge/table-bridge';

export const COMPONENT_MAP = {
    'Page': Layout,
    'Button': ButtonBridge,
    "Section": SectionBridge,
    "Grid": GridBridge,
    "Card": CardBridge,
    "Text": TextBridge,
    "Input": InputBridge,
    "Image": ImageBridge,
    "Table": TableBridge,
}