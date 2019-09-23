import React from 'react';
import PropTypes from 'prop-types';

declare module 'react-native-phone-input' {
  export type StyleType = PropTypes.object | PropTypes.number
  
  export type Country = {
    name: PropTypes.string,
    iso2: PropTypes.string,
    dialCode: PropTypes.string,
    priority: PropTypes.number,
    areaCodes: string[],
  }
  
  export type State = {
    iso2: string
    disabled: boolean
    formattedNumber: string
    value: any
    inputValue: string
  }
  
  export type CountryPickerState = {
    bottomColor: string
    modalVisible: boolean
    selectedCountry: string
  }
  
  export interface CountryPickerProps {
    buttonColor: PropTypes.string,
    labels: PropTypes.array,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    itemStyle: PropTypes.object,
    onSubmit: PropTypes.func,
    onPressCancel: PropTypes.func,
    onPressConfirm: PropTypes.func,
  }
  
  export interface Props extends React.Props<any> {
    flagComponent?: PropTypes.func,
    textComponent?: PropTypes.func,
    initialCountry?: PropTypes.string,
    onChangePhoneNumber?: PropTypes.func,
    onTextFocus?: PropTypes.func,
    onFlagChange?: PropTypes.func,
    value?: PropTypes.string,
    style?: StyleType,
    flagStyle?: StyleType,
    textStyle?: StyleType,
    offset?: PropTypes.number,
    textMaxLength?: PropTypes.number,
    textProps?: PropTypes.object,
    onSelectCountry?: PropTypes.func,
    onPressCancel?: PropTypes.func,
    onPressConfirm?: PropTypes.func,
    pickerButtonColor?: PropTypes.string,
    pickerBackgroundColor?: PropTypes.string,
    pickerItemStyle?: StyleType,
    cancelText?: PropTypes.string,
    cancelTextStyle?: StyleType,
    confirmText?: PropTypes.string,
    confirmTextTextStyle?: StyleType,
    disabled?: PropTypes.bool,
    allowZeroAfterCountryCode?: PropTypes.bool
    countriesList?: Array<Country>
  }
  
  export class CountryPicker extends React.Component<CountryPickerProps, CountryPickerState> {
    selectCountry(s: string): void
    onPressCancel(): void
    onPressSubmit(): void
    onValueChange(s: string): void
    show(): void
  }
  
  export default class PhoneInput extends React.Component<Props, State> {
    public static getFlag(iso: string): any
    public static getCountryByISO(iso: string): Country
    public static getCountryDialCodeByISO(iso: string): string
    public static isValidNumber(number:string, iso: string): boolean
  
    focus(): void
    blur(): void
    format(t: string): string
    isValidNumber(): boolean
    selectCountry(ios2: string)
    getNumberType(): any
    getValue(): any
    getDialCode(): string
    getISOCode(): string
    getFlag(iso2: string): any
    getAllCountries(): Country[]
    getCountryCode(): string
    getPickerData(): any
    onPressFlag(): any
    onChangePhoneNumber(n: number)
  }
}
