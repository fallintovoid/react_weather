/// <reference types="react-scripts" />

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IContext {
    theme: string,
    setTheme: TypeSetState<string>
}

interface CurrentWeather {
    temp: string,
    icon: string,
    temp_feels_like: string,
    pressure: string,
    wind: string,
    name: string
}

interface SelectItem {
    value: string,
    label: string
}
