import React, { useState, useCallback, useEffect } from 'react';



// function App() {
//   return (
//     <div >
//       <h1>Hello React</h1>

//     </div>
//   );
// }


const App = () => {
  const [newToko, setNewToko] = useState('');
  const [tokos, setTokos] = useState([]);
  const onnewTokoChang = useCallback((event) => {
    setNewToko(event.target.value);
  }, []);
  // const nameStuff = useState('alif');
  // const name = nameStuff[0];
  // const setName = name[1];


  // ถ้ามี event เข้ามาให้ submit  และ แสดงผล console.log('form was submit');
  const fromSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!newToko.trim()) return;
    setTokos([

      ...tokos, {

        id: tokos.length + 1,
        content: newToko,
        done: false,

      }
    ]);
    //console.log('form was submit');
    setNewToko('');
  }, [newToko, tokos]);
  useEffect(() => {
    console.log('tokos', tokos);
    return () => {
      console.log('component was un-');
    };



  }, [tokos]);


  ///console.log('tokos',tokos);
  return (
    <div>
      <form onSubmit={fromSubmitted}>
        <label htmlFor="newToko" > Endter a toko; </label>
        <input
          id="newToko"
          name="newToko"
          value={newToko}
          onChange={onnewTokoChang}
        />
        <button> Add Toko</button>
      </form>

      <ul>
        {tokos.map((toko, index) => (
          <li key={toko.id}>
            <input
              checked={toko.done}
              type="checkbox"
              onChange={(event) => {
                console.log(event.target.checked);
                const newTokos = tokos.slice();
                newTokos.splice(index, 1, {
                  ...toko,
                  done: !toko.done
                });
                setTokos(newTokos);

              }}
            />
            {toko.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
