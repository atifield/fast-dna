import { applyCursorPointer } from "../utilities/cursor";
import { ButtonClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import {
    applyFocusVisible,
    directionSwitch,
    format,
    subtract,
    toPx,
} from "@microsoft/fast-jss-utilities";
import { DesignSystem, ensureDesignSystemDefaults } from "../design-system";
import { applyCornerRadius, applyFocusPlaceholderBorder } from "../utilities/border";
import {
    accentFillActive,
    accentFillHover,
    accentFillRest,
    accentForegroundActive,
    accentForegroundCut,
    accentForegroundHover,
    accentForegroundRest,
    neutralFillActive,
    neutralFillHover,
    neutralFillRest,
    neutralFillStealthActive,
    neutralFillStealthHover,
    neutralFillStealthRest,
    neutralFocus,
    neutralFocusInnerAccent,
    neutralForegroundRest,
    neutralOutlineActive,
    neutralOutlineHover,
    neutralOutlineRest,
} from "../utilities/color";
import { ComponentStyles, CSSRules } from "@microsoft/fast-jss-manager";
import { glyphSize, height, horizontalSpacing } from "../utilities/density";
import { focusOutlineWidth, outlineWidth } from "../utilities/design-system";
import { applyDisabledState } from "../utilities/disabled";
import { applyScaledTypeRamp } from "../utilities/typography";
import {
    applyHighContrastAdjustOutline,
    applyHighContrastAdjustStealth,
    applyHighContrastDisabledBorder,
    applyHighContrastDisabledForeground,
    applyHighContrastDoubleFocus,
    applyHighContrastForeground,
    applyHighContrastHyperLink,
    applyHighContrastOutlineFocus,
    applyHighContrastSelected,
    applyHighContrastSelectedForeground,
    applyHighContrastSelection,
    highContrastSelector,
} from "../utilities/high-contrast";

const transparentBackground: CSSRules<DesignSystem> = {
    backgroundColor: "transparent",
};

const applyTransparentBackplateStyles: CSSRules<DesignSystem> = {
    color: accentForegroundRest,
    fill: accentForegroundRest,
    ...transparentBackground,
    ...applyFocusVisible({
        borderColor: "transparent",
        boxShadow: "none",
        "& $button_contentRegion::before": {
            background: neutralForegroundRest,
            height: toPx<DesignSystem>(focusOutlineWidth),
        },
    }),
    // Underline
    "&:hover $button_contentRegion::before": {
        background: accentForegroundHover,
        [highContrastSelector]: {
            background: "ButtonText",
        },
    },
    "&:hover$button__disabled $button_contentRegion::before": {
        display: "none",
    },
    "&:active $button_contentRegion::before": {
        background: accentForegroundActive,
    },
    "&$button__disabled, &$button__disabled $button_contentRegion::before": {
        ...transparentBackground,
    },
    ...applyHighContrastAdjustStealth,
    "&:hover:enabled": {
        color: accentForegroundHover,
        fill: accentForegroundHover,
        ...transparentBackground,
        ...applyHighContrastForeground,
    },
    "&:active:enabled": {
        color: accentForegroundActive,
        fill: accentForegroundActive,
        ...transparentBackground,
    },
};

const styles: ComponentStyles<ButtonClassNameContract, DesignSystem> = {
    button: {
        ...applyScaledTypeRamp("t7"),
        fontFamily: "inherit",
        ...applyCursorPointer(),
        boxSizing: "border-box",
        maxWidth: "374px",
        minWidth: ensureDesignSystemDefaults(
            (designSystem: DesignSystem): string =>
                designSystem.density <= -2 ? "28px" : "32px"
        ),
        padding: format("0 {0}", horizontalSpacing(focusOutlineWidth)),
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        height: height(),
        ...applyFocusPlaceholderBorder(),
        ...applyCornerRadius(),
        lineHeight: "1",
        overflow: "hidden",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "all 0.1s ease-in-out",
        color: neutralForegroundRest,
        fill: neutralForegroundRest,
        background: neutralFillRest,
        "&:hover:enabled": {
            background: neutralFillHover,
            ...applyHighContrastSelection,
            "& $button_beforeContent, & $button_afterContent": {
                fill: accentForegroundCut,
                ...applyHighContrastSelectedForeground,
            },
        },
        "&:active:enabled": {
            background: neutralFillActive,
        },
        ...applyFocusVisible<DesignSystem>({
            borderColor: neutralFocus,
            ...applyHighContrastOutlineFocus,
        }),
        "&:disabled": {
            ...applyHighContrastDisabledBorder,
        },
        "&::-moz-focus-inner": {
            border: "0",
        },
        ...applyHighContrastAdjustOutline,
        "a&": {
            ...applyHighContrastHyperLink,
            "&$button__disabled": {
                ...applyHighContrastDisabledBorder,
                "&:hover": {
                    ...applyHighContrastDisabledBorder,
                    "& $button_beforeContent, & $button_afterContent": {
                        ...applyHighContrastDisabledForeground,
                    },
                },
            },
        },
    },
    button__primary: {
        color: accentForegroundCut,
        fill: accentForegroundCut,
        background: accentFillRest,
        "&:hover:enabled": {
            background: accentFillHover,
            [highContrastSelector]: {
                background: "HighlightText",
                borderColor: "Highlight",
                color: "Highlight",
            },
        },
        "&:active:enabled": {
            background: accentFillActive,
        },
        ...applyFocusVisible<DesignSystem>({
            borderColor: neutralFocus,
            boxShadow: format(
                "0 0 0 {0} inset {1}",
                toPx(focusOutlineWidth),
                neutralFocusInnerAccent(accentFillRest)
            ),
            ...applyHighContrastDoubleFocus,
        }),
        "&:disabled": {
            ...applyHighContrastDisabledBorder,
        },
        "& $button_beforeContent, & $button_afterContent": {
            fill: accentForegroundCut,
            ...applyHighContrastForeground,
        },
        ...applyHighContrastSelected,
    },
    button__outline: {
        background: "transparent",
        border: format(
            "{0} solid {1}",
            toPx<DesignSystem>(outlineWidth),
            neutralOutlineRest
        ),
        padding: format("0 {0}", horizontalSpacing(outlineWidth)),
        "&:hover:enabled": {
            background: "transparent",
            border: format(
                "{0} solid {1}",
                toPx<DesignSystem>(outlineWidth),
                neutralOutlineHover
            ),
            ...applyHighContrastSelection,
        },
        "&:active:enabled": {
            background: "transparent",
            border: format(
                "{0} solid {1}",
                toPx<DesignSystem>(outlineWidth),
                neutralOutlineActive
            ),
        },
        ...applyFocusVisible<DesignSystem>({
            boxShadow: ensureDesignSystemDefaults(
                (designSystem: DesignSystem): string => {
                    return `0 0 0 ${toPx(
                        designSystem.focusOutlineWidth - designSystem.outlineWidth
                    )} ${neutralFocus(designSystem)} inset`;
                }
            ),
            borderColor: neutralFocus,
            ...applyHighContrastOutlineFocus,
        }),
        "&:disabled": {
            ...applyHighContrastDisabledBorder,
        },
        ...applyHighContrastAdjustOutline,
    },
    button__lightweight: {
        ...applyTransparentBackplateStyles,
    },
    button__justified: {
        ...applyTransparentBackplateStyles,
        minWidth: "74px",
        paddingLeft: "0",
        paddingRight: "0",
        borderWidth: "0",
        justifyContent: "flex-start",
    },
    button__stealth: {
        background: neutralFillStealthRest,
        "&:hover:enabled": {
            backgroundColor: neutralFillStealthHover,
            ...applyHighContrastSelection,
        },
        "&:active:enabled": {
            backgroundColor: neutralFillStealthActive,
        },
        ...applyFocusVisible<DesignSystem>({
            borderColor: neutralFocus,
            ...applyHighContrastOutlineFocus,
        }),
        ...applyHighContrastAdjustStealth,
    },
    button_contentRegion: {
        position: "relative",
        "&::before": {
            content: "''",
            display: "block",
            height: toPx<DesignSystem>(outlineWidth),
            position: "absolute",
            bottom: "-3px",
            width: "100%",
            left: directionSwitch("0", ""),
            right: directionSwitch("", "0"),
        },
        "& svg": {
            width: glyphSize,
            height: glyphSize,
        },
    },
    button__disabled: {
        ...applyDisabledState(),
        "& $button_beforeContent, & $button_afterContent": {
            fill: "ButtonHighlight",
            ...applyHighContrastDisabledForeground,
        },
    },
    button_beforeContent: {
        width: glyphSize,
        height: glyphSize,
    },
    button_afterContent: {
        width: glyphSize,
        height: glyphSize,
    },
};

export default styles;
