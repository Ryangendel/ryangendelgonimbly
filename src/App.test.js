import { render, screen } from '@testing-library/react';
// import App from './App';
import API from './utils/API';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("fake test", ()=>{
//   expect(true).toBeTruthy()
// })

it('API Test', () => {
  expect.assertions(1);
  return API.search("simplify","2^2+2(2)").then(data => expect(data.data.result).toEqual('16'));
});