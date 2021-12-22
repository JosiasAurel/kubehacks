import React from "react";

import { Input, Button, Spacer, Select } from "@geist-ui/react";

import { countriesInWord } from "../misc";

import toast from "react-hot-toast";

const RegisterForm = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [country, setCountry] = React.useState("");
    const [school, setSchool] = React.useState("");
    const [lang, setLang] = React.useState("");

    const [regState, setRegState] = React.useState(false);

    function handleFormSubmit(event) {
        event.preventDefault(); // prevent browser reload

        setRegState(true);
        registerUser()
            .then(result => {
                if (result.status === "Success") {
                    toast.success("Registered");
                    toast("You will be notified on updates when hackathon is about to start", { duration: 3000 });
                } else { toast.error("Failed to register"); toast("Please retry again", { duration: 3000 }); }
            });
        setRegState(false);
    }
    async function registerUser() {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                age,
                country,
                school,
                language: lang
            })
        });

        const result = await response.json();

        return result;

    }

    const handleTextChange = (event, handler) => handler(event.target.value);

    return (
        <form onSubmit={e => handleFormSubmit(e)} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <Input onChange={e => handleTextChange(e, setName)} value={name} clearable placeholder="Name" htmlType="text" />
            <Spacer />
            <Input onChange={e => handleTextChange(e, setEmail)} value={email} clearable placeholder="Email" htmlType="email" />
            <Spacer />
            <Input onChange={e => handleTextChange(e, setAge)} value={age} clearable placeholder="Age" htmlType="number" />
            <Spacer />
            <Select value={country} onChange={_ => setCountry(_.value)} placeholder="Country">
                {countriesInWord.map(country => {
                    return (
                        <Select.Option key={country} value={country}>
                            {country}
                        </Select.Option>
                    )
                })}
            </Select>
            <Spacer />
            <Input onChange={e => handleTextChange(e, setSchool)} value={school} clearable placeholder="School Name" htmlType="text" />
            <Spacer />
            <Select value={lang} onChange={_ => setLang(_.value)} placeholder="Programming Language">
                <Select.Option value="Python">
                    Python
                </Select.Option>
                <Select.Option value="JavaScript">
                    JavaScript
                </Select.Option>
                <Select.Option value="C/C++">
                    C/C++
                </Select.Option>
                <Select.Option value="Other">
                    Other
                </Select.Option>
            </Select>
            <Spacer />
            { !regState ?
            <Button type="success-light">
                Register
            </Button>
            : <Button loading type="success-light">
                Register
            </Button> }
        </form>
    )
}

export default RegisterForm;