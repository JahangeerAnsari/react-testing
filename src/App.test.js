import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelCaseWithSpace} from './App'


// test('button has correct initial color', () => {
//   render(<App />);

//   // find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });

//   // expect the background color to be red
//   expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

//   // click button
//   fireEvent.click(colorButton);

//   // expect the background color to be blue
//   expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

//   // expect the button text to be 'Change to red'
//   expect(colorButton.textContent).toBe('Change to red');
// });

test('button has initial color', () => {
  // find an element with a role of button has text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor:'MediumVoiletRed'});
  // click  button
  fireEvent.click(colorButton);

  //  expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the color to be 'change to midnightVoliete'
  expect(colorButton.textContent).toBe('Change to Medium Voilet Red');
})

// test('initial conditions', () => {
//   render(<App />);
  
//   // check that the button starts out enabled
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });
//   expect(colorButton).toBeEnabled();

//   // check that the checkbox starts out unchecked
//   const checkbox = screen.getByRole('checkbox');
//   expect(checkbox).not.toBeChecked();
// });

// test('Checkbox disables button on first click and enables on second click', () => {
//   render(<App />);
//   const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  
//   fireEvent.click(checkbox);
//   expect(colorButton).toBeDisabled();
  
//   fireEvent.click(checkbox);
//   expect(colorButton).toBeEnabled();
//  });
 
//  describe statement
//  a describe statement is a way of grooping tests
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpace('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});