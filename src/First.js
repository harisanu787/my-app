import React from 'react'

const First = (props) => {
  return (
<>
<table style={{"borderWidth":"5px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>{props.sno}</td>
                <td>{props.name}</td>
                <td>{props.ages}</td>
              </tr>
              <tr>
              <td>{props.sno}</td>
                <td>{props.name}</td>
                <td>{props.ages}</td>
              </tr>
              <tr>
                <td>1</td>
                <td>ramu</td>
                <td>21</td>
              </tr>
              <tr>
                <td>1</td>
                <td>raju</td>
                <td>21</td>
              </tr>
        </table>
</>
  )
}

export default First;