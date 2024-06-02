# Game show doors probabilities

Probabilities are simply right O.o

## What tested

Here the short: https://youtube.com/shorts/ao_u8Oxthlc?si=CVzeZkfwwGzILs4v

I test on a million of tries of each situation. (1 millions keep same door, 1 millions change door after the presentator open a box)

Each time the same result.

```javascript
// Result of test 1
{
  keepSameDoor: { wins: 222327, looses: 777673 },
  changeDoor: { wins: 500580, looses: 499420 }
}

// Result of test 2
{
  keepSameDoor: { wins: 221690, looses: 778310 },
  changeDoor: { wins: 499917, looses: 500083 }
}

// Result of test 3
{
  keepSameDoor: { wins: 222703, looses: 777297 },
  changeDoor: { wins: 499945, looses: 500055 }
}

// Result of test 4
{
  keepSameDoor: { wins: 222145, looses: 777855 },
  changeDoor: { wins: 499869, looses: 500131 }
}

// Always the same kind of results
// ...
```

## How to run

To run that, simply install nodeJS on your OS, then run `node index.js`

Otherwise simply run that cpde in your browser.
