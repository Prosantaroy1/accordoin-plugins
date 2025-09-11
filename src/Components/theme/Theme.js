import ThemeOne from './themeOne';
import ThemeThree from './ThemeThree';
import ThemeTwo from './ThemeTwo';

export const Theme = ({ attributes, setAttributes }) => {

    const { theme = 'themeThree' } = attributes;

    return <ThemeSwitch theme={theme} {...{ attributes, setAttributes }} />
}

const ThemeSwitch = ({ theme, attributes, setAttributes }) => {
    switch (theme) {
        case 'themeTwo':
            return <ThemeTwo {...{ attributes, setAttributes }} />
        case 'themeOne':
            return <ThemeOne {...{ attributes, setAttributes }} />
        default:
            return <ThemeThree {...{ attributes, setAttributes }} />
    }
}