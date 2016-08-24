/* @flow */

/**
 *   No compile errors, but when running the file the error
 *   /Users/chris/github/tcomb-await-bug/build.js:35
 *   yield somePromise();
 *   ^^^^^
 *
 *   is thrown
 *
 *   side note: "passPerPreset": true, breaks build
 */

const somePromise = (): Promise<void> => new Promise((resolve: Function): void => {
  console.log('finished');
  return resolve();
});

async function foo1(): Promise<string> {
  // Remove ': Promise<void>' and will work as expected
  const fn = async(): Promise<void> => {
    console.log('starting');

    await somePromise();
  };

  await fn();
}

foo1();
