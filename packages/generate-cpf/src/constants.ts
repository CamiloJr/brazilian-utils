export const CPF_LENGTH = 11;

export type State = keyof typeof STATES_CODE;

export const STATES_CODE = {
  RS: '0',
  DF: '1',
  GO: '1',
  MT: '1',
  MS: '1',
  TO: '1',
  AM: '2',
  PA: '2',
  RR: '2',
  AP: '2',
  AC: '2',
  RO: '2',
  CE: '3',
  MA: '3',
  PI: '3',
  PB: '4',
  PE: '4',
  AL: '4',
  RN: '4',
  BA: '5',
  SE: '5',
  MG: '6',
  RJ: '7',
  ES: '7',
  SP: '8',
  PR: '9',
  SC: '9',
};

export const STATES = Object.keys(STATES_CODE) as State[];
