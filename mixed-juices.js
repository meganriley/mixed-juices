// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return .5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      // @ts-ignore
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
// @ts-ignore
export function limesToCut(wedgesNeeded, limes) {
  //creates an array of the slices for each size lime
  let total = []
  for (let i=0; i< limes.length; i++) {
    let lime = limes[i]
    switch (lime) {
      case 'small':
        if (lime === 'small') {
          total.push(6)
        }
        break;
      case 'medium':
        if (lime === 'medium') {
          total.push(8);
        }
        break;
      case 'large':
        if (lime === 'large') {
          total.push(10)
        }
        break;
        }
  }

  //loops through array of lime slice count, summing each index
  //and counts number of limes it takes to get to wedgesNeeded
  //returns count
  let sum = 0;
  let count = 0;
  for (let i = 0; i < total.length; i++) {
    if (sum >= wedgesNeeded) {
      break;
    } else {
      sum += total[i];
      count++
    }
  }
  return count;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
// @ts-ignore
export function remainingOrders(timeLeft, orders) {
  let orderTimes = []
  for (let i=0; i< orders.length; i++) {
    let order = orders[i]
    switch (order) {
      case 'Pure Strawberry Joy':
        if (order === 'Pure Strawberry Joy') {
          orderTimes.push(.5)
          break;
        }
      // eslint-disable-next-line no-fallthrough
      case 'Energizer':
        if (order === 'Energizer') {
          orderTimes.push(1.5);
          break;
        }
      // eslint-disable-next-line no-fallthrough
      case 'Green Garden':
        if (order === 'Green Garden') {
          orderTimes.push(1.5);
          break;
        }
      // eslint-disable-next-line no-fallthrough
      case 'Tropical Island':
        if (order === 'Tropical Island') {
          orderTimes.push(3);
          break;
        }
      // eslint-disable-next-line no-fallthrough
      case 'All or Nothing':
        if (order === 'All or Nothing') {
          orderTimes.push(5);
          break;
        }
      // eslint-disable-next-line no-fallthrough
      default:
        orderTimes.push(2.5);
        break;
        }
    
}
  //console.log(orderTimes)

let index,
    sum = 0;
    
// eslint-disable-next-line array-callback-return
orderTimes.some(function(a, i) {
    index = i;
    if (sum + a > timeLeft) {
        return true;
    }
    sum += a;
});

  orders.splice(0,index)
  return orders
}

