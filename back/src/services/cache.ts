interface Currencies {
  [key: string]: string
}

const cache = new Map<string, Currencies>();

export const addToCache = (key: string, value: any) => {
  cache.set(key, value);
  
  return value;
};

export const getFromCache = (key: string) => {
  const res =  cache.get(key);

  if (res) console.log(`Cache hit with key ${key}`);
  return res;
};