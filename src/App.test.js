import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('button has initial color', () => {
//   render(<App/>);
//   // find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole('button',{name:'Change to blue'});
//   //expect the background color to be red
//   expect(colorButton).toHaveStyle({ backgroundColor:'red' })
//   // clicked button
//   fireEvent.click(colorButton);

//   // expect the background color should be red
//   expect(colorButton).toHaveStyle({ backgroundColor:"blue"});

//   //expect the button color should be changed to blue
//   expect(colorButton.textContent).toBe('Change to blue');
// });

// test('initial condition',() => {

//   render(<App/>);
// // check the button start enabled
//   const colorButton = screen.getByRole('button',{name:'Change to blue'});
//   expect(colorButton).toBeEnabled();
// // chekc the checkbox starts out unchecked
//   const checkbox = screen.getByRole('checkbox');
//   expect(checkbox).not.toBeChecked()
// })

// test('checkbox disabled the button on first click and second click it is enabled', () =>{
//   render(<App/>);
//   const checkbox = screen.getByRole('checkbox',{name:'Disabled checkbox'});
//   const button = screen.getByRole('button',{name:"Change to gray"});

//   // case 1 button is disabled  when checkbox checked
//   fireEvent.click(checkbox);
//   expect(button).toBeDisabled();

//   // case 2 button is enabled when  checkbox unchecked
//   fireEvent.click(checkbox);
//   expect(button).toBeEnabled();

// })
test('disabled button has gray background color and reverts to red',() => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disabled button'});
  const colorButton = screen.getByRole('button', {name: 'Change to red'});

  // disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:gray');

  // reverts to 
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:red');

});

test('clicked disabled button has gray background  and reverts to blue',() => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox',{name:'Disabled button'});
  const colorButton = screen.getByRole('button',{name:'Change to blue'});

  //  change to blue
  fireEvent.click(colorButton);

  // disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:gray');
  
  // re-enabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:blue');

})
