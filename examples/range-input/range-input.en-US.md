:: BASE_DOC ::

## API
### RangeInput Props

name | type | default | description | required
-- | -- | -- | -- | --
activeIndex | Number | - | \- | N
clearable | Boolean | false | \- | N
disabled | Boolean | false | \- | N
format | Array / Function | - | Typescript：`InputFormatType | Array<InputFormatType>` | N
inputProps | Object / Array | - | Typescript：`InputProps | Array<InputProps>`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
label | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
placeholder | String / Array | - | Typescript：`string | Array<string>` | N
prefixIcon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
readonly | Boolean | false | \- | N
separator | String / Slot / Function | '-' | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
showClearIconOnEmpty | Boolean | false | \- | N
size | String | medium | options：small/medium/large | N
status | String | - | options：success/warning/error | N
suffix | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
suffixIcon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
tips | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
value | Array | [] | `v-model` is supported。Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
onBlur | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/> | N
onChange | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: InputEvent | MouseEvent; position?: RangeInputPosition; trigger?: 'input' | 'clear' })    => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputPosition = 'first' | 'second' | 'all'`<br/> | N
onClear | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/> | N
onClick | Function |  | TS 类型：`(context?: { e?: MouseEvent; position?: RangeInputPosition }) => void`<br/> | N
onEnter | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: InputEvent | MouseEvent; position?: RangeInputPosition })  => void`<br/> | N
onFocus | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/> | N
onMouseenter | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>trigger on mouseenter | N
onMouseleave | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/> | N

### RangeInput Events

name | params | description
-- | -- | --
blur | `(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition })` | \-
change | `(value: RangeInputValue, context?: { e?: InputEvent | MouseEvent; position?: RangeInputPosition; trigger?: 'input' | 'clear' })   ` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputPosition = 'first' | 'second' | 'all'`<br/>
clear | `(context: { e: MouseEvent })` | \-
click | `(context?: { e?: MouseEvent; position?: RangeInputPosition })` | \-
enter | `(value: RangeInputValue, context?: { e?: InputEvent | MouseEvent; position?: RangeInputPosition }) ` | \-
focus | `(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition })` | \-
mouseenter | `(context: { e: MouseEvent })` | trigger on mouseenter
mouseleave | `(context: { e: MouseEvent })` | \-

### RangeInputInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
blur | `(options?: {position?: RangeInputPosition})` | \- | \-
focus | `(options?: {position?: RangeInputPosition})` | \- | \-
select | `(options?: {position?: RangeInputPosition})` | \- | \-

### RangeInputPopup Props

name | type | default | description | required
-- | -- | -- | -- | --
autoWidth | Boolean | false | \- | N
disabled | Boolean | false | \- | N
inputValue | Array | - | `.sync` is supported。Typescript：`RangeInputValue` | N
defaultInputValue | Array | - | uncontrolled property。Typescript：`RangeInputValue` | N
panel | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
popupVisible | Boolean | - | \- | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
readonly | Boolean | false | \- | N
status | String | - | options：success/warning/error | N
tips | String / Slot / Function | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onInputChange | Function |  | TS 类型：`(value: RangeInputValue, context?: RangeInputValueChangeContext)  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent | MouseEvent; trigger?: 'input' | 'clear', position?: RangeInputPosition }`<br/> | N
onPopupVisibleChange | Function |  | TS 类型：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/> | N

### RangeInputPopup Events

name | params | description
-- | -- | --
input-change | `(value: RangeInputValue, context?: RangeInputValueChangeContext) ` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent | MouseEvent; trigger?: 'input' | 'clear', position?: RangeInputPosition }`<br/>
popup-visible-change | `(visible: boolean, context: PopupVisibleChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/>
