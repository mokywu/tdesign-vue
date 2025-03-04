/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { TimePickerProps } from '../time-picker';
import { Dayjs } from 'dayjs';
import { RangeInputProps } from '../range-input';
import { TNode } from '../common';

export interface TdDatePickerProps {
  /**
   * 是否允许输入日期
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。`{ from: 'A', to: 'B' }` 表示在 A 到 B 之间的日期会被禁用。`{ before: 'A', after: 'B' }` 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableDate;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示时间选择
   * @default false
   */
  enableTimePicker?: boolean;
  /**
   * 第一天从星期几开始
   */
  firstDayOfWeek?: number;
  /**
   * 用于格式化日期，全局配置默认为：'YYYY-MM-DD'，[详细文档](https://day.js.org/docs/en/display/format)
   */
  format?: string;
  /**
   * 透传给输入框（Input）组件的参数
   */
  inputProps?: InputProps;
  /**
   * 选择器模式
   * @default date
   */
  mode?: 'year' | 'quarter' | 'month' | 'week' | 'date';
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 透传给 popup 组件的参数
   */
  popupProps?: PopupProps;
  /**
   * 用于自定义组件前置图标
   */
  prefixIcon?: TNode;
  /**
   * 预设快捷日期选择，示例：`{ '元旦': '2021-01-01', '昨天':  dayjs().subtract(1, 'day').format('YYYY-MM-DD'), '特定日期': () => ['2021-02-01'] }`
   */
  presets?: PresetDate;
  /**
   * 预设面板展示区域（包含确定按钮）
   * @default bottom
   */
  presetsPlacement?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * 输入框状态
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 用于自定义组件后置图标
   */
  suffixIcon?: TNode;
  /**
   * 透传 TimePicker 组件属性
   */
  timePickerProps?: TimePickerProps;
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: string | TNode;
  /**
   * 选中值
   * @default ''
   */
  value?: DateValue;
  /**
   * 选中值，非受控属性
   * @default ''
   */
  defaultValue?: DateValue;
  /**
   * 用于格式化日期，默认为：'YYYY-MM-DD'，可选值：'date/time-stamp/YYY-MM-DD' 等，[更多可选值见 Dayjs 详细文档](https://day.js.org/docs/en/display/format)。<br /> 其中 `valueType=date` 表示 `value` 数据类型为 `Date`；`valueType='time-stamp'` 表示 `value` 数据类型为时间戳
   * @default ''
   */
  valueType?: string;
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (context: { value: DateValue; e: FocusEvent }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateValue, context: { dayjsValue?: Dayjs; trigger?: DatePickerTriggerSource }) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: { value: DateValue; e: FocusEvent }) => void;
  /**
   * 面板选中值后触发
   */
  onPick?: (value: DateValue) => void;
}

export interface TdDateRangePickerProps {
  /**
   * 是否允许输入日期
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否显示清楚按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableRangeDate;
  /**
   * 是否禁用组件，值为数组表示可分别控制开始日期和结束日期是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示时间选择
   * @default false
   */
  enableTimePicker?: boolean;
  /**
   * 第一天从星期几开始
   */
  firstDayOfWeek?: number;
  /**
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default ''
   */
  format?: string;
  /**
   * 选择器模式
   * @default date
   */
  mode?: 'year' | 'quarter' | 'month' | 'week' | 'date';
  /**
   * 在开始日期选中之前，面板是否显示预选状态，即是否高亮预选日期
   * @default true
   */
  panelPreselection?: boolean;
  /**
   * 占位符，值为数组表示可分别为开始日期和结束日期设置占位符
   */
  placeholder?: string | Array<string>;
  /**
   * 透传给 popup 组件的参数
   */
  popupProps?: PopupProps;
  /**
   * 组件前置图标
   */
  prefixIcon?: TNode;
  /**
   * 预设快捷日期选择，示例：{ '特定日期范围': ['2021-01-01', '2022-01-01'], '本月': [dayjs().startOf('month'), dayjs().endOf('month')] }
   */
  presets?: PresetRange;
  /**
   * 预设面板展示区域（包含确定按钮）
   * @default bottom
   */
  presetsPlacement?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * 透传给范围输入框 RangeInput 组件的参数
   */
  rangeInputProps?: RangeInputProps;
  /**
   * 日期分隔符
   * @default -
   */
  separator?: string;
  /**
   * 输入框状态
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 组件后置图标
   */
  suffixIcon?: TNode;
  /**
   * 透传 TimePicker 组件属性
   */
  timePickerProps?: TimePickerProps;
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: string | TNode;
  /**
   * 选中值
   * @default []
   */
  value?: DateRangeValue;
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: DateRangeValue;
  /**
   * 用于格式化日期，默认为：'YYYY-MM-DD'，可选值：'date/time-stamp/YYY-MM-DD' 等，[更多可选值见 Dayjs 详细文档](https://day.js.org/docs/en/display/format)。<br /> 其中 `valueType=date` 表示 `value` 数据类型为 `Date`；`valueType='time-stamp'` 表示 `value` 数据类型为时间戳
   * @default ''
   */
  valueType?: string;
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateRangeValue, context: { dayjsValue?: Dayjs[]; trigger?: DatePickerTriggerSource }) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void;
  /**
   * 输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值
   */
  onInput?: (context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent }) => void;
  /**
   * 选中日期时触发，可能是开始日期，也可能是结束日期，第二个参数可以区分是开始日期或是结束日期
   */
  onPick?: (value: DateValue, context: PickContext) => void;
}

