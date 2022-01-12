// code your solution here
function superbowlWin(arr) {
    const win = arr.find(({result}) => result === 'W')
    if(win === undefined) {
        return undefined
    } else {
        return win.year
    }
  } 