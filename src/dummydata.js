const dummydata = {
  entries: [
    {
      id: 1,
      date: "April 18, 2021",
      cardio: {
        rounds: 1,
        roundLength: 15,
        rating: 5,
        totalLength: 15,
      },
      submissions: {
        count: 1,
        category: "chokes",
        subName: "Rear Naked Choke",
      },
      taps: {
        count: 2,
        category: "arm attacks",
        subName: "Arm Bar",
      },
      sweeps: {
        count: 3,
        category: "open guard",
        sweepName: "Sumi Gaeshi",
      },
    },
    {
      id: 2,
      date: "April 19, 2021",
      cardio: {
        rounds: 2,
        roundLength: 10,
        rating: 4,
        totalLength: 20,
      },
      submissions: {
        count: 2,
        category: "leg attacks",
        subName: "Ankle Lock",
      },
      taps: {
        count: 1,
        category: "chokes",
        subName: "Arm Triangle",
      },
      sweeps: {
        count: 3,
        category: "closed guard",
        sweepName: "Pendulum Sweep",
      },
    },
    {
      id: 3,
      date: "April 20, 2021",
      cardio: {
        rounds: 3,
        roundLength: 5,
        rating: 3,
        totalLength: 15,
      },
      submissions: {
        count: 4,
        category: "arm attacks",
        subName: "kimura",
      },
      taps: {
        count: 2,
        category: "leg attacks",
        subName: "Heel Hook",
      },
      sweeps: {
        count: 2,
        category: "closed guard",
        sweepName: "Hip Bump",
      },
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
      color: "hsl(218, 70%, 50%)",
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
