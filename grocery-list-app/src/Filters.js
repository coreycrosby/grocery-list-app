import React from 'react';

const Filters = () => {

    return (
    <section id="filterCategories">
        <ul className="filters">
          <li><input type="radio" name="category" value="all" id="filter0" checked /><label for="filter0">all</label></li>
          <li><input type="radio" name="category" value="meat" id="filter1" /><label for="filter1">meat</label></li>
          <li><input type="radio" name="category" value="prod" id="filter2" /><label for="filter2">prod</label></li>
          <li><input type="radio" name="category" value="dairy" id="filter3" /><label for="filter3">dairy</label></li>
          <li><input type="radio" name="category" value="bakery" id="filter4" /><label for="filter4">bakery</label></li>
        </ul>
        <form id="newCat" className="cat-new">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
        </form>
      </section>
    );
};
export default Filters;