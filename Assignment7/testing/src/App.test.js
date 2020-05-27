import React from 'react';
import { render, wait } from '@testing-library/react';
import Weather from './Weather.js'

jest.mock('./TemperatureDataSource');
import temperatureDataSource from "./TemperatureDataSource"
//import Colorize from './Colorize.js';
jest.mock('./Colorize.js');
import Colorize_Mocked from './Colorize.js';
import TemperatureDataSource from './TemperatureDataSource';
const Colorize_Actual = jest.requireActual('./Colorize.js');
const Colorize = Colorize_Actual.default;

describe("colorize component tests", () => {
    test("If the tempature is hot (>= 90) return 'red'", () => {
        for (let x = 90; x <= 90; x++) {
            expect(Colorize(x)).toBe('red');
        }
    });
    test("If the tempature is hot (>= 90) return 'red' boundry test", () => {
        expect(Colorize(90)).toBe('red');
        expect(Colorize(91)).toBe('red');
        expect(Colorize(89)).toBe('orange');
    });

    test("If the temperature is warm (>= 70) return 'orange'", () => {
        for (let x = 70; x <= 89; x++) {
            expect(Colorize(x)).toBe('orange');
        }
    });

    test("If the temperature is warm (>= 70) return 'orange' boundry test", () => {
        expect(Colorize(71)).toBe('orange');
        expect(Colorize(70)).toBe('orange');
        expect(Colorize(69)).toBe('white');
    });

    test("If the temperature is cold (<= 30) return 'blue'", () => {
        for (let x = 30; x <= 30; x++) {
            expect(Colorize(x)).toBe('blue');
        }
    });

    test("If the temperature is cold (<= 30) return 'blue' boundry test", () => {
        expect(Colorize(29)).toBe('blue');
        expect(Colorize(30)).toBe('blue');
        expect(Colorize(31)).toBe('white');
    });


    test("If the temperature is a negative number return 'blue'", () => {
        expect(Colorize(-14)).toBe('blue');
    });


    test("If the temperature is (< 30 || > 70) return 'white' ", () => {
        for (let x = 30; x < 30 && x > 70; x++) {
            expect(Colorize(40)).toBe('white');
        }
    });

    test("If the temperature is (< 30 || > 70) return 'white' boundry test", () => {
        expect(Colorize(30)).toBe('blue');
        expect(Colorize(31)).toBe('white');
        expect(Colorize(29)).toBe('blue');

        expect(Colorize(70)).toBe('orange');
        expect(Colorize(71)).toBe('orange');
        expect(Colorize(69)).toBe('white');
    });
});

describe("colorize error component tests", () => {
    test("If the tempature is NAN return 'white'", async () => {
        expect(Colorize(isNaN('a'))).toBe('white');
    });

    test("If the temperature is null return 'white'", () => {
        expect(Colorize(null)).toBe('white');
    });

    test("If the temperature is undefined return 'white'", () => {
        expect(Colorize(undefined)).toBe('white');
    });
});



describe("<Weather> component tests", () => {
    test("displays data from temperature data source", async () => {
        const mockedTemperatureValue = "cat";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        const weatherComponent = render(<Weather />);
        expect(temperatureDataSource).toHaveBeenCalled()
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            expect(temperatureParagraph).toBeInTheDocument()
        });
    })

    test("<Weather> component returns red", async () => {
        Colorize_Mocked.mockImplementation(() => {
            return 'red'
        })
        const mockedTemperatureValue = "90";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe('red');
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

    test("<Weather> component returns orange", async () => {
        Colorize_Mocked.mockImplementation(() => {
            return 'orange'
        })
        const mockedTemperatureValue = "85";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe('orange');
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

    test("<Weather> component returns blue", async () => {
        Colorize_Mocked.mockImplementation(() => {
            return 'blue'
        })
        const mockedTemperatureValue = "20";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe('blue');
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

    test("<Weather> component returns white for >30 || <70", async () => {
        Colorize_Mocked.mockImplementation(() => {
            return 'white'
        })
        const mockedTemperatureValue = "35";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe('white');
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

});

describe("<Weather> component error tests", () => {
    test("If tempature is <Weather> component returns white for NaN, it is not rendered in <Weather> component", async () => {
        const tempValue = "a";
        TemperatureDataSource.mockImplementation(() => {
            return Promise.resolve(NaN);
        });

        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const tempNodes = weatherComponent.queryAllByText(tempValue)
            expect(tempNodes.length).toBe(0);
        });
    });

    test("If tempature is <Weather> component returns white for null, it is not rendered in <Weather> component", async () => {
        const tempValue = '97';
        TemperatureDataSource.mockImplementation(() => {
            return Promise.resolve(null);
        });

        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const tempNodes = weatherComponent.queryAllByText(tempValue)
            expect(tempNodes.length).toBe(0);
        });
    });

    test("If tempature is <Weather> component returns white for undefined, it is not rendered in <Weather> component", async () => {
        const tempValue = '88';
        TemperatureDataSource.mockImplementation(() => {
            return Promise.resolve(undefined);
        });

        const weatherComponent = render(<Weather />);
        expect(TemperatureDataSource).toHaveBeenCalled();
        await wait(() => {
            const tempNodes = weatherComponent.queryAllByText(tempValue)
            expect(tempNodes.length).toBe(0);
        });
    });
});
