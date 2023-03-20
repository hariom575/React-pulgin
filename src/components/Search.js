import React, { useState } from 'react';
import axios from 'axios';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [answer, setAnswer] = useState("Answer Will be Displayed Here");

 
  const url = 'http://127.0.0.1:8000/chat/';

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post( url, {
          question: searchField
      }, {
          headers: {
              'content-type': 'application/json',
          }
      } )
      .then( ( res ) => {
          console.log(res)
          setAnswer( res.data );
      } )
  }


  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Search AnyThing </h2>
			</div>
			<div className="pa2">
      <form id="work-settings-form" onSubmit={ (e) => handleSubmit(e) }>
				<input 
					className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
					type = "search" 
					placeholder = "Search Here" 
					onChange={ (e) => { setSearchField(e.target.value); } }
				/>
        <button type="submit" className="button button-primary">submit</button>
</form>
			</div>
      <div>
      {answer} 
      </div>
		</section>
  );
}

export default Search;



//     return(
//         <React.Fragment>
//             <h2>React Search app</h2>
            // <form id="work-settings-form" onSubmit={ (e) => handleSubmit(e) }>
            //     <table className="form-table" role="presentation">
            //         <tbody>
            //             <tr>
            //                 <th scope="row">
            //                     <label htmlFor="firstname">Firstname</label>
            //                 </th>
            //                 <td>
            //                     <input id="firstname" name="firstname" value={ firstname } onChange={ (e) => { setFirstName( e.target.value ) } } className="regular-text" />
            //                 </td>
            //             </tr>
            //         </tbody>
            //     </table>
            //     <p className="submit">
            //         <button type="submit" className="button button-primary">{ loader }</button>
            //     </p>
            // </form>
//         </React.Fragment>
//     )
// }