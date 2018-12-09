import * as ts from "typescript"
import * as fs from "fs"
import * as path from "path"

const root = ts.sys.getCurrentDirectory()
const contentPath = path.join(root, "src", "contents")
const outPath = path.join(root, "out", "contents")

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}

const pack = (text: string) => {
  const match = text.match(/import.+\n/g) || []
  let importLine = ""
  for (const line of match) {
    importLine += line
    text = text.replace(new RegExp(line, "g"), "")
  }
  // waitが付いているメソッドはすべからくジェネレーター実行させる
  text = text.replace(/\swait/g, "yield* wait")
  // ジェネレータ実行ができるようにmain関数で囲む
  return importLine
    + "export default function* main{\n"
    + text + "\n}"
}

fs.readdir(contentPath, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.readFile(path.join(contentPath, file), (err, data) => {
      const source = pack(data.toString())
      const result = ts.transpileModule(source, {})
      fs.writeFile(path.join(outPath, file.replace(/\.ts$/, '.js')), result.outputText, (err) => {
        if (err) {
          console.error("ERR: ", file, " MSG: ", err)
        } else {
          console.log("DONE: ", file)
        }
      });

    })
  }
});
