//他のファイルの変数を受け取る場合は引数に(props)を記述する
//props　＝　プロパティの意味
export const List = (props) => {
  const title = props.title;
//上記2行は右のように記述をスッキリできる→　export const List = ({ title }) => {

  //この記述は実際にpropsからtitleという値を取り出して
  //このファイルでも使用できるようにtitleという変数に代入しているという意味

  return (
    <div>
    <h2>{ title }</h2>
    <div>リストです</div>
    </div>
  )
}