import React from 'react';
//クラスコンポーネントの記述はReactをimportする必要がある

import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
 constructor(props){
   super(props);
   //stateを使うときは、constructor=>super(props)はお決まりの記述
   this.state = { tab: 'list' };
   //上2行を定義してクラスコンポーネントではthis.state{この中に初期値}と記述する
   //functionコンポーネントでuseStateという関数を使っていたが、クラスコンポーネントは必要ない
 }
//  changeDescription(){
   //変化後の記述はクラスコンポーネントではsetStateで行う
   //専用のメソッドはない。
  //  this.setState({
    //  description:'クリック後の表示です。'
  //  })
//  }
  render(){
    const { tab } = this.state;
    return(
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list'})}>リスト</li>
            <li onClick={() => this.setState({ tab: 'form'})}>フォーム</li>
          </ul>
        </header>
        <hr />
        {
          tab === 'list' ? <List /> : <Form />
        }      
      </div>
    )
  }
}
export default App;