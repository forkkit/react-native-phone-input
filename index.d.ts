import React from 'react'
import {PropTypes} from 'prop-types'

declare module 'react-native-phone-input' {
  export type StyleType = PropTypes.object | PropTypes.number
  
  export type Country = {
    name: PropTypes.string,
    iso2: PropTypes.string,
    dialCode: PropTypes.string,
    priority: PropTypes.number,
    areaCodes: string[],
  }
  
  export interface Props extends React.Props<any> {
    flagComponent: PropTypes.func,
    textComponent: PropTypes.func,
    initialCountry: PropTypes.string,
    onChangePhoneNumber: PropTypes.func,
    value: PropTypes.string,
    style: StyleType,
    flagStyle: StyleType,
    textStyle: StyleType,
    offset: PropTypes.number,
    textProps: PropTypes.object,
    onSelectCountry: PropTypes.func,
    onPressCancel: PropTypes.func,
    onPressConfirm: PropTypes.func,
    pickerButtonColor: PropTypes.string,
    pickerBackgroundColor: PropTypes.string,
    pickerItemStyle: StyleType,
    cancelText: PropTypes.string,
    cancelTextStyle: StyleType,
    confirmText: PropTypes.string,
    confirmTextTextStyle: StyleType,
    disabled: PropTypes.bool,
    allowZeroAfterCountryCode: PropTypes.bool
    countriesList: Array<Country>
  }
  
  export default class PhoneInput extends React.Component<Props, any> {
    focus(): void
    blur(): void
    format(t: string): string
    isValidNumber(): boolean
    selectCountry(ios2: any)
    getNumberType(): any
    getValue(): any
    getDialCode(): string
    getFlag(iso2: any): any
    getAllCountries(): Country[]
    getCountryCode(): string
    getPickerData(): any
    onPressFlag(): any
    onChangePhoneNumber(n: number)
  }
}
