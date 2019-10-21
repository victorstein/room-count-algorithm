const roomFinder = (xAxis, yAxis, grid) => {
  // combine all the arrays to avoid nested loops KEEP O(n) baby!!!!
  const data = grid.reduce((x, u) => {
    x.push(...u)
    return x
  }, [])

  // Here's where the magic happens baby
  return data.reduce(({
    // de-structure the values from the accumulator
    index,
    currentMap,
    allMaps,
    offices,
    rowInxdex
  }, u, i) => {
    // If index is equal to the length of the array
    // Also increase the row index and reset the rest of the values
    if (index === xAxis) {
      rowInxdex++
      allMaps.push(currentMap)
      index = 0
      currentMap = []
    }

    // Push u to the newly built map
    currentMap.push(u)

    // Handle first iteration condition Since further checking requires subindexes of allMaps array
    let condition = (u === 1 && !currentMap[index - 1])
    if (allMaps.length !== 0) {
      condition = (
        // Horizontal lookup condition
        // This verifies that the tile before of the same row is not part of the same room
        (u === 1 && !currentMap[index - 1]) &&
        // Vertical lookup condition
        // This verifies that the tile avobe is not part of the same room
        (u === 1 && !allMaps[rowInxdex][index]) &&
        // Look ahead condition
        // This verifies that the next tile of the same row is not part of the same room
        (u === 1 && !data[i + 1])
      )
    }

    // If the conditions above are met proceed to add room
    if (condition) {
      offices++
    }

    // Increase index
    index++

    // Return the values for next iteration
    return { index, currentMap, allMaps, offices, rowInxdex }
  }, {
    // default values
    currentMap: [],
    index: 0,
    rowInxdex: -1,
    allMaps: [],
    offices: 0
  }).offices
}

const data = [[1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 1, 1]]

console.log(roomFinder(5, 4, data))
