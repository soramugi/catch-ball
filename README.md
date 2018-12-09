# scenario-generator

TypeScriptを使ったシナリオ記述

インスパイア元: https://qiita.com/townewgokgok/items/925b7024ff6dd204c770

# 記述方法

```
import {message, wait, waitKey, waitFadeIn, waitFadeOut} from "./../command"

message('たびびとの やどやへ ようこそ')
message('ひとばん 6ゴールドですが おとまりに なりますか？ (Y/N)')
const key = waitKey(['y', 'n'])

if (key === 'y') {
  message('では おやすみなさいませ')
  wait(1000)
  waitFadeOut()
  wait(1000)
  waitFadeIn()
  message('おはよう ございます')
  message('ゆうべは おたのしみでしたね')
  waitKey()
}

message('では また どうぞ')
waitKey()
```

# 確認方法

    npm install
    npm run build
    open index.html

コンソール操作で確認

[![Image from Gyazo](https://i.gyazo.com/b9fdc7f63b778f3e743430e0bac0c1ca.gif)](https://gyazo.com/b9fdc7f63b778f3e743430e0bac0c1ca)
