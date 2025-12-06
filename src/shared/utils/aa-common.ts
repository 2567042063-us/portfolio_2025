export function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

// And call it
// await delay(1000);
