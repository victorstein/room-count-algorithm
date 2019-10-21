# Room delimiting algorithm

This is an algorithm that I had to do in a test for Turin developers. Took me about an hour to finish but I think is elegant.

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
The algorith is not thoroughly tested; nonetheless, it has proven to be able to handle the most akward layouts I've thrown at it.

## Changelog
* First commit included a version of the algorith that would fail to some akward layouts and the runtime was O(n²).
* Second commit includes a more robust version of the algorithm that responds well to akward layouts and the runtime was improved to be O(n)

## Authors

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://victorstein.github.io"><img src="https://avatars3.githubusercontent.com/u/11080740?v=3" width="100px;"/><br /><sub><b>Alfonso Gomez</b></sub></a><br /><a title="Answering Questions">💬</a> <a title="Documentation">📖</a><a title="Tools">🔧</a> <a title="Reviewed Pull Requests">👀</a></table>

## License

This project is licensed under the ISC License 