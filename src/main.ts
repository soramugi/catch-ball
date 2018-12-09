const sinario = require("./contents/sinario")

const main = sinario.default()

// 次に進める、要求入力値の指定などに使用
window.Key = (key?: string) => {
  if (mode === "waitKey") {
    window.lastKey = key
    next()
  }
}

let mode: string
const next = () => {
  const result = main.next()
  mode = result.value || "normal"
  if (!result.done) {
    if (mode === "normal") {
      next()
    } else if (mode === "wait") {
      const msec = main.next().value
      console.log("msec: ", msec)
      setTimeout(next, msec)
    }
  } else {
    console.log("FINISH")
  }
}

console.log("START")
next()
