import { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { ThemeProvider } from './provider/ThemeProvider';
import { Header } from './shared/Header/Header';

function App() {

  const [city, setCity] = useState<string>('Berlin')

  const getSelectValue = async (currCity: string) => {
    await setCity(currCity)
  }

  return (
    <ThemeProvider>
      <div className="global-container">
        {/* <Popup /> */}
        <div className="container">
          <Header getSelectValue={getSelectValue}/>
          <Switch>
            <Route path="/" exact render={(props) => <Home currCity={city}/>} />
            <Route path="/month-statistics" exact component={MonthStatistics} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
