import {
    applyFocusVisible,
    directionSwitch,
    format,
} from "@microsoft/fast-jss-utilities";
import { DesignSystem, withDesignSystemDefaults } from "../design-system";
import { AutoSuggestOptionClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import { height, horizontalSpacing } from "../utilities/density";
import {
    neutralFillStealthHover,
    neutralFillStealthRest,
    neutralFillStealthSelected,
    neutralFocus,
    neutralForegroundRest,
} from "../utilities/color";
import { ComponentStyles, ComponentStyleSheet } from "@microsoft/fast-jss-manager";
import { applyScaledTypeRamp } from "../utilities/typography";
import {
    Direction,
    ellipsis,
    toPx,
} from "@microsoft/fast-jss-utilities";
import { applyCornerRadius, applyFocusPlaceholderBorder } from "../utilities/border";
import { applyCursorDefault } from "../utilities/cursor";
import { applyDisabledState } from "../utilities/disabled";
import { designUnit } from "../utilities/design-system";
import {
    applyHighContrastAdjustStealth,
    applyHighContrastDisabled,
    applyHighContrastDisabledColor,
    applyHighContrastSelectedHover,
    applyHighContrastSelectFocus
} from "../utilities/high-contrast";

const styles: ComponentStyles<AutoSuggestOptionClassNameContract, DesignSystem> = {
    autoSuggestOption: {
        listStyleType: "none",
        height: height(),
        display: "grid",
        gridTemplateColumns: directionSwitch(
            format("{0} auto auto 1fr {0}", horizontalSpacing()),
            format("{0} 1fr auto auto {0}", horizontalSpacing())
        ),
        gridTemplateRows: "auto",
        alignItems: "center",
        padding: "0",
        margin: format("0 {0}", toPx(designUnit)),
        whiteSpace: "nowrap",
        overflow: "hidden",
        ...applyCursorDefault(),
        color: neutralForegroundRest,
        ...applyScaledTypeRamp("t7"),
        background: neutralFillStealthRest,
        ...applyCornerRadius(),
        ...applyFocusPlaceholderBorder(),
        ...applyFocusVisible<DesignSystem>({
            borderColor: neutralFocus,
            ...applyHighContrastSelectFocus(),
        }),
        "&:hover": {
            background: neutralFillStealthHover,
            ...applyHighContrastSelectedHover(),
        },
        ...applyHighContrastAdjustStealth(),
    },
    autoSuggestOption_contentRegion: {
        gridColumnStart: "3",
        overflow: "hidden",
        ...ellipsis(),
    },
    autoSuggestOption__disabled: {
        ...applyDisabledState(),
        ...applyHighContrastDisabledColor(),
        "&:hover": {
            background: neutralFillStealthRest,
            ...applyHighContrastDisabled(),
        },
    },
    autoSuggestOption__selected: {
        background: neutralFillStealthSelected,
        "&:hover": {
            background: neutralFillStealthSelected,
            ...applyHighContrastSelectedHover(),
        },
    },
};

export default styles;
