import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'

function Movie({id, year, title, summary, poster, genres}){
  
  const items = {
    childKey: id,
    image: poster,
    header: title,
    description: summary,
    meta: year,
    extra: genres,
  }

  return (
    <div>
      <Item.Group items={items}/>
    </div>
  );

}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

