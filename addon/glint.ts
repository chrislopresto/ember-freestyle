import type FreestyleUsage from 'ember-freestyle/components/freestyle/usage';
import type FreestyleUsageArgument from 'ember-freestyle/components/freestyle/usage/argument';
import type FreestyleUsageArray from 'ember-freestyle/components/freestyle/usage/array';
import type FreestyleUsageBool from 'ember-freestyle/components/freestyle/usage/bool';
import type FreestyleUsageBoolControl from 'ember-freestyle/components/freestyle/usage/bool/control';
import type FreestyleUsageNumber from 'ember-freestyle/components/freestyle/usage/number';
import type FreestyleUsageNumberControl from 'ember-freestyle/components/freestyle/usage/number/control';
import type FreestyleUsageObject from 'ember-freestyle/components/freestyle/usage/object';
import type FreestyleUsageObjectControl from 'ember-freestyle/components/freestyle/usage/object/control';
import type FreestyleUsageString from 'ember-freestyle/components/freestyle/usage/string';
import type FreestyleUsageStringControl from 'ember-freestyle/components/freestyle/usage/string/control';
import type FreestyleAnnotation from 'ember-freestyle/components/freestyle-annotation';
import type FreestyleCollection from 'ember-freestyle/components/freestyle-collection';
import type FreestyleDynamic from 'ember-freestyle/components/freestyle-dynamic';
import type FreestyleDynamicInput from 'ember-freestyle/components/freestyle-dynamic-input';
import type FreestyleDynamicInputSelectOption from 'ember-freestyle/components/freestyle-dynamic-input-select-option';
import type FreestyleFocusButton from 'ember-freestyle/components/freestyle-focus-button';
import type FreestyleGuide from 'ember-freestyle/components/freestyle-guide';
import type FreestyleMenu from 'ember-freestyle/components/freestyle-menu';
import type FreestylePalette from 'ember-freestyle/components/freestyle-palette';
import type FreestylePaletteItem from 'ember-freestyle/components/freestyle-palette-item';
import type FreestyleSection from 'ember-freestyle/components/freestyle-section';
import type FreestyleSource from 'ember-freestyle/components/freestyle-source';
import type FreestyleSubsection from 'ember-freestyle/components/freestyle-subsection';
import type FreestyleTypeface from 'ember-freestyle/components/freestyle-typeface';
import type OldFreestyleUsage from 'ember-freestyle/components/freestyle-usage';
import type FreestyleUsageControls from 'ember-freestyle/components/freestyle-usage-controls';
import type FreestyleVariant from 'ember-freestyle/components/freestyle-variant';
import type FreestyleVariantList from 'ember-freestyle/components/freestyle-variant-list';
import FreestyleHighlight from './modifiers/freestyle-highlight';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Freestyle::Usage': typeof FreestyleUsage;
    'Freestyle::Usage::Argument': typeof FreestyleUsageArgument;
    'freestyle/usage/argument': typeof FreestyleUsageArgument;
    'Freestyle::Usage::Array': typeof FreestyleUsageArray;
    'freestyle/usage/array': typeof FreestyleUsageArray;
    'Freestyle::Usage::Bool': typeof FreestyleUsageBool;
    'freestyle/usage/bool': typeof FreestyleUsageBool;
    'Freestyle::Usage::Bool::Control': typeof FreestyleUsageBoolControl;
    'Freestyle::Usage::Number': typeof FreestyleUsageNumber;
    'freestyle/usage/number': typeof FreestyleUsageNumber;
    'Freestyle::Usage::Number::Control': typeof FreestyleUsageNumberControl;
    'Freestyle::Usage::Object': typeof FreestyleUsageObject;
    'Freestyle::Usage::Object::Control': typeof FreestyleUsageObjectControl;
    'freestyle/usage/object': typeof FreestyleUsageObject;
    'Freestyle::Usage::String': typeof FreestyleUsageString;
    'freestyle/usage/string': typeof FreestyleUsageString;
    'Freestyle::Usage::String::Control': typeof FreestyleUsageStringControl;
    FreestyleAnnotation: typeof FreestyleAnnotation;
    FreestyleCollection: typeof FreestyleCollection;
    FreestyleDynamic: typeof FreestyleDynamic;
    FreestyleDynamicInput: typeof FreestyleDynamicInput;
    FreestyleDynamicInputSelectOption: typeof FreestyleDynamicInputSelectOption;
    FreestyleFocusButton: typeof FreestyleFocusButton;
    FreestyleGuide: typeof FreestyleGuide;
    FreestyleMenu: typeof FreestyleMenu;
    FreestylePalette: typeof FreestylePalette;
    FreestylePaletteItem: typeof FreestylePaletteItem;
    FreestyleSection: typeof FreestyleSection;
    FreestyleSource: typeof FreestyleSource;
    FreestyleSubsection: typeof FreestyleSubsection;
    'freestyle-subsection': typeof FreestyleSubsection;
    FreestyleTypeface: typeof FreestyleTypeface;
    FreestyleUsage: typeof OldFreestyleUsage;
    FreestyleUsageControls: typeof FreestyleUsageControls;
    FreestyleVariant: typeof FreestyleVariant;
    'freestyle-variant': typeof FreestyleVariant;
    FreestyleVariantList: typeof FreestyleVariantList;
    'freestyle-variant-list': typeof FreestyleVariantList;
    'freestyle-highlight': typeof FreestyleHighlight;
  }
}