import React from "react"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__location">{location.adress}</div>
    </section>
)