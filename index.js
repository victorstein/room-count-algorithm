const roomFinder = (xAxis, yAxis, grid) => {
  // combine all the arrays to avoid nested loops
  const data = grid.reduce((x, u) => {
    x.push(...u)
    return x
  }, [])

  // use x axis to create maps
  return data.reduce(({
    index,
    currentMap,
    allMaps,
    offices,
    rowInxdex
  }, u, i) => {
    if (index === xAxis) {
      rowInxdex++
      allMaps.push(currentMap)
      index = 0
      currentMap = []
    }

    currentMap.push(u)

    if (allMaps.length === 0) {
      if (u === 1 && !currentMap[index - 1]) {
        offices++
      }
    } else {
      if ((
        (u === 1 && !currentMap[index - 1]) &&
        (u === 1 && !allMaps[rowInxdex][index]) &&
        (u === 1 && !data[i + 1])
      )) {
        offices++
      }
    }

    index++

    return { index, currentMap, allMaps, offices, rowInxdex }
  }, {
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
