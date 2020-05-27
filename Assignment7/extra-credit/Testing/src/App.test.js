import React from 'react';
import { render, wait } from '@testing-library/react';
import Weather from './Weather.js'

jest.mock('./TemperatureDataSource');
import temperatureDataSource from "./TemperatureDataSource"
import Colorize from './Colorize.js';
// jest.mock('./Colorize.js');
// import Colorize_MOCKED from './Colorize.js';
// const Colorize_ACTUALIMPLC_MODULE = jest.requireActual('./Colorize.js');
// const Colorize_ACTUALIMPLC = Colorize_ACTUALIMPLC_MODULE.default;

describe("colorize component tests", () => {
    test("If the tempature is hot (>= 90) return 'red'", async () => {
        const mockedTemperatureValue = "93";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('red');
        });
    });

    test("If the temperature is warm (>= 70) return 'orange'", async () => {
        const mockedTemperatureValue = "71";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('orange');
        });
    });

    test("If the temperature is cold (<= 30) return 'blue'", async () => {
        const mockedTemperatureValue = "28";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('blue');
        });
    });

    test("If the temperature is a negative number return 'blue'", async () => {
        const mockedTemperatureValue = "-3";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('blue');
        });
    });


    test("If the temperature is (< 30 || > 70) return 'white'", async () => {
        const mockedTemperatureValue = "40";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('white');
        });
    });
});

describe("colorize error component tests", () => {
    test("If the tempature is NAN return 'white'", async () => {
        const mockedTemperatureValue = "a";
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(isNaN(mockedTemperatureValue))).toBe('white');
        });
    });

    test("If the temperature is null return 'white'", async () => {
        const mockedTemperatureValue = null;
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('white');
        });
    });

    test("If the temperature is undefined return 'white'", async () => {
        const mockedTemperatureValue = undefined;
        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })
        await wait(() => {
            expect(Colorize(mockedTemperatureValue)).toBe('white');
        });
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

    test("If color displayed matches colorize", async () => {
        const mockedTemperatureValue = "60";

        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })

        const weatherComponent = render(<Weather />);
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe(Colorize(mockedTemperatureValue));
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

    // test("If progressbar is diplayed during load", () => {

    // // });

    // test("If weather component is red for =>90", async () => {
    //     Colorize_MOCKED.mockImplementation(() => {
    //         return 'red';
    //     })
    // });

    // test("If weather component is orange for >=70", async () => {
    //     Colorize_MOCKED.mockImplementation(() => {
    //         return 'red';
    //     })
    // });

    // test("If weather component is blue for =<30", async () => {
    //     Colorize_MOCKED.mockImplementation(() => {
    //         return 'red';
    //     })
    // });

    // test("If weather component is white for <30 & >70", async () => {
    //     Colorize_MOCKED.mockImplementation(() => {
    //         return 'red';
    //     })
    // });

});

describe("<Weather> component error tests", () => {
    test("If tempature is NaN, it is not rendered in <Weather> component", async () => {
        const mockedTemperatureValue = "a";

        temperatureDataSource.mockImplementation(() => {
            return Promise.resolve(mockedTemperatureValue)
        })

        const weatherComponent = render(<Weather />);
        await wait(() => {
            const temperatureParagraph = weatherComponent.getByText(mockedTemperatureValue)
            const color = temperatureParagraph.style.color;
            expect(color).toBe('white');
            expect(temperatureParagraph).toBeInTheDocument();
        });
    });

    test("If tempature is null, it is not rendered in <Weather> component", async () => {

    });

    test("If tempature is undefined, it is not rendered in <Weather> component", async () => {

    });

});
