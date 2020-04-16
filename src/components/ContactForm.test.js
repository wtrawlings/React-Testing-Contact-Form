import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

//arrange, act, assert
test('firs, last name, email and message inputs are rendered', () => {
    //arrange- choose and RENDER the part to test
    const { getByLabelText } = render(<ContactForm />);
    //act - grab something and put in a variable
    //we skipped this thing and it is called concise
    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('form submit adds new animal to the list', () => {
    //arrange- select component to render, 
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);
    //act- query for all the input nodes
    const fNameInput = getByLabelText(/first name/i);
    const lNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    //use the change event to add the text to each input
    //fireEvent for this takes onChange
    fireEvent.change(fNameInput, { target: {value: 'First'}})
    fireEvent.change(lNameInput, { target: {value: 'Last'}})
    fireEvent.change(emailInput, { target: {value: 'email'}})
    fireEvent.change(messageInput, { target: {value: 'message'}})

    //assert
    expect(fNameInput.value).toBe("First");
    expect(lNameInput.value).toBe("Last");
    expect(emailInput.value).toBe("email");
    expect(messageInput.value).toBe("message");

    //simulate the button click
    fireEvent.click(getByText(/submit/i))

    //assert- that the species is added to the list
    //const animalText = getByText(/test species/i);
    //the above line should work but because of multiple positives we need to do something else
    const dataText = getByTestId(/data/i);

    expect(dataText).toBeInTheDocument();
    //this should be fales
});