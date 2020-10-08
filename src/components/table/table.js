import React from 'react';

const Table = (props) => {
    return (
        <table className='table table-bordered table-hover text-center' style={{ marginTop: '10px' }}>
            <thead>
                <tr className='table-secondary'>
                    <th key={'Country'} scope='col'>Country Name</th>
                    <th key={'active'} scope='col'>Total Active</th>
                    <th key={'NewConfirmed'} scope='col'>New Confirmed</th>
                    <th key={'TotalConfirmed'} scope='col'>Total Confirmed</th>
                    <th key={'NewRecovered'} scope='col'>New Recovered</th>
                    <th key={'TotalRecovered'} scope='col'>Total Recovered</th>
                    <th key={'NewDeaths'} scope='col'>New Deaths</th>
                    <th key={'TotalDeaths'} scope='col'>Total Deaths</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map((item) => {
                    return (
                        <tr key={item.Country}>
                            <th key={`${item.Country}-country`} scope="row" className='text-left'>{item.Country}</th>
                            <td key={`${item.NewConfirmed}-${item.Country}-active`}>
                                {item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths}
                            </td>
                            <td key={`${item.NewConfirmed}-${item.Country}-newConf`}>{item.NewConfirmed}</td>
                            <td key={`${item.TotalConfirmed}-${item.Country}-totalConf`}>{item.TotalConfirmed}</td>
                            <td key={`${item.NewRecovered}-${item.Country}-newRecov`}>{item.NewRecovered}</td>
                            <td key={`${item.TotalRecovered}-${item.Country}-totalRecov`}>{item.TotalRecovered}</td>
                            <td key={`${item.NewDeaths}-${item.Country}-newDeath`}>{item.NewDeaths}</td>
                            <td key={`${item.TotalDeaths}-${item.Country}-totalDeaths`}>{item.TotalDeaths}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Table;