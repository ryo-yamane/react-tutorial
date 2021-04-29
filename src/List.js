const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go',
];


//他のファイルの変数を受け取る場合は引数に(props)を記述する
//props　＝　プロパティの意味
export const List = (props) => {

//上記2行は右のように記述をスッキリできる→　export const List = ({ title }) => {

  //この記述は実際にpropsからtitleという値を取り出して
  //このファイルでも使用できるようにtitleという変数に代入しているという意味
  return (
    <div>
    {
      LANGUAGES.map((lang,index) => {
      return <div key={index}>{ lang }</div>
    })
    // map関数はjsのなかで配列を変換して別の配列にする
    // ここでは言語の文字列のリストをjsxのHTMLのリストに変換している
    // jsx中で繰り返しをするときはkeyというプロパティをユニークで設定する必要がある。
    }
    </div>
  )
}