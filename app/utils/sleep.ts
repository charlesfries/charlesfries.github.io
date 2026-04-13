export default function sleep(millis: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
