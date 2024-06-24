import React, { useState } from 'react';
import Form from '../Form/Form';

const Navbar = ({ setPost, setKeyword, setCity,handleSearch }) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormModal = () => {
    setShowForm((prev) => !prev);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="navbar-brand">Search Your Hotel</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleFormModal}
                >
                  Add New
                </button>
              </li>
            </ul>
            <ul className="navbar-nav me-right me-3 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <select
                  className="nav-link dropdown-toggle"
                  onChange={handleCityChange}
                >
                  <option className="dropdown-item" value="">
                    Select a city
                  </option>
                  <option className="dropdown-item" value="New York">
                    New York
                  </option>
                  <option className="dropdown-item" value="Los Angeles">
                    Los Angeles
                  </option>
                  <option className="dropdown-item" value="Chicago">
                    Chicago
                  </option>
                  <option className="dropdown-item" value="Houston">
                    Houston
                  </option>
                  <option className="dropdown-item" value="Phoenix">
                    Phoenix
                  </option>
                </select>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showForm && <Form setPost={setPost} setShowForm={setShowForm} />}
    </>
  );
};

export default Navbar;
