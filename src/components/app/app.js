/* шапка футер состояние страницы для отображения нужного контента */
/* рендарить только то что нужно ? как с помощью условий ? функция для рендера?*/

import { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";
import Pleasure from "../pleasure/pleasure";
import PromoCoffee from "../promoCoffee/promoCoffee";
import Menu from "../menu/menu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 'main',
            prevPage: 'main',
            data: [
                {name: "AROMISTICO Coffee 2 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Brazil", price: 16.99, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 1},
                {name: "AROMISTICO Coffee 1 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Kenya", price: 6.99, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 2},
                {name: "AROMISTICO Coffee 1 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Columbia", price: 6.39, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 3},
                {name: "AROMISTICO Coffee 1 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Brazil", price: 6.99, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 4},
                {name: "AROMISTICO Coffee 1.5 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Brazil", price: 12.99, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 5},
                {name: "AROMISTICO Coffee 1.2 kg", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", country: "Kenya", price: 10.99, img: ["img/aromistico.png", "img/aromistico_promo.jpg"], id: 6}
            ],
            activeCountry: [],
            activeId: 1,
            foundStr: ''
            
        }
    }

    updateCountry = (country) => {
        if (this.state.activeCountry.includes(country)){
            this.setState(state => ({
                activeCountry: state.activeCountry.filter(item => item !== country)
            }))
        } else{
            this.setState(state => ({
                activeCountry: [...state.activeCountry, country]
            }))
        }
    }

    updateFoundStr = (str) => {
        const foundStr = str.toLowerCase();
        this.setState({foundStr});
    }

    filterDataforCountry = (data) => {
        let visibleData;
        if (this.state.activeCountry.length >= 1){
            visibleData = data.filter(el => this.state.activeCountry.includes(el.country));
        } else{
            visibleData = data;
        }
        return visibleData;
    }

    foundString = (data) => {
        const visibleData = data.filter(el => el.name.toLowerCase().includes(this.state.foundStr) || el.country.toLowerCase().includes(this.state.foundStr));
        return visibleData;
    }

    changePage = (activePage, activeId=0) => {
        let prevPage = this.state.activePage; 
        this.setState({activePage, activeId, prevPage});
        window.scroll({top: 0, behavior: 'smooth'});
    }

    renderActivePage(activeId) {
        const { activePage, data } = this.state;
        const visibleData = this.foundString(this.filterDataforCountry(data));
        const activeData = visibleData.filter(el => el.id === activeId);
        if (activePage === 'main') return <Main />;
        if (activePage === 'promoCoffee') return <PromoCoffee data={activeData[0]}  onChangePage={this.changePage} prevPage={this.state.prevPage}/>;
        if (activePage === 'pleasure') return <Pleasure data={data} onChangePage={this.changePage}/>;
        if (activePage === 'menu') return <Menu data={visibleData} onChangePage={this.changePage} 
        onChangeValue={this.updateFoundStr} onChangeCountryFilter={this.updateCountry}/>
        return null;
    }


    render() {
        return (
            <div>
                <Header onChangePage={this.changePage}/>
                {this.renderActivePage(this.state.activeId)}
                <Footer onChangePage={this.changePage}/>
            </div>
        )
    }
}

export default App;