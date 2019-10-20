# Room delimiting algorithm

This is an algorithm that I had to do in a test for Turim developers. Took me about an hour to finish but I think is elegant.

## What does it do?

Given the following input:

```
const data = [[1, 1, 0, 0, 0],
              [1, 1, 0, 0, 0],
              [0, 0, 0, 1, 1],
              [0, 0, 0, 1, 1]]
```

This algorith delimits the rooms represented by the grid, for example:

* A number 1 sorrounded by 0s by represents a room
```
const data = [[0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0]]
```

* Any number 0 represents a wall; with this in mind, a full wall grid will look like this:
```
const data = [[0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0]]
```
* Any number 1 that has an adjacent number 1 either vertically or horizontally is still considered the same room; therefore, the example below is still 1 room.

```
const data = [[1, 1, 1, 1, 1],
              [1, 1, 0, 0, 1],
              [0, 0, 0, 0, 1],
              [0, 0, 0, 0, 1]]
```

## Final toughts
I don't think that this algorith is bullet-proof it might have a bug or two or even cases that I didn't take into consideration. feel free to submit any PRs.

## Authors

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://victorstein.github.io"><img src="https://avatars3.githubusercontent.com/u/11080740?v=3" width="100px;"/><br /><sub><b>Alfonso Gomez</b></sub></a><br /><a title="Answering Questions">💬</a> <a title="Documentation">📖</a><a title="Tools">🔧</a> <a title="Reviewed Pull Requests">👀</a></table>

## License

This project is licensed under the ISC License 