import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Movie({id, year, title, summary, poster, genres}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
    </div>
  );
}