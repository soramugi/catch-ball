export function message(text: string) {
  console.log("MSG: ", text)
}

export function* wait(msec: number) {
  yield "wait"
  yield msec
}

export function* waitFadeOut() {
  console.log("waitFadeOut")
  yield
}

export function* waitFadeIn() {
  console.log("waitFadeIn")
  yield
}

export function* waitKey(list?: string[]): IterableIterator<any> {
  if (list) {
    console.log(list)
  }
  yield 'waitKey'
  return window.lastKey
}
