import React from 'react';

const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export class List extends React.component {
  render(){
    return(
      <div>

        {
          LANGUAGES.map((lang, index) => {
            return <div key={index}>{ lang }</div> 
          })
        }
          
        </div>
    )
  }
}