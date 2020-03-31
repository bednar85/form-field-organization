import React, { Component } from 'react';
import { getFormFieldDefaults } from '../utils';
import { chartFields } from '../mockChartConstants';

// we could also store the full examples here, I think it would be easier if we just stored the value rather than the entire entry in 2 places
export interface FormFieldSimple {
  [x: string]: string | number | string[] | undefined;
}

interface NestedObjectProps {}
interface NestedObjectState {
  timeLastMeals: [];
  formFields: FormFieldSimple;
  notes: string;
  chartHistory: [];
  graphData: [];
  isLoading: boolean;
}

class NestedObject extends Component<NestedObjectProps, NestedObjectState> {
  constructor(props) {
    super(props);

    this.state = {
      timeLastMeals: [],
      formFields: { ...getFormFieldDefaults(chartFields) },
      notes: '',
      chartHistory: [],
      graphData: [],
      isLoading: true
    };
  }

  handleInputChange = (field: string, { target }) => {
    const { formFields } = this.state;
    const { value } = target;

    this.setState({
      formFields: { ...formFields, [field]: value }
    });

    // then either there would be an if section for if you were updating something outside of formFields like notes, or we would add notes to the chartFields array
  };

  resetForm = () =>
    this.setState({
      formFields: { ...getFormFieldDefaults(chartFields) },
      notes: ''
    });

  render() {
    const { formFields } = this.state;

    return (
      <div>
        Nested Object Approach
        <div>
          Glucose Reading
          <input
            onChange={e => this.handleInputChange('glucoseReading', e)}
            value={formFields.glucoseReading}
          />
        </div>
      </div>
    );
  }
}

export default NestedObject;
