import React, { Component } from 'react';
import axios from 'axios';
import Table from '../../components/table/table';
import Card from "../../components/card/card";
import './dashBoard.css';
import Header from '../../components/header/header';
import cornaImage from '../../images/image.png';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
    }
    render() {
        const covidData = this.state.data;
        const global = covidData.Global;
        const countries = covidData.Countries;
        if (!global) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='corna-img-cont'><img className='corna-img' src={cornaImage} alt="COVID-19" /></div>
                <div className='container d-flex card-container-main'>
                    <div><Card heading={'ACTIVE CASES'} global={global && (global.TotalConfirmed - global.TotalRecovered - global.TotalDeaths)} /></div>
                    <div><Card heading={'TOTAL CASES'} global={global && global.TotalConfirmed} /></div>
                    <div><Card heading={'DEATHS'} global={global && global.TotalDeaths} /></div>
                </div>
                <div>
                    <Table data={countries} />
                </div>
            </div>
        )
    }
}

export default Dashboard;