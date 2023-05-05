import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Blog</h2>
            <div>
                <h4>1.Tell us the differences between uncontrolled and controlled components.</h4>
                <p><span className='fw-bold'>Answer</span>Controlled components are software components that are fully managed and controlled by the software system or framework. These components are typically created, managed, and updated by the system administrator or the software development team. Examples of controlled components include buttons, forms, and other user interface elements that are part of a larger software system.</p>
            </div>
            <div>
                <h4>2.How to validate React props using PropTypes.</h4>
                <p><span className='fw-bold'>Answer</span>To use PropTypes in a React component, you need to first import the PropTypes library from the 'prop-types' package. Then, you can define the PropTypes for the component by creating a propTypes object as a property of the component class.</p>
            </div>
            <div>
                <h4>3.Tell us the difference between nodejs and express js.</h4>
                <p><span className='fw-bold'>Answer</span>Node.js is a JavaScript runtime that allows you to run JavaScript code outside of the browser, on the server-side. It provides an event-driven, non-blocking I/O model that makes it highly scalable and efficient for building high-performance, real-time applications. Node.js provides a set of built-in modules for performing various server-side tasks, such as reading and writing files, creating network connections, and handling HTTP requests and responses.</p>
            </div>
        </div>
    );
};

export default Blogs;