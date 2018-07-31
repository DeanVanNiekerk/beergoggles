import React from 'react';
import { DATE_FORMAT } from '../helpers/date';
import Moment from 'react-moment';

const DateFormatted = ({ date }) => {

    if (!date)
        return "";

    return <Moment format={DATE_FORMAT}>
            {date}
           </Moment>
};

export default DateFormatted