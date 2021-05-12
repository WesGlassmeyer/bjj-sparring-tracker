const dummydata = {
  entries: [
    {
      id: 1,
      date: "2021-04-18",
      rounds: 1,
      round_length: 15,
      cardio: 5,
      notes: "Today was a good day!",
      submissions: [
        {
          count: 1,
          name: "Rear Naked Choke",
        },
        {
          count: 5,
          name: "Arm Bar",
        },
      ],
      taps: [
        {
          count: 2,
          name: "Arm Bar",
        },
        {
          count: 20,
          name: "Heel Hook",
        },
      ],
      sweeps: [
        {
          count: 3,
          name: "Hip Sweep",
        },
      ],
    },
    {
      id: 2,
      date: "2021-04-19",
      rounds: 2,
      round_length: 10,
      cardio: 3,
      notes: "Need to work on my arm bar defense",
      submissions: [
        {
          count: 10,
          name: "Rear Naked Choke",
        },
      ],
      taps: [
        {
          count: 1,
          name: "Arm Bar",
        },
      ],
      sweeps: [
        {
          count: 7,
          name: "Hip Sweep",
        },
      ],
    },
    {
      id: 3,
      date: "2021-04-20",
      rounds: 5,
      round_length: 5,
      cardio: 1,
      notes: "",
      submissions: [
        {
          count: 2,
          name: "Triangle",
        },
      ],
      taps: [
        {
          count: 7,
          name: "Kimura",
        },
      ],
      sweeps: [
        {
          count: 6,
          name: "Flower Sweep",
        },
        {
          count: 30,
          name: "Knee Lever",
        },
      ],
    },
  ],
  nivo: [
    {
      id: "rounds",
      data: [
        { x: "2018-01-01", y: 3 },
        { x: "2018-01-02", y: 5 },
        { x: "2018-01-03", y: 7 },
        { x: "2018-01-04", y: 5 },
        { x: "2018-01-05", y: 9 },
        { x: "2018-01-06", y: 3 },
        { x: "2018-01-07", y: 5 },
        { x: "2018-01-08", y: 7 },
      ],
    },
    {
      id: "round length",
      data: [
        { x: "2018-01-04", y: 5 },
        { x: "2018-01-05", y: 5 },
        { x: "2018-01-06", y: 6 },
        { x: "2018-01-07", y: 7 },
        { x: "2018-01-08", y: 7 },
        { x: "2018-01-09", y: 8 },
        { x: "2018-01-10", y: 8 },
        { x: "2018-01-11", y: 9 },
      ],
    },
    {
      id: "cardio",
      data: [
        { x: "2018-01-04", y: 1 },
        { x: "2018-01-05", y: 1 },
        { x: "2018-01-06", y: 2 },
        { x: "2018-01-07", y: 2 },
        { x: "2018-01-08", y: 3 },
        { x: "2018-01-09", y: 4 },
        { x: "2018-01-10", y: 4 },
        { x: "2018-01-11", y: 5 },
      ],
    },
  ],
  pie: [
    {
      id: "armbar",
      label: "armbar",
      value: 232,
      color: "hsl(118, 70%, 50%)",
    },
    {
      id: "triangle",
      label: "triangle",
      value: 525,
      color: "hsl(89, 70%, 50%)",
    },
    {
      id: "kimura",
      label: "kimura",
      value: 526,
      color: "hsl(28, 70%, 50%)",
    },
    {
      id: "heel hook",
      label: "heel hook",
      value: 475,
      color: "hsl(193, 70%, 50%)",
    },
    {
      id: "Rear Naked Choke",
      label: "Rear Naked Choke",
      value: 406,
      color: "hsl(181, 70%, 50%)",
    },
  ],
};

export default dummydata;
