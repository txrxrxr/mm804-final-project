<!-- PROJECT LOGO
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>
-->


<!-- TABLE OF CONTENTS 
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
-->


<!-- ABOUT THE PROJECT -->
## Interactive 2D & 3D Visualization for COVID-19
Interactive 2D & 3D Visualization for COVID-19

This project focuses on the questions of interest:
* How to effectively and clearly visualize the data in 2D and 3D to understand the current statistics and assess the risk?
* Which metrics should be tracked to gain useful insights for data analytics? 
* What is the current progress of COVID-19 vaccine in Canada? 
* What is the number of populations that have received only one dose (per province and per month)? 
* What is the comparison of vaccination coverage between two provinces (per month)?
* We built a 2D and 3D visualiztion to represent COVID-19 statistics globally.
* We built a data visualization project to visualize the COVID-19 vaccination coverage across each province in Canada.

### Built with
* [React](https://reactjs.org/)
* [ECharts](https://echarts.apache.org/en/index.html)
* [D3.js](https://d3js.org/)
* [Globe.GL](https://github.com/vasturiano/globe.gl)
* [Django](https://www.djangoproject.com/)

### Dataset 
* [Coronavirus and Vaccination Data](https://github.com/bumbeishvili/covid19-daily-data)
* [National vaccination coverage](https://health-infobase.canada.ca/covid-19/vaccination-coverage/)

### Prerequisites
```sh
Clone the repo
$ cd mm804_final_project/mysite
$ pip install virtualenv
$ virtualenv venv
$ .\venv\Scripts\activate
$ pip install -r requirements.txt
```

### Migrate and Run the back-end Server
```
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```

### Start front-end client page
```
$ cd my-app
$ npm install
$ npm start
```

### Interact with the data visualization system in your browser

```
- View the latest data of the coronavirus cases on the 3D globe map. Time travel is also provided at the bottom to see the trend of coronavrius cases staring from January 2020. 
```
![image](https://user-images.githubusercontent.com/31713264/115631196-94e01280-a2c2-11eb-80d9-528448ab9c84.png)

```
- Visualize the global confirmed cases and compare the infection rates.
```
![image](https://user-images.githubusercontent.com/31713264/115631272-bd680c80-a2c2-11eb-8aa8-1911ad22445c.png)

```
- Visualize the global deaths during the COVID-19 pandemic.
```
![image](https://user-images.githubusercontent.com/31713264/115631345-dec8f880-a2c2-11eb-8bec-64954d7be3b7.png)

```
- Visualize the global recovered cases during the COVID-19 pandemic.
```
![image](https://user-images.githubusercontent.com/31713264/115631384-f30cf580-a2c2-11eb-8dc7-8002213c0033.png)


```
- Visualize the global vaccination status and vaccination rate during the COVID-19 pandemic.
```
![image](https://user-images.githubusercontent.com/31713264/115631435-0b7d1000-a2c3-11eb-9b51-cf4bd8173929.png)

```
- Check the vaccine coverage from the perspective of population taking 1 does and population taking 2 doses for one province in a specific month:
```
![1]()

```
- Compare the vaccine coverages between two provinces in a specific month:
```
![1]() 

```
- Display the detail of the dataset (http://localhost:3000/detail):
```
![1]() 


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

## References
Django: https://www.djangoproject.com/

React: https://reactjs.org/

Covid-3D: https://github.com/wobsoriano/covid3d

