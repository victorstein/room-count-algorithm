function numOffices (grid) {
  let offices = 0

  for (const [i, office] of grid.entries()) {
    for (const [j] of office.entries()) {
      let officeContinues = grid[i][j - 1] && grid[i][j]
      if (i > 0) {
        officeContinues = (grid[i][j - 1] && grid[i][j]) || (grid[i - 1][j] && grid[i][j])
      }

      if (grid[i][j] === 1 && !officeContinues) offices++
    }
  }

  return offices
};

const data = [[1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]]

console.log(numOffices(data))
