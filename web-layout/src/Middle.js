import React from 'react'
import App from './App'
import data from './data';


function Middle(props) {
    return (
        <div className='card_container'>
          
                   <div>
                       <h1 className='id'>{data[props.index].id}/25</h1>
                       <h1 className='name'>{data[props.index].name.first} {data[props.index].name.last}</h1>
                       <p className='fact'><strong>City:</strong>{data[props.index].city}</p>
                       <p className='fact'><strong>Country:</strong>{data[props.index].country}</p>
                       <p className='fact'><strong>Employer:</strong>{data[props.index].employer}</p>
                       <p className='fact'><strong>Title:</strong>{data[props.index].title}</p>
                       <p className='fact' id='movie'><strong>Favorite Movies:</strong><ol><li>{data[props.index].favoriteMovies[0]}</li>
                       <li>{data[props.index].favoriteMovies[1]}</li>
                       <li>{data[props.index].favoriteMovies[2]}</li>
                       </ol></p>
                   </div>
          
        </div>
    )
} 

export default Middle;