import React, { Component } from 'react';
import './index.scss';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

const pureFalseFunc = () => false

class DateRanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // https://stackoverflow.com/questions/52571616/setting-the-default-startdate-and-enddate-properties-for-react-dates
      startDate: this.props.theStartDate,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="DateRanger">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { 
              this.props.handleDateRange({ start: startDate, end: endDate })
              this.setState({ startDate, endDate })
            }
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          // https://github.com/airbnb/react-dates/issues/239
          isOutsideRange={pureFalseFunc}
        />
      </div>
    );
  }
}

export default DateRanger
