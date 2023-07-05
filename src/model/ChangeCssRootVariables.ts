import { Theme } from "../context/ThemeContext";

export function ChangeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'card-background',
        'text-color',
        'components-background',
        'body-background',
        'card-shadow'
    ];

    components.forEach(component => {

        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    }) 
}