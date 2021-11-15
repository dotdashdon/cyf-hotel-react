import React from "react";

const SearchResults = () => {
  return (
    <div className="SearchResults">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mr</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>2021-11-28</td>
            <td>2021-12-05</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mr</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>2</td>
            <td>2021-11-28</td>
            <td>2021-12-05</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mr</td>
            <td>Larry</td>
            <td>Bird </td>
            <td>@twitter</td>
            <td>3</td>
            <td>2021-11-28</td>
            <td>2021-12-05</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
