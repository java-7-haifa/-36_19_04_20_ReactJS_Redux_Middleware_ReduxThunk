import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Loading from "./Loading";
import ContactView from "./ContactView";
import AddContact from "./AddContact";

const Contacts = (props) => {
  let isLoading = false;
  let contacts = getContacts();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row mt-5">
            <div className="col-6">
              <div className="list-group">
                {contacts.map((c) => {
                  return (
                    <NavLink
                      key={c.id}
                      to={`/contacts/${c.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      {`${c.name} ${c.lastName}`}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <Switch>
                <Route path="/contacts/add" component={AddContact} />
                <Route path="/contacts/:id" component={ContactView} />
              </Switch>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contacts;

function getContacts() {
  return [
    {
      id: 1234567678,
      name: "Vasya",
      lastName: "Pupkin",
    },
    {
      id: 34556677,
      name: "Moshe",
      lastName: "Katz",
    },
    {
      id: 6632457354,
      name: "Petya",
      lastName: "Ivanov",
    },
  ];
}
