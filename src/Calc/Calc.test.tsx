import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calc from './Calc';

test('tests the page loads with the correct text content', () => {
  render(<Calc />);
  const interestRate = screen.getByText(/Interest Rate/i);
  expect(interestRate).toBeInTheDocument();
  const topay = screen.getByText(/Years To Pay Off Mortgage/i);
  expect(topay).toBeInTheDocument();
  const houseCost = screen.getByText(/Estimated Cost Of House/i);
  expect(houseCost).toBeInTheDocument();
  const monthlyPayments = screen.getByText(/Monthly Payments: £/i);
  expect(monthlyPayments).toBeInTheDocument();
});

test('renders in interest rate component set to 3.3', () => {
  render(<Calc />);
  const interestEL = screen.getByTestId('interest')
  expect(interestEL.textContent).toBe("3.3")
})

test('renders in Years To Pay Off Mortgage component set to 10', () => {
  render(<Calc />);
  const yearEL = screen.getByTestId('years')
  expect(yearEL.textContent).toBe("25")
})

// put value into input box and get the correct monthly payment when button clicked

test('render correct initial states and calculation of monthly payment', () => {
  render(<Calc />);
  const inputEl = screen.getByTestId('houseCost');
  userEvent.type(inputEl, "350000")
  userEvent.click(screen.getByRole('button'))
  const outputEL = screen.getByTestId('monthly')
  expect(outputEL.textContent).toBe("Monthly Payments: £1715")
})