/**
 * 1. Component of the frontend table to visualize the details of table
 * that is supplied to the chart component.
 * 
 * 2. Sending and fetching API requests to and from Django backend 
 * server are included in this component to process data for visualization.
 * 
 * 3. Data is applied and shown on the figure once the component is mounted and callback 
 * function is returned.
 */

import React from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Spin } from 'antd';


class TableComponent extends React.Component {
  state = {
    loading: true,
    data: []
  };

  componentDidMount(){
    fetch('http://localhost:8000/api/get_all_data').then(
      (response) =>  {
        if (response.status !== 200) {
          console.log("not success", response);
          return;
        } else {
          response.json().then(
            (data) => {
              this.setState( (state) => {
                return {
                  ...state,
                  data: data.data,
                  loading: false,
                  locationFilters: this.getLocationFilter(data.data),
                  typeFilters: this.getTypeFilter(data.data)
                }
              })
            })
        };
      }).catch(
        err => {
         console.log('Fetch Error :-S', err);
        }
      );
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
  };

  getLocationFilter = (data) => {
    // from https://codeburst.io/javascript-array-distinct-5edc93501dc4
    return [... new Set(data.map( x => x.location))].map( x=> ({text: x, value: x}))
  }
  getTypeFilter = (data) => {
    // from https://codeburst.io/javascript-array-distinct-5edc93501dc4
    return [... new Set(data.map( x => x.type))].map( x=> ({text: x, value: x}))
  }

  render() {
    const columns = [
      {
        title: 'Year',
        dataIndex: 'year',
        sorter: (a, b) => a.year > b.year,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Location',
        dataIndex: 'location',
        align: 'center',
        filters: this.state.locationFilters,
        onFilter: (value, record) => record.location.includes(value)
      },
      {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
        filters: this.state.typeFilters,
        onFilter: (value, record) => record.type.includes(value)
      },
      {
        title: 'total_number',
        dataIndex: 'total_number',
        sorter: (a, b) => parseInt(a.total_number) - parseInt(b.total_number) ,
        sortDirections: ['descend', 'ascend'],
      }
    ];
    if (this.state.loading) {
      return (
        <Spin size="large" />
      )
    } else {
      return (
        <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} rowKey={record => record.id} />
      );
    }
  }
}

export default TableComponent;
