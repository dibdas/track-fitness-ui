const exercise = async (id) => {
  const url = 'http://localhost:3000/exercise/id';
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const measurement = async (id) => {
  const url = 'http://localhost:3000/measurements/id';
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const postmeasurement = async (id) => {
  try {
    const response = await fetch('http://localhost:3000/measurements/id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    });
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

export { measurement, exercise, postmeasurement };
