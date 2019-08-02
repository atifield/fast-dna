import { ManagedClasses } from "@microsoft/fast-jss-manager-react";
import { CSSBorderRadiusClassNameContract } from "./border-radius.style";

export interface CSSBorderRadiusState {
    indvidualValues?: boolean;
    hasFocus?: BorderRadiusValue;
}

export enum BorderRadiusValue {
    borderRadius = "borderRadius",
    borderTopLeftRadius = "borderTopLeftRadius",
    borderTopRightRadius = "borderTopRightRadius",
    borderBottomRightRadius = "borderBottomRightRadius",
    borderBottomLeftRadius = "borderBottomLeftRadius",
}

export interface CSSBorderRadiusValues {
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomLeftRadius?: string;
}

export interface CSSBorderRadiusUnhandledProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export interface CSSBorderRadiusHandledProps
    extends ManagedClasses<CSSBorderRadiusClassNameContract> {
    /**
     * The data
     */
    data?: CSSBorderRadiusValues;

    /**
     * The onChange callback
     */
    onChange?: (borderRadius: CSSBorderRadiusValues) => void;
}

export type CSSBorderRadiusProps = CSSBorderRadiusHandledProps &
    CSSBorderRadiusUnhandledProps;