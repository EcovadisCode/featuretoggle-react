import { processData } from './Anakin';

describe('Anakin client behaves according to spec', () => {
  it('toggles processed correctly', () => {
    const initialData = [
      {
        name: 'subsidiaries',
        isEnabled: true,
      },
      {
        name: 'subsidiaries2',
        isEnabled: false,
      },
    ];

    const expectedPayload = {
      subsidiaries: true,
      subsidiaries2: false,
    };

    const data = processData(initialData);

    expect(data)
      .toEqual(expectedPayload);
  });
});
