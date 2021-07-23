import React, { useState } from 'react';
import './App.css'
import {
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    FormGroup,
    Labe,
    Spinner
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import { func } from 'prop-types';


function app(){
//States
const [maxResults, setMaxResults] = useState(10);
const [startIndex, setStartIndex] = useState(1);
const [query,setQuery] = useState('');
const [ loading, setLoading] = useState(false);
const [cards, setCards] = useState([]);


}