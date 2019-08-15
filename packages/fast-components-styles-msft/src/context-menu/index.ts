import { ContextMenuClassNameContract } from "@microsoft/fast-components-class-name-contracts-base";
import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { format, toPx } from "@microsoft/fast-jss-utilities";
import { DesignSystem } from "../design-system";
import { applyElevatedCornerRadius } from "../utilities/border";
import { backgroundColor, designUnit } from "../utilities/design-system";
import { applyElevation, ElevationMultiplier } from "../utilities/elevation";
import { applyHighContrastBorder } from "../utilities/high-contrast";

const styles: ComponentStyles<ContextMenuClassNameContract, DesignSystem> = {
    contextMenu: {
        background: backgroundColor,
        ...applyElevatedCornerRadius(),
        ...applyElevation(ElevationMultiplier.e11),
        margin: "0",
        padding: format("{0} 0", toPx<DesignSystem>(designUnit)),
        maxWidth: "368px",
        minWidth: "64px",
        transition: "all 0.2s ease-in-out",
        ...applyHighContrastBorder(),
    },
};

export default styles;
