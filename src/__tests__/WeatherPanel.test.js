import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import WeatherPanel from "../components/WeatherPanel/index";
import mockData from "../mocks/mockData.json";
import mockDataEmpty from "../mocks/mockDataEmpty.json";

const server = setupServer(
  rest.get(/openweathermap/, (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

describe("Weather App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("fetches weather data from OWM API and displays them", async () => {
    render(<WeatherPanel />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitFor(() => screen.getByTestId("weather-list"));
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("fetches empty weather data from OWM API and displays warning", async () => {
    server.use(
      rest.get(/openweathermap/, (req, res, ctx) => {
        return res(ctx.json(mockDataEmpty));
      })
    );
    render(<WeatherPanel />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    const message = await screen.findByText(/No weather data/);
    expect(message).toBeInTheDocument();
  });

  test("fetches weather data from OWM API and fails", async () => {
    server.use(
      rest.get(/openweathermap/, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<WeatherPanel />);

    const message = await screen.findByText(/Error/);
    expect(message).toBeInTheDocument();
  });

  test("renders details of selected weather item", async () => {
    render(<WeatherPanel />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitFor(() => screen.getByTestId("weather-list"));
    const firstItem = screen.getAllByRole("button")[0];

    userEvent.click(firstItem);
    expect(screen.getByTestId("weather-detail")).toBeInTheDocument();
  });
});
