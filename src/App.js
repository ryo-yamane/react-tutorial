import{ useState } from 'react';
//stateはまず使うときにリアクトからuseStateを利用する上記記述が必要
import { List } from "./List";
//このimport文でどこのファイルを引っ張るかの記述￥が絶対に必要！！
import { Form } from "./Form";

function App() {
  // const [description, setDescription] = useState('クリック前の表示');
  const [tab, setTab] = useState('list');
  //useStateは返り値として配列を返す.第１引数のdescriptionの中身は（クリック前の表示）

  // const changeDescription = () => {
    // setDescription('クリック後の表示です');
  // }
　//この関数はuseStateの第２の返り値だったsetDescriptionの引数として→を定義('クリック後の表示です');


  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {/* { description } */}
      {
        tab === 'list' ?  <List/> : <Form />
      }
      {/* jsx内で条件分岐するときは{}でくくり、三項演算子を使う */}
      {/* <button onClick={changeDescription}>ボタン</button> */}
    </div>
  );
}
//onClickしたら{changeDescription}が呼び出されて、descriptionがsetDescriptionに変わる仕組み

export default App;
