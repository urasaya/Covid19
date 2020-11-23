(() => {

    async function getCovid19Update() {
        const response = await fetch(
            `https://covid19.th-stat.com/api/open/today`
        );
        const { UpdateDate, Confirmed, NewConfirmed, Recovered, NewRecovered, Hospitalized, NewHospitalized, Deaths, NewDeaths } = await response.json();
        return {
            UpdateDate: UpdateDate,
            Confirmed: Confirmed,
            NewConfirmed: NewConfirmed,
            Recovered: Recovered,
            NewRecovered: NewRecovered,
            Hospitalized: Hospitalized,
            NewHospitalized: NewHospitalized,
            Deaths: Deaths,
            NewDeaths: NewDeaths,
        };

    }


    function displayData({ UpdateDate, Confirmed, NewConfirmed, Recovered, NewRecovered, Hospitalized, NewHospitalized, Deaths, NewDeaths }) {
        const updateDate = document.querySelector('.Date');
        const confirmedValue = document.querySelector('#confirmed_value');
        const newConfirmedValue = document.querySelector('#new_confirmed_value');
        const recoveredValue = document.querySelector('#recovered_value');
        const newRecoveredValue = document.querySelector('#new_recovered_value');
        const hospitalizedValue = document.querySelector('#hospitalized_value');
        const newHospitalizedValue = document.querySelector('#new_hospitalized_value');
        const deathsValue = document.querySelector('#deaths_value');
        const newDeathsValue = document.querySelector('#new_deaths_value');

        updateDate.innerText = `${UpdateDate}`;
        confirmedValue.innerText = `${Confirmed}`;
        newConfirmedValue.innerText = `${NewConfirmed}`;
        recoveredValue.innerText = `${Recovered}`;
        newRecoveredValue.innerText = `${NewRecovered}`;
        hospitalizedValue.innerText = `${Hospitalized}`;
        newHospitalizedValue.innerText = `${NewHospitalized}`;
        deathsValue.innerText = `${Deaths}`;
        newDeathsValue.innerText = `${NewDeaths}`;
    }



    async function run() {


        const { UpdateDate, Confirmed, NewConfirmed, Recovered, NewRecovered, Hospitalized, NewHospitalized, Deaths, NewDeaths } = await getCovid19Update();

        displayData({
            UpdateDate,
            Confirmed,
            NewConfirmed,
            Recovered,
            NewRecovered,
            Hospitalized,
            NewHospitalized,
            Deaths,
            NewDeaths
        });


    }
    run();
})();