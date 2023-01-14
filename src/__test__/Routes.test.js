
import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../setupTests';
import {Routes, Route } from "react-router-dom";

import CreateEmployee from "../Pages/createEmployee/CreateEmployee";
import ListeEmployee from "../Pages/listeEmployee/listeEmployee";
import Page404 from "../Pages/Error/Page404";
import Home from "../Pages/home/home"

const setup = (path) =>
  render(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/list" element={<ListeEmployee />} />
        <Route path="*" element={<Page404 />} />
      </Routes>,
    { initialEntries: [path] }
  );

describe('Routes', () => {
  it('Should display Create page', () => {
    setup('/');
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Create');
  });
});





