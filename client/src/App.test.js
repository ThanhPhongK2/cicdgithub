// client/src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock store tối giản đáp ứng API mà Provider cần
const createMockStore = (preloadedState) => ({
  getState: () =>
    preloadedState || { authReducer: { authData: null, loading: false } },
  subscribe: () => () => {}, // trả về hàm unsubscribe rỗng
  dispatch: () => {},        // không làm gì
});

const renderWithProviders = (ui, { preloadedState } = {}) => {
  const store = createMockStore(preloadedState);
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

test('renders Auth when not logged in', () => {
  // Khi authData = null, App sẽ render trang Auth
  renderWithProviders(<App />, {
    preloadedState: { authReducer: { authData: null, loading: false } },
  });

  // Text có thật trong Auth.jsx của bạn
  expect(screen.getByText(/Welcome to web/i)).toBeInTheDocument();
});
