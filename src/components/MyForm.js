import React, { useState } from 'react';
import "../assets/About.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  //old code
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can handle form submission logic here
  //  // console.log('Form submitted:', formData);


  //        // Get form data
  //        const formData = new FormData(e.target);

  //        // Send data to PHP using fetch
  //        fetch('../api/leads.php', {
  //          method: 'POST',
  //          body: formData
  //        })
  //        .then(response => response.json())
  //        .then(data => {
  //          console.log('Form submitted successfully:', data);
  //         alert('Form Submitted');
  //          // Handle any additional logic here
  //        })
  //        .catch(error => {
  //          console.error('Error submitting form:', error);
  //        });
     
   
  //     //  // Attach the submit event listener to the form
  //     //  document.getElementById('myForm').addEventListener('submit', handleSubmit);

  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {

    // if (checkMandatory() && validateEmail()) {
    //   // Your form submission logic here
    //   console.log('Form submitted:', formData);
    // }

    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      vendorName: '',
      email: '',
      phone: '',
    });
  };


  return (
    // <form onSubmit={handleSubmit} className='contact'>
    //     <h3>Contact</h3>
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Name*"
    //       id="name"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="tel"
    //       placeholder="Mobile*"
    //       id="mobileNumber"
    //       name="mobileNumber"
    //       pattern="[0-9]{10}"
    //       value={formData.mobileNumber}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="email"
    //       placeholder="Email ID*"
    //       id="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       required
    //     />
    //   </div>
    //   <button type="submit" className='ant-btn css-dev-only-do-not-override-nllxry ant-btn-primary ant-btn-lg ant-input-search-button'>Submit</button>
    // </form>
    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='content-type' content='text/html;charset=UTF-8' />
      <form
        id='webform'
        action='https://crm.zoho.com/crm/WebToVendorForm'
        name='WebToVendors3885812000052049003'
        method='POST'
        onSubmit={(e) => {
       
          handleSubmit();
        }}
        acceptCharset='UTF-8' className='contact'
      >
       
        <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='7384f8f6e6b0997e1a22ab0bc3f6baae2c44ec8800522bfef4259d011d08834d' />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='f2f8bfb20a52c730b1b71fcded961b9ef208921cc52c2035544b903a45f7b7baf1688c8109b1b15e63ee4aefe9f08089' />
        <input type='text' style={{ display: 'none' }} name='actionType' value='VmVuZG9ycw==' />
        {/* <input type='text' style={{ display: 'none' }} name='returnURL' value='https://hellosend.com/contact-us' /> */}

      
        <h3>Contact</h3>
      
          <div>
            <input
              type='text'
              placeholder="Name*"
              id='vendorName'
              name='vendorName'
              maxLength='120'
              value={formData.vendorName}
              onChange={handleChange}
              required
            />
          </div>
      

          <div>
            <input
              type='email'
              ftype='email'
              placeholder="Email ID*"
              autoComplete='false'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div >
            <input
              type='tel'
              placeholder="Mobile*"
              id='phone'
              name='phone'
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='ant-btn css-dev-only-do-not-override-nllxry ant-btn-primary ant-btn-lg ant-input-search-button'>Submit</button>


        {/* <div className='zcwf_row'>
          <div className='zcwf_col_fld'>
            <input
              type='submit'
              id='formsubmit'
              className='formsubmit zcwf_button'
              value='Submit'
              title='Submit'
            />
          </div>
        </div> */}

     

        <script
          id='wf_anal'
          src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=7f4ae53f1645f6369b7b4c611fcedba4d1c141a4c3e5bf53f874dd577205dd6cd3e00165a8efecbd2662de9a449259e7gid7bc5c45d1a47bbb139a496a65c146a5892cde25af872046d6e642a0cdba4a699gid53ad1cf39f6224913fc10f5e96b9e1fe5bc9579a550cba960321e84f686b8287gidc4d4e6a06597aa86cb9db44b69e30f59ab2dc07c170fd641147ab812a286585d&tw=d9fe1ebf63e5d22bf03eccc08d2d433024d6f4d47286a5692208bec9f6e27426'
        ></script>
      </form>
      {formSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default MyForm;