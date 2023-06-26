import React from "react";
import s from "./selectContinent.module.scss";
import Image from "next/image";

export default function SelectContinent() {
  const africa = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Democratic Republic of Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "eSwatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Republic of Congo",
    "Rwanda",
    "São Tomé e Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  const mappedAfrica = africa.map((country) => <a href="#/">{country}</a>);

  const antarctica: string[] = ["Antarctica"];
  const mappedAntarctica = antarctica.map((country) => (
    <a href="#/">{country}</a>
  ));
  const asia: string[] = [
    "Afghanistan",
    "Azerbaijan",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "East Timor",
    "Hong Kong",
    "India",
    "Indonesia",
    "Japan",
    "Kazakhstan",
    "Kyrgyzstan",
    "Laos",
    "Macau",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Pakistan",
    "Philippine",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Tibet",
    "Turkmenistan",
    "Uzbekistan",
    "Vietnam",
  ];

  const mappedAsia = asia.map((country) => <a href="#/">{country}</a>);

  const carribean = [
    "Anguilla",
    "Antigua and Barbuda",
    "Aruba",
    "Bahamas",
    "Barbados",
    "Bermuda",
    "Bonaire",
    "British Virgin Islands",
    "Cayman Islands",
    "Cuba",
    "Curaçao",
    "Dominica",
    "Dominican Republic",
    "French Guiana",
    "French Overseas Possessions",
    "Grenada",
    "Guadeloupe",
    "Haiti",
    "Jamaica",
    "Martinique",
    "Montserrat",
    "Puerto Rico",
    "Reunion",
    "Saba",
    "St Eustatius",
    "St Kitts And Nevis",
    "St Lucia",
    "St Maarten",
    "St Vincent and the Grenadines",
    "Trinidad and Tobago",
    "Turks and Caicos Islands",
    "US Virgin Islands",
  ];

  const mappedCarribean = carribean.map((country) => (
    <a href="#/">{country}</a>
  ));

  const europe = [
    "Albania",
    "Alderney",
    "Andorra",
    "Armenia",
    "Austria",
    "Azores",
    "Balearic Islands",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "British Overseas Territories",
    "Bulgaria",
    "Canary Islands",
    "Channel Islands",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "England",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Gibraltar",
    "Gran Canaria",
    "Greece",
    "Guernsey",
    "Hungary",
    "Ibiza",
    "Iceland",
    "Ireland",
    "Isle of Man",
    "Italy",
    "Jersey",
    "Kosovo",
    "Lanzarote",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madeira",
    "Mallorca",
    "Malta",
    "Menorca",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Northern Ireland",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Sark & Herm",
    "Scotland",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Tenerife",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
    "Wales",
  ];

  const mappedEurope = europe.map((country) => <a href="#/">{country}</a>);

  const middleEast = [
    "Bahrain",
    "Iran",
    "Iraq",
    "Israel",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Oman",
    "Palestinian National Authority",
    "Qatar",
    "Saudi Arabia",
    "Syrian Arab Republic",
    "United Arab Emirates",
    "Yemen",
  ];
  const mappedMiddleEast = middleEast.map((country) => (
    <a href="#/">{country}</a>
  ));

  const northAmerica = [
    "Alabama",
    "Alaska",
    "Alberta",
    "Arizona",
    "Arkansas",
    "Belize",
    "British Columbia",
    "California",
    "Canada",
    "Colorado",
    "Connecticut",
    "Costa Rica",
    "Delaware",
    "El Salvador",
    "Florida",
    "Georgia (USA)",
    "Greenland",
    "Guatemala",
    "Hawaii",
    "Honduras",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Manitoba",
    "Maryland",
    "Massachusetts",
    "Mexico",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Brunswick",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York State",
    "Newfoundland And Labrador",
    "Nicaragua",
    "North Carolina",
    "North Dakota",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ohio",
    "Oklahoma",
    "Ontario",
    "Oregon",
    "Panama",
    "Pennsylvania",
    "Prince Edward Island",
    "Quebec",
    "Rhode Island",
    "Saskatchewan",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "United States of America",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington State",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Yukon Territory",
  ];

  const mappedNorthAmerica = northAmerica.map((country) => (
    <a href="#/">{country}</a>
  ));

  const oceania = [
    "American Samoa",
    "Australia",
    "Australian Capital Territory",
    "Cook Islands",
    "Federated States Of Micronesia",
    "Fiji",
    "Guam",
    "Kiribati",
    "Marshall Islands",
    "Nauru",
    "New Caledonia",
    "New South Wales",
    "New Zealand",
    "Niue",
    "Northern Mariana Islands",
    "Northern Territory",
    "Pacific Islands Of Micronesia",
    "Palau",
    "Papua New Guinea",
    "Queensland",
    "Samoa",
    "Solomon Islands",
    "South Australia",
    "Tahiti and her Islands",
    "Tasmania",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
    "Victoria",
    "Western Australia",
  ];
  const mappedOceania = oceania.map((country) => <a href="#/">{country}</a>);

  const southAmerica = [
    "Argentina",
"Bolivia",
"Brazil",
"Chile",
"Colombia",
"Ecuador",
"Falkland Islands",
"Guyana",
"Paraguay",
"Peru",
"Surinam",
"Uruguay",
"Venezuela"
  ]
  const mappedSouthAmerica = southAmerica.map((country) => <a href="#/">{country}</a>);

  return (
    <section className={s.selectContinent}>
      <h1 className={s.heading}>
        Select your country, state or region by continent
      </h1>
      <span>
        <Image
          src={"/logo/arrow_down.png"}
          alt="arrow down"
          width={12}
          height={12}
        />
      </span>
      <nav className={s.continentNav}>
        <ul className={s.navLinks}>
          <li className={s.navItem}>
            <a href="#/">Africa</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedAfrica}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Antarctica</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedAntarctica}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Asia</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedAsia}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Carribean</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedCarribean}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Europe</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedEurope}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Middle East</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedMiddleEast}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">North America</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedNorthAmerica}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">Oceania</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedOceania}</div>
            </div>
          </li>
          <li className={s.navItem}>
            <a href="#/">South America</a>
            <div className={s.innerNav}>
              <div className={s.innerFlexBox}>{mappedSouthAmerica}</div>
            </div>
          </li>
        </ul>
      </nav>

    </section>
  );
}
