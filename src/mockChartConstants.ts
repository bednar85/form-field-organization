export interface FormFieldEntry {
  name: string;
  label: string;
  value: string | number | string[] | undefined;
  defaultValue: string | number | string[] | undefined;
  inputValidationRules: {
    [x: string]: boolean;
  };
  characterLimit: number | null;
}

export const chartFields: FormFieldEntry[] = [
  {
    name: 'timeLastMeal',
    label: 'Time Since Last Meal',
    value: '',
    defaultValue: '',
    inputValidationRules: {
      noSpacesOrLetters: false
    },
    characterLimit: null
  },
  {
    name: 'glucoseReading',
    label: 'Glucose Reading',
    value: '',
    defaultValue: '',
    inputValidationRules: {
      noSpacesOrLetters: true
    },
    characterLimit: 4
  },
  {
    name: 'nursingActions',
    label: 'Nursing Actions',
    value: [],
    defaultValue: [],
    inputValidationRules: {
      noSpacesOrLetters: false
    },
    characterLimit: null
  }
];
