import ValidateJS, { ValidateOption } from 'validate.js';

const { validate: validateVJS, isEmpty: isEmptyVJS, isNumber: isNumberVJS } = ValidateJS;

const validate = (attributes: any, constraints: any, options?: ValidateOption): any => {
  return validateVJS(attributes, constraints, {
    format: 'flat',
    fullMessages: false,
    ...options,
  });
};

const isEmpty = (value: any): boolean => {
  return isEmptyVJS(value);
};

const isNumber = (value: any): boolean => {
  return isNumberVJS(value);
};

export { validate, isEmpty, isNumber };
