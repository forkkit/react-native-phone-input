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
}
