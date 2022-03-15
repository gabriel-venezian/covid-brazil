const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch__track"),
    stateSelectToggle: document.querySelector(".state-select-toggle"),
    selectOptions: document.querySelectorAll(".state-select-list__item"),
    selectList: document.querySelector(".state-select-list"),
    selectToggleIcon: document.querySelector(".state-select-toggle__icon"),
    selectSearchBox: document.querySelector(".state-select-list__search"),
    selectStateSelected: document.querySelector(".state-select-toggle__label"),
    confirmed: document.querySelector(".info__total--confirmed"),
    deaths: document.querySelector(".info__total--deaths"),
    deathsDescription: document.querySelector(".data-box__description"),
    vaccinated1: document.querySelector(".info__total--vaccinated-1"),
    vaccinated2: document.querySelector(".info__total--vaccinated-2"),
}

const _data = {
    id: "brazil=true",
    vaccinatedInfo: undefined,
    vaccinated: undefined,
    confirmed: undefined,
    deaths: undefined,
}

const _charts = {};

_elements.switch.addEventListener("click", () => {
    const isDark = _elements.switch.classList.toggle("switch__track--dark");
    
    if (isDark) 
        document.documentElement.setAttribute("data-theme", "dark");
    else
        document.documentElement.setAttribute("data-theme", "light");
});

_elements.stateSelectToggle.addEventListener("click", () => {
    _elements.selectToggleIcon.classList.toggle("state-select-toggle__icon--rotate");
    _elements.selectList.classList.toggle("state-select-list--show");
});

_elements.selectOptions.forEach(item => {

});

_elements.selectSearchBox.addEventListener("keyup", (e) => {

});

const request = (api, id) => {

}

const loadData = (id) => {

}

const createBasicChart = (element, config) => {

}

const createDonutChart = (element) => {

}

const createStackedColumnsChart = (element) => {

}

const createCharts = () => {

}

const updateCards = () => {

}

const updateCharts = () => {

}

const getChartOptions = (series, labels, colors) => {

}

const getDonutChartOptions = (value, name, colors) => {

}

loadData(_data.id);
createCharts();