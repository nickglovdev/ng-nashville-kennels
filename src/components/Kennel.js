import React from "react"
import Animal from "./animal/Animal"
import "./animal/Animals.css"
import Employee from "./employee/Employee"
import "./employee/Employee.css"
import Location from "./location/Location"
import "./location/Location.css"
import Customer from "./customer/Customer"
import "./customer/Customer.css"
export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <article className="locations">
            <Location/>
            <Location/>
        </article>
        <article className="customers">
            <Customer/>
            <Customer/>
            <Customer/>
            <Customer/>
        </article>
    </>
)