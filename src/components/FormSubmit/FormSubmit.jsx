import React, { useState } from "react";
import { TextField, Button, Checkbox,FormControlLabel } from "@mui/material";

function FormSubmit({onSubmit, validateCpf}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [news, setNews] = useState(false);
    const [cpfError, setCpfError] = useState({cpf: {valid: true, text: ""}});

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit({name, lastName, cpf, news, promotions});
        }}>
            <TextField 
                value={name} 
                onChange={(e) => {
                    setName(e.target.value);
                }}
                id="name"
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
                value={lastName} 
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                id="lastName"
                label="Last Name"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value);
                }}
                onBlur={(e) => {
                    const isValid = validateCpf(cpf);
                    setCpfError({cpf: isValid});
                }}
                error={!cpfError.cpf.valid}
                helperText={cpfError.cpf.text}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <FormControlLabel
                label="Promotions"
                control={
                    <Checkbox 
                        checked={promotions}
                        onChange={(e) => {
                            setPromotions(e.target.checked);
                        }}
                        name="promotions"
                    />
                }
            />
            <FormControlLabel 
                label="News"
                control={
                    <Checkbox 
                        checked={news}
                        onChange={(e) => {
                            setNews(e.target.checked);
                        }}
                        name="news"
                    />
                }
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </form>
    )
}

export default FormSubmit;