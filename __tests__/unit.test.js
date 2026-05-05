// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: (123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: 123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: abc-defg is not a valid phone number', () => {
  expect(isPhoneNumber('abc-defg')).toBe(false);
});

test('isPhoneNumber: 123-456 is not a valid phone number', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

// isEmail
test('isEmail: test@example.com is a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail: user@mail.org is a valid email', () => {
  expect(isEmail('user@mail.org')).toBe(true);
});

test('isEmail: notanemail is not a valid email', () => {
  expect(isEmail('notanemail')).toBe(false);
});

test('isEmail: user@.com is not a valid email', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: Abcd1234 is a strong password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('isStrongPassword: test_123 is a strong password', () => {
  expect(isStrongPassword('test_123')).toBe(true);
});

test('isStrongPassword: 1abc is not a strong password (starts with digit)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword: ab is not a strong password (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate: 1/1/2020 is a valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('isDate: 12/31/2023 is a valid date', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('isDate: 13/1/20 is not a valid date (year too short)', () => {
  expect(isDate('13/1/20')).toBe(false);
});

test('isDate: not-a-date is not a valid date', () => {
  expect(isDate('not-a-date')).toBe(false);
});

// isHexColor
test('isHexColor: #fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor: #abc123 is a valid hex color', () => {
  expect(isHexColor('#abc123')).toBe(true);
});

test('isHexColor: #gg1 is not a valid hex color', () => {
  expect(isHexColor('#gg1')).toBe(false);
});

test('isHexColor: #12 is not a valid hex color (only 2 digits)', () => {
  expect(isHexColor('#12')).toBe(false);
});
