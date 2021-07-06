/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { WayRadioGroupChangeEventDetail } from "./components/way-radio-group/way-radio-group-interface";
export namespace Components {
    interface WayButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret": boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle": boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href": string | undefined;
        /**
          * Set to true to draw a pill-style button with rounded edges.
         */
        "pill": boolean;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The button's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
        /**
          * The different variants. The options are: `"default"`, `"primary"`, `"secondary"`, `"danger"`, and `"plain"`.
         */
        "variant"?: 'default' | 'primary' | 'secondary' | 'danger' | 'plain';
    }
    interface WayDropdown {
        /**
          * Determines whether the dropdown should hide when a menu item is selected.
         */
        "closeOnSelect": boolean;
        /**
          * The dropdown will close when the user interacts outside of this element (e.g. clicking).
         */
        "containingElement": HTMLElement;
        /**
          * The distance in pixels from which to offset the panel away from its trigger.
         */
        "distance": number;
        /**
          * Hides the dropdown panel
         */
        "hide": () => Promise<void>;
        /**
          * Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto|scroll`.
         */
        "hoist": boolean;
        /**
          * Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.
         */
        "open": boolean;
        /**
          * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport.
         */
        "placement": | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';
        /**
          * Shows the dropdown panel
         */
        "show": () => Promise<void>;
        /**
          * The distance in pixels from which to offset the panel along its trigger.
         */
        "skidding": number;
    }
    interface WayInput {
        /**
          * Set to true to disable the input control.
         */
        "disabled": boolean;
        /**
          * The input's help text. Alternatively, you can use the help-text slot.
         */
        "helpText": string;
        /**
          * Specifies what if label and input must be inline.
         */
        "inline": boolean;
        /**
          * This will be true when the control is in an invalid state. Validity is determined by the `required` prop.
         */
        "invalid": boolean;
        /**
          * The inputs's label. Alternatively, you can use the label slot.
         */
        "label": string;
        /**
          * The input's name.
         */
        "name": string;
        /**
          * The input's placeholder text.
         */
        "placeholder": string;
        /**
          * Checks for validity and shows the browser's validation message if the control is invalid.
         */
        "reportValidity": () => Promise<boolean>;
        /**
          * The input's required attribute.
         */
        "required": boolean;
        /**
          * Sets a custom validation message. If `message` is not empty, the field will be considered invalid.
         */
        "setCustomValidity": (message: string) => Promise<void>;
        /**
          * The input's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Specifies what type of input to use.
         */
        "type": string;
    }
    interface WayMenu {
        /**
          * Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing. The key passed will be appended to the internal query and the selection will be updated. After a brief period, the internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for enabling type-to-select when the menu doesn't have focus.
         */
        "typeToSelect": (key: string) => Promise<void>;
    }
    interface WayMenuDivider {
    }
    interface WayMenuItem {
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to draw the menu item in a disabled state.
         */
        "disabled": boolean;
        /**
          * Removes focus from the menu item.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the menu item.
         */
        "setFocus": (options?: FocusOptions) => Promise<void>;
        /**
          * A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
         */
        "value": string;
    }
    interface WayMenuLabel {
    }
    interface WayRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled": boolean;
        /**
          * Removes focus from the radio.
         */
        "removeFocus": () => Promise<void>;
        "setButtonTabindex": (value: number) => Promise<void>;
        /**
          * Sets focus on the radio.
         */
        "setFocus": (options?: FocusOptions) => Promise<void>;
        /**
          * The radio's value attribute.
         */
        "value": string;
    }
    interface WayRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection": boolean;
        /**
          * The radio group label. Required for proper accessibility. Alternatively, you can use the label slot.
         */
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Hides the fieldset and legend that surrounds the radio group. The label will still be read by screen readers.
         */
        "noFieldset": boolean;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface WaySelect {
        /**
          * Set to true to add a clear button when the select is populated.
         */
        "clearable": boolean;
        /**
          * Set to true to disable the select control.
         */
        "disabled": boolean;
        /**
          * The select's help text. Alternatively, you can use the help-text slot.
         */
        "helpText": string;
        /**
          * Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto|scroll`.
         */
        "hoist": boolean;
        /**
          * This will be true when the control is in an invalid state. Validity is determined by the `required` prop.
         */
        "invalid": boolean;
        /**
          * The select's label. Alternatively, you can use the label slot.
         */
        "label": string;
        /**
          * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit.
         */
        "maxTagsVisible": number;
        /**
          * Set to true to enable multiselect.
         */
        "multiple": boolean;
        /**
          * The select's name.
         */
        "name": string;
        /**
          * Set to true to draw a pill-style select with rounded edges.
         */
        "pill": boolean;
        /**
          * The select's placeholder text.
         */
        "placeholder": string;
        /**
          * Checks for validity and shows the browser's validation message if the control is invalid.
         */
        "reportValidity": () => Promise<boolean>;
        /**
          * The select's required attribute.
         */
        "required": boolean;
        /**
          * Sets a custom validation message. If `message` is not empty, the field will be considered invalid.
         */
        "setCustomValidity": (message: string) => Promise<void>;
        /**
          * The select's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * The value of the control. This will be a string or an array depending on `multiple`.
         */
        "value": string | Array<string>;
    }
    interface WayTag {
        /**
          * Set to true to make the tag clearable.
         */
        "clearable": boolean;
        /**
          * Set to true to draw a pill-style tag with rounded edges.
         */
        "pill": boolean;
        /**
          * The tag's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * The tag's type.
         */
        "type": 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
}
declare global {
    interface HTMLWayButtonElement extends Components.WayButton, HTMLStencilElement {
    }
    var HTMLWayButtonElement: {
        prototype: HTMLWayButtonElement;
        new (): HTMLWayButtonElement;
    };
    interface HTMLWayDropdownElement extends Components.WayDropdown, HTMLStencilElement {
    }
    var HTMLWayDropdownElement: {
        prototype: HTMLWayDropdownElement;
        new (): HTMLWayDropdownElement;
    };
    interface HTMLWayInputElement extends Components.WayInput, HTMLStencilElement {
    }
    var HTMLWayInputElement: {
        prototype: HTMLWayInputElement;
        new (): HTMLWayInputElement;
    };
    interface HTMLWayMenuElement extends Components.WayMenu, HTMLStencilElement {
    }
    var HTMLWayMenuElement: {
        prototype: HTMLWayMenuElement;
        new (): HTMLWayMenuElement;
    };
    interface HTMLWayMenuDividerElement extends Components.WayMenuDivider, HTMLStencilElement {
    }
    var HTMLWayMenuDividerElement: {
        prototype: HTMLWayMenuDividerElement;
        new (): HTMLWayMenuDividerElement;
    };
    interface HTMLWayMenuItemElement extends Components.WayMenuItem, HTMLStencilElement {
    }
    var HTMLWayMenuItemElement: {
        prototype: HTMLWayMenuItemElement;
        new (): HTMLWayMenuItemElement;
    };
    interface HTMLWayMenuLabelElement extends Components.WayMenuLabel, HTMLStencilElement {
    }
    var HTMLWayMenuLabelElement: {
        prototype: HTMLWayMenuLabelElement;
        new (): HTMLWayMenuLabelElement;
    };
    interface HTMLWayRadioElement extends Components.WayRadio, HTMLStencilElement {
    }
    var HTMLWayRadioElement: {
        prototype: HTMLWayRadioElement;
        new (): HTMLWayRadioElement;
    };
    interface HTMLWayRadioGroupElement extends Components.WayRadioGroup, HTMLStencilElement {
    }
    var HTMLWayRadioGroupElement: {
        prototype: HTMLWayRadioGroupElement;
        new (): HTMLWayRadioGroupElement;
    };
    interface HTMLWaySelectElement extends Components.WaySelect, HTMLStencilElement {
    }
    var HTMLWaySelectElement: {
        prototype: HTMLWaySelectElement;
        new (): HTMLWaySelectElement;
    };
    interface HTMLWayTagElement extends Components.WayTag, HTMLStencilElement {
    }
    var HTMLWayTagElement: {
        prototype: HTMLWayTagElement;
        new (): HTMLWayTagElement;
    };
    interface HTMLElementTagNameMap {
        "way-button": HTMLWayButtonElement;
        "way-dropdown": HTMLWayDropdownElement;
        "way-input": HTMLWayInputElement;
        "way-menu": HTMLWayMenuElement;
        "way-menu-divider": HTMLWayMenuDividerElement;
        "way-menu-item": HTMLWayMenuItemElement;
        "way-menu-label": HTMLWayMenuLabelElement;
        "way-radio": HTMLWayRadioElement;
        "way-radio-group": HTMLWayRadioGroupElement;
        "way-select": HTMLWaySelectElement;
        "way-tag": HTMLWayTagElement;
    }
}
declare namespace LocalJSX {
    interface WayButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret"?: boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle"?: boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to.
         */
        "href"?: string | undefined;
        /**
          * Emitted when the button loses focus.
         */
        "onWay-blur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onWay-focus"?: (event: CustomEvent<void>) => void;
        /**
          * Set to true to draw a pill-style button with rounded edges.
         */
        "pill"?: boolean;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The button's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
        /**
          * The different variants. The options are: `"default"`, `"primary"`, `"secondary"`, `"danger"`, and `"plain"`.
         */
        "variant"?: 'default' | 'primary' | 'secondary' | 'danger' | 'plain';
    }
    interface WayDropdown {
        /**
          * Determines whether the dropdown should hide when a menu item is selected.
         */
        "closeOnSelect"?: boolean;
        /**
          * The dropdown will close when the user interacts outside of this element (e.g. clicking).
         */
        "containingElement"?: HTMLElement;
        /**
          * The distance in pixels from which to offset the panel away from its trigger.
         */
        "distance"?: number;
        /**
          * Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto|scroll`.
         */
        "hoist"?: boolean;
        /**
          * Emitted after the dropdown closes and all transitions are complete.
         */
        "onWay-after-hide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted after the dropdown opens and all transitions are complete.
         */
        "onWay-after-show"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed.
         */
        "onWay-hide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.
         */
        "onWay-show"?: (event: CustomEvent<any>) => void;
        /**
          * Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.
         */
        "open"?: boolean;
        /**
          * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport.
         */
        "placement"?: | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';
        /**
          * The distance in pixels from which to offset the panel along its trigger.
         */
        "skidding"?: number;
    }
    interface WayInput {
        /**
          * Set to true to disable the input control.
         */
        "disabled"?: boolean;
        /**
          * The input's help text. Alternatively, you can use the help-text slot.
         */
        "helpText"?: string;
        /**
          * Specifies what if label and input must be inline.
         */
        "inline"?: boolean;
        /**
          * This will be true when the control is in an invalid state. Validity is determined by the `required` prop.
         */
        "invalid"?: boolean;
        /**
          * The inputs's label. Alternatively, you can use the label slot.
         */
        "label"?: string;
        /**
          * The input's name.
         */
        "name"?: string;
        /**
          * Emitted when the control loses focus.
         */
        "onWay-blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the control's value changes.
         */
        "onWay-change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the control gains focus.
         */
        "onWay-focus"?: (event: CustomEvent<any>) => void;
        /**
          * The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * The input's required attribute.
         */
        "required"?: boolean;
        /**
          * The input's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Specifies what type of input to use.
         */
        "type"?: string;
    }
    interface WayMenu {
        /**
          * Emitted when a menu item is selected.
         */
        "onWay-select"?: (event: CustomEvent<{ item: HTMLWayMenuItemElement }>) => void;
    }
    interface WayMenuDivider {
    }
    interface WayMenuItem {
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to draw the menu item in a disabled state.
         */
        "disabled"?: boolean;
        /**
          * A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
         */
        "value"?: string;
    }
    interface WayMenuLabel {
    }
    interface WayRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled"?: boolean;
        /**
          * Emitted when the control loses focus.
         */
        "onWay-blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the control gains focus.
         */
        "onWay-focus"?: (event: CustomEvent<any>) => void;
        /**
          * The radio's value attribute.
         */
        "value"?: string;
    }
    interface WayRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection"?: boolean;
        /**
          * The radio group label. Required for proper accessibility. Alternatively, you can use the label slot.
         */
        "label"?: string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Hides the fieldset and legend that surrounds the radio group. The label will still be read by screen readers.
         */
        "noFieldset"?: boolean;
        /**
          * Emitted when the value has changed.
         */
        "onWay-change"?: (event: CustomEvent<WayRadioGroupChangeEventDetail>) => void;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface WaySelect {
        /**
          * Set to true to add a clear button when the select is populated.
         */
        "clearable"?: boolean;
        /**
          * Set to true to disable the select control.
         */
        "disabled"?: boolean;
        /**
          * The select's help text. Alternatively, you can use the help-text slot.
         */
        "helpText"?: string;
        /**
          * Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto|scroll`.
         */
        "hoist"?: boolean;
        /**
          * This will be true when the control is in an invalid state. Validity is determined by the `required` prop.
         */
        "invalid"?: boolean;
        /**
          * The select's label. Alternatively, you can use the label slot.
         */
        "label"?: string;
        /**
          * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit.
         */
        "maxTagsVisible"?: number;
        /**
          * Set to true to enable multiselect.
         */
        "multiple"?: boolean;
        /**
          * The select's name.
         */
        "name"?: string;
        /**
          * Emitted when the control loses focus.
         */
        "onWay-blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the control's value changes.
         */
        "onWay-change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the control gains focus.
         */
        "onWay-focus"?: (event: CustomEvent<any>) => void;
        /**
          * Set to true to draw a pill-style select with rounded edges.
         */
        "pill"?: boolean;
        /**
          * The select's placeholder text.
         */
        "placeholder"?: string;
        /**
          * The select's required attribute.
         */
        "required"?: boolean;
        /**
          * The select's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * The value of the control. This will be a string or an array depending on `multiple`.
         */
        "value"?: string | Array<string>;
    }
    interface WayTag {
        /**
          * Set to true to make the tag clearable.
         */
        "clearable"?: boolean;
        /**
          * Emitted when the clear button is activated.
         */
        "onWay-clear"?: (event: CustomEvent<any>) => void;
        /**
          * Set to true to draw a pill-style tag with rounded edges.
         */
        "pill"?: boolean;
        /**
          * The tag's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * The tag's type.
         */
        "type"?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
    interface IntrinsicElements {
        "way-button": WayButton;
        "way-dropdown": WayDropdown;
        "way-input": WayInput;
        "way-menu": WayMenu;
        "way-menu-divider": WayMenuDivider;
        "way-menu-item": WayMenuItem;
        "way-menu-label": WayMenuLabel;
        "way-radio": WayRadio;
        "way-radio-group": WayRadioGroup;
        "way-select": WaySelect;
        "way-tag": WayTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "way-button": LocalJSX.WayButton & JSXBase.HTMLAttributes<HTMLWayButtonElement>;
            "way-dropdown": LocalJSX.WayDropdown & JSXBase.HTMLAttributes<HTMLWayDropdownElement>;
            "way-input": LocalJSX.WayInput & JSXBase.HTMLAttributes<HTMLWayInputElement>;
            "way-menu": LocalJSX.WayMenu & JSXBase.HTMLAttributes<HTMLWayMenuElement>;
            "way-menu-divider": LocalJSX.WayMenuDivider & JSXBase.HTMLAttributes<HTMLWayMenuDividerElement>;
            "way-menu-item": LocalJSX.WayMenuItem & JSXBase.HTMLAttributes<HTMLWayMenuItemElement>;
            "way-menu-label": LocalJSX.WayMenuLabel & JSXBase.HTMLAttributes<HTMLWayMenuLabelElement>;
            "way-radio": LocalJSX.WayRadio & JSXBase.HTMLAttributes<HTMLWayRadioElement>;
            "way-radio-group": LocalJSX.WayRadioGroup & JSXBase.HTMLAttributes<HTMLWayRadioGroupElement>;
            "way-select": LocalJSX.WaySelect & JSXBase.HTMLAttributes<HTMLWaySelectElement>;
            "way-tag": LocalJSX.WayTag & JSXBase.HTMLAttributes<HTMLWayTagElement>;
        }
    }
}
