import React from 'react';

const Rank = ({ name, entries, error }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      {error?<h3 style={{color:'red'}}>{error}</h3>:undefined}
    
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;