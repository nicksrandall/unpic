export const setParamIfDefined = (
  url: URL,
  key: string,
  value?: string | number,
  deleteExisting?: boolean,
) => {
  if (value) {
    url.searchParams.set(key, value.toString());
  } else if (deleteExisting) {
    url.searchParams.delete(key);
  }
};

export const setParamIfUndefined = (
  url: URL,
  key: string,
  value: string | number,
) => {
  if (!url.searchParams.has(key)) {
    url.searchParams.set(key, value.toString());
  }
};

export const getNumericParam = (url: URL, key: string) => {
  const value = Number(url.searchParams.get(key));
  return isNaN(value) ? undefined : value + 1;
};
