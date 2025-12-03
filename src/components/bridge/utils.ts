import Fuse from 'fuse.js';
import * as Icons from 'lucide-react';

const lucideIcons = Object.keys(Icons);
console.log('LUCIDE ICONS LENGTH => ', lucideIcons.length);


export const getIcon = (name: string) => {
    if (!name){
        return null;
    }

    const nameInLowerCase = name.toLowerCase().replace(/\s+/g, "");

    // EXACT MATCH
    if (Icons[nameInLowerCase]) {
        return Icons[nameInLowerCase];
    }

    // FUZZY MATCH
    const fuse = new Fuse(lucideIcons);
    const result = fuse.search(nameInLowerCase)[0];

    if (result) {
        const iconName = result.item;
        return Icons[iconName];
    }

    return null;

}