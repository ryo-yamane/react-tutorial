import React from 'react';
//クラスコンポーネントの記述はReactをimportする必要がある

class App extends React.Component {
 constructor(props){
   super(props);
   //stateを使うときは、constructor=>super(props)はお決まりの記述
   this.state = { description: 'クリック前の表示'}
   //上2行を定義してクラスコンポーネントではthis.state{この中に初期値}と記述する
   //functionコンポーネントでuseStateという関数を使っていたが、クラスコンポーネントは必要ない
 }
 changeDescription(){
   //変化後の記述はクラスコンポーネントではsetStateで行う
   //専用のメソッドはない。
   this.setState({
     description:'クリック後の表示です。'
   })
 }
  render(){
    const { description } = this.state;
    return(
      <div>
        { description }
      <List title="取扱言語一覧" />
      
      <button onClick={() => this.changeDescription()}>
        ボタン
      </button>
      
      </div>
    )
  }
}
export default App;