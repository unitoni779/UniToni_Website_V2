import React, { useEffect, useState } from 'react';
import axios from 'axios';
import demo from './assets/images/contact.png';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    consent: false,
    jobRole: '',
    companyName: '',
    idea: ''
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

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare the data to be sent
    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      subscribe: formData.subscribe,
      consent: formData.consent,
      jobRole: formData.jobRole || '', 
      companyName: formData.companyName || '', 
      idea: formData.idea || '' 
    };

    // Make the API call
    axios.post('https://unitoni.com/api/website/contact_us', dataToSend)
      .then(response => {
        console.log('Submission successful:', response.data);

        // Show success toast
        toast.success("Your form was submitted successfully!");

        // Reset form state
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subscribe: false,
          consent: false,
          jobRole: '',
          companyName: '',
          idea: ''
        });
      })
      .catch(error => {
        console.error('Error submitting the form:', error);

        // Show error alert
        alert("There was an error submitting the form. Please try again.");
      });
  };
  const renderForm = () => {
    switch (selectedOption) {
      case 'tech-support':
        return (
          <form onSubmit={handleSubmit} className='font-figtree'>
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
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
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
            
            <div className="mb-6">
              <input
                type="checkbox"
                id="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
                className="h-6 w-6 mr-2"
              />
              <label htmlFor="subscribe" className="text-lg text-gray-700" style={{ color: "#112d42" }}>
                Yes, please send me informative content about education topics, products, services, and events. I know that I may unsubscribe at any time.
              </label>
            </div>

            <div className="mb-8">
              <label htmlFor="consent" className="text-sm text-gray-700" style={{ color: "#112d42" }}>
                By filling out this form, you consent to sharing your contact info with UniToni. UniToni respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
              </label>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
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
          <form onSubmit={handleSubmit} className='font-figtree'>
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
                  className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
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
              <label htmlFor="jobRole" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Job Role
              </label>
              <input
                type="text"
                id="jobRole"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="companyName" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="idea" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Your Idea
              </label>
              <textarea
                id="idea"
                rows="4"
                className="w-full h-40 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-xl border border-gray-400 focus:outline-none py-2 px-4"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <input
                type="checkbox"
                id="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
                className="h-6 w-6 mr-2"
              />
              <label htmlFor="subscribe" className="text-lg text-gray-700" style={{ color: "#112d42" }}>
                Yes, please send me informative content about education topics, products, services, and events. I know that I may unsubscribe at any time.
              </label>
            </div>

            <div className="mb-8">
              <label htmlFor="consent" className="text-sm text-gray-700" style={{ color: "#112d42" }}>
                By filling out this form, you consent to sharing your contact info with UniToni. UniToni respects your privacy and is dedicated to keeping your information secure. The information you provide will be used in accordance with applicable law and the terms of our privacy policy.
              </label>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
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
      default:
        return null;
    }
  };

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mt-10" style={{ color: "#112d42" }}>Contact Us</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2">
              <img src={demo} alt="Contact Us" className="w-full h-auto rounded-lg " />
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-8 bg-white  rounded-lg">
                <div className="mb-6">
                  <label htmlFor="option" className="block text-lg font-medium text-gray-700 mb-2" style={{ color: "#112d42" }}>
                    I want to get in touch for:
                  </label>
                  <select
                    id="option"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-400 focus:outline-none py-2 px-4"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="tech-support">Technical Support</option>
                    <option value="lms">Learning Management System</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {renderForm()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
