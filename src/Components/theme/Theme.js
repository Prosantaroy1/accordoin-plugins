import ThemeOne from './themeOne';
import ThemeThree from './ThemeThree';
import ThemeTwo from './ThemeTwo';

export const Theme = ({ attributes, setAttributes }) => {

    const { theme = 'themeOne' } = attributes;

    return <ThemeSwitch theme={theme} {...{ attributes, setAttributes }} />
}

const ThemeSwitch = ({ theme, attributes, setAttributes }) => {
    switch (theme) {
        case 'themeTwo':
            return <ThemeTwo {...{ attributes, setAttributes }} />
        case 'themeThree':
            return <ThemeThree {...{ attributes, setAttributes }} />
        default:
            return <ThemeOne {...{ attributes, setAttributes }} />
    }
}