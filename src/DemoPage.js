import React, { useEffect, useState } from 'react';
import axios from 'axios';
import demo from './assets/images/demo2.png';
import Footer from './Components/Footer';

const Demo = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryList = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2
        }));
        setCountries(countryList);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    try {
      const response = await axios.post(
        'https://unitoni.com/api/website/send-demo-request-email',
        {
          'country': selectedCountry,
          'first_name': formData.firstName,
          'last_name': formData.lastName,
          'phone': formData.phone,
          'email': formData.email
        },
        { 
          headers: {
            'accept': '/',
            'Content-Type': 'application/json'
          }
        }
      );
  
      alert('Your demo request has been sent successfully!');
  
    } catch (error) {
      if (error.response) {
       
        alert('There was an error sending your demo request. Please try again.');
      } else if (error.request) {
     
        alert('Network error: Please check your connection or try again later.');
      } else {
     
        alert('Unexpected error: Please try again later.');
      }
      console.error('Error sending demo request:', error);
    }
  };
  

  return (
    <>
      <section className="py-24 font-figtree">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-32">
            <div className="lg:max-w-xl w-full h-[700px] flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${demo})`, backgroundPosition: '-90px center' }}>
              <div className="lg:w-96 w-auto h-auto lg:p-6 p-4"></div>
            </div>
            <div className="flex items-center lg:mb-0 mb-10">
              <div>
                <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center"></h4>
                <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center" style={{ color: "#112d42" }}>
                  Get a live demo of <span style={{color:"#0087f7"}}>Uni</span><span style={{color:"#ff9a24 "}}>Toni</span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="country" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                      Country <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="country"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                    >
                      <option value="" disabled>Select your country</option>
                      {countries.map(country => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8 flex">
                    <div className="mr-4">
                      <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-8"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-8"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                      Work Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                    />
                  </div>

                  <div className="mb-6">
                    <input type="checkbox" id="subscribe" className="h-6 w-6 mr-2" />
                    <label htmlFor="subscribe" className="text-lg text-gray-700" style={{ color: "#112d42" }}>
                      Yes, please send me informative content about education topics, products, services, and events. I know that I may unsubscribe at any time.
                    </label>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="consent" className="text-sm text-gray-700" style={{ color: "#112d42" }}>
                      By filling out this form, you consent to sharing your contact info with UniToni. UniToni respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 text-center text-white text-xl font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800"
                    style={{ backgroundColor: "#ff9a24" }}
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Demo;
