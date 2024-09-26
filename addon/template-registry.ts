// components
import type FreestyleAnnotation from 'ember-freestyle/components/freestyle-annotation';
import type FreestyleCollection from 'ember-freestyle/components/freestyle-collection';
import type FreestyleDynamicInputSelectOption from 'ember-freestyle/components/freestyle-dynamic-input-select-option';
import type FreestyleDynamicInput from 'ember-freestyle/components/freestyle-dynamic-input';
import type FreestyleDynamic from 'ember-freestyle/components/freestyle-dynamic';
import type FreestyleFocusButton from 'ember-freestyle/components/freestyle-focus-button';
import type FreestyleGuide from 'ember-freestyle/components/freestyle-guide';
import type FreestyleMenu from 'ember-freestyle/components/freestyle-menu';
import type FreestylePaletteItem from 'ember-freestyle/components/freestyle-palette-item';
import type FreestylePalette from 'ember-freestyle/components/freestyle-palette';
import type FreestyleSection from 'ember-freestyle/components/freestyle-section';
import type FreestyleSource from 'ember-freestyle/components/freestyle-source';
import type FreestyleSubsection from 'ember-freestyle/components/freestyle-subsection';
import type FreestyleTypeface from 'ember-freestyle/components/freestyle-typeface';
import type FreestyleUsageControls from 'ember-freestyle/components/freestyle-usage-controls';
import type FreestyleUsageLegacy from 'ember-freestyle/components/freestyle-usage';
import type FreestyleVariantList from 'ember-freestyle/components/freestyle-variant-list';
import type FreestyleVariant from 'ember-freestyle/components/freestyle-variant';
import type FreestyleUsageArgument from 'ember-freestyle/components/freestyle/usage/argument';
import type FreestyleUsageArray from 'ember-freestyle/components/freestyle/usage/array';
import type FreestyleUsageBasicCssVariable from 'ember-freestyle/components/freestyle/usage/basic-css-variable';
import type FreestyleUsageBoolControl from 'ember-freestyle/components/freestyle/usage/bool/control';
import type FreestyleUsageBool from 'ember-freestyle/components/freestyle/usage/bool';
import type FreestyleUsageComponentLikeControl from 'ember-freestyle/components/freestyle/usage/component-like/control';
import type FreestyleUsageComponentLike from 'ember-freestyle/components/freestyle/usage/component-like';
import type FreestyleUsage from 'ember-freestyle/components/freestyle/usage';
import type FreestyleUsageNumberControl from 'ember-freestyle/components/freestyle/usage/number/control';
import type FreestyleUsageNumber from 'ember-freestyle/components/freestyle/usage/number';
import type FreestyleUsageObjectControl from 'ember-freestyle/components/freestyle/usage/object/control';
import type FreestyleUsageObject from 'ember-freestyle/components/freestyle/usage/object';
import type FreestyleUsageStringControl from 'ember-freestyle/components/freestyle/usage/string/control';
import type FreestyleUsageString from 'ember-freestyle/components/freestyle/usage/string';

// modifiers
import type FreestyleHighlight from 'ember-freestyle/modifiers/freestyle-highlight';
import EnsureFreestyleTheme from './modifiers/ensure-freestyle-theme';

