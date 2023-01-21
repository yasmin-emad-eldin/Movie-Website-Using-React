import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Login from './Components/LoginForm/login'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('Login',()=>{
  beforeEach(()=>{
    render(<Login/>);
  })

  test('test Login',()=>{
    const mail = screen.getByLabelText('Email');
    userEvent.type(mail, 'asmaa@gmail.com');

    expect(mail.value).toEqual('asmaa@gmail.com')
  })
})