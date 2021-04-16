import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import ImageGallery from '../ImageGallery/ImageGallery';
import Select from '@material-ui/core/Select';
import MenuItem from 'material-ui/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios'

  
const Search = () => {
    
    const[images,setImages]=useState([]);
    const[query,setQuery]= useState('');
    const[amount,setAmount] = useState(10);
    const[search,setSearch]=useState();

    const getData = () =>{
        axios.get(`https://pixabay.com/api/?key=20557907-ac714dab22139b233a3ad2888&q=${query}&image_type=photo&per_page=${amount}`)
        .then(data=> setImages(data.data.hits))
        .catch(err=>console.log(err))
    }
    
    useEffect(()=>{
        getData();        
    },[query, amount])



    const onTextChange=(e)=>{
        const{value} = e.target;
        setSearch(value);
    }

    
    const onAmountChange = (event) => {
        setAmount(event.target.value);

    };


    const getSearch=(e)=>{
        e.preventDefault();
        setQuery(search);
      }


    return (
        <div className="imageContainer">
            <form  onSubmit={getSearch}>
            <FormControl class="custom">
                <TextField
                name="searchText"
                value={search}
                fullWidth
                // className={classes.textField}
                onChange={onTextChange}
                type="text"
                />
                

                <Select
                name="amount"
                floatingLabelText="Amount"
                value={amount}
                onChange={onAmountChange}
                >

                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>

                </Select>
                <br/><br/>
                <Button variant="contained" type="submit" color="primary">
                    Search
                </Button>

            </FormControl>        
        </form>
        <br/>
        <br/>
            <ImageGallery images={images} query={query}/>
        </div>
    )
 }

 export default Search;
    