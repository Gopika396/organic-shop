const files = import.meta.glob("./image/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const img = (name) => files[`./image/${name}`];