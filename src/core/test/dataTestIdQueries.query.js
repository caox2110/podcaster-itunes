import { queryAllByAttribute, buildQueries } from '@testing-library/react';

/**
 * The queryAllByAttribute is a shortcut for attribute-based matchers
 * You can also use document.querySelector or a combination of existing
 * testing library utilities to find matching nodes for your query
 */
const queryAllByDataTestId = (...parameters) => queryAllByAttribute('data-testid', ...parameters);

const getMultipleError = (container, dataTestIdValue) =>
  `Found multiple elements with the data-testid attribute of: ${dataTestIdValue}`;
const getMissingError = (container, dataTestIdValue) =>
  `Unable to find an element with the data-testid attribute of: ${dataTestIdValue}`;

const [
  queryByDataTestId,
  getAllByDataTestId,
  getByDataTestId,
  findAllByDataTestId,
  findByDataTestId,
] = buildQueries(queryAllByDataTestId, getMultipleError, getMissingError);

export {
  queryByDataTestId,
  queryAllByDataTestId,
  getByDataTestId,
  getAllByDataTestId,
  findAllByDataTestId,
  findByDataTestId,
};
