import Select from 'react-select';
import { useState } from 'react';
import CSRFToken from 'components/CSRFToken';
import axios from 'axios';
import { getConfig } from '@testing-library/react';
import { BASE_API_URL } from 'utils/sdk';

const options = [
  { value: 'RESTAURANT', label: 'Restaurant' },
  { value: 'GROCERY STORE', label: 'Grocery Store' }
];

export default function NewStore() {
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [ownerFirstName, setOwnerFirstName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [category, setCategory] = useState(options[1]);
  const [video, setVideo] = useState();
  const [image, setImage] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    let form_data = new FormData();
    if (video) {
      form_data.append('video_tour', video, video.name);
    }
    if (image) {
      form_data.append('store_image', image, image.name);
    }
    form_data.append('name', storeName);
    form_data.append('address', address);
    form_data.append('owner_fist_name', ownerFirstName);
    form_data.append('owner_last_name', ownerLastName);
    form_data.append('store_category', category.value);
    axios
      .post(BASE_API_URL + '/stores/', form_data, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': getConfig('csrftoken')
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <form className="w-50 mx-auto mt-5 border p-3 rounded">
        <CSRFToken />
        <h3>Create a new store</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Store Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={storeName}
            onChange={e => setStoreName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Owner First Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={ownerFirstName}
            onChange={e => setOwnerFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Owner Last Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={ownerLastName}
            onChange={e => setOwnerLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Select Store Category
          </label>
          <Select
            options={options}
            value={category}
            onChange={e => setCategory(e)}
          />
        </div>
        <div className="form-group">
          <label class="form-label" for="customFile">
            Upload an image of your storefront
          </label>
          <input
            type="file"
            class="form-control"
            id="customFile"
            onChange={e => {
              console.log(e.target.files);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="form-group">
          <label class="form-label" for="customFile">
            Upload a video of your store to analyze accessibility rating
          </label>
          <input
            type="file"
            class="form-control"
            id="customFile"
            onChange={e => {
              console.log(e.target.files);
              setVideo(e.target.files[0]);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto px-3"
          onClick={e => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </>
  );
}
