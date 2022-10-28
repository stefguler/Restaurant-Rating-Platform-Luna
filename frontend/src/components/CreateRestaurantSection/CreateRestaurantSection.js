import React, {useState} from 'react';
import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import {FormButton, FormInput, Title} from "../LoginSection/login.components.styles";
import {
    CreateRestaurantContainer,
    CreateRestaurantForm,
    TitleContainer,
    SearchButtonContainer, CategoryName,

} from "./CreateRestaurantSection.styled";


const CreateRestaurantSection =  (props) => {
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [country,setCountry] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [zip,setZip] = useState('')
    const [website,setWebsite] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [openingHours,setOpeningHours] = useState('')
    const [priceLevel,setPriceLevel] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        setName('');
        setCategory('');
        setCountry('');
        setStreet('');
        setCity('');
        setZip('');
        setWebsite('');
        setPhone('');
        setEmail('');
        setOpeningHours('');
        setPriceLevel('');
    }
    console.log(openingHours, country, priceLevel)

const FileUploader = props => {
    const hiddenFileInput = React.useRef(null);


    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
}

return (
    <CreateRestaurantContainer>
        <Header />
                <TitleContainer>
                    <Title>CREATE NEW RESTAURANT</Title>
                </TitleContainer>
                <CreateRestaurantForm>
                        <section>
                        <CategoryName>Name</CategoryName>
                        <FormInput type="text" placeholder="" value={name} onChange={(args) => setName(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Category</CategoryName>
                        <FormInput type="text" placeholder="" value={category} onChange={(args) => setCategory(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Country</CategoryName>
                        <FormInput type="text" placeholder="" value={country} onChange={(args) => setCountry(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Street</CategoryName>
                        <FormInput type="text" placeholder="" value={street} onChange={(args) => setStreet(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>City</CategoryName>
                        <FormInput type="text" placeholder="" value={city} onChange={(args) => setCity(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Zip</CategoryName>
                        <FormInput type="text" placeholder="" value={zip} onChange={(args) => setZip(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Website</CategoryName>
                        <FormInput type="text" placeholder="" value={website} onChange={(args) => setWebsite(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Phone</CategoryName>
                        <FormInput type="text" placeholder="" value={phone} onChange={(args) => setPhone(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Email</CategoryName>
                        <FormInput type="text" placeholder="" value={email} onChange={(args) => setEmail(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Opening Hours</CategoryName>
                        <FormInput type="text" placeholder="" value={openingHours} onChange={(args) => setOpeningHours(args.target.value)} />
                        </section>
                        <section>
                        <CategoryName>Price Level</CategoryName>
                        <FormInput type="text" placeholder="" value={priceLevel} onChange={(args) => setPriceLevel(args.target.value)} />
                        </section>
                        <section>
                        <FormInput type="file" placeholder="Choose a file..." />
                        </section>
                 </CreateRestaurantForm>
                <SearchButtonContainer>
                    <FormButton>Search</FormButton>
                </SearchButtonContainer>
        <Footer />
    </CreateRestaurantContainer>
)

}

export default CreateRestaurantSection;
