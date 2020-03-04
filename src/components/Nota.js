import React from 'react'

class Nota extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Taken in December 19, 2020. Last edition in January 10, 2021
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut tincidunt hendrerit odio tempor feugiat. Aenean aliqu
                    et eros vel cursus volutpat.
                </p>
                <p>
                    Tags: #dragon #book #notes #greatOne
                </p>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Nota