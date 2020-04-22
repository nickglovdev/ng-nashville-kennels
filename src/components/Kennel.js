import React from "react"
import Animal from "./animal/Animal"
import "./animal/Animals.css"
import Employee from "./employee/Employee"
import "./employee/Employee.css"
import Location from "./location/Location"
import "./location/Location.css"
import Customer from "./customer/Customer"
import "./customer/Customer.css"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <AnimalList />
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        <h2>Customers</h2>
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
    </>
)