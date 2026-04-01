const startDate = new Date(2022, 9, 1); // Oktober 2022
const years = parseFloat(
  ((new Date() - startDate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)
);

const counterItems = [
  {
    icon: "bi bi-briefcase",
    count: years,
    decimals: 1,
    duration: 1.7,
    titleKey: "experience",
  },
  {
    icon: "bi bi-people",
    count: 450,
    decimals: 0,
    duration: 1.7,
    titleKey: "users",
  },
];

export default counterItems;
