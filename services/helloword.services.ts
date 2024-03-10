type HData = {
  value: string;
};

export async function getHelloWorld(name: string): Promise<HData> {
  return new Promise((resolve) => {
    resolve({ value: `Hello ${name}` });
  });
}