export default interface EmberFreestyleRegistry {
  // components
  'freestyle-annotation': typeof FreestyleAnnotation;
  FreestyleAnnotation: typeof FreestyleAnnotation;
  'freestyle-collection': typeof FreestyleCollection;
  FreestyleCollection: typeof FreestyleCollection;
  'freestyle-dynamic-input-select-option': typeof FreestyleDynamicInputSelectOption;
  FreestyleDynamicInputSelectOption: typeof FreestyleDynamicInputSelectOption;
  'freestyle-dynamic-input': typeof FreestyleDynamicInput;
  FreestyleDynamicInput: typeof FreestyleDynamicInput;
  'freestyle-dynamic': typeof FreestyleDynamic;
  FreestyleDynamic: typeof FreestyleDynamic;
  'freestyle-focus-button': typeof FreestyleFocusButton;
  FreestyleFocusButton: typeof FreestyleFocusButton;
  'freestyle-guide': typeof FreestyleGuide;
  FreestyleGuide: typeof FreestyleGuide;
  'freestyle-menu': typeof FreestyleMenu;
  FreestyleMenu: typeof FreestyleMenu;
  'freestyle-palette-item': typeof FreestylePaletteItem;
  FreestylePaletteItem: typeof FreestylePaletteItem;
  'freestyle-palette': typeof FreestylePalette;
  FreestylePalette: typeof FreestylePalette;
  'freestyle-section': typeof FreestyleSection;
  FreestyleSection: typeof FreestyleSection;
  'freestyle-source': typeof FreestyleSource;
  FreestyleSource: typeof FreestyleSource;
  'freestyle-subsection': typeof FreestyleSubsection;
  FreestyleSubsection: typeof FreestyleSubsection;
  'freestyle-typeface': typeof FreestyleTypeface;
  FreestyleTypeface: typeof FreestyleTypeface;
  'freestyle-usage-controls': typeof FreestyleUsageControls;
  FreestyleUsageControls: typeof FreestyleUsageControls;
  'freestyle-usage': typeof FreestyleUsageLegacy;
  FreestyleUsage: typeof FreestyleUsageLegacy;
  'freestyle-variant-list': typeof FreestyleVariantList;
  FreestyleVariantList: typeof FreestyleVariantList;
  'freestyle-variant': typeof FreestyleVariant;
  FreestyleVariant: typeof FreestyleVariant;
  'freestyle/usage/argument': typeof FreestyleUsageArgument;
  'Freestyle::Usage::Argument': typeof FreestyleUsageArgument;
  'freestyle/usage/array': typeof FreestyleUsageArray;
  'Freestyle::Usage::Array': typeof FreestyleUsageArray;
  'freestyle/usage/basic-css-variable': typeof FreestyleUsageBasicCssVariable;
  'Freestyle::Usage::BasicCssVariable': typeof FreestyleUsageBasicCssVariable;
  'freestyle/usage/bool/control': typeof FreestyleUsageBoolControl;
  'Freestyle::Usage::Bool::Control': typeof FreestyleUsageBoolControl;
  'freestyle/usage/bool': typeof FreestyleUsageBool;
  'Freestyle::Usage::Bool': typeof FreestyleUsageBool;
  'freestyle/usage/component-like/control': typeof FreestyleUsageComponentLikeControl;
  'Freestyle::Usage::ComponentLike::Control': typeof FreestyleUsageComponentLikeControl;
  'freestyle/usage/component-like': typeof FreestyleUsageComponentLike;
  'Freestyle::Usage::ComponentLike': typeof FreestyleUsageComponentLike;
  'freestyle/usage': typeof FreestyleUsage;
  'Freestyle::Usage': typeof FreestyleUsage;
  'freestyle/usage/number/control': typeof FreestyleUsageNumberControl;
  'Freestyle::Usage::Number::Control': typeof FreestyleUsageNumberControl;
  'freestyle/usage/number': typeof FreestyleUsageNumber;
  'Freestyle::Usage::Number': typeof FreestyleUsageNumber;
  'freestyle/usage/object/control': typeof FreestyleUsageObjectControl;
  'Freestyle::Usage::Object::Control': typeof FreestyleUsageObjectControl;
  'freestyle/usage/object': typeof FreestyleUsageObject;
  'Freestyle::Usage::Object': typeof FreestyleUsageObject;
  'freestyle/usage/string/control': typeof FreestyleUsageStringControl;
  'Freestyle::Usage::String::Control': typeof FreestyleUsageStringControl;
  'freestyle/usage/string': typeof FreestyleUsageString;
  'Freestyle::Usage::String': typeof FreestyleUsageString;

  // modifiers
  'freestyle-highlight': typeof FreestyleHighlight;
  'ensure-freestyle-theme': typeof EnsureFreestyleTheme;
}
