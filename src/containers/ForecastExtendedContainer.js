import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForcastExtended from './../components/ForcastExtended';
import { connect } from 'react-redux';

class ForcastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForcastExtended city={city} forecastData={forecastData} />

        )
    }

}
ForcastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
};
const mapStateToProps = ({ city, cities }) => ({ city, forcastData: cities[city] && cities[city].forecastData });
export default connect(mapStateToProps, null)(ForcastExtendedContainer);