export interface TdDatePickerPanelProps
  extends Pick<
    TdDatePickerProps,
    | 'value'
    | 'defaultValue'
    | 'valueType'
    | 'disabled'
    | 'disableDate'
    | 'enableTimePicker'
    | 'firstDayOfWeek'
    | 'format'
    | 'mode'
    | 'presets'
    | 'presetsPlacement'
    | 'timePickerProps'
  > {
  /**
   * 点击日期单元格时触发
   */
  onCellClick?: (context: { date: Date; e: MouseEvent }) => void;
  /**
   * 选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同
   */
  onChange?: (
    value: DateValue,
    context: { dayjsValue?: Dayjs; e?: MouseEvent; trigger?: DatePickerTriggerSource },
  ) => void;
  /**
   * 如果存在“确认”按钮，则点击“确认”按钮时触发
   */
  onConfirm?: (context: { date: Date; e: MouseEvent }) => void;
  /**
   * 月份切换发生变化时触发
   */
  onMonthChange?: (context: {
    month: number;
    date: Date;
    e?: MouseEvent;
    trigger: DatePickerMonthChangeTrigger;
  }) => void;
  /**
   * 点击面板时触发
   */
  onPanelClick?: (context: { e: MouseEvent }) => void;
  /**
   * 如果存在“确认”按钮，则点击“确认”按钮时触发
   */
  onPresetClick?: (context: { preset: PresetDate; e: MouseEvent }) => void;
  /**
   * 时间切换发生变化时触发
   */
  onTimeChange?: (context: { time: string; date: Date; trigger: DatePickerTimeChangeTrigger; e?: MouseEvent }) => void;
  /**
   * 年份切换发生变化时触发
   */
  onYearChange?: (context: { year: number; date: Date; trigger: DatePickerYearChangeTrigger; e?: MouseEvent }) => void;
}

export interface TdDateRangePickerPanelProps
  extends Pick<
    TdDateRangePickerProps,
    | 'value'
    | 'defaultValue'
    | 'valueType'
    | 'disabled'
    | 'disableDate'
    | 'enableTimePicker'
    | 'firstDayOfWeek'
    | 'format'
    | 'mode'
    | 'presets'
    | 'presetsPlacement'
    | 'panelPreselection'
    | 'timePickerProps'
  > {
  /**
   * 点击日期单元格时触发
   */
  onCellClick?: (context: { date: Date[]; partial: DateRangePickerPartial; e: MouseEvent }) => void;
  /**
   * 选中值发生变化时触发。参数 `context.trigger` 表示触发当前事件的来源，不同的模式触发来源也会不同
   */
  onChange?: (
    value: DateRangeValue,
    context: {
      dayjsValue?: Dayjs[];
      partial: DateRangePickerPartial;
      e?: MouseEvent;
      trigger?: DatePickerTriggerSource;
    },
  ) => void;
  /**
   * 如果存在“确认”按钮，则点击“确认”按钮时触发
   */
  onConfirm?: (context: { date: Date[]; e: MouseEvent }) => void;
  /**
   * 月份切换发生变化时触发
   */
  onMonthChange?: (context: {
    month: number;
    date: Date[];
    partial: DateRangePickerPartial;
    e?: MouseEvent;
    trigger: DatePickerMonthChangeTrigger;
  }) => void;
  /**
   * 点击面板时触发
   */
  onPanelClick?: (context: { e: MouseEvent }) => void;
  /**
   * 如果存在“确认”按钮，则点击“确认”按钮时触发
   */
  onPresetClick?: (context: { preset: PresetDate; e: MouseEvent }) => void;
  /**
   * 时间切换发生变化时触发
   */
  onTimeChange?: (context: {
    time: string;
    date: Date[];
    partial: DateRangePickerPartial;
    trigger: DatePickerTimeChangeTrigger;
    e?: MouseEvent;
  }) => void;
  /**
   * 年份切换发生变化时触发
   */
  onYearChange?: (context: {
    year: number;
    date: Date[];
    partial: DateRangePickerPartial;
    trigger: DatePickerYearChangeTrigger;
    e?: MouseEvent;
  }) => void;
}

export type DisableDate = Array<DateValue> | DisableDateObj | ((date: DateValue) => boolean);

export interface DisableDateObj {
  from?: string;
  to?: string;
  before?: string;
  after?: string;
}

export interface PresetDate {
  [name: string]: DateValue | (() => DateValue);
}

export type DateValue = string | number | Date;

export type DatePickerTriggerSource = 'confirm' | 'pick' | 'enter' | 'preset' | 'clear';

export type DisableRangeDate =
  | Array<DateValue>
  | DisableDateObj
  | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean);

export type DateRangePickerPartial = 'start' | 'end';

export interface PresetRange {
  [range: string]: DateRange | (() => DateRange);
}

export type DateRange = [DateValue, DateValue];

export type DateRangeValue = Array<DateValue>;

export interface PickContext {
  e: MouseEvent;
  partial: DateRangePickerPartial;
}

export type DatePickerMonthChangeTrigger = 'month-select' | 'month-arrow-next' | 'month-arrow-previous' | 'today';

export type DatePickerTimeChangeTrigger = 'time-hour' | 'time-minute' | 'time-second';

export type DatePickerYearChangeTrigger = 'year-select' | 'year-arrow-next' | 'year-arrow-previous' | 'today';
