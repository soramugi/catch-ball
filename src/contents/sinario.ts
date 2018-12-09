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
