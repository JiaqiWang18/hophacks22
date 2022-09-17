import Map from 'components/Map';
import { useEffect, useState } from 'react';
import { get } from 'utils/sdk';

const ListMap = ({ match }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    //specify that
    console.log(match.params.category);
    get(`stores/?category=${match.params.category}`).then(resp => {
      console.log(resp);
      setResult(resp.data);
    });
  }, []);

  return (
    <div class="">
      <div class="row">
        <div class="col-md">List</div>
        <div class="col-md">
          <Map data={result} />
        </div>
      </div>
    </div>
  );
};

export default ListMap;
