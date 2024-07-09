import React, { useEffect, useState } from 'react';
import axios from 'axios';
import demo from './contact.png';

const Contact = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subscribe: false,
    consent: false
  });

  useEffect(() => {
    // Fetch country data from the API
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

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [id]: checked
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on selectedOption
    console.log('Selected option:', selectedOption);
    console.log('Form data:', formData);
    // Add your submission logic here
  };

  // Function to render the selected form based on selectedOption
  const renderForm = () => {
    switch (selectedOption) {
      case 'tech-support':
        return (
          <form onSubmit={handleSubmit} action="/submit-contact-form" method="post" className='font-figtree'>
            <div className="mb-8">
              <label htmlFor="country" className="block text-lg font-medium text-gray-700 mb-2 " style={{ color: "#112d42" }}>
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

            <div className="mb-8 flex font-figtree">
              <div className="mr-4">
                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-8 font-figtree">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 font-figtree">
                  <input type="checkbox" id="subscribe" className="h-6 w-6 mr-2" />
                  <label htmlFor="subscribe" className="text-lg text-gray-700" style={{ color: "#112d42" }}>
                    Yes, please send me informative content about education topics, products, services, and events. I know that I may unsubscribe at any time.
                  </label>
                </div>

                <div className="mb-8 font-figtree">
                  <label htmlFor="consent" className="text-sm text-gray-700" style={{ color: "#112d42" }}>
                    By filling out this form, you consent to sharing your data with itslearning. itslearning respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
                  </label>
                </div>

            <div className="mb-8" font-figtree>
              <label htmlFor="work-email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="work-email"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>
         
                
            <button
              type="submit"
              className="w-full h-12 text-center text-white text-xl font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800"
              style={{ backgroundColor: "#ff9a24" }}
            >
              SUBMIT
            </button>
          </form>
        );
      case 'lms':
        return (
            <form onSubmit={handleSubmit} action="/submit-contact-form" method="post">
            <div className="mb-8 font-figtree" >
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

            <div className="mb-8 flex font-figtree">
              <div className="mr-4">
                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
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
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="work-email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="work-email"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
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
                    By filling out this form, you consent to sharing your data with itslearning. itslearning respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
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
        );
      case 'partner-info':
        return (
            <form onSubmit={handleSubmit} action="/submit-contact-form" method="post">
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
                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
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
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="work-email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="work-email"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
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
                    By filling out this form, you consent to sharing your data with itslearning. itslearning respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
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
        );

  case 'other':
    return (
        <form onSubmit={handleSubmit} action="/submit-contact-form" method="post" className='font-figtree'>
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
            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
              onChange={handleInputChange}
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
            className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="work-email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
            Work Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="work-email"
            className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
            onChange={handleInputChange}
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
                    By filling out this form, you consent to sharing your data with itslearning. itslearning respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
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
    );
    default:
        return null;
    }
  };
  return (
    <section className="py-24 font-figtree">
    <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: "#112d42",marginTop:"80px" }}>Contact Us</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-32"style={{gap:"50px"}}>
        <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${demo})`, backgroundPosition: ' center' }}>
          <div className="lg:w-96 w-auto h-auto lg:p-6 p-4"></div>
        </div>
        <div className="flex items-center lg:mb-0 mb-10 mr-60" style={{marginBottom:"200px"}}>
          <div>
            <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center"></h4>
            <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center" style={{ color: "#112d42" }}>
              How can we help?
            </h2>
            <form onSubmit={handleSubmit} className='font-figtree'>
              <div className="mb-8">
                <label htmlFor="options" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Choose an option <span className="text-red-600">*</span>
                </label>
                <select
                  id="options"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  style={{width:"550px"}}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="tech-support">I am requesting technical assistance</option>
                  <option value="lms">I am looking for an LMS</option>
                  <option value="partner-info">I want to become a partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {renderForm()}
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;
