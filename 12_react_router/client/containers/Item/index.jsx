import React,{ PropTypes } from 'react';

const Item = ({ params }) => (
  <div>
    <h2>The Item Page with id={params.id}</h2>
  </div>
);

Item.propTypes = {
  params: PropTypes.object,
};

export default Item;