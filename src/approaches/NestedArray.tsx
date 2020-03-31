import React, { Component } from 'react';
import { chartFields, FormFieldEntry } from '../mockChartConstants';

const getFormField = (
  formFields: (FormFieldEntry | undefined)[],
  field: string
): FormFieldEntry | undefined => {
  return formFields?.find(
    (formField: FormFieldEntry | undefined) => formField?.name === field
  );
};

const getOtherFormFields = (
  formFields: (FormFieldEntry | undefined)[],
  field: string
): (FormFieldEntry | undefined)[] => {
  return formFields?.filter(
    (formField: FormFieldEntry | undefined) => formField?.name === field
  );
};

const getValue = (formFields: (FormFieldEntry | undefined)[], field: string) =>
  getFormField(formFields, field)?.value;

interface NestedArrayProps {}
interface NestedArrayState {
  timeLastMeals: [];
  formFields: (FormFieldEntry | undefined)[];
  notes: string;
  chartHistory: [];
  graphData: [];
  isLoading: boolean;
}

class NestedArray extends Component<NestedArrayProps, NestedArrayState> {
  constructor(props) {
    super(props);

    this.state = {
      timeLastMeals: [],
      formFields: [...chartFields],
      notes: '',
      chartHistory: [],
      graphData: [],
      isLoading: true
    };
  }

  handleInputChange = (field: string, { target }) => {
    const { formFields } = this.state;
    const { value } = target;

    const targetFormField = getFormField(formFields, field);
    const otherFormFields = getOtherFormFields(formFields, field);

    if (targetFormField) {
      targetFormField.value = value;

      this.setState({
        formFields: [...otherFormFields, targetFormField]
      });
    }

    // then either there would be an if section for if you were updating something outside of formFields like notes, or we would add notes to the chartFields array
  };

  resetForm = () =>
    this.setState({
      formFields: [...chartFields],
      notes: ''
    });

  render() {
    const { formFields } = this.state;

    return (
      <div>
        Nested Array Approach
        <div>
          Glucose Reading
          <input
            onChange={e => this.handleInputChange('glucoseReading', e)}
            value={getValue(formFields, 'glucoseReading')}
          />
        </div>
      </div>
    );
  }
}

export default NestedArray;
