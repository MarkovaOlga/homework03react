import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const convertToCelsius = (fahr) => {
        const cels = (parseFloat(fahr) - 32) * (5 / 9);
        setCelsius(cels.toFixed(2));
    }
    const convertToFahrenheit = (cels) => {
        const fahr = (parseFloat(cels) * 1.8 + 32);
        setFahrenheit(fahr.toFixed(2));
    }
    const handleCelsius = (event) => {
        const { value } = event.target;
        setCelsius(value);
        convertToFahrenheit(value);
    }
    const handleFahrenheit = (event) => {
        const { value } = event.target;
        setFahrenheit(value);
        convertToCelsius(value);
    }

    return (
        <div>
            <TextField
                label="Celsius"
                value={celsius}
                onChange={handleCelsius}
                style={{margin: 20}}
            />
            <TextField
                label="Fahrenheit"
                value={fahrenheit}
                onChange={handleFahrenheit}
                style={{margin: 20}}
            />
            <Button
                onClick={() => {
                    setCelsius("");
                    setFahrenheit("");
                }}
                style={{margin: 30}}
            >Clear
            </Button>
        </div>
    )
}
export default TemperatureConverter;