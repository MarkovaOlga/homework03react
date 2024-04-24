import { useState } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

const TodoList = () => {

    const [arr, setArr] = useState([]);
    const [inputTask, setinputTask] = useState("");

    const handleInput = (event) => {
        setinputTask(event.target.value);
    };

    const clickHandler = () => {
        if (inputTask.trim() !== "") {
            setArr([...arr, inputTask]);
            setinputTask("");
        }
    };

    const handleDelete = (index) => {
        const newArr = arr.filter((_, i) => i !== index);
        setArr(newArr);
    };
    return (
        <div>
            <TextField
                value={inputTask}
                onChange={handleInput}
                label="New Task"
                variant="filled"
                fullWidth
                margin="normal"
            />
            <Button onClick={clickHandler} variant="contained" color="secondary">Add new task
            </Button>
            {arr.map((task, index) => (
                <Card key={index} variant="outlined" style={{ margin: 10 }}>
                    <CardContent>
                        <Typography>{task}</Typography>
                        <IconButton
                            onClick={() => handleDelete(index)}
                            aria-label="delete"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TodoList;