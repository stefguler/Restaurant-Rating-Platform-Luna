import React, {useState} from 'react';
import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";


const CreateRestaurantSection =  (props) => {
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [country,setCountry] = useState('')
    const [street,setStreet] = useState('')
    const [zip,setZip] = useState('')
    const [website,setWebsite] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [openingHours,setOpeningHours] = useState('')
    const [priceLevel,setPriceLevel] = useState('')
    const [image,setImage] = useState('')

    const handleSubmit = (event) => (
        event.preventDefault())

        setName('');
        setCategory('');
        setCountry('');
        setStreet('');
        setZip('');
        setWebsite('');
        setPhone('');
        setEmail('');
        setOpeningHours('');
        setPriceLevel('');
        setImage('');


    const FormData = [
        {
            label : "Name",
            value : name,
            onChange : event => setName(event.target.value),
            type : 'text',
        },
        {
            label : "Category",
            value : category,
            onChange : event => setCategory(event.target.value),
            type : 'text',
        },
        {
            label : "Country",
            value : country,
            onChange : event => setCountry(event.target.value),
            type : 'text',
        },
        {
            label : "Street",
            value : street,
            onChange : event => setStreet(event.target.value),
            type : 'text',
        },
        {
            label : "Zip",
            value :  zip,
            onChange : event => setZip(event.target.value),
            type : 'text',
        },
        {
            label : "Website",
            value : website,
            onChange : event => setWebsite(event.target.value),
            type : 'text',
        },
        {
            label : "Phone",
            value : phone,
            onChange : event => setPhone(event.target.value),
            type : 'text',
        },
        {
            label : "Email",
            value : email,
            onChange : event => setEmail(event.target.value),
            type : 'text',
        },
        {
            label : "Opening Hours",
            value : openingHours,
            onChange : event => setOpeningHours(event.target.value),
            type : 'text',
        },
        {
            label : "Price Level",
            value : priceLevel,
            onChange : event => setPriceLevel(event.target.value),
            type : 'text',
        },
        {
            label : "Image",
            value : image,
            onChange : event => setImage(event.target.value),
            type : 'text',
        },
    ]

return (
    <>
        <Header />
            <div>Hello</div>
            <FormData />
        <Footer />
    </>
)
}

export default CreateRestaurantSection;