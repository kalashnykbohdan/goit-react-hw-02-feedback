import React from 'react';
import PropTypes from 'prop-types';

function Sections({title, children}){
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Sections.defaultProps = {
    title: '',
}

Sections.propTypes = {
    title:PropTypes.string.isRequired,
    // children:PropTypes.node.isRequired,
}

export default Sections;
